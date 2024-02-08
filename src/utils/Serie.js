/**
 * se crea la clase Serie
 */

class Serie{

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

}