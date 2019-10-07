import axios from 'axios'

axios.defaults.headers.Authorization = 'Bearer ' + localStorage.getItem('token')

/*
export const getAuth = () =>{
    return axios 
   .post(`/api/v1/admin/login`,
    {correo:'fluv@uv.cl' ,password:'fluvinv'})
    .then(response =>{
      localStorage.setItem('token',response.data.token)
      console.log(response.data.token)
  })
}
*/

export const getProductos = () =>{
 //   getAuth();
    return axios
    .get(`/api/v1/productos`,
    {'Authorization':'Bearer ' + localStorage.getItem('token') } )
    .then(response =>{
        console.log(response.data)
        return response.data
    })
}


