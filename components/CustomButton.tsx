"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import { text } from 'stream/consumers'

function CustomButton({ title, containerStyles, textStyles, handleClick, btnType, isDisabled, rightIcon }: CustomButtonProps) {
  return (
    <button
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className='relative w-6 h-6'>
            <Image
              src={rightIcon}
              alt='arrow left'
              fill 
              className='object-contain'
            />
          </div>
        )}
    </button>
  )
}

export default CustomButton