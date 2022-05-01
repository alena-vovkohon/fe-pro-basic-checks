/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' ')

console.log(capitalizeString('test test test'));
/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export const fenceString = function (string) {
    let newString = string.split('');
    let newArr = [];
    newString.filter((item, index) => {
       if (index % 2 === 0) {
           newArr.push(item.toLocaleLowerCase())
       } else {
           newArr.push(item.toLocaleUpperCase())
       }
    })
    console.log(newString)
        return newArr.join(' ');

};
console.log(fenceString('Hi all to all and all'));



/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
    let newStringReducer;
    if (action.toLocaleLowerCase() === 'uppercase') {
        newStringReducer = string.toLocaleUpperCase();
    } else if (action.toLocaleLowerCase() === 'lowercase') {
        newStringReducer = string.toLocaleLowerCase();
    } else if (action.toLocaleLowerCase() === 'fence') {
        newStringReducer = fenceString(string);
    } else if (action.toLocaleLowerCase() === 'capitalize') {
        newStringReducer = capitalizeString(string);
    } else {
        newStringReducer = string;
    }
    return newStringReducer;
};
console.log(reducerIf('uppercase', 'string')); // STRING
console.log(reducerIf('lowercase', 'STRing')); // string
console.log(reducerIf('fence', 'string')); // sTrInG
console.log(reducerIf('capitalize', 'test test')); // Test Test
console.log(reducerIf('bla', 'string')); // string


/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = function (action, string) {
    let newStringReducer;
    switch (action.toLocaleLowerCase()) {
        case 'uppercase':
            newStringReducer = string.toLocaleUpperCase();
            break;
        case 'lowercase':
            newStringReducer = string.toLocaleLowerCase();
            break;
        case 'fence':
            newStringReducer = fenceString(string);
            break;
        case 'capitalize':
            newStringReducer = capitalizeString(string);
            break;
        default:
            newStringReducer = string;
            break;
    }
    return newStringReducer
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    let newString = string.split('');
    for (const variable of newString) {
       console.log(variable);
    }
}

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    let newString = string.split('');
    for (let i = 0; i < newString.length; i += 1) {
        console.log(newString[i]);
    };
}

/**
 Стрелочная
 * @param {string} string
 */

 console.log('/////////////////')
export const consoleLoggerWordsWhile = (string) => {
    let newString = string.split('');
    let length = newString.length;
    while (length > 0) {
        console.log(newString[newString.length - length]);
        length--;
    };
}

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {

    for (let i = 0; i < string.length; i += 1){
        let newString = string[i].split('').join('');
        console.log(newString);
    }
}