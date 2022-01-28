import { createContext, useState } from 'react'

const DesignContext = createContext()

const DesignProvider = ({ children }) => {
  const [focus, setFocus] = useState(false)
  const toggleFocus = () => setFocus(!focus)
  return (
    <DesignContext.Provider value={{ focus, toggleFocus }}>
      {children}
    </DesignContext.Provider>
  )
}

export { DesignContext, DesignProvider }
