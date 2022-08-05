# Recursion Exercises

My solutions to two small recursion problems: [fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) and [merge sort](https://en.wikipedia.org/wiki/Merge_sort). Both solutions are written in JavaScript.

## Fibonacci

Perhaps a couple of things of note here.
1. I used the newish `Array.prototype.at()` API, which is nice for allowing you to access elements at the end of an array with negative indices. Very convenient syntactic sugar.
2. A nice recursive pattern to know is the use of a default parameter to build some structure across recursive function calls, much like I do with `sequence`.

## Merge Sort

This is a fun, clean solution. Likely less efficient than solutions that avoid `shift()` though, which can be a costly operation.
