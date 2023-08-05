// function sumOfArray(ary) {
//     let sum = 0;
//     for (let item of ary) {
//         sum = sum + item;
//     }
//     return sum;
// }
// const num = [1, 2, 3, 4, 5]
// const result = sumOfArray(num);
// console.log(result);

// function sumOfOdd(number){
//     let num = 0;
//     for(let item of number){
//         if(item % 2 === 1){
//             num = num + item;
//         }
//     }
//     return num;
// }
// const numbers = [1,2,3,4,5,6,7,8,9]

// const total = sumOfOdd(numbers)
// console.log(total);


// object diea address banano

// function information(info){
//     const sentence = "amar name " +info.name+", amar age "+ info.age+", amar address "+info.address;
//     console.log(sentence);
// }


// const myInfo = {
//     name: 'shamim',
//     age: 24,
//     address: 'andor killa bandor bon',
//     phone: 'samsung'
// };
// information(myInfo)


// ********************* factorial *******************


// 5! = 5*4*3*2*1

// const number = 5;
// let result = 1;
// for (let i = number; i >= 1; i--) {
//     result = result * i;

// }
// console.log(result);

// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = number; i >= 1; i--) {
//         result = result * i;

//     }
//     return result;
// }
// const totalFactorial =factorial(5);
// console.log(totalFactorial);



// Array ist largest number

function largestNumber(number) {

    let largest = number[0]; //5

    for(let i = 1; i < number.length; i++){
        const currentItem = number[i]
        if(currentItem > largest){
            largest =currentItem;
        }
       
    }
    // return largest; 

    // for (let item of number) {
    //     const currentItem = item;
    //     if (currentItem > largest) {
    //         largest = currentItem
    //     }
    // }
    // return largest;

}

const number = [4, 32, 56, 54, 78, 98, 5, 90];
// console.log(largestNumber(number));


function biggestNumber(friend){

    let largest = friend[0];

    for(let i =1; i < friend.length; i++){
        if(friend[i].length > largest.length){
            largest = friend[i]
        }
    }
    // return largest;
}



const  friend = ["naim","khalis", "ahasanullaha", "raza", "roy" ];
// console.log(biggestNumber(friend));
