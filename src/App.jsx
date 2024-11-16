import React from "react";
import useToast from "./hooks/useToast";

const App = () => {
  const { triggerToast, TostComponet } = useToast("top-left ");

  return (
    <div>
      <div className="button-contanner">
        <button
          onClick={() =>
            triggerToast({
              type: "error",
              message: "Error Meassge",
              duration: 3000,
            })
          }
        >
          error
        </button>
        <button
          onClick={() =>
            triggerToast({
              type: "info",
              message: "Error Meassge",
              duration: 3000,
            })
          }
        >
          info
        </button>
        <button
          onClick={() =>
            triggerToast({
              type: "success",
              message: "Error Meassge",
              duration: 3000,
            })
          }
        >
          success
        </button>
        <button
          onClick={() =>
            triggerToast({
              type: "warning",
              message: "Error Meassge",
              duration: 3000,
            })
          }
        >
          warning
        </button>
      </div>

      {TostComponet}
    </div>
  );
};
export default App;
