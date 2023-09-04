import { Link } from 'react-router-dom'
import { H2 } from '../components/headers/H2'

export function ErrorPage() {
  return (
    <div className='h-full w-[700px] self-center justify-self-center grid grid-cols-2 items-center justify-items-center'>
        <img src = "undraw_empty.svg" alt="Not found" className='drop-shadow-2xl'/>
        <div>
          <H2 className='text-3xl font-semibold'>Page not found</H2>
          <p className='text-lg text-center'>
            Return to <Link to="/" className='text-blue-500 font-semibold underline hover:text-blue-600'>Home</Link>
          </p>
        </div>
    </div>
  )
}
