import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Conversation from "./Conversation";

export default function Chat() {
  const [checkInput, setCheckInput] = useState(true);
  return (
    <div className="mx-auto flex flex-col w-4/5">
      <Conversation />
      <div className="flex items-center gap-2 mb-3">
        <IconButton aria-label="Image" className="absolute top-0 left-0">
          <ImageIcon className="text-white hover:text-sec" />
        </IconButton>
        <TextField
          className="flex-grow search-input"
          placeholder="Type a message"
          id="outlined-basic"
          variant="outlined"
          onKeyUp={(e) => setCheckInput(e.target.value == "")}
        />
        <IconButton
          aria-label="Send message"
          color="primary"
          disabled={checkInput}
          onClick={() => alert("hello")}
        >
          <SendIcon
            className={`text-white hover:text-sec ${
              checkInput ? "opacity-25" : ""
            }`}
          />
        </IconButton>
      </div>
    </div>
  );
}
