import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

type TestProps = JSX.IntrinsicElements["button"] & {
  text?: string;
  url: string;
  props?: any;
};

const Test = ({
  text = "Learn React default text",
  url,
  ...props
}: TestProps) => {
  return (
    <button className="App-link" {...props}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
};

interface IUgovor {
  contractLength: number,
  phone: string,
  support?: {
    number?: number,
    email?: string
  }
}

function App() {
  const [ugovor, setUgovor] = useState<IUgovor>({
    contractLength: 12,
    phone: 'asd'
  });

  useEffect(() => {
    setUgovor({
      contractLength: 12,
      phone: 'apple'
    })
  }, [])

  const qwe = () => {
    alert(ugovor.support?.email || 'Nema ugovora')
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Test text="izmenjen text ovdeeee" url="https://reactjs.org" />

        <button onClick={qwe}>Klikni me ovde</button>
      </header>
    </div>
  );
}

export default App;
