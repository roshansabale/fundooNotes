import axios from "axios";

export function signUp(signupData) {
    try {
        console.log("SignUp data" + signupData);
        const response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', signupData);
        return response;
    } catch (error) {
        return error;
    }
}

export function login(loginData) {
    try {
        console.log("SignUp data" + loginData);
        const response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', loginData);
        return response;
    } catch (error) {
        return error;
    }
}

export function resetLink(emailId) {
    try {
        const response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset',emailId);
        return response;
    } catch (error) {
        return error;
    }
}

export function resetPass(password) {
    try {
        const response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password',password,
        {
            headers:{
                Authorization:localStorage.getItem('id')
                   }
        });
        return response;
    }
    catch (err) {
        return err;
    }
}