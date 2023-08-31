export function H2({ className, children }: H2Props) {
  return (
    <h2 className={`text-xl mb-1 ${className}`}>
      {children}
    </h2>
  )
}

export type H2Props = {
  className?: string
  children: string
}