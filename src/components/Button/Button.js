import React, { memo } from 'react';

const Button = ({
  loading,
  children,
  style,
  className,
  onClick = () => {}
}) => {
  if (loading) {
    onClick = () => {};
  }

  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
      {loading ? '...' : ''}
    </button>
  );
};

export default memo(Button);
