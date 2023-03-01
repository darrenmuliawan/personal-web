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
      className='h-[100vh] min-w-[100vw] overflow-y-hidden overflow-x-auto py-10 flex'
    >
      {children}
    </div>
  )
}