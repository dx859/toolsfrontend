import produce from 'immer';

export function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    let { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;

    if (!types) {
      // Normal action: pass it on
      return next(action);
    }

    if (typeof types === 'string' || typeof types === 'function') {
      types = ['', types, ''];
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string' || typeof type === 'function')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    types = types.map(type => (typeof type === 'function' ? type.toString() : type));

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    const [requestType, successType, failureType] = types;
    if (requestType) {
      dispatch(
        Object.assign({}, payload, {
          type: requestType
        })
      );
    }

    return callAPI()
      .then(response =>
        dispatch(
          Object.assign({}, payload, {
            response,
            type: successType
          })
        )
      )
      .catch(error => {
        if (failureType) {
          dispatch(
            Object.assign({}, payload, {
              error,
              type: failureType
            })
          );
        }
      });
  };
}

export function createAction(type, ...argNames) {
  if (type === undefined) {
    throw Error('请设置actionType');
  }
  function actionFunc(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  }
  actionFunc.toString = () => type;
  return actionFunc;
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return produce(state, draft => {
        handlers[action.type](draft, action);
      });
    } else {
      return state;
    }
  };
}
