//1. Write a function that tests whether a string is a palindrome.
let str = "wow";
const checkPalindrome = str => {
    let reversed = str.split('').reverse().join('');
    return reversed == str;
}
if (checkPalindrome(str) == 1){
    console.log("Cuvantul este palindrom!");
} else{
    console.log("Cuvantul nu este palindrom!")
}


//2. Write a function that prints all prime numbers (up to 100000).
function checkNrPrimes(){
    for (var j=1; j<=100000;j++){
        let isPrime = true;
        if (j > 1){
            for(var i=2; i<j; i++){
                if (j % i == 0){
                    isPrime =false;
                    break;
                }
            }
            if(isPrime == 1){
                console.log(j);
            }  
        }
    }
}
//checkNrPrimes();

//3. Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
function combinesLists (letters, numbers){
    let i = 0, l = 0, n = 0;
    const newList = [];
    while (i < letters.length+numbers.length){
        if(l > n){
            newList[i] = numbers[n];
            n++;
        } else{
            newList[i] = letters[l];
            l++;
        }
        i++;
    }
    return newList;
}
console.log("Lista combinata este urmatoarea:", combinesLists(letters,numbers));


//4. Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6].
let list1 = [1,4,6];
let list2 = [2,3,5];
function sortLists (list1, list2){
    let i = 0, l1 = 0, l2 = 0;
    const newList = [];
    while (i < list1.length+list2.length){
        if(list1[l1] > list2[l2]){
            newList[i] = list2[l2];
            l2++;
        } else{
            newList[i] = list1[l1];
            l1++;
        }
        i++;
    }
    return newList;
}
console.log("Lista sortata este urmatoarea:", sortLists(list1,list2));

//5. Write a function that takes a number and returns a list of its digits. 2342 should return [2,3,4,2].
let nr = 2342;
function returnList(nr){
    let list = nr.toString().split('');
    let nrList = list.map(Number);
    console.log("Lista obtinuta este:",nrList);
}
returnList(nr);