// function sayHello() {
//     console.log('hello world!');
//     sayHello();
// }

// sayHello();

/*
    Recursion Tree

    sayHello()
        - console.log('hello world!')
        - sayHello()
            - console.log('hello world!')
            - sayHello()
                - console.log('hello world!')
                - sayHello()
                    - console.log('hello world!')
                    - sayHello()
                    ...
                    ...
*/

/*
    Purpose / Use of Recursion

    1. To solve problems that can be broken down into easier sub-problems of the same type.
    2. in divide and conquer algorithms(merge sort, quick sort, binary search tree), tree traversal algorithms, dynamic programming, backtracking, etc.

    Iterative vs Recursive

    Iterative: for loop, while loop
    recursive: function that calls itself
*/

// // problem: to print the message "hello world!" for N times
// function sayHelloIterative(N) {
//     for (let i = 1; i <= N; i++){
//         // this loop will run for N times
//         console.log('hello world!');
//     }
// }

// sayHelloIterative(5);

// problem: to print the message "hello world!" for N times
// function sayHelloRecursive(N, i) {
//     if (i > N) return;
//     console.log('hello world!');
//     i++;
//     sayHelloRecursive(N, i);
// }

// sayHelloRecursive(5, 1);

// function sayHelloRecursive(N, i) {
//     if (i > N) return;
//     console.log('hello world!');
//     sayHelloRecursive(N, i+1);
// }

// sayHelloRecursive(5, 1);

/*
    1. Write a iterative function and a recursive function to print the first N natural numbers in reverse order (from N to 1)

    Input: 5

    Output: 

    5
    4
    3
    2
    1
*/

// function fN(N) {
//     for (; N > 0; N--) console.log(N);
// }

// fN(5);

// function rN(N) {
//     if (N == 0) return;
//     console.log(N);
//     rN(N-1);
// }

// rN(5);

// function rN(N) {
//     if (N == 0) return;
//     rN(N - 1);
//     console.log(N);
// }

// rN(5);

/*
    rN(5)
        - N = 5; 5 == 0? no
        - rN(4)
            - N = 4; 4 == 0? no
            - rN(3)
                - N = 3; 3 == 0? no
                - rN(2)
                    - N = 2; 2 == 0? no
                    - rN(1)
                        - N = 1; 1 == 0? no
                        - rN(0)
                            - N = 0; 0 == 0? yes
                            - return
                        - console.log(1) (wait for rN(0) to finish)
                    - console.log(2) (wait for rN(1) to finish)
                - console.log(3) (wait for rN(2) to finish)
            - console.log(4) (wait for rN(3) to finish)
        - console.log(5) (wait for rN(4) to finish)

    
     rN(5)
*/

/*
    3. Write a iterative function and a recursive function to print the sum of first N natural numbers

    Input: 5

    Output: 15

    1 + 2 + 3 + 4 + 5 = 15

    Input: 10

    Output: 55

    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
*/

// function SI(N) {
//     let sum = 0;
//     for (let number = 1; number <= N; number++){
//         sum += number;
//     }
//     return sum;
// }

// console.log(SI(10));

// function SR(N, sum) {
//     if (N == 0) return sum;
//     return SR(N-1, sum + N);
// }

// console.log(SR(10, 0));

/*
    SR(10, 0)
        - N = 10, sum = 0
        - N == 0? 10 == 0? NO
        - return SR(9, 10)
                    |_______ N = 9, sum = 10
                    |_______ N == 0? 9 == 0? NO
                    |_______ return SR(8, 19)
                                |_______ N = 8, sum = 19
                                |_______ N == 0? 8 == 0? NO
                                |_______ return SR(7, 27)
                                            |_______ N = 7, sum = 27
                                            |_______ N == 0? 7 == 0? NO
                                            |_______ return SR(6, 34)
                                                        |_______ N = 6, sum = 34
                                                        |_______ N == 0? 6 == 0? NO
                                                        |_______ return SR(5, 40)
                                                                    |_______ N = 5, sum = 40
                                                                    |_______ N == 0? 5 == 0? NO
                                                                    |_______ return SR(4, 45)
                                                                                |_______ N = 4, sum = 45
                                                                                |_______ N == 0? 4 == 0? NO
                                                                                |_______ return SR(3, 49)
                                                                                            |_______ N = 3, sum = 49
                                                                                            |_______ N == 0? 3 == 0? NO
                                                                                            |_______ return SR(2, 52)
                                                                                                        |_______ N = 2, sum = 52
                                                                                                        |_______ N == 0? 2 == 0? NO
                                                                                                        |_______ return SR(1, 54)
                                                                                                                    |_______ N = 1, sum = 54
                                                                                                                    |_______ N == 0? 1 == 0? NO
                                                                                                                    |_______ return SR(0, 55)
                                                                                                                                |_______ N = 0, sum = 55
                                                                                                                                |_______ N == 0? 0 == 0? YES
                                                                                                                                |_______ return 55

    55
*/

/*
    Recurrence Relation

    S(N) = ?

    For N = 1, S(1) = 1
    For N = 2, S(2) = 1 + 2 = 3
    For N = 3, S(3) = 1 + 2 + 3 = 6
    For N = 4, S(4) = 1 + 2 + 3 + 4 = 10
    For N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

    --------------------------------------------

    Backward Substitution

    For N = 1, S(1) = 1
    For N = 2, S(2) = S(1) + 2 = 3
    For N = 3, S(3) = S(2) + 3 = 6
    For N = 4, S(4) = S(3) + 4 = 10
    For N = 5, S(5) = S(4) + 5 = 15

    General Form:

    For N = 1, S(N) = 1
    For N > 1, S(N) = S(N-1) + N
*/

// function S(N) {
//     // For N = 1, S(N) = 1
//     if (N == 1) return 1;

//     // For N > 1, S(N) = S(N-1) + N
//     return S(N - 1) + N;
// }

// console.log(S(10));

/*
    1. Write a recursion function using recurrence relation to find the factorial of a number N.

    Input: 5

    Output: 120

    Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120

    Input: 4

    Output: 24

    Explanation: 4! = 4 * 3 * 2 * 1 = 24

    2. Write a recursion function using recurrence relation to find the Nth Fibonacci number.

    Input: 5

    Output: 5

    Explanation: 5th Fibonacci number is 5

    Input: 6

    Output: 8

    Explanation: 6th Fibonacci number is 8

    Fibonacci Series: 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 ...
*/

/*
    Recurrence Relation

    F(N) = ?

    For N = 1, F(1) = 1
    For N = 2, F(2) = 1 x 2 = 3
    For N = 3, F(3) = 1 x 2 x 3 = 6
    For N = 4, F(4) = 1 x 2 x 3 x 4 = 10
    For N = 5, F(5) = 1 x 2 x 3 x 4 x 5 = 15

    --------------------------------------------

    Backward Substitution

    For N = 1, F(1) = 1
    For N = 2, F(2) = F(1) x 2 = 3
    For N = 3, F(3) = F(2) x 3 = 6
    For N = 4, F(4) = F(3) x 4 = 10
    For N = 5, F(5) = F(4) x 5 = 15

    General Form:

    For N = 1, F(N) = 1
    For N > 1, F(N) = F(N-1) + N
*/

// function F(N) {
//     // For N = 1, F(N) = 1
//     if (N == 1) return 1;

//     // For N > 1, F(N) = F(N-1) + N
//     return F(N - 1) * N;
// }

// console.log(F(5));

/*
    Fibo(N) = ?

    For N = 1, Fibo(1) = 0
    For N = 2, Fibo(2) = 1

    For N = 3, Fibo(3) = Fibo(2) + Fibo(1) = 1 + 0 = 1
    For N = 4, Fibo(4) = Fibo(3) + Fibo(2) = 1 + 1 = 2
    For N = 5, Fibo(5) = Fibo(4) + Fibo(3) = 2 + 1 = 3

    General Form:

    For N = 1, Fibo(N) = 0
    For N = 2, Fibo(N) = 1
    For N > 2, Fibo(N) = Fibo(N-1) + Fibo(N-2)
*/

function Fibo(N) {
    if (N == 1) return 0;
    if (N == 2) return 1;

    return Fibo(N - 1) + Fibo(N - 2);
}

console.log(Fibo(15));