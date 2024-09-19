import React, { useState } from "react";

import Modal from "@mui/material/Modal";
import CareersForm from "../CareersForm/CareersForm";

function EnquiryModal({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div>
      {React.cloneElement(children, { onClick: handleModalOpen })}
      {/* <button onClick={handleModalOpen}>Modal Button</button> */}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <div className=" w-[90%] sm:w-[60%] h-[650px] relative top-[10%] left-5 sm:left-[20%] ">
          <CareersForm isModal={true} />
        </div>
      </Modal>
    </div>
  );
}

export default EnquiryModal;
