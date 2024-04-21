import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
        )}
        <Button color="danger" onClick={() => setAlertVisibility(true)}>
          <i>My</i> Button
        </Button>
      </div>
    </>
  );
}
export default App;
