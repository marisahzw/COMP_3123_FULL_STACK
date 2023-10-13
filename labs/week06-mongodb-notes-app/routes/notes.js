const express = require("express");
const mongoose = require('mongoose');

const NoteModel = require('../models/Notes');
const app = express();

// Get All Notes
app.get("/notes", async (req, res) => {
    try {
        const noteList = await NoteModel.find({});
        res.status(200).send(noteList);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add NEW Note
app.post("/notes", async (req, res) => {
    try {
        const newNote = new NoteModel({ ...req.body });
        await newNote.save();
        res.status(200).send(newNote);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get Note by ID
app.get('/notes/:noteId', (req, res) => {
    const noteId = req.params.noteId;
    if (!noteId) {
        return res.status(400).send({
            message: "Note ID is required"
        });
    }
    NoteModel.findById(noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with ID: " + noteId
                });
            }
            res.status(200).send(note);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving note with ID: " + noteId
            });
        });
});

app.put('/notes/:noteId', (req, res) => {
    const noteId = req.params.noteId;

    // Check if noteId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
        return res.status(400).send({
            message: "Invalid Note ID"
        });
    }

    // Define the fields you want to update
    const updateFields = {};
    
    if (req.body.noteTitle) {
        updateFields.noteTitle = req.body.noteTitle;
    }
    
    if (req.body.noteDescription) {
        updateFields.noteDescription = req.body.noteDescription;
    }
    
    if (req.body.priority) {
        updateFields.priority = req.body.priority;
    }

    // Use findByIdAndUpdate to update specific fields
    NoteModel.findByIdAndUpdate(noteId, updateFields, { new: true })
        .then(updatedNote => {
            if (!updatedNote) {
                return res.status(404).send({
                    message: "Note not found with ID: " + noteId
                });
            }
            res.status(200).send(updatedNote);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating note with ID: " + noteId
            });
        });
});


// Delete Note by ID
app.delete('/notes/:noteId', (req, res) => {
    const noteId = req.params.noteId;
    if (!noteId) {
        return res.status(400).send({
            message: "Note ID is required"
        });
    }
    NoteModel.findByIdAndRemove(noteId)
        .then(deletedNote => {
            if (!deletedNote) {
                return res.status(404).send({
                    message: "Note not found with ID: " + noteId
                });
            }
            res.status(200).send({ message: "Note deleted successfully!" });
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete note with ID: " + noteId
            });
        });
});

module.exports = app;
