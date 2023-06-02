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
            'X-RapidAPI-Key': 'd0c8393f24msh4542410fae98502p17a34ejsn459d60cf2906',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    console.log(data)
    return data
}