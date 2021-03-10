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


// Situação de erro
// n < 0 -> exception!
// Situações de parada
// n == 0 -> “0”
// n == 1 -> “1”
// n == 5 (101)
// convBase2(10) + “1”
// n == 6 (110)
// convBase2(11) + “0”
// n > 0 && n != 0 && n != 1 => convBase2(n/2) + (n % 2)
// (*) + é a concatenação de strings

// Ex.: n = 0 n = 1 n = 2 (10) n = 5 (101)
// Modele e implemente um método recursivo que recebe um inteiro zero ou positivo e 
// retorna um String com o número em binário.

function convBase2(n) {
  if (n < 0) {
    return "inválido"
  }
  if (n == 0) {
    return "0"
  }
  if (n == 1) {
    return "1"
  }
  if (n > 0 && n != 0 && n != 1) {
    return convBase2(Math.floor(n/2)).concat(`${n%2}`)
  }
}

console.log("convBase2(-1)", convBase2(-1));
console.log("convBase2(2)", convBase2(2));
console.log("convBase2(3)", convBase2(3));
console.log("convBase2(4)", convBase2(4));
console.log("convBase2(5)", convBase2(5));



// Modele e implemente um método recursivo que calcule o somatório dos números 
// contidos em um ArrayList de inteiros, passado como parâmetro.
/**
 * Casos de Erro: list.length <= 0
 * Casos Base: list.length = 1 -> list[0], list.length = 2 -> list[0] + list[1]
 * Recursão: último elemento da lista + somatorioEmLista(lista.length - 1)
 */

 function somatorioEmLista(list) {
   if (list.length <= 0) {
      return "invalido"
   }

  if (list.length === 1) {
    return list[0]
  }
  
  return somatorioEmLista(list.splice(0, list.length - 1)) + list[list.length-1]
}

console.log("somatrioEmLista([])", somatorioEmLista([]));
console.log("somatrioEmLista([1,2,3])", somatorioEmLista([1,2,3]));
console.log("somatrioEmLista([1,2,3,4])", somatorioEmLista([1,2,3,4]));
console.log("somatrioEmLista([-1,2,3,4])", somatorioEmLista([-1,2,3,4]));


// Modele e implemente um método recursivo para encontrar o maior elemento de um ArrayList.
/**
 * Casos de Erro: list.length <= 0
 * Casos Base: list.length = 1 -> list[0], list[0] > list[n-1]
 * Recursão: list[0] >= list[n-1], se verdadeiro remove último elemento, se falso remove o primeiro
 *           list[0] >= list[n-1], se verdadeiro findBiggest(list[list.length-1])
 *                                 se false findBiggest(list[list.length - n)
 */
function findBiggest(list) {
  if (list.length <= 0) {
    return "invalido"
  }

  if (list.length == 1) {
    return list[0]
  }

  if(list[0] >= list[list.length - 1]) { 
    return findBiggest(list.splice(0, list.length - 1))
  } else { 
    return findBiggest(list.splice(1, list.length - 1))
  }
}

console.log("findBiggest([1,3,5,4])", findBiggest([1,3,5,4]));
console.log("findBiggest[7,3,5,4])", findBiggest([7,3,5,4]));
console.log("findBiggest([])", findBiggest([]));
console.log("findBiggest([-1, 4, -3,-2])", findBiggest([-1, 4, -3,-2]));
console.log("findBiggest([7,-2,23,40])", findBiggest([7,-2,23,40]));
console.log("findBiggest([70,-20,23,10])", findBiggest([70,-20,23,10]));


// Implemente um método recursivo para determinar se um string ocorre dentro de outro.
/**
 * Casos de Erro: str == null / match == null / match > str
 * Casos Base: str = "a", match = "a" / 
 * Recursão:
 */
function findSubStr(str, match) {

}

// Faça um método recursivo que determina o número de dígitos de um inteiro.
/**
 * Casos de Erro:
 * Casos Base:
 * Recursão:
 */
function nroDigit(n) {
  return 0
}

// Implemente um métodos que recebe um String e retorna um ArrayList com todas as permutações deste String.
/**
 * Casos de Erro:
 * Casos Base:
 * Recursão:
 */
function permutations(s) {
  return []
}