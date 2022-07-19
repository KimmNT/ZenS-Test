
let array = [1, 3, 5, 7, 9];

//Sort the array
array.sort((firstNum, secoundNum) => {
    if(secoundNum > firstNum){
        return -1;
    }
    else {
        return 0;
    }
});

//Sum the minium values
function sumMinArray(array){
    let sum = 0;
    for (let i = 0; i < array.length -1; i++){
        sum += array[i];
    }
    return sum;
}

//Sum the maxium values
function sumMaxArray(array){
    array.reverse();
    let sum = 0;
    for (let i = 0; i < array.length -1; i++){
        sum += array[i];
    }
    return sum;
}
console.log(sumMinArray(array)+" "+sumMaxArray(array));
