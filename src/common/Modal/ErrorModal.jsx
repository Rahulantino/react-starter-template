import { Modal } from "react-responsive-modal";

const ErrorModal = ({ open, onClose, children }) => {
  return (
    <div>
      <Modal open={open} onClose={onClose} center>
        {children}
      </Modal>
    </div>
  );
};

export default ErrorModal;
