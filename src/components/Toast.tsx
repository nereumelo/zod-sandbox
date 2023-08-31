import { ToastProps as FBToastProps, Toast as FBToast } from "flowbite-react";

export default function Toast({ ...props }: ToastProps) {
  return (
    <FBToast {...props } className="z-50 mb-32">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        <div className="h-5 w-5 bg-slate-600" />
      </div>
      <div className="ml-3 text-sm font-normal">
        Item moved successfully.
      </div>
      <FBToast.Toggle />
    </FBToast>
  )
}

interface ToastProps extends FBToastProps {
  children?: string
} 
