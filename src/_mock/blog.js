import axios from 'axios';

function denuncias  ()  {
  try {
    console.log("sapos")
    const response =  axios.get('https://back-barrios-462cb6c76674.herokuapp.com/admin/getAllDenuncias');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return null;
  }
};

export default denuncias;
