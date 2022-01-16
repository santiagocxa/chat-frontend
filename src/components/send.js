import React from 'react';
import '../assets/styles/send.css';

const Send = () => {
  return (
    <div className='Send'>
      <form className='Send__form'>
        <input
          className='Send__text'
          type='text'
          name='name'
          placeholder='Message...'
        />
        <input className='Send__button' type='submit' value='Send' />
      </form>
    </div>
  );
};

export default Send;
