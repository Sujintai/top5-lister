import { useContext } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { GlobalStoreContext } from '../store';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 2
};

export default function ErrorModal() {
  const { store } = useContext(GlobalStoreContext)
  const handleClose = () => store.setError(null);

  return (
    <div>
      <Modal
        open={store.currentError != null}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Alert severity="error">
                {store.currentError}
                <br /><br />
                <Button variant="outlined" onClick={handleClose}>Close</Button>
            </Alert>
            
        </Box>
      </Modal>
    </div>
  );
}