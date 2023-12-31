import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#141414',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BasicModal({
  title,
  text,
  open,
  handleClose,
}: {
  title: string
  text: string
  open: boolean
  handleClose: () => void
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="bg-[#000000a9]"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: 'white' }}
            className="text-red"
          >
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: 'white' }}
            className="text-red"
          >
            {text}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
