import { useState } from "react";

import SMSList from "./components/SMSList";

import "./App.css";

function App() {
  const [smses] = useState([
    {
      id: 100,
      to: "+999999999",
      content: "This is a test message.",
    },
    {
      id: 101,
      to: "+999999999",
      content:
        "This is a another message.\nI can span across \nmultiple \nlines?",
    },
  ]);

  return (
    <>
      <h1>Try clicking on the "Send SMS" buttons :)</h1>
      <SMSList smses={smses} />
    </>
  );
}

export default App;
