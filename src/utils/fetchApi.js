import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com'


//
// headers: {
//     'X-RapidAPI-Key': '8a872674b7msh206b26daf924277p130ecejsnafd8caf47b0b',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '41730cfeadmsh26e8873c46c6e67p1e4895jsn5f1c52726b7d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    console.log(data)
    return data
}