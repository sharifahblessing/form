import React from "react";
import "./App.css";
import ValidatedLoginForm from "./components/ValidatedForm";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <h1>Greeky Form</h1>
          <ValidatedLoginForm />
        </div>
      </>
    );
  }
}

export default App;
