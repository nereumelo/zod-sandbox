import { ToastProps, Toast } from "flowbite-react";
import { useContext } from "react";
import { MainContext, MainDispatchContext, Notification } from "../contexts/Main";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";
const icon = {
  error: <HiX className="h-5 w-5"/>,
  success: <HiCheck className="h-5 w-5"/>,
  warning: <HiExclamation className="h-5 w-5"/>,
};

const iconStyle = {
  error: 'bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200',
  success: 'bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200',
  warning: 'bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200',
}

export default function Notification({ ...props }: NotificationProps) {
  const { notifications } = useContext(MainContext);
  const { removeNotification } = useContext(MainDispatchContext);
  const getIcon = (type: string) => icon[type as keyof typeof icon]
  const getIconStyle = (type: string) => iconStyle[type as keyof typeof iconStyle]
  const handleRemove = (notification: Notification) => {
    removeNotification?.(notification);
  }

  return (
    <div className="absolute bottom-6 right-6 flex flex-col gap-2">
      {notifications?.map((notification, index) => (
        <div key={`notification-${index}`} className="z-20">
          <Toast {...props } className="shadow-gray-400 dark:shadow-gray-600">
            <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${getIconStyle(notification.type)}`}>
              {getIcon(notification.type)}
            </div>
            <div className="ml-3 text-sm font-normal">
              {notification.message}
            </div>
            <Toast.Toggle onClickCapture={() => handleRemove(notification)} />
          </Toast>
        </div>
      ))}
    </div>
  )
}

interface NotificationProps extends ToastProps {
  children?: string
} 
