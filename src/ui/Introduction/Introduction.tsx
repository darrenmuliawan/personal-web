import React from 'react';
import CosimoMedici from '../../assets/cosimo_medici.jpeg';
import BabyMedici from '../../assets/baby_medici.jpeg';

export const Introduction = () => {
  return (
    <div
      className='px-10 min-w-[690px] max-w-[690px] h-full flex flex-col'
    >
      <div
        className='flex flex-col'
      >
        <h1 className='text-center mb-10 underline'>what is this?</h1>
        <p className='mb-4'>hello world, welcome to my personal website! where I showcase my skills in frontend development and unique design techniques. As a frontend developer, I strive to create visually stunning and highly functional websites that engage users and provide an intuitive user experience. My passion for design and development has allowed me to hone my skills in various areas such as HTML, CSS, JavaScript, and React, to name a few.</p>
        <p className='mb-4'>on this website, you will find a collection of my best work, including web design projects, case studies, and personal insights into my design process. I believe in creating user-centric designs that not only look great but also provide a seamless experience for users. With my skills in frontend development, I aim to create responsive and optimized websites that are accessible to all users, regardless of their device or platform. I invite you to explore my portfolio and see for yourself the unique design skills and frontend development expertise I bring to the table.</p>
        <button>
          click this for "normal view" :)
        </button>
      </div>
      <div
        className='py-10 flex justify-between'
      >
        <img 
          src={CosimoMedici}
          className='h-[250px] w-[200px] brightness-50'
        />
        <div
          className='relative h-[250px] top-[40%]'
        >
          <img 
            src={BabyMedici}
            className='h-[250px] w-[200px] brightness-50'
          />
          <h1 className='absolute top-1/2 text-4xl -mt-[0.6em] -right-[1.5em] font-bold brightness-75 italic'>i like art :)</h1>
        </div>
      </div>
    </div>
  )
}