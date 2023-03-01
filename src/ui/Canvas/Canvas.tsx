import React from 'react';

interface CanvasProps {
  children: any;
}

export const Canvas = (props: CanvasProps) => {
  const {
    children
  } = props;

  return (
    <div>
      {children}
    </div>
  )
}