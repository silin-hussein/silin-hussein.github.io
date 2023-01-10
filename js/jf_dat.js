const userInput = document.getElementById('input');
const output = document.getElementById('output');
const button1 = document.getElementById('button1');
button1.addEventListener('click', inputTextbox);



function inputTextbox() {
    let text = userInput.value;
    if (/[A-Z, a-z, \[, \]]/.test(text)) {
        output.innerHTML = 'invalid characters';
    }else{
        output.innerHTML = eval(text)
    }
    
    for(let i = 0; i < 100; ++i){
        console.log(eval(i^3));
    }
}




