import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-40">
          <div className="min-h-[200px] min-w-[500px] bg-white p-4 z-50 relative m-auto">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="text-2xl cursor-pointer hover:scale-110 ease-in-out duration-200"
              />
            </div>
            {children}

          </div>
        </div>
      )}
    </>
 , document.getElementById("modal-root"));
};

export default Modal;
