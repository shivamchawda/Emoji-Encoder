import { useState } from "react";
import "./App.css";
import style from "./style.css";

var emojiDictionary = {
  "😊": "smiling",
  "❤": "love",
  "😒": "confused",
  "😎": "cool",
  "🥵": "tired",
  "🤧": "sick",
};

var emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  const [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setmeaning(meaning);

    console.log(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
    console.log(emoji);
  }

  return (
    <div className="App">
      <h1>Welcome To Emoji Converter</h1>
      <input
        placeholder="please enter the emoji here"
        onChange={emojiInputHandler}
      ></input>
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default App;
