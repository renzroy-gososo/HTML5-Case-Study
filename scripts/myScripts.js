  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  function plusDivs2(n) {
    showDivs2(slideIndex2 += n);
  }
  function plusDivs3(n) {
    showDivs3(slideIndex3 += n);
  }
  function showDivs(n) {
   var i;
   var x = document.getElementsByClassName("mySlides");
   if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
  function showDivs2(n) {
   var i;
   var x = document.getElementsByClassName("mySlides2");
   if (n > x.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = x.length} ;
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex2-1].style.display = "block";  
  }
  function showDivs3(n) {
   var i;
   var x = document.getElementsByClassName("mySlides3");
   if (n > x.length) {slideIndex3 = 1}    
    if (n < 1) {slideIndex3 = x.length} ;
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex3-1].style.display = "block";  
  }


function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

function w3_close() {
    mySidebar.style.display = "none";
}
  //Set 1 Question 1
  function checkNumeratorQ1(){ 
    var numerator1 = document.getElementById('txtNumerator1').value;
    var numerator1TrueColor = document.getElementById('txtNumerator1').style.backgroundColor = "orange";

    numerator1 === "1" ? numerator1TrueColor : document.getElementById('txtNumerator1').style.backgroundColor = "red";  
    
  }  
  function checkDenominatorQ1(){ 
    var denominator1 = document.getElementById('txtDenominator1').value;
    var denominator1TrueColor = document.getElementById('txtDenominator1').style.backgroundColor = "orange";
    denominator1 === "3" ? denominator1TrueColor : document.getElementById('txtDenominator1').style.backgroundColor = "red";        
  } 
  //Set 1 Question 2
  function checkNumeratorQ2(){ 
    var numerator2 = document.getElementById('txtNumerator2').value;
    var numerator2TrueColor = document.getElementById('txtNumerator2').style.backgroundColor = "orange";

    numerator2 === "2" ? numerator3TrueColor : document.getElementById('txtNumerator2').style.backgroundColor = "red";  
    
  } 
  function checkDenominatorQ2(){ 
    var denominator2 = document.getElementById('txtDenominator2').value;
    var denominator2TrueColor = document.getElementById('txtDenominator2').style.backgroundColor = "orange";
    denominator2 === "5" ? denominator2TrueColor : document.getElementById('txtDenominator2').style.backgroundColor = "red";        
  }
  //Set 1 Question 3
  function checkNumeratorQ3(){ 
    var numerator3 = document.getElementById('txtNumerator3').value;
    var numerator3TrueColor = document.getElementById('txtNumerator3').style.backgroundColor = "orange";
    numerator3 === "4" || numerator3 === "2" ? numerator3TrueColor : document.getElementById('txtNumerator3').style.backgroundColor = "red";  
  }
   
  function checkDenominatorQ3(){ 
    var denominator3 = document.getElementById('txtDenominator3').value;
    var denominator3TrueColor = document.getElementById('txtDenominator3').style.backgroundColor = "orange";
    denominator3 === "6" || denominator3 === "3"  ? denominator3TrueColor : document.getElementById('txtDenominator3').style.backgroundColor = "red";        
  }
  //Set 2 Question 1
  function checkNumeratorQ4(){ 
    var numerator4 = document.getElementById('txtNumerator4').value;
    var numerator4TrueColor = document.getElementById('txtNumerator4').style.backgroundColor = "orange";
    numerator4 === "1" ? numerator4TrueColor : document.getElementById('txtNumerator4').style.backgroundColor = "red";  
  }
   
  function checkDenominatorQ4(){ 
    var denominator4 = document.getElementById('txtDenominator4').value;
    var denominator4TrueColor = document.getElementById('txtDenominator4').style.backgroundColor = "orange";
    denominator4 === "17" ? denominator4TrueColor : document.getElementById('txtDenominator4').style.backgroundColor = "red";        
  }  
  //Set 2 Question 2
  function checkNumeratorQ5(){ 
    var numerator5 = document.getElementById('txtNumerator5').value;
    var numerator5TrueColor = document.getElementById('txtNumerator5').style.backgroundColor = "orange";
    numerator5 === "5" ? numerator5TrueColor : document.getElementById('txtNumerator5').style.backgroundColor = "red";  
  }
   
  function checkDenominatorQ5(){ 
    var denominator5 = document.getElementById('txtDenominator5').value;
    var denominator5TrueColor = document.getElementById('txtDenominator5').style.backgroundColor = "orange";
    denominator5 === "8" ? denominator5TrueColor : document.getElementById('txtDenominator5').style.backgroundColor = "red";        
  }
  //Set 2 Question 3
  function checkNumeratorQ6(){ 
    var numerator6 = document.getElementById('txtNumerator6').value;
    var numerator6TrueColor = document.getElementById('txtNumerator6').style.backgroundColor = "orange";
    numerator6 === "62" ? numerator5TrueColor : document.getElementById('txtNumerator6').style.backgroundColor = "red";  
  }
   
  function checkDenominatorQ6(){ 
    var denominator6 = document.getElementById('txtDenominator6').value;
    var denominator6TrueColor = document.getElementById('txtDenominator6').style.backgroundColor = "orange";
    denominator6 === "100" ? denominator6TrueColor : document.getElementById('txtDenominator6').style.backgroundColor = "red";        
  }
  //Set 3 Question 1
  function checkMixWholeNumQ1(){ 
    var mixWholeNum1 = document.getElementById('txtMixWholeNum1').value;
    var mixWholeNum1TrueColor = document.getElementById('txtMixWholeNum1').style.backgroundColor = "orange";
    mixWholeNum1 === "2" ? mixWholeNum1TrueColor : document.getElementById('txtMixWholeNum1').style.backgroundColor = "red";        
  }
  function checkMixNumeratorQ1(){ 
    var mixNumerator1 = document.getElementById('txtMixNumerator1').value;
    var mixNumerator1TrueColor = document.getElementById('txtMixNumerator1').style.backgroundColor = "orange";
    mixNumerator1 === "3" ? mixNumerator1TrueColor : document.getElementById('txtMixNumerator1').style.backgroundColor = "red";        
  }
  function checkMixDenominatorQ1(){ 
    var mixDenuminator1 = document.getElementById('txtMixDenominator1').value;
    var mixDenuminator1TrueColor = document.getElementById('txtMixDenominator1').style.backgroundColor = "orange";
    mixDenuminator1 === "5" ? mixDenuminator1TrueColor : document.getElementById('txtMixDenominator1').style.backgroundColor = "red";        
  }
  //Set 3 Question 2
  function checkMixWholeNumQ2(){ 
    var mixWholeNum2 = document.getElementById('txtMixWholeNum2').value;
    var mixWholeNum2TrueColor = document.getElementById('txtMixWholeNum2').style.backgroundColor = "orange";
    mixWholeNum2 === "1" ? mixWholeNum2TrueColor : document.getElementById('txtMixWholeNum2').style.backgroundColor = "red";        
  }
  function checkMixNumeratorQ2(){ 
    var mixNumerator2 = document.getElementById('txtMixNumerator2').value;
    var mixNumerator2TrueColor = document.getElementById('txtMixNumerator2').style.backgroundColor = "orange";
    mixNumerator2 === "2" ? mixNumerator2TrueColor : document.getElementById('txtMixNumerator2').style.backgroundColor = "red";        
  }
  function checkMixDenominatorQ2(){ 
    var mixDenuminator2 = document.getElementById('txtMixDenominator2').value;
    var mixDenuminator2TrueColor = document.getElementById('txtMixDenominator2').style.backgroundColor = "orange";
    mixDenuminator2 === "3" ? mixDenuminator2TrueColor : document.getElementById('txtMixDenominator2').style.backgroundColor = "red";        
  }
  //Set 3 Question 3
  function checkMixWholeNumQ3(){ 
    var mixWholeNum3 = document.getElementById('txtMixWholeNum3').value;
    var mixWholeNum3TrueColor = document.getElementById('txtMixWholeNum3').style.backgroundColor = "orange";
    mixWholeNum3 === "3" ? mixWholeNum3TrueColor : document.getElementById('txtMixWholeNum3').style.backgroundColor = "red";        
  }
  function checkMixNumeratorQ3(){ 
    var mixNumerator3 = document.getElementById('txtMixNumerator3').value;
    var mixNumerator3TrueColor = document.getElementById('txtMixNumerator3').style.backgroundColor = "orange";
    mixNumerator3 === "1" ? mixNumerator3TrueColor : document.getElementById('txtMixNumerator3').style.backgroundColor = "red";        
  }
  function checkMixDenominatorQ3(){ 
    var mixDenuminator3 = document.getElementById('txtMixDenominator3').value;
    var mixDenuminator3TrueColor = document.getElementById('txtMixDenominator3').style.backgroundColor = "orange";
    mixDenuminator3 === "2" ? mixDenuminator3TrueColor : document.getElementById('txtMixDenominator3').style.backgroundColor = "red";        
  }
  //Set 4 Question 1
  function checkNumeratorQ7(){ 
    var numerator7 = document.getElementById('txtNumerator7').value;
    var numerator7TrueColor = document.getElementById('txtNumerator7').style.backgroundColor = "orange";
    numerator7 === "6" ? numerator7TrueColor : document.getElementById('txtNumerator7').style.backgroundColor = "red";  
  }
   
  function checkDenominatorQ7(){ 
    var denominator7 = document.getElementById('txtDenominator7').value;
    var denominator7TrueColor = document.getElementById('txtDenominator7').style.backgroundColor = "orange";
    denominator7 === "6" ? denominator6TrueColor : document.getElementById('txtDenominator7').style.backgroundColor = "red";        
  }
  //Set 4 Question 2
  function checkNumeratorQ8(){ 
    var numerator8 = document.getElementById('txtNumerator8').value;
    var numerator8TrueColor = document.getElementById('txtNumerator8').style.backgroundColor = "orange";
    numerator8 === "3" ? numerator8TrueColor : document.getElementById('txtNumerator8').style.backgroundColor = "red";  
  }
   
  function checkDenominatorQ8(){ 
    var denominator8 = document.getElementById('txtDenominator8').value;
    var denominator8TrueColor = document.getElementById('txtDenominator8').style.backgroundColor = "orange";
    denominator8 === "3" ? denominator8TrueColor : document.getElementById('txtDenominator8').style.backgroundColor = "red";        
  }
  //Set 4 Question 2
  function checkNumeratorQ9(){ 
    var numerator9 = document.getElementById('txtNumerator9').value;
    var numerator9TrueColor = document.getElementById('txtNumerator9').style.backgroundColor = "orange";
    numerator9 === "8" ? numerator9TrueColor : document.getElementById('txtNumerator9').style.backgroundColor = "red";  
  }
   
  function checkDenominatorQ9(){ 
    var denominator9 = document.getElementById('txtDenominator9').value;
    var denominator9TrueColor = document.getElementById('txtDenominator9').style.backgroundColor = "orange";
    denominator9 === "8" ? denominator9TrueColor : document.getElementById('txtDenominator9').style.backgroundColor = "red";        
  }
  //Part 2 Question 1

  function checkPart2Numerator1(){ 
    var numerator1 = document.getElementById('txtPart2Numerator1').value;
    var numerator1TrueColor = document.getElementById('txtPart2Numerator1').style.backgroundColor = "orange";
    numerator1 === "5" ? numerator1TrueColor : document.getElementById('txtPart2Numerator1').style.backgroundColor = "red";        
  }
  function checkPart2Denominator1(){ 
    var denominator1 = document.getElementById('txtPart2Denominator1').value;
    var denominator1TrueColor = document.getElementById('txtPart2Denominator1').style.backgroundColor = "orange";
    denominator1 === "7" ? denominator1TrueColor : document.getElementById('txtPart2Denominator1').style.backgroundColor = "red";        
  }