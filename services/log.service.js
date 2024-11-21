import chalk from 'chalk'

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + ' ' + error)
}

const printSuccess = (msg) => {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + msg)
}

const printHelp = () => {
    console.log(
        chalk.bgCyan('HELP') + '\n' +
        'Without params - output weather' + '\n' +
        '-s [CITY] to install city' + '\n' +
        '-h for help' + '\n' +
        '-t [API_KEY] for saving token'
    );
}


const printWeather = (response, icon) => {
    console.log(
        chalk.bgYellow('WEATHER') + ' in city ' + response.name + '\n' +
        'Weather: ' + response.weather[0].description + '\n' +
        'Temperature: ' + response.main.temp + ' (feels like ' + response.main.feels_like + ')' + '\n' +
        'Humidity: ' + response.main.humidity + '%' + '\n' +
        'Wind speed: ' + response.wind.speed
    );
}

export { printError, printSuccess, printHelp, printWeather }
