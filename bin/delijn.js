#! /usr/bin/env node

var delijn = require('../lib/delijn');
var _ = require('lodash');
var moment = require('moment');
var commander = require('commander');
var chalk = require('chalk');

commander
    .version('0.1.0')
    .option('stations [query]', 'search for stations')
    .option('departures [name]', 'search for departures')
    .parse(process.argv);

if (!process.argv.slice(2).length) {
    commander.outputHelp();
} else if (commander.stations) {
    delijn.findStations(commander.stations, function (err, stations) {
        _.uniq(stations.map(function (station) {
            return station.name;
        })).forEach(function (stationName) {
            console.log(stationName);
        });
    });
} else if (commander.departures) {
    delijn.findDepartures(commander.departures, new Date(), function (err, data) {
        data.map(function (row) {
            var date = moment.unix(row.time);
            var dateFormat = chalk.red(date.format('HH:mm'));
            var fromNow = chalk.green('(' + date.fromNow() + ')');
            return (dateFormat + '\t' + fromNow + "\t\t" + parseType(row.type) + "\t\t" + row.short_name + "\t\t" + row.long_name);
        }).forEach(function (row) {
            console.log(row);
        })
    });
}

function parseType(type) {
    return type === '0' ? 'Tram' : 'Bus';
}