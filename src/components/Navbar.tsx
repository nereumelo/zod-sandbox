import { DarkThemeToggle, Navbar as FBNavbar } from 'flowbite-react';
import { GrValidate } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { MainDispatchContext } from '../contexts/Main';
import { useContext } from 'react';

export default function Navbar() {
  const { handleTheme } = useContext(MainDispatchContext);

  const handleThemeToggle = () => {
    handleTheme?.()
  }

  return (
    <FBNavbar
      fluid
      className='shadow-md'
    >
      <div className='w-full grid sm:grid-cols-3 grid-cols-2 justify-items-center lg:px-10 px-3'>
        <FBNavbar.Brand className='sm:col-start-2 col-start-1 sm:justify-self-center justify-self-start select-none' as='div'>
          <Link to='/' className='flex'>
            <GrValidate className="text-4xl mx-2 my-0 dark:invert" />
            <span className="whitespace-nowrap self-center text-xl font-semibold dark:text-white">
              Zod Sandbox
            </span>
          </Link>
        </FBNavbar.Brand>
        <DarkThemeToggle className='justify-self-end' onClickCapture={handleThemeToggle}/>
      </div>
    </FBNavbar>
  )
}
