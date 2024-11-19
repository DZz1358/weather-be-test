import { homedir } from 'os'
import { join, basename } from 'path'

const filePath = join(homedir(), 'weather-data.json')

const saveKeyValue = (key, value) => {
    console.log(basename(filePath))
    // if (typeof value === 'object') {
    //     value = JSON.stringify(value);
    // }
    // localStorage.setItem(key, value);
}

export { saveKeyValue }