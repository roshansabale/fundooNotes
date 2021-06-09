import axios from "axios";

export function addNote(noteData) {
    try{
        const response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',noteData,{
            headers:{
                Authorization:localStorage.getItem('id')
                   }
        });
        return response;
    }
    catch(error){
        return error;
    }
}
