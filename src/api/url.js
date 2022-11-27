export let BASE_URL = 'http://localhost:8080/api';
// const HOST_URL = 'app.railyway/nombre-de-app';
console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV==='production'){
    BASE_URL = process.env.REACT_APP_URL
}


