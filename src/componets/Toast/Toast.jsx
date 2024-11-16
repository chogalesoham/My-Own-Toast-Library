import React from "react";
import "./Toast.css";
import {
  AiFillInfoCircle,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

const icons = {
  success: <AiOutlineCheckCircle />,
  info: <AiFillInfoCircle />,
  warning: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};

const Toast = ({ type = "info", message, onClose = () => {} }) => {
  return (
    <div className={`toast ${type}`}>
      {icons[type]}
      {message}
      {<VscChromeClose className="close-btn" onClick={onClose()} />}
    </div>
  );
};

export default Toast;
