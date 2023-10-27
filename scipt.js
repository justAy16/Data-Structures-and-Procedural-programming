// Problem 1: Finding the sum of distinct elements from two sets using arrays and nested loops.
function findDistinctSum(set1, set2) {
    let sum = 0;

    for (let element1 of set1) {
        let isDistinct = true;
        for (let element2 of set2) {
            if (element1 === element2) {
                isDistinct = false;
                break;
            }
        }
        if (isDistinct) {
            sum += element1;
        }
    }

    for (let element2 of set2) {
        let isDistinct = true;
        for (let element1 of set1) {
            if (element2 === element1) {
                isDistinct = false;
                break;
            }
        }
        if (isDistinct) {
            sum += element2;
        }
    }

    return sum;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findDistinctSum(set1, set2);
console.log("Output:", result); // Output: 13


// Problem 2: Checking if two vectors are orthogonal using a nested loop and a dot_product function.
function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same dimension for dot product calculation.");
    }

    let product = 0;
    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }

    return product;
}

function areOrthogonal(v1, v2) {
    const product = dotProduct(v1, v2);
    return product === 0;
}

// Example usage for multiple pairs of vectors
const vectors = [
    [2, 3],
    [-3, 2],
    [0, 4],
    [1, 0]
];

for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
        const vector1 = vectors[i];
        const vector2 = vectors[j];
        if (areOrthogonal(vector1, vector2)) {
            console.log("Vectors", vector1, "and", vector2, "are orthogonal.");
        } else {
            console.log("Vectors", vector1, "and", vector2, "are not orthogonal.");
        }
    }
}
