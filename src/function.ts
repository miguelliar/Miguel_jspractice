function myForEach(array, callbackFunction, thisArg = this) {
    for(let i = 0; i < array.length; i++) {
        callbackFunction(array[i], i, array);
    }
}

let ex = [1, 2, 3]

myForEach(ex, (element, index, example) => console.log(element))

function at(array, index) {
    if (index >= 0) {
        return array[index]
    } else {
        return array[array.length + index]
    }
}

let ex2 = [4, 5, 6]

function concat(...arg) {
    let result = []
    for(let i = 0; i < arg.length; i++) {
        result[i] = [1,2,3]
        //for(let j = 0; j < arg[i].length; j++)
        //result[i][j] = arg[i][j]
    }
    return result;
}

console.log(concat(ex, ex2))
