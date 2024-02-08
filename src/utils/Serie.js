/**
 * se crea la clase Serie
 */

class Serie{

    static primo(n) {
        for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++)
          if (n % i === 0) return false;
        return n > 1;
    }

}