let a = prompt("Digite o primeiro valor:");
let b = prompt("Digite o segundo valor:");

let temp = a;
a = b;
b = temp;

alert("Agora o primeiro valor é: " + a + " e o segundo valor é: " + b);