function main(){
    let array = [1, 2, 3, 4, 5]
    
    console.log ("each()");
    console.log(myEach(array, element));

    console.log ("map()");
    console.log(myMap(array, element));

    console.log ("filter()");
    console.log(myFilter(array, lessThan));

    console.log ("some()");
    console.log(mySome(array, lessThan));

    console.log ("every()");
    console.log(myEvery(array, lessThan));

    console.log ("reduce()");
    console.log(myReduce(array, increment));

    console.log ("includes()");
    console.log(myIncludes(array, 4));

    console.log ("indexOf()");
    console.log(myIndexOf(array, 7));

    console.log ("push()");
    console.log (myPush(array, 6))
    console.log(array);

    console.log ("lastIndexOf()");
    console.log(myUnshift(array, 4));
}
//////////////////////////////////////////////

function element(element){ 
    return element;
}

function myEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        console.log(callback(arr[i]));
    }
}
//////////////////////////////////////////////

function myMap(arr, callback){
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
//////////////////////////////////////////////

function lessThan(element){
    return element > 2;
}
function myFilter(arr, callback){
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//////////////////////////////////////////////

function mySome(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return true;
        }
    }
    return false;
}
//////////////////////////////////////////////
function myEvery(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return true;
        }
        return false;
    }
}
//////////////////////////////////////////////

function increment(element){ 
    return element + 1;
}
function myReduce(arr, callback){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += callback(arr[i]);
    }
    return result;
}
//////////////////////////////////////////////

function myIncludes(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true;
        }
    }
    return false;
}
//////////////////////////////////////////////

function myIndexOf(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
//////////////////////////////////////////////

function myPush(arr, element){
    arr[arr.length] = element; 
    return arr.length;
}
//////////////////////////////////////////////

function myUnshift(arr, target){
    for(let i = arr.length; i > 0; i--)
        if(arr[i] === target)
            return i;
    return -1;
}

main()