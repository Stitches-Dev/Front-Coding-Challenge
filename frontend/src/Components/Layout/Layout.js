import React from 'react'
import icon from '../../Assets/Images/logo.svg';
import triangle from '../../Assets/Images/triangle.svg'
export default function Layout({children}) {

  return (
    <div className=''>
        <div className='header   p-4 border-b-[3px]  border-black' >
        <img
          src={icon}
          alt={`icon-0`}
       width={40}
       height={40}
        />
            </div>
            <div className='flex'>
                <div className='w-3/4' style={{height:'90vh'}}>{children}</div>
                <div className='w-1/4 bg-yellow  border-l-[3px] border-black flex items-center justify-center' style={{backgroundImage: `url(${triangle})`, backgroundRepeat: 'space', backgroundSize: '30px 30px'}}>
  {/* Content inside the div */}
</div>
            </div>
    </div>
  )
}
