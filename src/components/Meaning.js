import React from 'react'

export default function Meaning(props) {
  return (
    <div>
        <div className='mt-4 '>
          <h1 className='flex justify-center text-2xl  font-semibold pb-3'>{props.word}</h1>
            <div className=' md:flex justify-center  '>
              <div className='px-16 '>
                <div><h1 className=' flex justify-center md:block text-xl py-4 underline'>Synonyms</h1></div>

                {props.synonyms.map((syn,index) => {
                  return (
                    index<=6? <h1 key={syn} className= 'flex justify-center md:block mt-1 pl-2'>{syn}</h1>:<></>
                  )
                })}
              </div>
              <div className=' px-16'>
              <div><h1 className='  flex justify-center md:block md:mt-0 mt-4 text-xl py-4 underline'>Antonyms</h1></div>
             <ul>

                {props.antonyms.map((ant,index) => {
                  return (
                    index<=6? <h1 key={ant} className=' flex justify-center md:block  mt-1 pl-2  text-gray-300'>{ant}</h1>:<></>
                    )
                  })}
                  </ul>
              </div>


            </div>
            </div>

    </div>
  )
}
