import React, { useState, useReducer } from "react";
import Modal from "./Modal";

const Index = () => {
  const defaultState = {
    note: "",
    notes: []
  };
  const reducer = (state, action) => {
    console.log(action);
    if (action.type === "ADD_NOTE") {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    return state;
  };
  const [note, SetNote] = useState("");
  //const [notes, SetNotes] = useState([]);
  const [state, Dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(note);
    Dispatch({ type: "ADD_NOTE", payload: note });
    // SetNotes([
    //   ...notes,
    //   {
    //     id: new Date().getTime().toString(),
    //     date: new Date().toString(),
    //     note
    //   }
    // ]);
    // SetNote("");
  };
  return (
    <>
      <Modal />
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
                <button>Remove</button>
              </p>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};
export default Index;
