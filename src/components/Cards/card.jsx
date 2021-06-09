import React, { useState } from "react";
import { InputBase, Card } from "@material-ui/core";
import "./card.scss";
import { addNote } from "../../services/notesServices";

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [openCard, setOpenCard] = useState(true);

  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");


  const handleOpenNotes = () => {
    setOpenCard(false);
  };

  
  const handleCloseNotes = async () => {
    let noteData = {
      title: noteTitle,
      description: noteDescription,
    };
    console.log("noteData", noteData);

    await addNote(noteData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setOpenCard(true);
  };

  return (
    <div className="card-container">
      {openCard ? (
        <Card className="card" onClick={handleOpenNotes}>
          <InputBase placeholder="Take a note..." className="input" />
        </Card>
      ) : (
        <Card className="card-extended">
          <InputBase
            placeholder="Title"
            className="input"
            onChange={(event) => {
              setNoteTitle(event.target.value);
            }}
            // value={noteTitle}
          />
          <InputBase
            placeholder="Description"
            className="input"
            onChange={(event) => {
              setNoteDescription(event.target.value);
            }}
            // value={noteDescription}
          />
          <div className="btn-container">
            <button titile="Close" onClick={handleCloseNotes}>
              Close
            </button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Example;
