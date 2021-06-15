import axios from "axios";

export function addNote(noteData) {
    try{
        const response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',noteData,{
            headers:{
                Authorization:localStorage.getItem('ID')
                   }
        });
        return response;
    }
    catch(error){
        return error;
    }
}
