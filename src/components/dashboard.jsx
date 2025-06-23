import useQuestions from "./customHook" 
import List from "./problems"

export default function Dashboard() {

  const {data,error,isLoading}= useQuestions("http://localhost:5000/questions")

    return (
        <div>
            
            {error && <div>{error}</div>}

            {isLoading && <div>Loading...</div>}

            <h1 className="text-3xl font-bold mt-[30px] ml-[20px]">Coding Problems</h1>
            <p className="text-gray-500 mt-[10px] ml-[20px]">Practice your coding skills with our curated collection of problems</p>

            {data && <List questions={data}/>
            }
        </div>
    )}