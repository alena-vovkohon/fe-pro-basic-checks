/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => {
    let newString = string.split(' ');
    for (let i = 0; i < newString.length; i += 1) {
        newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
    }     
    return newString.join(' ');
};
console.log(capitalizeString('test test test'));
/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export const fenceString = function (string) {

    let newString = string.split('');
    let simbl1;
    let simbl2;
    let newArr = [];
    
    for (let i = 0; i < newString.length; i += 1){
        if (i % 2 === 0) {
            simbl1 = newString[i].toLocaleLowerCase();
            newArr.push(simbl1);
        } else {
            simbl2 = newString[i].toLocaleUpperCase();
            newArr.push(simbl2);
        }
    }
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
            newStringReducer = fenceString(string);
            break;
        default:
            newStringReducer = string;
            break;
    }
    return newStringReducer
};
console.log(reducerIf('uppercase', 'string')); // STRING
console.log(reducerIf('lowercase', 'STRing')); // string
console.log(reducerIf('fence', 'string')); // sTrInG
console.log(reducerIf('capitalize', 'test test')); // Test Test
console.log(reducerIf('bla', 'string')); // string


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

consoleLoggerWordsForOf('test');
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
    consoleLoggerWordsFor('test');

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