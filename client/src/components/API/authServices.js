import store from "../Redux/store";
import { userLogin, userRegister } from "../Redux/feautred/authAction";

export const handleLogin = (e , email , password , role) => {
    e.preventDefault();
    try {
        if(!role || !password || !email){
            return alert("Please provide all fields")
        }
        store.dispatch(userLogin({email , password , role}))
    } catch (error) {
        console.log(error)
    }
};

export const handleRegister = (e, email , password , name , role , organisationName , hospitalName , website , address , phone) => {
    e.preventDefault();
    try {
        store.dispatch(userRegister({email , password , name , role , organisationName , hospitalName , website , address , phone}))
    } catch (error) {
        console.log(error)
    }
};