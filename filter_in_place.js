const filterRangeInPlace = (arr, a, b) => {
    
 for (let i = 0; i < arr.length; i++) {

    if (arr[i] < a || arr[i] > b){

        arr.splice(i, 1);
        i--;
    }



 }
    




};

let arr = [5,3,8,1,9,10];


filterRangeInPlace(arr, 7, 10);


console.log(arr);