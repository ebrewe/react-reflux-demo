var Fetch = require('whatwg-fetch');
var baseUrl = 'http://api.openweathermap.org/data/2.5';

var service = {
    get: function(url){
        return fetch(baseUrl + url+ "&APPID=1385df7459097a33eeec9b91ad06ea44")
            .then(function(response){
                return response.json();
            });
    }
}

module.exports = service;