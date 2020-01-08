export function setKey(array, { id = 'id', key = 'key', transform } = {}) {
  return array.map(item => {
    if (typeof transform === 'function') {
      item[key] = transform(item);
    } else {
      item[key] = item[id];
    }

    if (item.children) {
      item.children = setKey(item.children, { id, key, transform });
    }
    return item;
  });
}
