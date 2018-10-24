// http://rocha.la/JavaScript-bitwise-operators-in-practice
Tilde or the Floor? Practical use for JavaScript bitwise operators. (#1)

# Bitwise NOT - The ~ operator
Apart from "inverting the bits of its operand" bitwise **NOT** in JavaScript is actually very useful not only when it comes to binary. Firstly, it has a very interesting effect on integers - it converts the integer to -(N+1) value. For example:
```
~2 === -3; //true
~1 === -2; //true
~0 === -1; //true
~-1 === 0; //true
```
However, the most practical way of utilizing the power of this operator is to use it as a **replacement for Math.floor() function** as **double bitwise NOT** performs the same operation a lot quicker. You can use it, to convert any floating point number to a integer without performance overkill that comes with Math.floor(). Additionally, when you care about minification of your code, you end up using 2 characters (2 tildes) instead of 12.

Example use of double tilde / double bitwise NOT operator:
```
~~2 === Math.floor(2); //true, 2
~~2.4 === Math.floor(2); //true, 2
~~3.9 === Math.floor(3); //true, 3
```

# Summary
## Use double bitwise NOT when:

1. You want to convert the number from float to integer.
2. You want to perform same operation as Math.floor() but a lot quicker.
3. You want to minimalize your code.

## Do not use double bitwise NOT when:

1. You run Google Chrome (apparently?).
2. You care about readability of your code.
