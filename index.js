const list = [1, 43, 12, 55, 435, 33, 90];
//1. Write a function that returns the largest element in a list.
function maxFunction (list){
    var maxValue = 0;
    for(var i=0; i<list.length; i++){
        if(list[i] > maxValue)
            maxValue = list[i];
    }
    return maxValue;
}
console.log("Valoarea cea mai mare este:",maxFunction(list));

//2. Write a function that reverses a list, preferably in place.
function reverseFunction (list){
    const reversed = list.reverse();
    return reversed;
} 
console.log("Inversul listei este:",reverseFunction(list));

//3.Write a function that checks whether an element occurs in a list.
function checkElement (list){
    const found =  list.find(element => element > 200 );
    return found;
}
console.log("Numarul gasit este:",checkElement(list));


//4. Write a function that returns the elements on odd positions in a list.
function oddPositions (list){
    const items = [];
    for(var i=0; i<list.length; i++){
        if(i%2 != 0)
            items.push(list[i]);
    }
    return items;
}
console.log("Numerele de pe pozitii impare sunt:",oddPositions(list));

//5. Write a function that computes the running total of a list.
function sumElements (list){
    var sum = 0;
    for(var i=0; i<list.length; i++){
        sum = sum + list[i];
    }
    return sum;
}
console.log("Suma totala a listei este:", sumElements(list));

