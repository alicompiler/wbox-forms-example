import { useState } from "react";
import { FactoryExample } from "./FactoryExample";
import { RegistrationForm } from "./RegistrationForm";

function App() {
  const [example, setExample] = useState('registration');
  return (
    <div className="p-4">
      <div className="flex items-center justify-center p-2 gap-2">
        <button className="p-2 bg-blue-400 rounded text-white" onClick={() => setExample('registration')}>Registration Form Example</button>
        <button className="p-2 bg-blue-400 rounded text-white" onClick={() => setExample('factory')}>Form Factory Example</button>
      </div>
      <br/>
      <hr/>
      <br/>
      {
        example === "registration" && <RegistrationForm />
      }
      {
        example === "factory" && <FactoryExample />
      }
    </div>
  );
}

export default App;
