import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type TPortal = {
  children: JSX.Element
}

const Portal = ({ children }: TPortal) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(children, document.getElementById('portal')!)
    : null
}

export default Portal
