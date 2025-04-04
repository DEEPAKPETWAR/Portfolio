import React from 'react'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import react from '../assets/react.jpg'
import tailwindcss from '../assets/tailwind-css.jpg'
import nodejs from '../assets/nodejs.jpg'
import mongodb from '../assets/mongodb.jpg'

const Experience = () => {

  const techs=[
    {
       id:1,
       src:html,
       title:'HTMl',
       style:'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-orange-500'
     }, {
        id:3,
        src:react,
        title:'React Js',
        style:'shadow-orange-500'
     }, {
        id:4,
        src:tailwindcss,
        title:'Tailwind Css',
        style:'shadow-orange-500'
     }, {
        id:5,
        src:nodejs,
        title:'Node Js',
        style:'shadow-orange-500'
     }, {
        id:6,
        src:mongodb,
        title:'MongoDB',
        style:'shadow-orange-500'
     }, 
  ]
  return (
    <div name='experience'className='bg-gradient-to-b from-gray-800  to-black w-full h-screen '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline' >Experience</p>
                <p className='py-6'>These are the technoloiges I've worked with </p>
            </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                techs.map(({id,src,title,style})=>(
                    <div key={id}className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="img" className=' w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }



          
          </div>

        </div>
      
    </div>
  )
}

export default Experience
