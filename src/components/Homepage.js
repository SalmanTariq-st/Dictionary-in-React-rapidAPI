import React, { useState } from 'react'
import axios from 'axios';
import Meaning from './Meaning';
// import '../App.css'
// import bg from '../assets/bg2.jpg'

export default function Homepage() {
  // useEffect(()=>{
  const [word, setWord] = useState('')
  const [meaning, setMeaning] = useState('')
  const [isError,setError]=useState(false)

  const wordInput = (e) => {
    setWord(e.target.value)
    console.log(word)

  }

  const findWord = () => {
    


    setError(false)

    const options = {
      method: 'GET',
      url: 'https://thesaurus-by-api-ninjas.p.rapidapi.com/v1/thesaurus',
      params: { word: word },
      headers: {
        'X-RapidAPI-Key': '296518cb80msh9374f6cdea98e92p1ed7e8jsnfd678c9251b0',
        'X-RapidAPI-Host': 'thesaurus-by-api-ninjas.p.rapidapi.com'
      }
    };


    axios.request(options).then(function (response) {
      console.log(response.data['synonyms']);
      
      setMeaning(response.data)
      
      console.log(meaning)

    }).catch(function (error) {
      setError(true)
      console.error(error);
    });
  }


  

  return (
    <>
      <div className='text-slate-700 font-bold font text-3xl flex justify-center my-16'>Dictoria</div>

      <div className='flex justify-center '>

        <div className=' bg-slate-800 md:w-1/2 md:h-96 md:py-0 py-5 md:px-0 px-10 text-white rounded-lg shadow-xl  shadow-slate-400'>




          <div className='flex justify-center md:py-0 py-10 md:pt-5'>

            <input type='text' placeholder='Search' onChange={wordInput} className='pl-3 md:w-52 w-40 text-slate-700 border-2 border-slate-400 h-8 w-60 rounded-md'></input>
            <div className='bg-slate-400 p-1 ml-1 rounded-md'>
              <button onClick={findWord} className='font-bold'>Meaning</button>
            </div>


          </div>



          {meaning ?
            
            <Meaning word={meaning['word']} synonyms={meaning['synonyms']} antonyms={meaning['antonyms']} />
            : isError?
            <div className='flex justify-center mt-10'>
              <h2 className='text-lg'>
                No word found<br></br>.Search for Something else
              </h2>
            </div>
            :<div className='flex justify-center mt-10'>
              <h1 className='font-semibold text-lg'>Search for something</h1>
            </div>


          }



        </div>
      </div>





    </>
  )
}
