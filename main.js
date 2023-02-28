
// Modulo javascript moderno:
// TEMPLATE LITERALS
// const normalSum = (a, b) => a + b


// console.log(`soma: ${normalSum(1, 2)}`)

// const double = (n)=>`O dobro de ${n} é ${n*2}`

// const numero = 10
// console.log(double(numero))

// DESESTRUTURAÇÃO DE OBJETOS E ARRAYS
// só deixar mais legível o código , criando uma variável ,etc ( não sei explicar direito kkkk)
// const nomes =['Mauricio','Clarissa','Katia','Marcelo','MAcaCo']

// const nomes_comM = nomes.filter(nome=>nome[0]==='K' || nome[1]==='l'|| nome[2]==='r')

// console.log(nomes_comM)


// const person = {
//     name: "Mauricio",
//     job: "programador",
//     parents: ["Katia", "Mauro"]
// }

// const name = person.name

// const { job, parents } = person

// console.log(name, job, parents)


//   const pessoa ={
//     nome:"Mauricio",
//     pais:"Brasil",
//     profissão:"desenvolvedor"
//   }

// const {nome,pais,profissão}=pessoa
//   console.log(nome)

// OPERADOR SPREAD
// ele separa por linhas invisíveis o resultado e no array ele cria um outro array como se fosse um '.map' podendo juntar dois arrays assim tendo um novo array.

// const hello = 'hello world'
// const arr = [1,2,3,4,5,6,7]

// console.log(hello)
// console.log(...hello)
// console.log(arr)
// console.log(...arr)


// const towns = ['santos','saopaulo','roberto','ernesto']

// const townsCLone = [...towns]

// townsCLone.push('mauricio')

// console.log({towns,townsCLone})

// REST PARAMS
// ele usa o operador spread como aprendi anteriormente e você pode usar propriedades que só poderia usar com arrays porém com o operador spread você consegue usando uma função também

// function sum (...numbers){
//     return numbers.reduce((accum,num)=>accum+num,0)
// }

// console.log(sum(1,2,3,4,5)) 

// ENCADEAMENTO OPCIONAL  (.?)
// resumindo: ele não da erro no console e retorna undefined. Ele faz uma verificação antes.

// const user = {
//     name: "John Doe",
//     email: "doejohn@email.com",
//     friends: [{
//       name: "Mary",
//       address: {
//         street: "Some Street",
//         number: 89
//       }
//     }],
//     age: 42,
//     phone: {
//       countryCode: "+55",
//       ddd: "22",
//       number: "998765432"
//     }
//   }

//   console.log(user?.friends[0]?.phone?.ddd)//undefined
//   console.log(user?.brother?.length)//undefined

// OPERADOR DE COALESCÊNCIA NULA

// let a = 0

// let b = a || 42

// console.log({ a, b })

// b = a ?? 42

// console.log({a, b})

// let c = false ?? 42

// console.log({c})

//                                      :::EXERCICIOS:::

// 1-)Função média simples:

// const media = (...numbers)=>{
//     const soma  = numbers.reduce((acumulador,num)=>acumulador+num,0)
//     return soma/numbers.length
// }
// console.log(`A média aritmética é: ${media(5,5,5)}`)

// 2-)Função média ponderada:

// const weightedAverage = (...entries) => {
//     const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
//     const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
//     return sum / weightSum
//   }

//   console.log(`Média Ponderada: ${weightedAverage(
//     { number: 9, weight: 3 },
//     { number: 7 },
//     { number: 10, weight: 1 },
//   )}`)

// 3-)Mediana
// const median = (...numbers) => {
//     const orderedNumbers = [...numbers].sort((a, b) => a - b)

//     const middle = Math.floor(orderedNumbers.length / 2)
//     if (orderedNumbers.length % 2 !== 0) {//impar

//         return orderedNumbers[middle]
//     }
//     const firstMedian = orderedNumbers[middle - 1]
//     const secondMedian = orderedNumbers[middle]

//     return media(firstMedian,secondMedian)

// }
// console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
// console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

// // 4-) moda

// const mode = (...numbers) => {
//     // [ [n, qtd], [n, qtd], [n, qtd] ]
//     const quantities = numbers.map(num => [
//       num,
//       numbers.filter(n => num === n).length
//     ])
//     quantities.sort((a, b) => b[1] - a[1])
//     return quantities[0][0]
//   }
  
//   console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)