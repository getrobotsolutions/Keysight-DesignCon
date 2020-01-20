var q1Ans = document.querySelectorAll('.q1');
var q2Ans = document.querySelectorAll('.q2');
var q3Ans = document.querySelectorAll('.q3');
var q4Ans = document.querySelectorAll('.q4');
var q5Ans = document.querySelectorAll('.q5');
var q6Ans = document.querySelectorAll('.q6');

for (var i = 0;  i < q1Ans.length; i++ ){
  q1Ans[i].addEventListener('change',function () {
  document.querySelector('#showAnsq1').style.color = 'unset';
  document.querySelector('#showAnsq1').innerText = 'Answer: c) KeysightCare';
  document.querySelector('#showAnsq1').style.display = 'block';
  document.querySelector('#showAnsq1').style.color = '#e80028';
});
}


//----

for (var i = 0;  i < q2Ans.length; i++ ){
  q2Ans[i].addEventListener('change',function () {
    document.querySelector('#showAnsq2').style.color = 'unset';
  document.querySelector('#showAnsq2').innerText = 'Answer: d) Keysight have >500 products listed, and these are updated on a regular basis';
  document.querySelector('#showAnsq2').style.display = 'block';
  document.querySelector('#showAnsq2').style.color = '#e80028';
});
}

//-----


for (var i = 0;  i < q3Ans.length; i++ ){
  q3Ans[i].addEventListener('change',function () {
    document.querySelector('#showAnsq3').style.color = 'unset';
  document.querySelector('#showAnsq3').innerText = 'Answer: b) Technology Refresh';
  document.querySelector('#showAnsq3').style.display = 'block';
  document.querySelector('#showAnsq3').style.color = '#e80028';
});
}

//-----


for (var i = 0;  i < q4Ans.length; i++ ){
  q4Ans[i].addEventListener('change',function () {
    document.querySelector('#showAnsq4').style.color = 'unset';
  document.querySelector('#showAnsq4').innerText = 'Answer: e) Financial Services';
  document.querySelector('#showAnsq4').style.display = 'block';
  document.querySelector('#showAnsq4').style.color = '#e80028';
});
}

//-----


for (var i = 0;  i < q5Ans.length; i++ ){
  q5Ans[i].addEventListener('change',function () {
    document.querySelector('#showAnsq5').style.color = 'unset';
  document.querySelector('#showAnsq5').innerText = 'Answer: e) All of the above';
  document.querySelector('#showAnsq5').style.display = 'block';
  document.querySelector('#showAnsq5').style.color = '#e80028';
});
}

//-----

for (var i = 0;  i < q6Ans.length; i++ ){
  q6Ans[i].addEventListener('change',function () {
    document.querySelector('#showAnsq6').style.color = 'unset';
  document.querySelector('#showAnsq6').innerText = 'Answer: d) Test-as-a-Service';
  document.querySelector('#showAnsq6').style.display = 'block';
  document.querySelector('#showAnsq6').style.color = '#e80028';
});
}

//-----

/*-------Green Right Answers--------*/
var rightq1 = document.querySelector('.rightq1');
var rightq2 = document.querySelector('.rightq2');
var rightq3 = document.querySelector('.rightq3');
var rightq4 = document.querySelector('.rightq4');
var rightq5 = document.querySelector('.rightq5');
var rightq6 = document.querySelector('.rightq6');

 rightq1.addEventListener('change',function () {
  document.querySelector('#showAnsq1').style.color = 'unset';
  document.querySelector('#showAnsq1').innerText = 'Answer: c) KeysightCare';
  document.querySelector('#showAnsq1').style.display = 'block';
  document.querySelector('#showAnsq1').style.color = 'green';
});


  rightq2.addEventListener('change',function () {
  document.querySelector('#showAnsq2').style.color = 'unset';
  document.querySelector('#showAnsq2').innerText = 'Answer: d) Keysight have >500 products listed, and these are updated on a regular basis';
  document.querySelector('#showAnsq2').style.display = 'block';
  document.querySelector('#showAnsq2').style.color = 'green';
});


   rightq3.addEventListener('change',function () {
  document.querySelector('#showAnsq3').style.color = 'unset';
  document.querySelector('#showAnsq3').innerText = 'Answer: b) Technology Refresh';
  document.querySelector('#showAnsq3').style.display = 'block';
  document.querySelector('#showAnsq3').style.color = 'green';
});


    rightq4.addEventListener('change',function () {
  document.querySelector('#showAnsq4').style.color = 'unset';
  document.querySelector('#showAnsq4').innerText = 'Answer: e) Financial Services';
  document.querySelector('#showAnsq4').style.display = 'block';
  document.querySelector('#showAnsq4').style.color = 'green';
});

     rightq5.addEventListener('change',function () {
  document.querySelector('#showAnsq5').style.color = 'unset';
  document.querySelector('#showAnsq5').innerText = 'Answer: e) All of the above';
  document.querySelector('#showAnsq5').style.display = 'block';
  document.querySelector('#showAnsq5').style.color = 'green';
});

      rightq6.addEventListener('change',function () {
  document.querySelector('#showAnsq6').style.color = 'unset';
  document.querySelector('#showAnsq6').innerText = 'Answer: d) Test-as-a-Service';
  document.querySelector('#showAnsq6').style.display = 'block';
  document.querySelector('#showAnsq6').style.color = 'green';
});