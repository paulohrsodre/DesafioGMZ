const http = require('http');
const express = require('express');

var options = {
    host: 'https://reqres.in/api/users',
    port: 80,
    path: '/api/users',
    method: 'GET'
}

http.request(options, function(res){
    var body = '';
    res.on('data', function(i){
        body += i;
    });

    res.on('end',function () {
        var user = JSON.parse(body);
        console.log(user);
    })
}).end();