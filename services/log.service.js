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

export { printError, printSuccess, printHelp }
