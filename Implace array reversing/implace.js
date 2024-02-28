function reverseArrayInPlace(arr) {
  
    const length = arr.length;
    
    
    for (let i = 0; i < length / 2; i++) {
        
        let temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
}


const numbers = [1, 2, 3, 4, 5];
reverseArrayInPlace(numbers);
console.log(numbers); 
