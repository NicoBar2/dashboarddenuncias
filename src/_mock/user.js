

const dataFetch = async () => {

    console.log("hola daniel")
    const URL= 'https://back-barrios-462cb6c76674.herokuapp.com/admin/getAllUsers';
    const response = await fetch(URL).then(response => response.json());
    console.log(response);
    return response;
};

export default dataFetch;