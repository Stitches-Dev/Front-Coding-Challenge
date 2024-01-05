import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Card from '../../Components/Card/Card'
import BackButton from '../../Components/BackButton/BackButton'
export default function Page1() {
  return (
    <Layout>
    <div  className='flex justify-center h-full items-center'>
        <div style={{width:"calc(100% - 30%)"}}>
            <BackButton />
    <Card question={'Tell Us About Yourself'} subQuestion={'Your  Details Personalize Your  Journey and Enhance Accuracy, Securely Stored And Private'}>
        <div>
            <span className='font-bold text-xs'>Full Name</span>
            <input type='text' className='border-[3px]  w-full border-black rounded-15 p-2 mb-3' placeholder='eg:James johnes'/>
            <span className='font-bold text-xs'>Email</span>
            <input type='text' className='border-[3px]  w-full border-black rounded-15 p-2 mb-3' placeholder='eg:email@example.com'/>
        </div>
        </Card>
    </div></div>
    </Layout>
  )
}
