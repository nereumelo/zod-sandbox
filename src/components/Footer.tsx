import { Footer as FBFooter } from 'flowbite-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <FBFooter container>
      <div className='w-full grid grid-cols-3 justify-items-center lg:px-10 px-3'>
        <a
          // href="https://nereu.dev"
          target="_blank"
          rel="noreferrer"
          className='justify-self-start select-none'
        >
          <FBFooter.Copyright
            by="Nereu Melo"
            year={2023}
          />
        </a>
        <FBFooter.LinkGroup className='lg:gap-0 gap-4'>
          <FBFooter.Link href="https://zod.dev/" target='_blank' rel="noreferrer">
            Zod Docs
          </FBFooter.Link>
          <FBFooter.Link href="https://github.com/nereumelo/zod-sandbox/blob/main/LICENSE" target='_blank' rel="noreferrer">
            License
          </FBFooter.Link>
        </FBFooter.LinkGroup>
        <div className='flex gap-4 justify-self-end'>
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


