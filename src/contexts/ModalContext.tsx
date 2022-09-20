import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useState
} from 'react'

type ModalContextData = {
  modalIsOpen: boolean
  openModal(): void
  closeModal(): void
}

interface Props {
  children?: React.ReactNode
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

export const ModalProvider: FC<Props> = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = useCallback((): void => {
    setModalIsOpen(true)
  }, [])

  const closeModal = useCallback((): void => {
    setModalIsOpen(false)
  }, [])

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = (): ModalContextData => useContext(ModalContext)
