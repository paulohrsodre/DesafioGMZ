const request = require('request');
const http = require('http');

const hostname = 'https://reqres.in/api/users';
const path = '/users';

request(`${hostname}${path}`, (err, res, body) => {
    console.log(body);
});