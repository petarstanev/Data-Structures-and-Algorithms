//Create a function that reverses a string:
//'Hi My name is Andrei' should be:
//'ierdnA si eman yM iH'

// basic reverse
function reverse1(input) {
    var output = [];
    var counter = 0;

    for (var i = input.length; i >= 0; i--){
        output[counter] = input[i];
        counter++;
    }

    return output.join('');
}
console.log(reverse1('Hi My name is Andrei'))

// pop reverse
function reverse2(input) {
    var output = '';
    var inputArr = input.split('');

    while (inputArr.length > 0) {
        output += inputArr.pop();
    }

    return output;
}
console.log(reverse2('Hi My name is Andrei'));

// recursive
function reverse3(input){
    if (input.length == 0){
        return ''
    }
    var lastLetter = input.slice(-1);
    input = input.slice(0, -1);
    return lastLetter + reverse3(input);
}
console.log(reverse3("Hi My name is Andrei"));

// udemy solution 1
function reverse4(str){
    if (!str || str.length < 2|| typeof str !== 'string'){
        return 'hmm that is not a good';
    }

    const backwards = [];
    const totalItems = str.length -1;
    for (let i = totalItems; i>= 0; i--){
        backwards.push(str[i]);
    }

    return backwards.join('');
}
console.log(reverse4("Hi My name is Andrei"));

// udemy solution 2
function reverse5(input){
    return input.split('').reverse().join('');
}
console.log(reverse5("Hi My name is Andrei"));