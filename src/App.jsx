import { useState } from "react";
import ErrorModal from "./common/Modal/ErrorModal";

const App = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
    setOpen(false);
  };

  return (
    <div>
      <h2>React Responsive Modal</h2>
      <button onClick={() => setOpen(true)}>open</button>
      <ErrorModal open={open} onClose={onClose}>
        <h2>hello world Responsive Modal </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, beatae?
        </p>
        <button onClick={handleSubmit}>Submit</button>
        <button>Cancel</button>
      </ErrorModal>
    </div>
  );
};

export default App;

// Hello Modal
