import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>
        <i>My</i> Button
      </Button>
    </div>
  );
}
export default App;
