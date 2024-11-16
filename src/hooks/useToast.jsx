import { useCallback, useState } from "react";
import Toast from "../componets/Toast/Toast";
import "../componets/Toast/Toast.css";

const useToast = (position = "top-right") => {
  const [toast, setToast] = useState(null);
  let timer;
  const triggerToast = useCallback((toastProps) => {
    setInterval(timer);
    setToast(toastProps);
    setTimeout(() => {
      setToast(null);
    }, toastProps.duration);
  }, []);

  const TostComponet = toast ? (
    <div className={`${position}`}>
      <Toast {...toast} />
    </div>
  ) : null;

  return { TostComponet, triggerToast };
};

export default useToast;
