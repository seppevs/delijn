var request = require('request');
var moment = require('moment');

var delijn = {};

delijn.findStations = function (query, callback) {
    request('http://data.irail.be/DeLijn/Stations.json?name=' + query, function (err, data) {
        if (err) {
            callback(err);
        } else {
            var resp = JSON.parse(data.body);
            var stations = resp['Stations'];
            callback(null, stations);
        }
    });
};

delijn.findDepartures = function (stationName, date, callback) {
    var dateString = moment(date).format("YYYY/MM/DD/HH/mm");
    var url = 'http://data.irail.be/DeLijn/Departures/' + stationName + '/' + dateString + '.json';

    request(url, function (err, data) {
        if (err) {
            callback(err);
        } else {
            var resp = JSON.parse(data.body);
            var departures = resp['Departures'];
            callback(null, departures);
        }
    });

};

module.exports = delijn;