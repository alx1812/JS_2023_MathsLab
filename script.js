//alert('Hello')

//confirm ('Вы учите JS')

//prompt("Какой язык вы учите", "пока не в курсе")

//let a = 5

//const b = 12

//const str1 = `Hello`

// typeof(str1)

// 'I\'m ok \n вторая строка'

// `I'am say ${str1}
// еще что-то `

// alert(`Hello`)

//+ соединяет строку, если в слагаемых есть строка

//STRING
//NUMBER
//BIGINT const biginteger = 1238971289372189n
//BOOLEAN true false > < >= <= >== <== == ===
//NULL
//UNDERFINED
//SYMBOL const uniq = Symbol('id')
//OBJECT const obj = {name: "Саша", age: 19, isHappy:true}
//obj.job = "Google"
//obj.name   obj['name']
//console.log(obj)
//const нельзя переопределять но можно менять
//const array = ["Аня", False, 22]

//prototype

// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')

// //console.log(span)
// //console.log(span.innerHTML)

// const skillText = prompt("Какой язык вы учите?", "пока не в курсе")
// const isLoveValue = confirm('вы любите изучаемый язык')

// isLove.innerText = skillText
// skill.innerText = isLoveValue

//span.innerText = skilltText

//String(15)     15+""
//Number('15')   +"15"
//Boolean(15)

//const go = confirm ("Будем бегать?")
//if (условие) {действие} else if (другое условие) {другое действие} else {другое действие}
// || или возвращает первое истинное или последнее
// && И
//% остаток от деления
//! отрицание

//while(условие) {тело цикла}
// i = i + 1     i += 1    i++

//do {тело} while (условие) - выполняется хотя бы раз

//const arr = [4,5,6]
//arr[3] = 7
//или arr.push(7)

//объявленная переменная видна только внутри цикла
//for (let i = 0; i =50; i++) {тело}
//или for( item of arr) {тело где можно обратиться к переменной item (или другое имя) внутри тела могут объявляться константы и переменые}

// console.log(scream(10,50))

// //FUNCTION

// //declaration - можно использовать до объявления в коде т.е. выше
// function scream(a,b) {
//     // const result = a*b
//     // return result
//     return a*b
// }
// //expression
// const wowScream = function() {
//     alert("WOOOOW")
// }
// //arrow
// const arrow = () => {
// alert("arrow in the sky")
// }

// // scream()
// // wowScream()
// // arrow()

// //console.log(scream(10,5))

//ИГРА
//нажав на кнопку нажать появляется пример и начинается игра
//появляется пример, пользователь может ввести пример
//кнопка меняется на проверить
//нажал кнопку проверить
//сравниваем ввод пользоваетеля с правильным результаттом
//вывести информацию о правильности ответа
//кнопка меняется на начать игру

const getRandomNumInRange = (min,max) => {
    return (Math.random() * (max - min) + min).toFixed(0)
}

const getTask= () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)
    // let symbol
    // if(Math.random() > 0.5)
    //     {symbol = "+"}
    // else
    //     {symbol = "-"}
    const symbol = (Math.random()>0,5) ? "+" : "-"
    task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task   
}

const toggleGameState = () => 
{
    gameState.taskInProgress = !gameState.taskInProgress
}

const isPlus = Math.random() > 0.5

const gameElements = document.getElementById("my_game").children

const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProgress: false,
    rightAnswer: null
}

//btnGame.onclick = () => {
const startGameFunc = () => {
    if(!gameState.taskInProgress){
        //const task = getTask()
        title.innerText = "Игра началась"
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerHTML = "Проверить!"
        toggleGameState()
        userAnswer.value = null
    }
    else
    {
        const isRight = gameState.rightAnswer == userAnswer.value 
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        btnGame.innerHTML = "Начать заново!"
        toggleGameState()
    }

} 

btnGame.addEventListener("click", startGameFunc)

userAnswer.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startGameFunc()

    }
    else if (e.key === "Escape") {
        userAnswer.blur()
    }
}
)

// if(isPlus) {gameElements[1].innerText = `${randomValue1} + ${randomValue2}`}
// else { gameElements[1].innerText = `${randomValue1} - ${randomValue2}` }

// console.log(gameElements)

//console.log(document);
//console.dir(document)

//const choosedId = document.querySelectorAll(".my_game")
//const choosedId = document.querySelectorAll("#my_game h2")
//console.log(choosedId[0])

const choosedEl = document.querySelectorAll(".choosed_blocks-container > div")
//console.log(choosedEl.length)
const counterEl = document.querySelector(".choosed_blocks span")

const choosedState = {
    countElements: 0,
    setCountValue (value) {
        this.countElements += value
        counterEl.innerText = this.countElements 
    }
}

const eventFunc = (e) => {
        //console.log("клик")
        //choosedEl[i].className = "choosed_element"
        //console.log(e)
        //e.target.className = "choosed_element"
        //counterEl.innerText = + counterEl.innerText + 1
        if (e.target.className === "") {
            e.target.className = "choosed_element"
            choosedState.setCountValue(1)
            //counterEl.innerText = + counterEl.innerText + 1  
        }
        else {
            e.target.className = ""
            choosedState.setCountValue(-1)
            //counterEl.innerText = counterEl.innerText - 1 
        }
}

for (let i = 0; i<choosedEl.length; i++)
{
    choosedEl[i].addEventListener("click", eventFunc)
}

//choosedEl[2].removeEventListener("click", eventFunc)