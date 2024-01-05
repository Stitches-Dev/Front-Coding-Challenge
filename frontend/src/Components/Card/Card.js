import React from 'react'
import Button from '../Button/Button'
export default function Card({children,question , subQuestion}) {
  return (
    <div className='border-[3px] border-black rounded-15 shadow-cardshadow p-6' >
        <div className='question font-black text-4xl'>{question}</div>
<div className='subqustion font-light my-3 w-1/2' style={{fontSize:'0.6rem'}}>{subQuestion}</div>
{children}
<Button width={'100%'} color={'var(--lightGreen)'} >Next Question</Button>
    </div>
  )
}
