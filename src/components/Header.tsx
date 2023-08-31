import { H1, H1Props } from "./headers/H1"
import { H2, H2Props } from "./headers/H2"

const Header = {
  h1: (props: H1Props) => <H1 {...props} />,
  h2: (props: H2Props) => <H2 {...props} />
}

export default Header
