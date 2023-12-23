function receivesAFunction(callback, x) {
        return callback()
}
receivesAFunction(function(x){ x ** 2})(2)

function example(x){
    return x + 2
}

function returnsANamedFunction(x){
    return example;
    
}
returnsANamedFunction


function returnsAnAnonymousFunction(){
    return () => console.log('Success!')
}
returnsAnAnonymousFunction()