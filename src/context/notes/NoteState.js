import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState=(props)=>{
    const host="http://localhost:5000"
    const notesInitial=[];
    const [notes,setNotes]=useState(notesInitial);

    //Get all Notes
    const getNotes=async ()=>{
        // API call
        const response=await fetch(`${host}/api/notes/fetchallnotes`,{
            method:"GET",
            headers:{
                'Content-Type':"application/json",
                'auth-token':localStorage.getItem('token')
            },
           });
           const json=await response.json();
        //    console.log(json);
           setNotes(json);
        

    }

    //Add a Note
    const addNote=async (title,description,tag)=>{
        // API call
        const response=await fetch(`${host}/api/notes/addnote`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
                'auth-token':localStorage.getItem('token')
            },
            body:JSON.stringify({title,description,tag})
           });
           const note=await response.json();
        // console.log(json);
         // console.log("Adding a New Note")
        setNotes(notes.concat(note))

    }

    //Delete a Note
    const deleteNote=async (id)=>{
        //API Call
           const response=await fetch(`${host}/api/notes/deletenote/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':"application/json",
                'auth-token':localStorage.getItem('token')
            },
           });
           const json=await response.json();
        //    console.log(json);
        
        // console.log("Deleting a note with id"+id)
       const newNotes=notes.filter((note)=>{return note._id!==id})
       setNotes(newNotes);


    }

    //Edit a Note
    const editNote=async (id,title,description,tag)=>{
        //API call
            const response=await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type':"application/json",
                'auth-token':localStorage.getItem('token')
            },
            body:JSON.stringify({title,description,tag})
           });
           const json= await response.json();
        //    console.log(json);
        
        let newNotes=JSON.parse(JSON.stringify(notes))
        //logic to edit notes
        for(let i=0;i<newNotes.length;i++)
        {
            const element=newNotes[i];
            if(element._id===id)
            {
                newNotes[i].title=title;
                newNotes[i].description=description;
                newNotes[i].tag=tag;
                 break;
            }
           
        }
        setNotes(newNotes);

    }
       
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )


}

export default NoteState;

