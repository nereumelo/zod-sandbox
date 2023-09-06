import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid';
import { getTheme } from "../themes/handler";

export const MainContext = createContext<Partial<MainContextProps>>({})
export const MainDispatchContext = createContext<Partial<MainDispatchContextProps>>({})

function MainContextProvider({ children }: React.PropsWithChildren) {
  const [theme , setTheme] = useState<string>(localStorage.getItem('theme') || getTheme());
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Notification) => {
    if (notification?.message && notification?.type) {
      setNotifications((notifications) => [...notifications, { id: uuid(), ...notification }]);
    }
  }

  const removeNotification = (notification: Notification) => {
    if (notification?.id) {
      setNotifications((notifications) => {
        return notifications.filter(({ id }) => id !== notification.id);
      });
    }
  }

  
  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark' 
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme);
  }

  return (
    <MainContext.Provider value={{ notifications, theme }}>
      <MainDispatchContext.Provider value={{ addNotification, removeNotification, handleTheme }}>
        {children}
      </MainDispatchContext.Provider>
    </MainContext.Provider>
  )
}

export type Notification = {
  id?: string,
  message: string,
  type: 'success' | 'error' | 'warning'
}

type MainContextProps = {
  theme: string
  notifications: Notification[]
}

type MainDispatchContextProps = {
  handleTheme: () => void
  addNotification: (notification: Notification) => void
  removeNotification: (notification: Notification) => void
}

export default MainContextProvider