function rand(min,max) {
    return Math.floor(Math.random() * (max-min)+min)
}
let all = +prompt('введите кол-во примеров')

for(let i=0; i<all; i++){
    let one= rand(1,100)
    let two= rand(1,100)
    let symbol = rand (1,4)
    let answer = 0
    
    if(symbol == 1){
       answer= one+two
       symbol = '+'
    } else if(symbol == 2){
        answer= one-two
       symbol = '-'
    }else if(symbol == 3){
        answer= one*two
       symbol = '*'
} else{
    answer= one/two
    symbol = '/'
}
let ans =+prompt(one+symbol+two+ '=')
if(ans == one+two){
    console.log('вы ввели правильно! ' + one +symbol +two + '=' + ans );
} else{
    console.log('вы ввели не правильно! ' + one +symbol +two + '=' + ans + 'правельный ответ : ' + one+two );
}

}

