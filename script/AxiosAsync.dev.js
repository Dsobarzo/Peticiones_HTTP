/*const getuser = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
}*/

//destructurado 
const getuser = async() => {
    const { data: datos } = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(datos);
}

getuser();