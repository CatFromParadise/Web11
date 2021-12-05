let dictionary = [{
    eng: "Name",
    rus: "Имя"
},
{
    eng: "Surname",
    rus: "Фамилия"
},
{
    eng: "Sailor",
    rus: "Моряк"
},
{
    eng: "Hairdresser",
    rus: "Парикмахер"
},{
    eng: "Violin",
    rus: "Скрипка"
},{
    eng: "Arch",
    rus: "Арка"
},{
    eng: "Bench",
    rus: "Лавка"
},{
    eng: "Bridge",
    rus: "Мост"
},{
    eng: "Gate",
    rus: "Ворота"
},{
    eng: "Memorial",
    rus: "Памятник"
},{
    eng: "Flower-bed",
    rus: "Клумба"
},{
    eng: "Market",
    rus: "Базар"
}];

let right = 0;
let wrong = 0;
let currentWord = dictionary.splice(Math.floor(Math.random()*dictionary.length), 1)[0];
console.log(currentWord)
$("div.word").html(currentWord.eng)
$("input.userInput").on("keypress", (e) => {
    if(e.which === 13){
        console.dir(e.currentTarget.value)
        if(currentWord.rus.toLowerCase() === e.currentTarget.value.toLowerCase()){
            right++;
        }else{
            wrong++;
        }
        currentWord = dictionary.splice(Math.floor(Math.random()*dictionary.length), 1)[0];
        $("div.word").html(currentWord.eng)
        console.log(right, wrong)
        document.getElementById("right").innerHTML=right;
        document.getElementById("wrong").innerHTML=wrong;
        if(right+wrong==10){
            if(right>=7)
            alert("You finished this test with "+right+" right answers & "+wrong+" wrong answers! Congrats!");
             else
             alert("You finished this test with "+right+" right answers & "+wrong+" wrong answers! Try better, it's a shame result!");
            location.reload();
        }
        increaseProgress();
        e.currentTarget.value="";
    }

})
var myBar = document.getElementById('my-progress-bar'), labelBar = document.getElementById('progress-label');
let increaseProgress = function() {
    myBar.value += 20;
    myBar.innerHTML = myBar.value/2+'%';
    myBar.value < 200 ? labelBar.innerHTML = myBar.value/2+'%': 
           (labelBar.innerHTML = '100%. Максимум.', increaseBtn.hidden = true ); 
}

