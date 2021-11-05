// 1.	Check if a number is even or odd?
function evenOddCheck(num) {
    if (num % 2 == 0) {
        console.log(`${num} is EVEN`);
    } else {
        console.log(`${num} is ODD`);
    }
}
evenOddCheck(52);

// 2.	Check if a number is prime or not?
function isPrime(num) {
    if (num == 2) {
        return true;
    }
    if (!Number.isInteger(num) || num < 2 || !(num % 2)) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i++, i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(103));

// 3.	whether x is positive x
function isPositive(x) {
    if (x > 0) {
        return true;
    }
    return false;
}
console.log(isPositive(10));

// 4.	whether x is a multiple of y
function isMultiple(x, y) {
    if (y % x == 0) {
        return true;
    }
    return false;
}
console.log(isMultiple(5, 24));

// 5.	whether x is between -2 and 13
function isBetween(x) {
    if (x >= -2 && x <= 13) {
        return true;
    }
    return false;
}
console.log(isBetween(-3));

// 6.	whether the difference between x and y is less than 5
function isLessThan(x, y) {
    if ((x - y) < 5) {
        return true;
    }
    return false;
}
console.log(isLessThan(9, 5));

// 7.	whether x is not between 5 and 27
function isNotBetween(x) {
    if (x < 5 || x > 27) {
        return true;
    }
    return false;
}
console.log(isNotBetween(4));

// 8.	whether x has more than 4 digits
function moreThanFourDigits(x) {
    let digitCount = 0;
    if (x >= 1) {
        ++digitCount;
    }
    while (x / 10 >= 1) {
        x = x / 10;
        ++digitCount;
    }
    if (digitCount > 4) return true;
    else return false;
}
console.log(moreThanFourDigits(101111));

// 9.	whether x has exactly 6 digits
function exactlySixDigits(x) {
    let numCount = 0;
    if (x >= 1) {
        ++numCount;
    }
    while (x / 10 >= 1) {
        x = x / 10;
        ++numCount;
    }
    if (numCount == 6) return true;
    else return false;
}
console.log(exactlySixDigits(12345));

// 10.	Find the factorial of a number?
function factorial(num) {
    if (num == 0) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(4));

// 11.	Find whether the factorial of a number is prime or not?
function isPrime(num) {
    if (num == 2) {
        return true;
    }
    if (!Number.isInteger(num) || num < 2 || !(num % 2)) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i++, i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
function checkFactorialIsPrime(num) {
    if (!isPrime(num))
        return false;
    let factorial = 1;
    let i = 1;
    while (factorial <= num + 1) {
        factorial = factorial * i;
        if (num + 1 == factorial || num - 1 == factorial) return true;
        i++;
    }
    return false;
}
console.log(checkFactorialIsPrime(22));

// 12.	Find the greatest of 2 number?
function greaterNumber(x, y) {
    if (x == y) return x;
    if (x > y) return x
    else return y;
}
console.log(greaterNumber(5, 6));

// 13.	Find the greatest and smallest of 3 number?
function greatestAndSmallest(x, y, z) {
    let greatestNum = Math.max(x, y, z);
    let smallestNum = Math.min(x, y, z);
    return `Greatest: ${greatestNum}, Smallest: ${smallestNum}`;
}
console.log(greatestAndSmallest(22, 50, 24));

/* 15.	Find whether the number is Armstrong number or not?  (149   1^3 + 4^3 + 9^3 should be 149).
 An Armstrong number of 3 digits is a number for which sum of cube of its digits is equal to number e.g., 
 371 is an Armstrong number because of 3*3*3 + 7*7*7 + 1*1*1 = 371). */
function isArmstrongNum(num) {
    let numToString = String(num);
    let sumOfCube = (parseInt(numToString[0])) ** 3 + (parseInt(numToString[1])) ** 3 + (parseInt(numToString[2])) ** 3;
    if (num == sumOfCube) return true;
    return false;
}
console.log(isArmstrongNum(371));

// 16.	Find fibonacci series upto n digit ? if n=5    O/p:  0 1 1 2 3
function fibonacciSeries(n) {
    let n1 = 0, n2 = 1, nextTerm;
    let outputArr = [];

    for (let i = 1; i <= n; i++) {
        // console.log(n1);
        outputArr.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return outputArr;
}
console.log(fibonacciSeries(4));

// 17.	Swap 2 numbers value?
function swapNumber(a, b) {
    return [a, b] = [b, a];
}
console.log(swapNumber(5, 3));

// 18.	Add 2 numbers without using + operator
function addWithoutOperator(a, b) {
    while (b != 0) {
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}
console.log(addWithoutOperator(10, 5));

// 19.	Multiply two numbers  without using * operator
function multiplyWithoutOperator(a, b) {
    if (a == 1) return b
    else if (a > 1) {
        return b + multiplyWithoutOperator(a - 1, b);
    }
}
console.log(multiplyWithoutOperator(10, 4));

// 20.	Divide a number without using / operator
function divisionWithoutOperator(num1, num2) {
    if (num1 == 0)
        return 0;
    if (num2 == 0)
        return Number.MAX_VALUE;
    let negResult = false;
    // Handling negative numbers
    if (num1 < 0) {
        num1 = -num1;
        if (num2 < 0) num2 = -num2;
        else negResult = true;
    } else if (num2 < 0) {
        num2 = -num2;
        negResult = true;
    }

    let quotient = 0;
    while (num1 >= num2) {
        num1 = num1 - num2;
        quotient++;
    }

    if (negResult)
        quotient = -quotient;
    return quotient;
}
console.log(divisionWithoutOperator(10, 3));

// 21.	Find the sum of digit  123 =    1+2+3=6
function sumOfDigits(num) {
    let numToString = String(num);
    let sum = (parseInt(numToString[0])) + (parseInt(numToString[1])) + (parseInt(numToString[2]));
    return sum;
}
console.log(sumOfDigits(123));

// 22.	Find whether the number is palindrome or not   
function isPalindrome(num) {
    let rem, temp, final = 0;
    temp = num;
    while (num > 0) {
        rem = num % 10;
        num = parseInt(num / 10);
        final = final * 10 + rem;
    }
    if (final == temp) return true
    else return false;
}
console.log(isPalindrome(120));

// 23.	Convert a number to binary,Hexadecimal and vice versa
function deciToBinaryHexa(value) {
    let binary = Number(value).toString(2);
    let hex = Number(value).toString(16);
    let hexToDec = parseInt(String(value), 16);
    let binToDec = parseInt(String(value), 2);
    return `Binary=${binary}, Hexa=${hex}, HexToDec=${hexToDec}, BinToDec=${binToDec}`;
}
console.log(deciToBinaryHexa(17));

// 24.	Print the table of a number? eg  3 means 3*1=3 3*2=6…. upto 10
function tableOfNumber(num) {
    if (num == 0) return 0;
    else {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num}*${i}=${num * i}`);
        }
    }
}
console.log(tableOfNumber(7));

// 25.	Find LCM of 3 numbers
function calculateLCM(...arr) {
    const gcdOf2 = (a, b) => {
        // Greatest common divisor of 2 integers
        if (!b) return b === 0 ? a : NaN;
        return gcdOf2(b, a % b);
    };
    const lcmOf2 = (a, b) => {
        // Least common multiple of 2 integers
        return a * b / gcdOf2(a, b);
    }
    // Least common multiple of a list of integers
    let n = 1;
    for (let i = 0; i < arr.length; ++i) {
        n = lcmOf2(arr[i], n);
    }
    return n;
};
console.log(calculateLCM(1, 2, 3));

// 26.	Find HCF of 3 numbers
function gcd(a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
// Function to find gcd of array of numbers
function findGCD(...arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = gcd(arr[i], result);

        if (result == 1) {
            return 1;
        }
    }
    return result;
}
console.log(findGCD(3, 6, 9));

// 27.	Find the sum of 1+2+3+….N
function sumOfNNumbers(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumOfNNumbers(10));

// 28.	Find the sum of  1^2 + 2^2 + 3^2 +….. N^2
function sumOfSquare(n) {
    return [n * (n + 1) * ((2 * n) + 1)] / 6;
}
console.log(sumOfSquare(2));

// 29.	Find the sum of  1+2^2+3^3 +4^4+…..N^N
function sumOfPowerSeries(n) {
    if (n == 1) return 1
    else {
        return (Math.pow(n, n) + sumOfPowerSeries(n - 1));
    }
}
console.log(sumOfPowerSeries(2));

// 30.	Write a program that takes a floating point number and then displays the right-most of the integral part of the number.
function rightMostNumber(num) {
    let integralPart = parseInt(num);
    let numToString = String(integralPart);
    return numToString[numToString.length - 1];
}
console.log(rightMostNumber(50664.22));



