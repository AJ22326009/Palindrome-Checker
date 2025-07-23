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