import React, { useCallback } from 'react'

export const useModal = () => {
  const [modalState, setModalState] = React.useState<boolean>(false)
  const toggleModal = useCallback(() => {
    setModalState(state => {
      return !state
    })
  }, [])

  return { modalState, toggleModal }
}
