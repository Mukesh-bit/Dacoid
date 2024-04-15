import React from 'react'
import CheckBox from './CheckBox'

const GoalsOptions = ({text}) => {
  return (
    <div className='w-[343px] h-[50px] bg-[#F1F1F1] flex m-auto  px-5 rounded-lg  items-center justify-between'>
      <h1 className='my-auto font-semibold text-[12px]'>{text}</h1>
      <CheckBox/>
    </div>
  )
}

export default GoalsOptions