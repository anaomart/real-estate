import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com'


//
// headers: {
//     'X-RapidAPI-Key': '8a872674b7msh206b26daf924277p130ecejsnafd8caf47b0b',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
export const fetchApi = async(url) => {
    console.log(process.env.REACT_APP_api_Key)
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_api_Key,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    console.log(data)
    return data
}