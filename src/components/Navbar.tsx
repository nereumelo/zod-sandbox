import { Navbar as FBNavbar } from 'flowbite-react';

export default function Navbar() {
  return (
    <FBNavbar
      fluid
      rounded
      className='mb-10 shadow-md'
    >
      <div className='w-full flex items-center justify-between sm:pl-4 pl-2 sm:pr-12 pr-2'>
        <FBNavbar.Brand>
          <img
            alt="Validate engine"
            className="mr-3 h-6 sm:h-9"
            src="https://static-00.iconduck.com/assets.00/validate-icon-512x512-7pkrx69v.png"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Zod Sanbox
          </span>
        </FBNavbar.Brand>
        <FBNavbar.Toggle />
        <FBNavbar.Collapse>
          {/* <FBNavbar.Link active href="#">
            Home
          </FBNavbar.Link> */}
          <FBNavbar.Link href="https://zod.dev/" target='_blank'>
            Zod Docs
          </FBNavbar.Link>
          {/* <FBNavbar.Link href="https://www.npmjs.com/package/zod-error" target='_blank'>
            ZodError
          </FBNavbar.Link>
          <FBNavbar.Link href="https://www.npmjs.com/package/highlight.js" target='_blank'>
            Highlight.js
          </FBNavbar.Link> */}
          {/* <FBNavbar.Link href="https://github.com/nereumelo" target='_blank'>
            Contact
          </FBNavbar.Link> */}
        </FBNavbar.Collapse>
        {/* <DarkThemeToggle /> */}
      </div>
    </FBNavbar>
  )
}
