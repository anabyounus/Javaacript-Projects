function calculateResult(){
    let userNumber = document.getElementById('Number').value
    let percentage = userNumber/750*100;
    if (percentage >= 80) {
        alert("You Got A+ Congrats")
    }
    else if(percentage >= 70 ){
        alert("You Got A Congrats")
    }
    else if (percentage >= 60 ){
        alert("You Got B Congrats")
    }
    else if(percentage >= 50 ){
        alert("You Got C Congrats")
    }
    else if (percentage >= 0 ){
        alert("You Got F Need  Work Hard")
    }
    
    
    console.log(userNumber)
    console.log(percentage)
    }