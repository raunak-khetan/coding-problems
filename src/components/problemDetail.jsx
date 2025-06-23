import '../index.css'
import {useParams} from 'react-router-dom'
import useQuestions from './customHook'
import {useNavigate} from 'react-router-dom'


export default function Detail(){
  const { id } = useParams();
  const {data,error,isLoading}= useQuestions("http://localhost:5000/questions")
  const navigate=useNavigate()

  const question = data?.find(q => q.ID === id)

  return(
    <div className='flex flex-col  h-screen'>

    {error && <div>{error}</div>}

    {isLoading && <div>Loading...</div>}

    {question && (
      <div>
        <button className='bg-black text-white px-4 py-2 rounded-md ml-[10px] mt-[10px] mb-[10px] cursor-pointer text-lg' onClick={()=>navigate(-1)}>
          Back
          </button>

        <div className='flex flex-col border-2 border-gray-300 rounded-md p-4 ml-[10px] mr-[20px]'>

          <h1 className='text-3xl font-bold mb-[20px]'>Problem Description</h1>
          <p className='text-gray-700 text-lg wrap' >{question.description}</p>

        </div>

        <ul className='flex flex-col border-2 border-gray-300 rounded-md p-4 ml-[10px] mt-[20px] mr-[20px]'>
          <h1 className='text-3xl font-bold mb-[20px]'>Test Cases</h1>

          {question.test_cases.map((t ,i)=>(
            <li key={i} className='inline-flex flex-col border-2 border-gray-300 bg-gray-200 rounded-md p-4 ml-[10px] mt-[20px] '>

              <p><strong>Input:</strong> {t}</p>
              <p><strong>Output:</strong> {question.output[i]}</p>

            </li>
          ))}
        </ul>
      </div>
    )}
    </div>
  )


}

