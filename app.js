
//////// 15

// function follow(l,d) {
//     let object = { 
//         like: l, 
//         dislike: d 
//     };
//     let likes = object.like
//     let dislikes = object.dislike

//     if (likes > dislikes) {
//         console.log(likes-dislikes); 
//     } else {
//         console.log( dislikes-likes);
//     } 

// }
// follow(0,13)

////////////// 16

// const arr = [0, 1, 2, 3];

// console.log(arr.map(element => element + 1));



///////// 17

// let array = [1,5,4,8,6,9,3,1]
// let number = 1

// function include(arr,num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == num) {
//             return true
//         }
//     }
//     return false
// }

// let result = include(array,number)
// console.log(result);

//////////////18


// function toStr(arr) {
//     return arr.map(String);
//   }
  
//   const Array = [1, 2, "a", "b"];
//   ;
  
//   console.log(toStr(Array));




//////////////////// 19

// function toNumberArray(arr) {
//     const resultArray = [];
  
//     for (const item of arr) {
//       try {
//         const numberItem = Number(item);
//         if (isNaN(numberItem)) {
//           throw new Error("Xarflarni number tipiga o'tkazib bo'lmaydi");
//         }
//         resultArray.push(numberItem);
//       } catch (error) {
//         console.error(error.message);
//         resultArray.push(null);
//       }
//     }
  
//     return resultArray;
//   }
  
//   const inputArray = ["1", "C", "A"];
//   const outputArray = toNumberArray(inputArray);
  
//   console.log(outputArray);


///////////////////////////  20

// function strategy(oylik) {
//     let soliq = oylik / 2;
//     let sugur = oylik / 100 * 30
//     let jam = oylik / 100 * 20

//     let result = { 
//         "soliqlar": soliq,
//         "sugurta": sugur, 
//         "jamgarma": jam }

//     console.log(result);
// }
// strategy(20000)
  