var q1Ans = document.querySelectorAll('.q1');
var q2Ans = document.querySelectorAll('.q2');
var q3Ans = document.querySelectorAll('.q3');
var q4Ans = document.querySelectorAll('.q4');
var q5Ans = document.querySelectorAll('.q5');
var q6Ans = document.querySelectorAll('.q6');

for (var i = 0;  i < q1Ans.length; i++ ){
  q1Ans[i].addEventListener('change',function () {
  document.querySelector('#showAnsq1').innerText = 'Answer: c) KeysightCare';
  document.querySelector('#showAnsq1').style.display = 'block';
});
}


//----

for (var i = 0;  i < q2Ans.length; i++ ){
  q2Ans[i].addEventListener('change',function () {
  document.querySelector('#showAnsq2').innerText = 'Answer: d) Keysight have >500 products listed, and these are updated on a regular basis';
  document.querySelector('#showAnsq2').style.display = 'block';
});
}

//-----


for (var i = 0;  i < q3Ans.length; i++ ){
  q3Ans[i].addEventListener('change',function () {
  document.querySelector('#showAnsq3').innerText = 'Answer: b) Technology Refresh';
  document.querySelector('#showAnsq3').style.display = 'block';
});
}

//-----


for (var i = 0;  i < q4Ans.length; i++ ){
  q4Ans[i].addEventListener('change',function () {
  document.querySelector('#showAnsq4').innerText = 'Answer: e) Financial Services';
  document.querySelector('#showAnsq4').style.display = 'block';
});
}

//-----


for (var i = 0;  i < q5Ans.length; i++ ){
  q5Ans[i].addEventListener('change',function () {
  document.querySelector('#showAnsq5').innerText = 'Answer: e) All of the above';
  document.querySelector('#showAnsq5').style.display = 'block';
});
}

//-----

for (var i = 0;  i < q6Ans.length; i++ ){
  q6Ans[i].addEventListener('change',function () {
  document.querySelector('#showAnsq6').innerText = 'Answer: d) Test-as-a-Service';
  document.querySelector('#showAnsq6').style.display = 'block';
});
}

//-----