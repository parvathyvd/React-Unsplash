import axios from 'axios';


export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID syY3MAWTFPuUy19E_mJiXP_QPmXPl2k3QQFboz8fspI'
    }
})

