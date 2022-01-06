//forEach()
function myEach(arr, callback){
for(let i = 0; i < arr.length; i++){
    callback(arr[i])
    }
}
let arr = [1, 2, 3, 4, 5]
myEach(arr, (item) => console.log(item));
//////////////////////////////////////////////

//map()
function myMap(arr, callback){
let newarr = []
for(let i = 0; i < arr.length; i++){
    newarr.push(callback(arr[i]));
    }

    return newarr;
}
const mapResult = myMap(arr, x => x * 2);
console.log(mapResult);
//////////////////////////////////////////////

//filter()
function myFilter(arr, callback){
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        newarr[i] = callback(arr[i]);
        }
        return newarr
    
}
const filterResult = myFilter(arr, x => x > 3);
console.log(filterResult);
//////////////////////////////////////////////

//some()
function mySome(arr, callback){
    let newarr = [];
        for(let i = 0; i < arr.length; i++){
            newarr[i] = callback(arr[i]);
            if(newarr[i] = callback(arr[i])){
                return true;
            }
        }
    return false
}
const someResult = mySome(arr, x => x > 2);
console.log(someResult);
//////////////////////////////////////////////

//every()
function myEvery(arr, callback){
    let newarr = [];
        for(let i = 0; i < arr.length; i++){
            newarr[i] = callback(arr[i]);
            if(newarr[i] = callback(arr[i])){
                return true;
            }
            return false
        }
           
}
    const everyResult = myEvery(arr, (x) => x > 2);
    console.log(everyResult);
//////////////////////////////////////////////

//reduce()
function myReduce(arr, callback){
    let newarr = [];
    var reduce = callback(newarr[0], 0);    
        for(let i = 0; i < arr.length; i++){
            reduce = callback(arr[i],reduce);
        }
        return reduce;
}
function sum(element, previousElement) {
    return element + previousElement;
}
const reduceResult = myReduce(myReduce(arr,sum));
console.log(reduceResult);

    
//////////////////////////////////////////////
/*
//includes()
function myIncludes(arr, callback){
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        newarr[i] = callback(arr[i]);      
        if(newarr[i] = callback[i]){
            return true;
        }
        return false;
    }
}

const includesResult = myIncludes(arr, 3);
console.log(includesResult);*/
