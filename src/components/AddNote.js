import React,{useContext,useState} from 'react'
import noteContext from "../context/notes/NoteContext";
const AddNote = (props) => {
     const context=useContext(noteContext);
     const {addNote}=context;

     const [note,setNote]=useState({title:"",description:"",tag:""})

     const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Note Added Successfully","success");

     }
     const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})

     }
     
  return (

     <>
          <div className="container my-3">
            <h1 className='text-center'>{`Welcome ${localStorage.getItem('username')}`}</h1>
        <h2>Add a Note</h2>
        <form className='my-3'>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" value={note.title} name="title" aria-describedby="emailHelp" onChange={onChange} minLength={3} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" value={note.description} name="description" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" value={note.tag} name="tag" onChange={onChange}/>
        </div>
        <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
    </div>
    </>

  )
}

export default AddNote
