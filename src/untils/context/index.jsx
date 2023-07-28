import { createContext, useState } from 'react'

export const BackgroundContext = createContext()
export const BackgroundProvider = ({ children }) => {
  const [back, setBack] = useState(false)

  return (
    <BackgroundContext.Provider
      value={{
        back,
        setBack,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  )
}
