/**
 * Casos de Erro: se n < 1
 * Casos Base: se n = 1 retorna 1, se n = 2 retorna 2
 * Recursão: n * fat(n-1)
 */

function fatorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * fatorial(n - 1);
}

console.log("Fatorial", fatorial(1));
console.log("Fatorial", fatorial(2));
console.log("Fatorial", fatorial(10));

/**
 * Casos de Erro: se n < 1
 * Casos Base: se n = 1 retorna 1
 * Recursão: n * fat(n-1)
 */

function somatório(n) {
  if (n == 1) {
    return 1;
  }

  return n + somatório(n - 1);
}

console.log("somatório", somatório(1));
console.log("somatório", somatório(2));
console.log("somatório", somatório(11));

/**
 * 0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
 * Casos de Erro: se n < 0
 * Casos Base: se n = 1 retorna 1
 * Recursão: fib(n-1) + fib(n-2)
 */

function fibonacci(n) {
  if (n > 0 && n < 3) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("fibonacci", fibonacci(1));
console.log("fibonacci", fibonacci(2));
console.log("fibonacci", fibonacci(3));
console.log("fibonacci", fibonacci(4));
console.log("fibonacci", fibonacci(5));
console.log("fibonacci", fibonacci(6));
console.log("fibonacci", fibonacci(7));

/**
 * Casos de Erro: não tem
 * Casos Base: se k = j, retorna k
 * Recursão: se k < j então k + somaMult(k+1, j)
 *           se k > j então k + somaMult(k-1, j)
 */

function somaMult(k, j) {
  if (k == j) {
    return k;
  }

  if (k > j) {
    return k + somaMult(k - 1, j);
  }
  if (k < j) {
    return k + somaMult(k + 1, j);
  }
}

console.log("somaMult", somaMult(1, 1));
console.log("somaMult", somaMult(2, 5));
console.log("somaMult", somaMult(3, 6));
console.log("somaMult", somaMult(4, 8));
console.log("somaMult", somaMult(5, 10));
console.log("somaMult", somaMult(6, 12));
console.log("somaMult", somaMult(-1, 4));

/**
 * Casos de Erro: se a palavra for vazia
 * Casos Base: se o tamanho da palavra for igual a 1 retorna true
 * Recursão: isPal(substring do )
 */

function isPal(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPal(str.substring(1, str.length - 1));
}

console.log("isPal", isPal("arara"));
console.log("isPal", isPal("banana"));
console.log("isPal", isPal("ana"));
console.log("isPal", isPal(""));
console.log("isPal", isPal("reinnier"));
console.log("isPal", isPal("uva"));
