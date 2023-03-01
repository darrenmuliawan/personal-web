import React from 'react';
import GoldenGate from '../../assets/golden_gate.jpg';

export const Experience = () => {
  return (
    <div
      className='mx-10 flex'
    >
      <div className='mx-10 flex flex-col'>
        <h1 className='text-center font-bold'>2</h1>
        <h1 className='text-center font-bold'>0</h1>
        <h1 className='text-center font-bold'>1</h1>
        <h1 className='text-center font-bold'>5</h1>
      </div>
      <div className='mx-10 min-w-[690px] max-w-[690px]'>
        <img 
          src={GoldenGate} 
          className='brightness-50 min-w-[690px] max-w-[690px] mb-4'
        />
        <h1 className='underline mb-10'>moving to bay area for college</h1>
        <p className='mb-4'>on august 4th 2015, i was leaving my hometown Surabaya, Indonesia with a one-way ticket to San Francisco, California. after graduated high school, i decided to study at <a>Diablo Valley College</a> in Pleasant Hill, California.</p>
        <p className='mb-4'>i was planning to study mechanical engineering initially, but things changed after i took my first computer science class. i liked cs better than physics/chemistry because i thought it was "easier". i thought to myself "hmm i struggled a lot and got a B on my first physics class, whereas i aced my first computer science class with very little prior programming knowledge, maybe i should change major and start coding. i think cs is much easier."</p>
        <p className='mb-4'>boy oh boy was i wrong, coding <strong><u>is not</u></strong> easy (don't get me wrong, i enjoy every struggle that i had learning to code tho :D)</p>
      </div>
      <div className='mx-10 relative'>
        <div
          className='absolute top-1/4 flex flex-col -mt-[6em]'
        >
          <h1 className='text-center font-bold'>2</h1>
          <h1 className='text-center font-bold'>0</h1>
          <h1 className='text-center font-bold'>1</h1>
          <h1 className='text-center font-bold'>7</h1>
        </div>
      </div>
      <div className='mx-10 min-w-[690px] max-w-[690px]'>
        <img 
          src={GoldenGate} 
          className='brightness-50 min-w-[690px] max-w-[690px] mb-4'
        />
        <h1 className='underline mb-10'>transfer to uni</h1>
        <p className='mb-4'>on august 4th 2015, i was leaving my hometown Surabaya, Indonesia with a one-way ticket to San Francisco, California. after graduated high school, i decided to study at <a>Diablo Valley College</a> in Pleasant Hill, California.</p>
        <p className='mb-4'>i was planning to study mechanical engineering initially, but things changed after i took my first computer science class. i liked cs better than physics/chemistry because i thought it was "easier". i thought to myself "hmm i struggled a lot and got a B on my first physics class, whereas i aced my first computer science class with very little prior programming knowledge, maybe i should change major and start coding. i think cs is much easier."</p>
        <p className='mb-4'>boy oh boy was i wrong, coding <strong><u>is not</u></strong> easy (don't get me wrong, i enjoy every struggle that i had learning to code tho :D)</p>
      </div>
    </div>
  )
}