// Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B.
// A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o
// valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados
// nas variáveis. 
function soma() {
  let A = 10;
  let B = 20;

  let temp = A;
  A = B;
  B = temp;

  console.log("Valor de A: " + A);
  console.log("Valor de B: " + B);
}

// Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor. 
function antecessor() {
  let valor = Number(prompt("Digite um valor:"));

  let antecessor = parseInt(valor) - 1;

  alert("O antecessor de " + valor + " é " + antecessor);
}

// Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a
// área do retângulo. 
function retangulo() {
  let base = prompt("Digite a base do retângulo:");

  let altura = prompt("Digite a altura do retângulo:");

  let area = base * altura;

  alert("A área do retângulo é " + area);
}

// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
// dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 
function idade() {
  const idadeAnos = parseInt(prompt("Digite a idade em anos: "));
  const idadeMeses = parseInt(prompt("Digite a idade em meses: "));
  const idadeDias = parseInt(prompt("Digite a idade em dias: "));

  const idadeTotalDias = idadeAnos * 365 + idadeMeses * 30 + idadeDias;

  console.log(`A idade total em dias é: ${idadeTotalDias} dias.`);
}

// Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
// brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
// de eleitores. 
function votos() {
  const totalEleitores = prompt(
    "Informe o número total de eleitores do município:"
  );
  const votosBrancos = prompt("Informe o número de votos em branco:");
  const votosNulos = prompt("Informe o número de votos nulos:");
  const votosValidos = prompt("Informe o número de votos válidos:");
  const percBrancos = (votosBrancos / totalEleitores) * 100;
  const percNulos = (votosNulos / totalEleitores) * 100;
  const percValidos = (votosValidos / totalEleitores) * 100;

  console.log(`Percentual de votos em branco: ${percBrancos.toFixed(2)}%`);
  console.log(`Percentual de votos nulos: ${percNulos.toFixed(2)}%`);
  console.log(`Percentual de votos válidos: ${percValidos.toFixed(2)}%`);
}

// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// Calcular e escrever o valor do novo salário. 
function salario() {
  const salarioAtual = parseFloat(
    prompt("Digite o salário atual do funcionário:")
  );
  const percentualReajuste = parseFloat(
    prompt("Digite o percentual de reajuste (%):")
  );
  const novoSalario = salarioAtual * (1 + percentualReajuste / 100);

  console.log(`O novo salário do funcionário é R$${novoSalario.toFixed(2)}.`);
}

// O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
// distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
// seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
// calcular e escrever o custo final ao consumidor. 
function carro(){
    const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));
    const porcentagemDistribuidor = 0.28;
    const porcentagemImpostos = 0.45;

    const custoFinal = custoFabrica * (1 + porcentagemDistribuidor + porcentagemImpostos);

    console.log(`O custo final do carro para o consumidor é R$${custoFinal.toFixed(2)}`);
}

//Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
//mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
//efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
//vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
//vendedor.
function salarioCarro(){
let numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:"));
let salarioFixo = parseFloat(prompt("Digite o salário fixo:"));
let comissaoPorCarro = parseFloat(prompt("Digite o valor da comissão por carro vendido:"));
let comissaoTotal = numeroCarrosVendidos * comissaoPorCarro;
let porcentagemVendas = 0.05 * valorTotalVendas;
let salarioFinal = salarioFixo + comissaoTotal + porcentagemVendas;

alert("O salário final do vendedor é: R$" + salarioFinal.toFixed(2));
}

// Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
//correspondente em graus Celsius
function temperatura(){
let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;

alert("A temperatura em Celsius é: " + temperaturaCelsius.toFixed(2) + "°C");
}

//Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
//Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
//final é: 
function notaAluno(){
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

const peso1 = 2;
const peso2 = 3;
const peso3 = 5;

let mediaFinal = (nota1*peso1 + nota2*peso2 + nota3*peso3) / (peso1 + peso2 + peso3);

console.log("A média final é: " + mediaFinal.toFixed(2));
}

//Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso
//contrário escrever NÃO É MAIOR QUE 10!
function maiorMenor10 (){
let valor = prompt("Digite um valor:");
if (valor > 10) { 
  console.log("É maior que 10!"); 
} else {
  console.log("Não é maior que 10!"); 
}
}

//Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).
function positivoOuNegativo(){
    let valor = Number(prompt("Digite um valor:"));
    if (valor >= 0) {
      console.log("O valor é positivo.");
    } else {
      console.log("O valor é negativo.");
    }
    }

    //As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
//compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
//escreva o custo total da compra. 
function macas(){
    const precoUnidade = 1.3; 
    const precoDuzia = 1.0; 
    let quantidade = prompt("Quantas maçãs você deseja comprar?"); 
    quantidade = parseInt(quantidade);
    let precoTotal; 
    if (quantidade >= 12) {
      precoTotal = quantidade * precoDuzia; 
    } else {
      precoTotal = quantidade * precoUnidade; 
    }
    
    console.log(`O preço total da compra é de R$ ${precoTotal.toFixed(2)}`);
  }

  //Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
//uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
//aluno é aprovado). Escrever também a média calculada. 
function mediaAritimetica (){
    let nota1 = parseFloat(prompt("Insira a nota da primeira avaliação: "));
    let nota2 = parseFloat(prompt("Insira a nota da segunda avaliação: "));
    let media = (nota1 + nota2) / 2;
    if (media >= 6) {
      console.log(`Parabéns! Você foi aprovado(a) com média ${media.toFixed(2)}.`);
    } else {
      console.log(`Infelizmente, você foi reprovado(a) com média ${media.toFixed(2)}.`);
    }
  }

  //Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
//poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu)
function idadeVotacao(){
    let anoAtual = prompt("Digite o ano atual:");
    let anoNascimento = prompt("Digite o ano de seu nascimento:");
    let idade = anoAtual - anoNascimento;
    if (idade >= 16) {
      console.log("Você pode votar este ano!");
    } else {
      console.log("Você não pode votar este ano.");
    }  
  }

  // Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
function valorMaior(){
    let valor1 = prompt("Digite o primeiro valor:");
    let valor2 = prompt("Digite o segundo valor:");
    
    if (valor1 > valor2) {
      console.log("O primeiro valor é maior: " + valor1);
    } else {
      console.log("O segundo valor é maior: " + valor2);
    }
    }

    //Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. em js
function valorCrescente(){
    let valor1 = prompt("Digite o primeiro valor:");
    let valor2 = prompt("Digite o segundo valor:");
    
    if (valor1 < valor2) {
      console.log(valor1 + ", " + valor2);
    } else {
      console.log(valor2 + ", " + valor1);
    }
    }
    
    //Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
//minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
//de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
function horasXadrez(){
    const horaInicio = parseInt(prompt("Digite a hora de início do jogo:"));
  const horaFim = parseInt(prompt("Digite a hora de fim do jogo:"));
  let duracao;
  
  if (horaFim > horaInicio) {
    duracao = horaFim - horaInicio;
  } else {
    duracao = 24 - horaInicio + horaFim;
  } 
  
  console.log(duracao);
  }

  //A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
//de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
//Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
//o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
//(considere que o mês possua 4 semanas exatas). 
function horaExtra(){
    const horasTrabalhadasMes = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
    const salarioHora = parseFloat(prompt("Digite o salário por hora do funcionário:"));
    const salarioSemanal = salarioHora * 40;
    const salarioMensal = salarioSemanal * 4;
    if (horasTrabalhadasMes > 160) { 
      const horasExtras = horasTrabalhadasMes - 160;
      const valorHoraExtra = salarioHora * 1.5;
      const salarioHoraExtra = valorHoraExtra * horasExtras;
      const salarioTotal = salarioMensal + salarioHoraExtra;
      console.log(`O salário total do funcionário é R$ ${salarioTotal.toFixed(2)}.`);
    } else { 
      console.log(`O salário total do funcionário é R$ ${salarioMensal.toFixed(2)}.`);
    }
  }

  //Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
//e mostre seu peso ideal, utilizando as seguintes fórmulas:
//- para sexo masculino: peso ideal = (72.7 * altura) - 58
//- para sexo feminino: peso ideal = (62.1 * altura) - 44.7
function imc(){
    let nome, altura, pesoIdeal;
  let sexo;
  nome = prompt("Digite o nome da pessoa:");
  altura = parseFloat(prompt("Digite a altura da pessoa em metros:"));
  sexo = prompt("Digite o sexo da pessoa (M ou F):");
  if (sexo === "M") {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo === "F") {
    pesoIdeal = 62.1 * altura - 44.7;
  } else {
    console.log("Sexo inválido.");
  }
  if (pesoIdeal) {
    console.log(`O peso ideal de ${nome} é ${pesoIdeal.toFixed(2)} kg.`);
  }
  }

  //Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
//ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
//ultrapassar este valor, calcular e escrever o seu salário total.
function salarioTotalComissao(){
    let salarioFixo = parseFloat(prompt("Insira o salário fixo do vendedor:"));
    let totalVendas = parseFloat(prompt("Insira o total de vendas efetuadas pelo vendedor:"));
    let comissao = 0;
    if (totalVendas <= 1500) {
      comissao = totalVendas * 0.03;
    } else {
      comissao = 1500 * 0.03 + (totalVendas - 1500) * 0.05;
    }
    let salarioTotal = salarioFixo + comissao;
    console.log(`O salário total do vendedor é R$ ${salarioTotal.toFixed(2)}.`);
  }

  // Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
//escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
//ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 
function saldo(){
    const numeroConta = parseInt(prompt("Digite o número da conta do cliente:"));
    const saldo = parseFloat(prompt("Digite o saldo da conta:"));
    const debito = parseFloat(prompt("Digite o valor do débito:"));
    const credito = parseFloat(prompt("Digite o valor do crédito:"));
    const saldoAtual = saldo - debito + credito;
    if (saldoAtual >= 0) {
      console.log("Saldo Positivo");
    } else {
      console.log("Saldo Negativo");
    }
    console.log(`Saldo atual da conta ${numeroConta}: R$ ${saldoAtual.toFixed(2)}`);
    }

// //Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
// quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
//média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
//a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
//compra'. 
function quantidadeEstoque(){
  let quantidadeAtual = Number(prompt('Digite a quantidade atual de produtos no estoque: '));
let quantidadeMaxima = Number(prompt('Digite a quantidade máxima: '));
let quantidadeMinima = Number(prompt('Digite a quantidade mínima: '));
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima)/2

if(quantidadeatual=>quantidadeMedia){
    console.log('Não efetuar compra')
}

else{
    console.log('Efetuar compra')
}
}

    //Ler um valor e escrever se é positivo, negativo ou zero.
function postivoNegativo(){
    let valor = parseFloat(prompt("Digite um número: "));
  
  if (valor > 0) {
    console.log("O número é positivo.");
  } else if (valor < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
  }

  //Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
function maiorValor(){
    let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
  let valor2 = parseFloat(prompt("Digite o segundo valor: "));
  let valor3 = parseFloat(prompt("Digite o terceiro valor: "));
  
  if (valor1 > valor2) {
    if (valor1 > valor3) {
      console.log("O maior valor é:", valor1);
    } else {
      console.log("O maior valor é:", valor3);
    }
  } else {
    if (valor2 > valor3) {
      console.log("O maior valor é:", valor2);
    } else {
      console.log("O maior valor é:", valor3);
    }
  }
  }

  //Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
//maiores. 
function somarDoisValores(){
    let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
  let valor2 = parseFloat(prompt("Digite o segundo valor: "));
  let valor3 = parseFloat(prompt("Digite o terceiro valor: "));
  
  if (valor1 > valor2) {
    if (valor1 > valor3) {
      if (valor2 > valor3) {
        console.log("A soma dos 2 maiores valores é:", valor1 + valor2);
      } else {
        console.log("A soma dos 2 maiores valores é:", valor1 + valor3);
      }
    } else {
      console.log("A soma dos 2 maiores valores é:", valor1 + valor3);
    }
  } else {
    if (valor2 > valor3) {
      if (valor1 > valor3) {
        console.log("A soma dos 2 maiores valores é:", valor2 + valor1);
      } else {
        console.log("A soma dos 2 maiores valores é:", valor2 + valor3);
      }
    } else {
      console.log("A soma dos 2 maiores valores é:", valor2 + valor3);
    }
  }
  }

  //Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
//crescente
function valoresCrescente(){
    let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
  let valor2 = parseFloat(prompt("Digite o segundo valor: "));
  let valor3 = parseFloat(prompt("Digite o terceiro valor: "));
  
  let menor, meio, maior;
  
  if (valor1 < valor2 && valor1 < valor3) {
    menor = valor1;
    if (valor2 < valor3) {
      meio = valor2;
      maior = valor3;
    } else {
      meio = valor3;
      maior = valor2;
    }
  } else if (valor2 < valor1 && valor2 < valor3) {
    menor = valor2;
    if (valor1 < valor3) {
      meio = valor1;
      maior = valor3;
    } else {
      meio = valor3;
      maior = valor1;
    }
  } else {
    menor = valor3;
    if (valor1 < valor2) {
      meio = valor1;
      maior = valor2;
    } else {
      meio = valor2;
      maior = valor1;
    }
  }
  
  console.log("Os valores em ordem crescente são:", menor, meio, maior);
  }

  //Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
//ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
//dos outros 2 lados. 
function reconhecerTriangulo(){
    let A = parseFloat(prompt("Digite o valor do lado A: "));
  let B = parseFloat(prompt("Digite o valor do lado B: "));
  let C = parseFloat(prompt("Digite o valor do lado C: "));
  
  if (A < B + C && B < A + C && C < A + B) {
    console.log("Os valores formam um triângulo");
  } else {
    console.log("Os valores não formam um triângulo");
  }
  }

  //Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
//do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 
function totalGols(){
    let time1 = prompt("Digite o nome do time 1: ");
  let gols1 = parseInt(prompt("Digite o número de gols do time 1: "));
  let time2 = prompt("Digite o nome do time 2: ");
  let gols2 = parseInt(prompt("Digite o número de gols do time 2: "));
  
  if (gols1 > gols2) {
    console.log("O time vencedor é: " + time1);
  } else if (gols2 > gols1) {
    console.log("O time vencedor é: " + time2);
  } else {
    console.log("EMPATE");
  }
  }

  //Ler dois valores e imprimir uma das três mensagens a seguir:
//‘Números iguais’, caso os números sejam iguais
//‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
//‘Segundo maior’, caso o segundo seja maior que o primeiro.
function identificarMaiorNumero(){
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));
    
    if (num1 === num2) {
      console.log("Números iguais");
    } else if (num1 > num2) {
      console.log("Primeiro é maior");
    } else {
      console.log("Segundo é maior");
    }
    }

    // Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//até 20 litros, desconto de 3% por litro Álcool
//acima de 20 litros, desconto de 5% por litro
//até 20 litros, desconto de 4% por litro Gasolina
//acima de 20 litros, desconto de 6% por litro
//Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
//seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
//que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 
function litrosVendidos(){
    let litros = parseFloat(prompt("Digite a quantidade de litros vendidos: "));
  let tipo = prompt("Digite o tipo de combustível (A-álcool ou G-gasolina): ");
  
  let precoAlcool = 2.9;
  let precoGasolina = 3.3;
  let precoTotal = 0;
  
  if (tipo === "A") {
    if (litros <= 20) {
      precoTotal = litros * precoAlcool * 0.97;
    } else {
      precoTotal = litros * precoAlcool * 0.95;
    }
  } else if (tipo === "G") {
    if (litros <= 20) {
      precoTotal = litros * precoGasolina * 0.96;
    } else {
      precoTotal = litros * precoGasolina * 0.94;
    }
  }
  
  console.log(`O valor a ser pago é R$ ${precoTotal.toFixed(2)}`);
  
  }

  //Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
//dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
//das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
//novo com a mulher mais velha. 
function calcularIdade(){
    const idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
  const idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem:"));
  const idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
  const idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));
  let maisVelho;
  if (idadeHomem1 > idadeHomem2) {
    maisVelho = idadeHomem1;
  } else {
    maisVelho = idadeHomem2;
  }
  let maisNova;
  if (idadeMulher1 < idadeMulher2) {
    maisNova = idadeMulher1;
  } else {
    maisNova = idadeMulher2;
  }
  const soma = maisVelho + maisNova;
  const produto = (idadeHomem1 < idadeHomem2 ? idadeHomem1 : idadeHomem2) * (idadeMulher1 > idadeMulher2 ? idadeMulher1 : idadeMulher2);
  alert(`A soma da idade do homem mais velho com a mulher mais nova é ${soma}.\nO produto da idade do homem mais novo com a mulher mais velha é ${produto}.`);
  
  }

  //Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//Até 5 Kg Acima de 5 Kg
//Morango R$ 2,50 por Kg R$ 2,20 por Kg
//Maçã R$ 1,80 por Kg R$ 1,50 por Kg
//Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
//ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
//morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 
function precoFrutas(){
    let kgMorango = parseFloat(prompt("Digite a quantidade de morangos em Kg:"));
  let kgMaca = parseFloat(prompt("Digite a quantidade de maçãs em Kg:"));
  
  let precoMorango, precoMaca;
  if (kgMorango <= 5) {
    precoMorango = 2.5;
  } else {
    precoMorango = 2.2;
  }
  
  if (kgMaca <= 5) {
    precoMaca = 1.8;
  } else {
    precoMaca = 1.5;
  }
  
  let totalCompra = (kgMorango * precoMorango) + (kgMaca * precoMaca);
  
  if (kgMorango + kgMaca > 8 || totalCompra > 25) {
    totalCompra *= 0.9;
  }
  
  alert("O valor total da compra é R$ " + totalCompra.toFixed(2));
  }

  //Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
//diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
//mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
//esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
//senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’
function acessoUsuario(){
    let codigo = prompt("Digite o código de usuário: ");
  
  if (codigo != "1234") {
    alert("Usuário inválido!");
  } else {
    let senha = prompt("Digite a senha: ");
    if (senha != "9999") {
      alert("Senha incorreta! " + "Acesso negado!");
    } else {
      alert("Senha correta! " + "Acesso permitido!");
    }
  }
  }

//   Para A = V, B = V e C = F, qual o resultado da avaliação das seguintes expressões: 
function avaliarExpressao(){
  let a = true
let b = true
let c = false

console.log (a || c && b ^ a && !b)
}

  //Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
//unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
//a pagar (total a pagar = total - desconto), sabendo-se que:
//- Se quantidade <= 5 o desconto será de 2%
//- Se quantidade > 5 e quantidade <=10 o desconto será de 3%
//- Se quantidade > 10 o desconto será de 5%
function calcularDesconto(){
    let descricao = prompt("Digite a descrição do produto:");
    let quantidade = Number(prompt("Digite a quantidade adquirida:"));
    let precoUnitario = Number(prompt("Digite o preço unitário:"));
  
    let total = quantidade * precoUnitario;
    let desconto;
  
    if (quantidade <= 5) {
      desconto = total * 0.02;
    } else if (quantidade <= 10) {
      desconto = total * 0.03;
    } else {
      desconto = total * 0.05;
    }
  
    let totalAPagar = total - desconto;
  
    console.log(`Descrição do produto: ${descricao}`);
    console.log(`Quantidade adquirida: ${quantidade}`);
    console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
    console.log(`Total: R$ ${total.toFixed(2)}`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Total a pagar: R$ ${totalAPagar.toFixed(2)}`);
  }