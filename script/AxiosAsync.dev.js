/*const getuser = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
}*/
const username = document.querySelector("#name")
const mail = document.querySelector("#mail")
const web = document.querySelector("#web")

//destructurado 
const getuser = async() => {
    const { data: datos } = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(datos);

    username.innerHTML = datos[0].name;
    mail.innerHTML = datos[0].email;
    web.innerHTML = datos[0].website;
}

getuser();