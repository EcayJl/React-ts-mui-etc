import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Context } from "../../pages/React/Poker/context";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// @ts-ignore
const DefaultModal: React.FC<Props> = ({children}) => {
  const { modalStatus, setModalProxyDecorator } = useContext(Context);

  return (
    <>
      <Modal
        open={modalStatus}
        onClose={setModalProxyDecorator}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {children}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default DefaultModal;
