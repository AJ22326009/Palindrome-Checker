const textElement=document.getElementById('text-input');
const checkBtn=document.getElementById('check-btn');
const resultShowElement=document.getElementById('result');
const form=document.getElementById('form');

function formatText(str){
  return str.replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
}

function reverseSpelling(str){
  const arr=str.split('');
  const arrReversed=arr.reverse();
  const strReversed=arrReversed.join('');

  return strReversed;
}

form.addEventListener('submit',(event)=>{
  event.preventDefault();

  const textValue=textElement.value;
  textElement.value='';
  if(textValue===''){
    alert('Please input a value');
    return;
  }
  
  const formated=formatText(textValue);
  const reversed=reverseSpelling(formated);

  resultShowElement.style.display='block';
  if(formated==reversed){
    resultShowElement.style.color='green';
    resultShowElement.innerText=`${textValue} is a palindrome.`
  }else{
    resultShowElement.style.color='red';
    resultShowElement.innerText=`${textValue} is not a palindrome.`
  }
  
});