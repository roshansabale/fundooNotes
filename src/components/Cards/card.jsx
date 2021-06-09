import React, { useState } from "react";
import { InputBase, Card } from "@material-ui/core";
import "./card.scss"

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [openCard, setOpenCard] = useState(true);

  const handleOpenNotes = () => {
    setOpenCard(false);
  };

  const handleCloseNotes = () => {
    setOpenCard(true);
  };

  return (
    <div className="card-container">
      {openCard ? (
        <Card className="card"
          onClick={handleOpenNotes}
        >
          <InputBase
            placeholder="Take a note..." 
            className="input"
          />
        </Card>
      ) : (
        <Card className="card-extended">
          <InputBase
            placeholder="Title"
            className="input"
          />
          <InputBase
            placeholder="Description"
            className="input"
          />
          <div className="btn-container">
          <button titile="Close" onClick={ handleCloseNotes}>Close</button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Example;