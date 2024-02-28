function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function PrimeRemoval(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (isPrime(arr[i])) {
            arr.splice(i, 1);
        }
    }


    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


const numbers = [7, 10, 5, 3, 12, 15, 2, 20];
const sortedArray = PrimeRemoval(numbers);
console.log(sortedArray); 
