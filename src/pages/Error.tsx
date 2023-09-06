import { Link } from 'react-router-dom'
import { H2 } from '../components/headers/H2'

export function ErrorPage() {
  return (
    <div className='h-full w-full flex items-stretch justify-center overflow-auto'>
      <div className='flex md:flex-row flex-col items-center justify-center gap-6'>
        <img src = "undraw_empty.svg" alt="Not found" className='drop-shadow-2xl md:h-5/6 h-4/6 px-4'/>
        <div>
          <H2 className='text-3xl font-semibold'>Page not found</H2>
          <p className='text-lg text-center'>
            Return to <Link to="/" className='text-blue-500 font-semibold underline hover:text-blue-600'>Home</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
