import "./App.css";
import { Button, Text } from "./ui";
import { Input } from "./ui/Input";

function App() {
  return (
    <>
      <Text className="text-red-200 ">Hello world</Text>
      <Button label="guzik" className="text-lg" type="submit"/>
        <Input label="coś" type="email"/>
    </>
  );
}

export default App;
