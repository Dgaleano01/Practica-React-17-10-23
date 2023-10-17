import Note from "../models/note.model.js";

export const getNotes = async (req, res) => {
  const notes = await Note.find().populate('user');
  res.json(notes);
};

export const getNote = async (req, res) => {
  const findNote = await Note.findById(req.params.id).populate('user');
  if (!findNote) return res.status(404).json({ message: "Note not found" });
  res.json(findNote);
};

export const createNote = async (req, res) => {
  const { user, title, description, date } = req.body;
  const newNote = Note({
    user,
    title,
    description,
    date,
  });
  await newNote.save();
  res.status(201).json({ message: "Note created" });
};

export const updateNote = async (req, res) => {
  const findNote = await Note.findByIdAndUpdate(req.params.id, req.body);
  if (!findNote) return res.status(404).json({ message: "Note not found" });
  res.status(200).json({ message: "Note updated" });
};

export const deleteNote = async (req, res) => {
  const findNote = await Note.findByIdAndDelete(req.params.id);
  if (!findNote) return res.status(404).json({ message: "Note not found" });
  res.sendStatus(204);
};
