

const markDownInput = document.getElementById('markdown-text');
const resetBtn = document.getElementById('resetText');
const outputText = document.querySelector('.output-text');

function content(){
    outputText.innerHTML = marked.parse(markDownInput.value)
    // console.log('hey how are you')
}

markDownInput.addEventListener('input',content);

resetBtn.addEventListener('click',()=>{
    outputText.innerHTML='';
    markDownInput.value='';
})