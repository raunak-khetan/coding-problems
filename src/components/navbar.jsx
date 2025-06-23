import '../index.css'
import codeSlash from '../assets/code-slash.svg'

export default function Navbar() {
    return (
        <nav className="h-auto w-full border-b border-gray-200 p-[16px] flex items-center justify-between ">
          
          <div className ="flex items-center gap-2">

            <img src={codeSlash} alt="Code Vibe" className="w-[32px] h-[32px]" />
            <h1 className="text-3xl font-bold" >Code Vibe</h1>

          </div>
        </nav>
    )
}