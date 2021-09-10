const reducer = (state, action) => {
  const { type, payload } = action;
  if (action.type === "ADD_NOTE") {
    const newNote = {
      note: action.payload,
      id: new Date().getTime().toString(),
      date: new Date().toISOString()
    };
    return {
      ...state,
      notes: [...state.notes, newNote],
      modal_msg: "Notes Added"
    };
  }
  if (type === "REMOVE_ITEM") {
    return {
      ...state,
      notes: state.notes.filter((note) => note.id !== payload),
      modal_msg: "Note Removed"
    };
  }
  if (type === "CLOSE_MODAL") {
    return {
      ...state,
      modal_msg: ""
    };
  }
  throw new Error("Not matching dispatch!");
};
export default reducer;
