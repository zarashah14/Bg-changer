import React, { useState } from 'react'

function Bg() {
    const [color , setColor] = useState  ("olive")
  return (
    <div className='w-full h-screen duration-200 ' 
    style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
             
        <button 
        onClick={() => setColor ("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setColor ("Orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Orange"}}
          >Orange</button>

           <button
           onClick={() => setColor ("Blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Blue"}}
          >Blue</button>

          <button
           onClick={() => setColor ("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>

          <button
           onClick={() => setColor ("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

           <button
           onClick={() => setColor ("gray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "gray"}}
          >Gray</button>

            <button
           onClick={() => setColor ("cyan")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "cyan"}}
          >Cyan</button>

            <button
           onClick={() => setColor ("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >Olive</button>

           <button
           onClick={() => setColor ("Pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Pink"}}
          >Pink</button>

               <button
           onClick={() => setColor ("Lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Lavender"}}
          >Lavender</button>

          <button
           onClick={() => setColor ("White")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "White"}}
          >White</button>

          <button
           onClick={() => setColor ("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>
        
          </div>   
        </div>
    </div>

  )
}

export default Bg
