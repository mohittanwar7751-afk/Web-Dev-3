const express = require("express")

const { getNotes, createNote ,getNoteByID, updateNote, deleteNote } = require("../controllers/notesController")
const {isAuthorized, isLoggedIn} = require("../middlewares/isAuthorized")
const router = express.Router()

router.get("/notes",isAuthorized,isLoggedIn,getNotes)
router.post("/notes",isAuthorized,isLoggedIn,createNote)
router.get("/notes/:id",isAuthorized,isLoggedIn,getNoteByID)
router.put("/update-note/:id",isAuthorized,isLoggedIn,updateNote)
router.delete("/delete-note/:id",isAuthorized,isLoggedIn,deleteNote)




module.exports = router