import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function creatCard(props) {
  return (
    <Card
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(creatCard)}</dl>
    </div>
  );
}

export default App;
