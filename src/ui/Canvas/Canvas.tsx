import React from 'react';

interface CanvasProps {
  children: any;
}

export const Canvas = (props: CanvasProps) => {
  const {
    children
  } = props;

  return (
    <div
      id='canvas'
      className='h-[100vh] overflow-y-hidden overflow-x-auto py-10 flex'
    >
      {children}
    </div>
  )
}