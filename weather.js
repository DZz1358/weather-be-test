#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';
import chalk from 'chalk'

const saveToken = async (token) => {
    if (!token.length) {
        printError('No token provided');
        return;
    }
    try {
        await saveKeyValue('token', token);
        printSuccess('Token has been saved');
    } catch (e) {
        console.log('e', e)
        printError(e.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('No city provided');
        return;
    }
    try {
        await saveKeyValue('city', city);
        printSuccess('City has been saved');
    } catch (e) {
        printError(e.message);
    }

}

const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather, '')
    }
    catch (e) {
        if (e?.response?.status == 404) {
            printError('Wrong city name');
        } else if (e?.response?.status == 401) {
            printError('Wrong token');
        } else {
            printError(e.message);
        }
    }
}

const initCli = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp();
    } else if (args.s) {
        saveCity(args.s);
    } else if (args.t) {
        saveToken(args.t);
    } else {
        getForecast();
    }

};

initCli();