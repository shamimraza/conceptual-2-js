function findSum(arr){

if(!Array.isArray(arr)){
    return "please provide me an array"
}

    let sum =0;
    for(let i of arr){
        sum+=i;
    }
    return sum;
}

const x = [1,2,3,4,5];
console.log(findSum("azad"));