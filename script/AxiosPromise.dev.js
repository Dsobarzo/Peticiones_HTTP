const getuser = () => {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
}
getuser();