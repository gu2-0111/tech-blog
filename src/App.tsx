import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Entry from "./components/Entry";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Entry />
    </div>
  );
};

export default App;
