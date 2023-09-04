import { Link } from 'react-router-dom'
import { Card } from 'flowbite-react'
import { H2 } from '../components/headers/H2'

export function ErrorPage() {
  return (
    <div className='h-[76.8vh] w-full flex justify-center items-center'>
      <Card className='h-52 w-80 flex-row justify-center items-center'>
        {/* <img src = "undraw_empty.svg" alt="My Happy SVG" className='h-full'/> */}
        {/* <div> */}
          <H2 className='dark:text-white'>Page not found</H2>
          <p className='text-base text-center dark:text-white'>
            Return to <Link to="/" className='text-blue-500 font-semibold underline hover:text-blue-800'>Home</Link>
          </p>
        {/* </div> */}
      </Card>
    </div>
  )
}
