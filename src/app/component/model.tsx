import React from "react";

interface ModelProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
}
// ========== Pop-up Page ========== //
const Model: React.FC<ModelProps> = ({ children, modalOpen, setModalOpen }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
       {children}
      </div>
    </div>
  );
};

export default Model;
