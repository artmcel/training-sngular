/**
 * se crea la clase Serie
 */

import React from "react";


export default class Serie extends React.Component{

    static primo(n) {
        for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++)
          if (n % i === 0) return false;
        return n > 1;
    }

    static triangular(n) {
        return (n * (n + 1)) / 2;
    }

    static fibonacci(n) {
        let fib = [0, 1];
        while (fib.length < n) fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        return fib[n - 1];
    }

    static serie(n) {
        if (n <= 0) throw new Error("n debe ser mayor a 0");
        return this.primo(n) - this.triangular(n - 1) / this.fibonacci(n + 2);
    }

}