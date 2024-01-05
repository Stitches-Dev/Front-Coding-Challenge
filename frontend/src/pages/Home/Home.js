import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Button from '../../Components/Button/Button'

export default function Home() {
  return (
    <div className=''>
        <Layout ><div className='h-1/3 bg-red-200'>
            <div className=' flex  items-center justify-center flex-row h-full md:pr-48'>
           <div className='font-black text-4xl'> Welcome To Stitches Studios<br/>Free Career Test </div>
            {/* <span className='font-black text-4xl'></span> */}
            </div>
            </div>
            <div className='h-1/5 bg-blue flex border-y-[3px] border-black'>
                <div className='w-1/2 '> 1</div>
                <div className='w-1/4  border-x-[3px] border-black' >2</div>
                <div className='w-1/4 '>3</div>
            </div>
            <div className='h-1/4 flex justify-center items-center'>
<div className='border-[3px] border-black rounded-15 shadow-cardshadow p-6' style={{width:"calc(100% - 30%)"}}>
   <div className='font-black text-4xl mb-2'> Are You Ready? </div>
   <Button width={'100%'} color={'var(--lightGreen)'} > Start the test</Button>
</div>
            </div>
            </Layout>
    </div>
  )
}
