import axios from 'axios';
import url from './URL'
import setupUser from './setupUser';

async function loginUser({email,password}){
    const response = await axios
    .post(`${url}/api/auth/local`, {
        identifier: email,
        password
    }).catch(error => console.log(error))

    if(response){
        setupUser(response);
    }

    return response;
}

export default loginUser;