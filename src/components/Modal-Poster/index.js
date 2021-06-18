import { useRef } from 'react'
import { Dialog } from '@headlessui/react'

const ModalPoster = ({ isOpen, handleClose, imgUrl }) => {
  let initialFocusRef = useRef(null)

  return (
    <Dialog
      open={isOpen}
      onClose={() => handleClose(false)}
      initialFocus={initialFocusRef}
      data-testid="modal-poster"
    >
      <Dialog.Overlay className="fixed inset-0 bg-opacity-75 bg-gray-500" />
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={imgUrl}
          alt="img-poster-popup"
          ref={initialFocusRef}
          tabIndex={-1}
        />
      </div>
    </Dialog>
  )
}

export default ModalPoster
