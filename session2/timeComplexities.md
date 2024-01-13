For any problem, different solutions are possible.

The best solution is the one that is most efficient in terms of time and space.

Time complexity is amount of time that is required to run an algorithm as a function of the length of the input.

Mathematical Notations: Asymptotic Notations

Big O Notation: Upper Bound
Big Omega Notation: Lower Bound
Big Theta Notation: Tight Bound (Upper and Lower Bound)

Situations/Cases: Input size is n

1. Best Case
2. Average Case
3. Worst Case

Example: Linear Search

Lets say we have an array

numbers = [1,2,3,4,5,6,7,8,9,10]

and we want to find the number 5 in the array.

Case 1: Best Case - The number is at the first index of the array

If key = 1, comparisons => 1 => O(1)

Case 2: Average Case - The number is at the middle index of the array

If key = 5, comparisons => 5 => O(n/2) => O(n)

Case 3: Worst Case - The number is at the last index of the array

If key = 10, comparisons => 10 => O(n)
If key = 11, comparisons => 10 => O(n)

Example 1:

```js
    int a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }
```

Time Complexity: ?

Options:

1. O(1)
2. O(log n)
3. O(n)
4. O(n log n)
5. O(n^2)
6. O(n^3)
7. O(2^n)
8. O(n!)

Solution:

int a = 0, b = 0;
=> O(1) (declarations, assignments, expressions, conditional)

for (i = 0; i < N; i++) {
a = a + rand();
}

total number of executions = values of i
i = 0, 1, 2, 3, 4, ..., N-1 = N

N = 5
i = 0, 1, 2, 3, 4
number of executions = 5

for (j = 0; j < M; j++) {
b = b + rand();
}

total number of executions = values of j
j = 0, 1, 2, 3, 4, ..., M-1 = M

Total time complexity T(N)
= 1 + N + M
= N + M [1 is a constant, so we can ignore it]
= O(N + M) [Big O notation]

Example 2:

```js
    int a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }
```

Time Complexity: ?

Total Time Complexity T(N)
= 1 + N + N
= 1 + 2N
= 2N [1 is a constant, so we can ignore it]
= O(N)

Example 3:

```js
    int a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }
```

Time Complexity: ?

Solution:

Method 1: Counting

outer loop: i = 0, 1, 2, 3, 4, ..., N-1 = N
inner loop: j = 0, 1, 2, 3, 4, ..., N-1 = N

Total number of executions = N \* N = N^2

Total Time Complexity T(N)
= 1 + N^2
= O(N^2)

Method 2: Substitution

Step 1: Assume some random value for N

N = 4
N = 5
N = 6

Step 2: Substitute the value of N and find the number of executions

N = 4

    i = 0; j = 0, 1, 2, 3 => 4 executions
    i = 1; j = 0, 1, 2, 3 => 4 executions
    i = 2; j = 0, 1, 2, 3 => 4 executions
    i = 3; j = 0, 1, 2, 3 => 4 executions

Total number of executions = 4 + 4 + 4 + 4 = 16

N = 5

    i = 0; j = 0, 1, 2, 3, 4 => 5 executions
    i = 1; j = 0, 1, 2, 3, 4 => 5 executions
    i = 2; j = 0, 1, 2, 3, 4 => 5 executions
    i = 3; j = 0, 1, 2, 3, 4 => 5 executions
    i = 4; j = 0, 1, 2, 3, 4 => 5 executions

Total number of executions = 5 + 5 + 5 + 5 + 5 = 25

N = 6

    i = 0; j = 0, 1, 2, 3, 4, 5 => 6 executions
    i = 1; j = 0, 1, 2, 3, 4, 5 => 6 executions
    i = 2; j = 0, 1, 2, 3, 4, 5 => 6 executions
    i = 3; j = 0, 1, 2, 3, 4, 5 => 6 executions
    i = 4; j = 0, 1, 2, 3, 4, 5 => 6 executions
    i = 5; j = 0, 1, 2, 3, 4, 5 => 6 executions

Total number of executions = 6 + 6 + 6 + 6 + 6 + 6 = 36

Step 3: Summarize the results and Find the pattern

For N = 4, total number of executions = 16
For N = 5, total number of executions = 25
For N = 6, total number of executions = 36

Total number of executions = N^2

Step 4: Find the time complexity

Total Time Complexity T(N)
= 1 + N^2
= O(N^2)

Example 4:

```js
    int a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }
```

Time Complexity: ?

Solution:

Method 2: Substitution

Step 1: Assume some random value for N

N = 4
N = 5
N = 6

Step 2: Substitute the value of N and find the number of executions

N = 4

    i = 0; j = 4, 3, 2, 1 => 4 executions
    i = 1; j = 4, 3, 2 => 3 executions
    i = 2; j = 4, 3 => 2 executions
    i = 3; j = 4 => 1 executions

    number of executions = 4 + 3 + 2 + 1 = 10

N = 5

    i = 0; j = 5, 4, 3, 2, 1 => 5 executions
    i = 1; j = 5, 4, 3, 2 => 4 executions
    i = 2; j = 5, 4, 3 => 3 executions
    i = 3; j = 5, 4 => 2 executions
    i = 4; j = 5 => 1 executions

    number of executions = 5 + 4 + 3 + 2 + 1 = 15

N = 6

    i = 0; j = 6, 5, 4, 3, 2, 1 => 6 executions
    i = 1; j = 6, 5, 4, 3, 2 => 5 executions
    i = 2; j = 6, 5, 4, 3 => 4 executions
    i = 3; j = 6, 5, 4 => 3 executions
    i = 4; j = 6, 5 => 2 executions
    i = 5; j = 6 => 1 executions

    number of executions = 6 + 5 + 4 + 3 + 2 + 1 = 21

Step 3: Summarize the results and Find the pattern

For N = 4, total number of executions = 10  
For N = 5, total number of executions = 15
For N = 6, total number of executions = 21

S(n) = 1 + 2 + 3 + ... N-2 + N-1 + N
S(n) = N + N-1 + N-2 + ... 3 + 2 + 1

---

2S(n) = (N+1) + (N+1) + (N+1) + ... (N+1) + (N+1) + (N+1)
2S(n) = N(N+1)
S(n) = N(N+1)/2

For a given value of N, the total number of executions is N(N+1)/2

Step 4: Find the time complexity

Total Time Complexity T(N)
= 1 + N(N+1)/2
= 1 + (N^2 + 1)/2
= (N^2 + 1)/2
= 1/2 \* (N^2 + 1)
= N^2 + 1
= O(N^2)

Example 5:

```js
    int i, j, k = 0;
    for (i = n / 2; i <= n; i++) {
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }
```

Time Complexity: ?

Solution:

outer loop: i = n/2, n/2 + 1, n/2 + 2, ..., n-1, n = n/2

inner loop:

N = 10; j = 2, 4, 8 => 3 executions
N = 29; j = 2, 4, 8, 16 => 4 executions
N = 30; j = 2, 4, 8, 16 => 4 executions
N = 31; j = 2, 4, 8, 16 => 4 executions
N = 40; j = 2, 4, 8, 16, 32 => 5 executions

For a given value of N, the total number of executions is log2(N)

Total Time Complexity T(N)
= 1 + N/2 _ log2(N)
= N/2 _ log2(N)
= O(N log N)

O(N!)

Problem: Given a list of numbers, find the number of ways in which we can select a number from the list and print it.

Example:

Input: [1, 2, 3]

Output: 8 ways

0 values => [] => 1 way
1 value => [1], [2], [3] => 3 ways
2 values => [1, 2], [1, 3], [2, 3] => 3 ways
3 values => [1, 2, 3] => 1 way

Input: [1, 2, 3, 4]

Output: 16 ways

0 values => [] => 1 way
1 value => [1], [2], [3], [4] => 4 ways
2 values => [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4] => 6 ways
3 values => [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4] => 4 ways
4 values => [1, 2, 3, 4] => 1 way

For N = 3, total number of ways = 1 + 3 + 3 + 1 = 8
For N = 4, total number of ways = 1 + 4 + 6 + 4 + 1 = 16
For N = 5, total number of ways = 1 + 5 + 10 + 10 + 5 + 1 = 32

For a given value of N, the total number of ways is 2^N

Total Time Complexity T(N)
= O(2^N)

Problem: Given a string S, find the number of permutations of the string.

Example:

Input: "abc"

Output: 6

"abc", "acb", "bac", "bca", "cab", "cba"

Input: "abcd"

Output: 24

"abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"

For N = 3, total number of permutations = 3! = 6
For N = 4, total number of permutations = 4! = 24

3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1

N! = N * (N-1) * (N-2) * ... 3 * 2 * 1

For a given value of N, the total number of permutations is N!

Total Time Complexity T(N)
= O(N!)