import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useState
} from 'react'

type HomeContextData = {
  menuIsOpen: boolean
  openMenu(): void
}

const HomeContext = createContext<HomeContextData>({} as HomeContextData)

export const HomeProvider: FC = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openMenu = useCallback((): void => {
    setMenuIsOpen((prevState) => !prevState)
  }, [])

  return (
    <HomeContext.Provider
      value={{
        menuIsOpen,
        openMenu
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export const useHome = (): HomeContextData => useContext(HomeContext)
