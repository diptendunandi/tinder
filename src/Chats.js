import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Hey how are you 😃!"
        timestamp="40 seconds ago"
        profilePic="https://media.istockphoto.com/photos/closeup-of-hiker-with-messy-hair-picture-id1178129890?b=1&k=20&m=1178129890&s=170667a&w=0&h=NXCXnHebTEb88WCFdtieCqagaQJybPfLEl2Y7MJfTm4="
      />
      <Chat
        name="Oscar"
        message="Loooool"
        timestamp="55 minutes ago"
        profilePic="https://media.istockphoto.com/photos/handsome-man-portrait-picture-id603281274?k=20&m=603281274&s=612x612&w=0&h=bks8YpXj6_DndlDxLRXRdzYIkpZFWxkOz10ELMadhq4="
      />
      <Chat
        name="Nicole"
        message="Love you"
        timestamp="2 days ago"
        profilePic="https://media.istockphoto.com/photos/portrait-of-young-girl-with-clean-skin-and-soft-makeup-picture-id1265032285?b=1&k=20&m=1265032285&s=170667a&w=0&h=OWZ3aJU0WlcQ9xrty1kitR03WE4bx3yPiItwLNa_i50="
      />
      <Chat
        name="Cristina"
        message="Tot bé?"
        timestamp="1 week ago"
        profilePic="https://www.instyle.es/medio/2020/06/27/cristina-pedroche-tarta-queso_4aeeb946_812x456.jpg"
      />
    </div>
  );
};

export default Chats;