// 31.	Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.
// 1, 2, 3 → 6
// 3, 2, 3 → 2
// 3, 3, 3 → 0
function addUniqueNumber(a, b, c) {
    if (a == b & b == c) return 0;
    if (a == b && b != c) return c
    else if (a != b && b == c) return a
    else if (a != b && b != c && a != c) return a + b + c
    else if (a != b && a == c) return b;
}
console.log(addUniqueNumber(1, 2, 2));

// 32.	Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.
// 1, 2, 3 → 6
// 1, 2, 13 → 3
// 1, 13, 3 → 1
function stopAtThirteen(...values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] == 13) break
        else sum += values[i];
    }
    return sum;
}
console.log(stopAtThirteen(1, 1, 13));

// 33.	Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. 
// 1, 2, 10 → true
// 1, 2, 3 → false
// 4, 1, 3 → true
function farAndClose(...values) {
    for (let i = 1; i < values.length; i++) {
        if ((values[0] + 1) == values[i] || (values[0] - 1) == values[i]) {
            if (i == 1) {
                let firstDiff = Math.abs(values[0] - values[2]);
                let secondDiff = Math.abs(values[1] - values[2]);
                if (firstDiff >= 2 && secondDiff >= 2) return true
                else return false;
            }
            if (i == 2) {
                let firstDiff = Math.abs(values[0] - values[1]);
                let secondDiff = Math.abs(values[2] - values[1]);
                if (firstDiff >= 2 && secondDiff >= 2) return true
                else return false;
            }
        }
    }
}
console.log(farAndClose(4, 1, 3));

// 34.	Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.
// 19, 21 → 21
// 21, 19 → 21
// 19, 22 → 19
function nearTo_21(a, b) {
    if (a > 21 && b > 21) return 0;
    if (a > 21 && b <= 21) return b
    else if (a <= 21 && b > 21) return a
    else if (a == 21 && b == 21) return a
    else {
        if (a > b) return a
        else return b;
    }
}
console.log(nearTo_21(22, 21));

// 35.	Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced,
//  so the difference between small and medium is the same as the difference between medium and large.
//  2, 4, 6 → true
// 4, 6, 2 → true
// 4, 6, 3 → false
function evenDifference(...values) {
    values.sort((a, b) => { return a - b });
    let firstDiff = values[0] - values[1];
    let secondDiff = values[1] - values[2];
    if (firstDiff == secondDiff) return true
    else return false;
}
console.log(evenDifference(4, 6, 3));

// 36.	We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.
// 4, 1, 9 → 4
// 4, 1, 10 → -1
// 4, 1, 7 → 2
function goalKilos(smlBar, bigBar, target) {
    let chocolateMix = bigBar * 5 + smlBar;
    if (chocolateMix == target) return smlBar
    else if (chocolateMix < target) return -1
    else if (chocolateMix > target) return chocolateMix - target;
}
console.log(goalKilos(4, 1, 7));

// 37.	Given a positive int n, return true if it contains a 1 digit. Note: use % to get the rightmost digit, and / to discard the rightmost digit.
// 10 → true
// 22 → false
// 220 → false
function containsOne(num) {
    let rem;
    // let temp = num;
    while (num > 0) {
        rem = num % 10;
        if (rem == 1) {
            return true
        }
        num = parseInt(num / 10);
    }
    return false;
}
console.log(containsOne(100));

// 38.	We'll say that a positive int divides itself if every digit in the number divides into the number evenly. So for example 128 divides itself since 1, 2, and 8 all divide into 128 evenly. We'll say that 0 does not divide into anything evenly, so no number with a 0 digit divides itself. Note: use % to get the rightmost digit, and / to discard the rightmost digit.
// 128 → true
// 12 → true
// 120 → false
function divideEvenly(num) {
    let rem, temp, digit = [], counter = 0;
    temp = num;
    while (num > 0) {
        rem = num % 10;
        if (rem == 0) {
            return false;
        } else {
            digit.push(rem);
        }
        num = parseInt(num / 10);
    }
    // console.log(temp, digit[0]);
    for (let i = 0; i < digit.length; i++) {
        if ((temp % digit[i]) == 0) counter++
        else return false;
    }
    if (counter > 2) return true;
}
console.log(divideEvenly(126));

// 39.	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
function sumOfMultiples(range) {
    let allNum = [], sum = 0;
    for (let i = 3; i < range; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            allNum.push(i);
        }
    }
    for (let i = 0; i < allNum.length; i++) {
        sum += allNum[i];
    }
    return sum;
}
console.log(sumOfMultiples(1000));

// 40.	Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function fibonacciSeriesSum(n) {
    let n1 = 0, n2 = 1, nextTerm;
    let sum = 0;
    nextTerm = n1 + n2;
    while (nextTerm <= n) {
        if (nextTerm % 2 == 0) {
            sum += nextTerm;
        }
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
    return sum;
}
console.log(fibonacciSeriesSum(4000000));

// 41.	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
function larrgestPalindrome(n) {
    let upperLimit = Math.pow(10, n) - 1;
    let lowerLimit = 1 + parseInt(upperLimit / 10, 10);
    let max_product = 0;

    for (let i = upperLimit; i >= lowerLimit; i--) {
        for (let j = i; j >= lowerLimit; j--) {
            // calculating product of two n-digit numbers
            let product = i * j;
            if (product < max_product) break;
            let number = product;
            let reverse = 0;
            while (number != 0) {
                reverse = reverse * 10 + number % 10;
                number = parseInt(number / 10, 10);
            }
            if (product == reverse && product > max_product)
                max_product = product;
        }
    }
    return max_product;
}
console.log(larrgestPalindrome(3));

// 42.	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
function gcd(a, b) {
    if (a % b != 0)
        return gcd(b, a % b);
    else
        return b;
}
// calculating LCM
function smallestDivNum(n) {
    let ans = 1;
    for (let i = 1; i <= n; i++)
        ans = (ans * i) / (gcd(ans, i));
    return ans;
}
console.log(smallestDivNum(20));

// 43.	The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function diffOfSumOfSquare(range) {
    let sumOfSquare = 0, squareOfSum = 0, sum = 0;
    for (let i = 1; i <= range; i++) {
        sum += i;
        sumOfSquare += Math.pow(i, 2);
    }
    squareOfSum = sum ** 2;
    return (squareOfSum - sumOfSquare);
}
console.log(diffOfSumOfSquare(100));

// 44.	A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
function pythagoreanTriplet(n) {
    for (var a = 1; a < n - 1; a++) {
        for (var b = a; b < n; b++) {
            c = Math.sqrt(a * a + b * b);
            if ((c % 1 === 0) && (a + b + c == 1000)) {
                // console.log(a, b, c);
                return a * b * c;
            }
        }
    }
}
console.log(pythagoreanTriplet(100));

// // 45.	2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// // What is the sum of the digits of the number 2^1000?
// function sumOfDigit_TwoPower() {
//     let sum = 0;
//     let num = Math.pow(2, 1000);
//     while (num > 0) {
//         sum += (num % 10);
//         num /= 10;
//     }
//     return sum;
// }
// console.log(sumOfDigit_TwoPower());
// console.log(Math.pow(2, 1000));

// let maxPower = 1000;
// let sol = 0;
// let ans = [1]
// for (let k = 0; k < maxPower; k++) {
//     let ansCopy = [];
//     for (let m = 0; m < ans.length; m++) {
//         ansCopy.push(ans[m]);
//     }
//     for (let m = 0; m < ansCopy.length; m++) {
//         add2Answer(ans, m, ansCopy[m]);
//     }
// }

// function add2Answer(resultArray, powerOf10, val) {
//     //if the power of 10 is larger than the max length of the ans array, add the val at the end of and exit the function
//     if (powerOf10 >= resultArray.length) {
//         while (resultArray.length < powerOf10) { resultArray.push(0); }
//         resultArray[powerOf10] = val;
//         return;
//     }
//     //add the val of the input argument to the defined position of the ans array;
//     resultArray[powerOf10] += val;
//     //carry the extra digit by calling this function recursively
//     if (resultArray[powerOf10] >= 10) {
//         resultArray[powerOf10] = resultArray[powerOf10] % 10;
//         add2Answer(resultArray, powerOf10 + 1, 1);
//     }
// }
// console.log(add2Answer());

// 46.	A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.


// // 47.	The first two consecutive numbers to have two distinct prime factors are:
// // 14 = 2 × 7, 15 = 3 × 5
// // The first three consecutive numbers to have three distinct prime factors are:
// // 644 = 2² × 7 × 23, 645 = 3 × 5 × 43, 646 = 2 × 17 × 19.
// // Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?
// function NumberOfPrimeFacors(number) {
//     let nod = 0;
//     let pf;
//     let remain = number;

//     for (let i = 0; i < primeList.Length; i++) {
//         // In case there is a remainder this is a prime factor as well
//         // The exponent of that factor is 1
//         if (primeList[i] * primeList[i] > number) {
//             return ++nod;
//         }

//         pf = false;
//         while (remain % primeList[i] == 0) {
//             pf = true;
//             remain = remain / primeList[i];
//         }
//         if (pf) {
//             nod++;
//         }

//         //If there is no remainder, return the count
//         if (remain == 1) {
//             return nod;
//         }
//     }
//     return nod;
// }
// function sieveOfEratosthenes(n) {
//     let outputArr = [];
//     let prime = Array.from({ length: n + 1 }, (_, i) => true);
//     for (p = 2; p * p <= n; p++) {
//         if (prime[p] == true) {
//             for (i = p * p; i <= n; i += p)
//                 prime[i] = false;
//         }
//     }
//     for (i = 2; i <= n; i++) {
//         if (prime[i] == true)
//             outputArr.push(i);
//     }
//     return outputArr;
// }

// let primeList = sieveOfEratosthenes(100000);
// let targetpf = 4;
// let targetConsec = 4;
// let consec = 1;
// let result = 2 * 3 * 5 * 7;

// while (consec < targetConsec) {
//     result++;
//     if (NumberOfPrimeFacors(result) >= targetpf) {
//         consec++;
//     } else {
//         consec = 0;
//     }
//     // console.log(result);
// }
// console.log(NumberOfPrimeFacors());
// console.log(result);

// 48.	Write a program in JS to change number into words 
// for example 2341 into Two Thousand Three Hundred Fourthy One
let th = ['', 'thousand', 'million', 'billion', 'trillion'];
let dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function toWords(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s)) return 'not a number';
    let x = s.indexOf('.');
    if (x == -1)
        x = s.length;
    if (x > 15)
        return 'too big';
    let n = s.split('');
    let str = '';
    let sk = 0;
    for (let i = 0; i < x; i++) {
        if ((x - i) % 3 == 2) {
            if (n[i] == '1') {
                str += tn[Number(n[i + 1])] + ' ';
                i++;
                sk = 1;
            } else if (n[i] != 0) {
                str += tw[n[i] - 2] + ' ';
                sk = 1;
            }
        } else if (n[i] != 0) { // 0235
            str += dg[n[i]] + ' ';
            if ((x - i) % 3 == 0) str += 'hundred ';
            sk = 1;
        }
        if ((x - i) % 3 == 1) {
            if (sk)
                str += th[(x - i - 1) / 3] + ' ';
            sk = 0;
        }
    }
    if (x != s.length) {
        let y = s.length;
        str += 'point ';
        for (let i = x + 1; i < y; i++)
            str += dg[n[i]] + ' ';
    }
    return str.replace(/\s+/g, ' ');
}
console.log(toWords(2340));

// 49.	Write a program in JS to change number into Roman Numbers 
var romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

function convertToRoman(num) {
    if (num === 0) {
        return '';
    }
    for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
        }
    }
}
console.log(convertToRoman(9));

// 50.	The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
// How many circular primes are there below one million?
function isPrime(n) {
    if (n == 1) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}
function rotate(n) {
    var nn = "" + n;
    var n2 = nn[nn.length - 1] + nn.substring(0, nn.length - 1);
    return parseInt(n2);
}

function circularPrime(N) {
    var outbound = 0;
    for (var i = 2; i <= N; i++) {
        var isMatch = true;
        var check = i;
        for (j = 0; j < ("" + i).length; ++j) {
            if (!isPrime(check)) {
                isMatch = false;
                break;
            }
            check = rotate(check);
        }
        if (isMatch) outbound++;
    }
    return outbound;
}
console.log(circularPrime(100));
