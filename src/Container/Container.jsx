import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-[1920px] mx-auto page-container '>{children}</div>
  )
}

export default Container