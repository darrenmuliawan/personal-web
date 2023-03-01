import React from 'react';
import me from '../../assets/me.jpg';
import who from '../../assets/who.png';
import PepoFrog from '../../assets/sticker_6.webp';

export const About = () => {
  return (
    <div
      className='px-10 w-[480px]'
    >
      <div
        className='relative h-[240px]'
      >
        <img 
          src={who} 
          className="absolute w-[200px] h-[120px] z-10 right-[120px] brightness-75"
        />
        <img 
          src={PepoFrog} 
          className="absolute h-[150px] w-[150px] object-cover right-0 top-[80px] brightness-75"
        />
      </div>
      <div>
        <p className='mb-4 font-bold underline'>allow me to introduce myself</p>
        <p className='mb-4'>my name is Darren Muliawan and i am currently living in Indonesia. i have been working as software engineer in several companies in the United States after I got my bachelor's degree from <a>University of Illinois, Urbana-Champaign</a> in mid 2019.</p>
        <p className='mb-4'>i like to learn about technology, psychology, fitness, history, art, economics and many more!</p>
        <p className='mb-4'>keep scrolling to see my past work and experiences!</p>
        <span>PS: click on <a>this</a> if you want to see the real me :)</span>
        {/* <img 
          src={me} 
          className="h-[480px] w-[320px] object-cover left-[140px] top-[80px]"
        />

        <p></p> */}
      </div>
    </div>
  )
}