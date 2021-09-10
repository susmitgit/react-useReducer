import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import reducer from "../reducer";

const Index = () => {
  const defaultState = {
    note: "",
    notes: [],
    modal_msg: ""
  };

  const [note, SetNote] = useState("");
  //const [notes, SetNotes] = useState([]);
  const [state, Dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(note);
    Dispatch({ type: "ADD_NOTE", payload: note });
    SetNote("");
  };
  const handleRemove = (id) => {
    Dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const closeModal = () => {
    Dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      <Modal text={state.modal_msg} closeModal={closeModal} />
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <label>Your Note: </label>
          <input
            type="text"
            name="note"
            id="note"
            onChange={(e) => SetNote(e.target.value)}
            value={note}
          />
        </div>
        <button type="submit">ADD Note</button>
      </form>
      <div>
        {state.notes.map((note) => (
          <div key={note.id}>
            <article>
              <p>
                {" "}
                <b>{note.note}</b> {note.date}
                <button onClick={() => handleRemove(note.id)}>Remove</button>
              </p>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};
export default Index;
