import { Navbar as FBNavbar } from 'flowbite-react';
import { GrValidate } from 'react-icons/gr';

export default function Navbar() {
  return (
    <FBNavbar
      fluid
      rounded
      className='mb-10 shadow-md'
    >
      <div className='w-full flex items-center justify-between sm:pl-4 pl-2 sm:pr-12 pr-2'>
        <FBNavbar.Brand>
          <GrValidate className="text-4xl mx-2 my-0" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Zod Sanbox
          </span>
        </FBNavbar.Brand>
        <FBNavbar.Toggle />
        <FBNavbar.Collapse>
          {/* <FBNavbar.Link active href="#">
            Home
          </FBNavbar.Link> */}
          <FBNavbar.Link href="https://zod.dev/" target='_blank' rel="noreferrer">
            Zod Docs
          </FBNavbar.Link>
          {/* <FBNavbar.Link href="https://www.npmjs.com/package/zod-error" target='_blank' rel="noreferrer">
            ZodError
          </FBNavbar.Link>
          <FBNavbar.Link href="https://www.npmjs.com/package/highlight.js" target='_blank rel="noreferrer">
            Highlight.js
          </FBNavbar.Link> */}
          {/* <FBNavbar.Link href="https://github.com/nereumelo" target='_blank' rel="noreferrer">
            Contact
          </FBNavbar.Link> */}
        </FBNavbar.Collapse>
        {/* <DarkThemeToggle /> */}
      </div>
    </FBNavbar>
  )
}
