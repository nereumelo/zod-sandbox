import { Button, ButtonProps } from "flowbite-react";

export default function Btn({ children, ...props }: BtnProps) {
  return (
    <Button {...props }>
      {children}
    </Button>
  )
}

interface BtnProps extends ButtonProps {
  children: string
} 
