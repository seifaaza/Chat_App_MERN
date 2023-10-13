import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";

const MainModal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className="absolute w-2/5 top-2/4 left-2/4 -translate-x-2/4
            -translate-y-2/4 bg-mainLight p-4 rounded-xl"
      >
        {props.modal}
      </Box>
    </Modal>
  );
};
MainModal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  modal: PropTypes.bool,
};

export default MainModal;
