import { Footer as FBFooter } from 'flowbite-react';
import { BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <FBFooter container>
      <div className='w-full flex items-center justify-between sm:pl-4 pl-2 sm:pr-12 pr-2'>
        <a href="https://nereu.dev"
          target="_blank">
        <FBFooter.Copyright
          by="Nereu Melo"
          year={2023}
        />
        </a>
        <FBFooter.LinkGroup>
          {/* <FBFooter.Link href="#">
            About
          </FBFooter.Link>
          <FBFooter.Link href="#">
            Privacy Policy
          </FBFooter.Link> */}
          <FBFooter.Link href="https://www.gnu.org/licenses/gpl-3.0.html" target='_blank'>
            Licensing
          </FBFooter.Link>
          <FBFooter.Link href="https://www.linkedin.com/in/nereumelo/" target='_blank'>
            Contact
          </FBFooter.Link>
        </FBFooter.LinkGroup>
        <FBFooter.Icon
          href="https://github.com/nereumelo/zod-sandbox"
          target='_blank'
          icon={BsGithub}
        />
      </div>
    </FBFooter>
  )
}


