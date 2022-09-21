import { Close } from '@styled-icons/ionicons-outline'

import { useModal } from 'contexts/ModalContext'
import { useEffect, useRef } from 'react'

import * as S from './styles'

type TModal = {
  content?: JSX.Element | string
  footer?: JSX.Element | string
}

const Modal = ({ content, footer }: TModal) => {
  const { closeModal } = useModal()

  const modalWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    window.addEventListener('click', backDropHandler)

    return () => window.removeEventListener('click', backDropHandler)
  }, [])

  const handleCloseClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    closeModal()
  }

  const backDropHandler = (e: { target: any }) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      closeModal()
    }
  }

  return (
    <S.Overlay>
      <S.ContainerWrapper ref={modalWrapperRef}>
        <S.Container>
          <S.Header>
            <S.CloseButton>
              <Close onClick={handleCloseClick}></Close>
            </S.CloseButton>
          </S.Header>
          {content}
          <S.Footer>{footer}</S.Footer>
        </S.Container>
      </S.ContainerWrapper>
    </S.Overlay>
  )
}

export default Modal
