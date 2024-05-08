import React from 'react';
import logo from '../Images/symbol.png';
import menu from '../Images/menu.png';
import topic from '../Images/topic.png';
import chap from '../Images/chapter.png';
import title from '../Images/title.png';
import card from '../Images/flashcard.png';
import symbol from '../Images/logo.png';
import flashcard from '../Images/create.png';
import FAQ from '../Images/FAQ.png';
import questions from '../Images/Questions.png';

const Navpage = () => {
  return (
    <>
      <div className="flex items-center justify-between pl-20 pt-4">
        <img className='logo' src={logo} alt='logo'/>
        <img className='flex items-center justify-around pr-12' src={menu} alt='menu'/>
      </div>
      <img className='pt-12 pl-20' src={topic} alt='topic'/>
      <br></br>
      <img className='pt-12 pl-20' src={chap} alt='chapter'/>

      <div className='flex flex-col mt-12 pl-40'>
        <img className='h-6 pl-72 w-[800px]' src={title} alt='title' />
        <img className='mt-5 pl-48 h-[400px] w-[850px]' src={card} alt='card' />
      </div>

      <div className='flex justify-between pt-8'>
        <img className='pl-16 h-32 w-[300px]' src={symbol} alt='symbol' />
        <img className='pt-10 pr-32 h-20 w-[350px]' src={flashcard} alt='flashcard' />
      </div>

      <img className='pt-20 pl-20 h-26 w-40' src={FAQ} alt='faq'/>
      <br></br>
      <img className='pt-4 pl-20 pb-40 h-[400px] w-[900px]' src={questions} alt='Qs' />
    </>
  );
};

export default Navpage;

