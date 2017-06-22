// Code your solution here!
function printString(myString){
  console.log(myString[0])

  if (myString.length > 1){
    let mySubString = myString.substring(1, myString.length)
    printString(mySubString)
  } else {
    return true
  }
}

function reverseString(myString){
  if (myString.length === 1){
    return myString
  }
  return myString.substring(myString.length-1) + reverseString(myString.substring(0,myString.length-1))
}

function isPalindrome(possiblyRacecar){
  if (possiblyRacecar.length > 1) {
    if (possiblyRacecar.charAt(0) == possiblyRacecar.charAt(possiblyRacecar.length-1)){
      isPalindrome(possiblyRacecar.substring(1,possiblyRacecar.length-1))
    } else {
    return false
    }
  }
  return true
}
/*
  expect(addUpTo([1, 4, 5, 3], 2)).toEqual(10);
  expect(addUpTo.callCount).toEqual(3);

  [1,4,5,3].length //=> 4
*/

function addUpTo(arr,i){
  if (i === 0){
    return arr[0]
  } else {
    return arr.shift() + addUpTo(arr, i-1)
  }
}

function maxOf(arr){
  if (arr.length === 1){
    return arr[0]
  } else if ( arr[0] > arr[arr.length-1]){
    arr.pop()
  } else {
    arr.shift()
  }
  return maxOf(arr)
}

function includesNumber(arr,n){
  if (arr.length > 0){
    if (arr.shift() === n){
      return true
    } else {
      return includesNumber(arr,n)
    }
  }
  return false
}
