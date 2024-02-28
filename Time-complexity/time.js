function Element(array) {
    let candidate = null;
    let count = 0;


    for (let i = 0; i < array.length; i++) {
        if (count === 0) {
            candidate = array[i];
            count++;
        } else if (candidate === array[i]) {
            count++;
        } else {
            count--;
        }
    }

    count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === candidate) {
            count++;
        }
    }

    return count > array.length / 2;
}


console.log(Element([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3])); 
console.log(Element([3, 1, 3, 4, 4])); 
