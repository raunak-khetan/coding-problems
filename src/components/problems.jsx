import '../index.css'
import {Link} from 'react-router-dom'

export default function List({questions}){

  return(
    <div>
      <div className='border-[1px] border-gray-300 rounded-md  inline-flex pl-[30px] pt-[20px] pb-[20px] flex-col w-[300px] p-2 ml-[10px] mt-[20px] mb-[20px]
      '>
        
      <h2>Total Problems</h2>
      <p className='text-[40px] font-bold'>{questions.length}</p>
      </div>

      {questions.map(question=>(
        <div key={question.ID} className='border-[1px] border-gray-300 rounded-md  flex flex-row pl-[30px] pt-[20px] pb-[20px] ml-[10px] mt-[10px] 
        cursor-pointer hover:bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300'>

       <Link to={`/problem/${question.ID}`}>
       <h1 className='text-[18px] font-semibold'>{question.title}</h1>
       </Link>
          
        </div>
      ))}
    </div>
    
  )
}