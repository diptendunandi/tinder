import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import "./ChatScreen.css";
const ChatScreen = () => {
    const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://cdn.wallpapersafari.com/85/45/lAtBQW.jpg",
      message: "Whats up 💌",
    },
    {
      name: "Ellen",
      image:
        "https://cdn.wallpapersafari.com/85/45/lAtBQW.jpg",
      message: "Hows it going!",
    },
    {
      message: "Hi! How are you Nicole!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input) {
      setMessages([...messages, { message: input }]);
    }

    setInput("");
  };
  return (
    <div>
        <p className="chatScreen_timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen_input">
        <input
          valeu={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen_inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;