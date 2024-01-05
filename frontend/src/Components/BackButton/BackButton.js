import React from 'react'
import ArrowBack from '../../Assets/Images/arrow_back.svg'

export default function BackButton() {
  return (
    <div className='w-full items-center flex  p-4' onClick={() =>console.log('sdf')}>
        <img src={ArrowBack} width={15 } height={15} alt='backicon'/>
        <div className='font-black text-xl w-11/12 ml-3'>Back</div>
    </div>
  )
}
