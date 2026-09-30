const {notes} = require("../models/data")

const getNotes = (req,res)=>{
    try{
        res.status(200).send(notes)
    }catch(err){
        // console.log(err,"Internal Server Error")
        res.status(500).send(err)
    }
}

const getNoteByID = (req,res)=>{
    let {id} = req.params;

    let element = notes.find(note=> note.id === Number(id))
    if(!element){
        return res.status(404).send("Note not found")
    }

    res.status(200).send(element)
}

const createNote = (req,res)=>{
    let {id,title,description,link,author,createOn,note} = req.body

    let newData = {
        id:notes.length+1,
        title:title,
        discription:description,
        note:note,
        link:link,
        createdOn:createOn,
    }

    notes.push(newData)
    res.status(201).send("Notes Added Successfully")
}






const updateNote = (req,res)=>{
    let {id} = req.params;

    let note = notes.find(note=> note.id === Number(id))
    if(!note){
        return res.status(404).send("Note not found")
    }

    Object.assign(note,req.body)
    res.status(200).send("Note Updated Successfully")

}



const deleteNote = (req,res)=>{
    let {id} = req.params;
    const note  = notes.find(note=> note.id === Number(id))
    if(!note){
        return res.status(404).send("Note not found")
    }

    let index = notes.indexOf(note)
    notes.splice(index,1)
    res.status(200).send("Note Deleted Successfully")
}



module.exports = {getNotes,getNoteByID,createNote,updateNote,deleteNote}
