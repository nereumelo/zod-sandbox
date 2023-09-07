import { Footer as FBFooter } from 'flowbite-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <FBFooter className='sm:py-6 sm:px-14 py-4 px-6'>
      <div className='h-full w-full grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-2 grid-rows-2 justify-items-center gap-y-5'>
        <a
          // href="https://nereu.dev"
          target="_blank"
          rel="noreferrer"
          className='sm:justify-self-start justify-self-center select-none sm:row-start-1 row-start-2 sm:col-span-1 col-span-2'
        >
          <FBFooter.Copyright
            by="Nereu Melo"
            year={2023}
          />
        </a>
        <FBFooter.LinkGroup className='lg:gap-0 gap-4 row-start-1 sm:col-start-2 sm:justify-self-center justify-self-start'>
          <FBFooter.Link href="https://zod.dev/" target='_blank' rel="noreferrer">
            Zod Docs
          </FBFooter.Link>
          <FBFooter.Link href="https://github.com/nereumelo/zod-sandbox/blob/main/LICENSE" target='_blank' rel="noreferrer">
            License
          </FBFooter.Link>
        </FBFooter.LinkGroup>
        <div className='flex gap-4 justify-self-end row-start-1 sm:col-start-3'>
          <FBFooter.Icon
            href="https://github.com/nereumelo/zod-sandbox"
            target='_blank'
            rel="noreferrer"
            icon={BsGithub}
          />
          <FBFooter.Icon
            href="https://www.linkedin.com/in/nereumelo"
            target='_blank'
            rel="noreferrer"
            icon={BsLinkedin}
          />
        </div>
      </div>
    </FBFooter>
  )
}


