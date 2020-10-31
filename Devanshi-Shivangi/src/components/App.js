import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyChatBot from "./chatbot/customchatbot.js"
import Main from "./main page/main"
import Quote from "./main page/quote"
import Info from "./main page/info"
import Path from "./main page/path"
import Challenge from "./main page/challenge"
import Contact from "./main page/contact"
function App() {
  return (
    <div className="App">
<Main/>
<Quote />

        <Info />
        <Path/>
        <Challenge />
        <Contact/>
        <MyChatBot/>
    </div>
  );
}

export default App;
