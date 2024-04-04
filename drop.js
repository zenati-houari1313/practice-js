var step = 1;
const pages = document.querySelectorAll(".page");
const mainBtn = document.getElementById("main-btn");
const secondBtn = document.getElementById("second-btn");
const thirdBtn1 = document.getElementById("third-btn1");
const thirdBtn2 = document.getElementById("third-btn2");
const thirdBtn3 = document.getElementById("third-btn3");
const forthBtn = document.getElementById("forth-btn");
const fifthBtn = document.getElementById("fifth-btn");
const sixthBtn = document.getElementById("sixth-btn");
const seventhBtn = document.getElementById("btn7");
const eighthBtn = document.getElementById("btn8");
const ninethbtn1=document.getElementById("btn91");
const ninethbtn2=document.getElementById("btn92");
const ninethbtn3=document.getElementById("btn93");
const tenthbtn=document.getElementById("btn10");
const eleventhbtn=document.getElementById("btn11");
const twelvethbtn=document.getElementById("btn12");
const thirteenthbtn=document.getElementById("btn13");
const scrollBtn = document.querySelector(".scroll-buttons");




mainBtn.addEventListener("click", function () {
    document.getElementById("second-page").classList.remove("hidden"); 
    scrollBtn.style.opacity = 1;
    
    expandWidth()
});

secondBtn.addEventListener("click", function () {
    document.getElementById("third-page").classList.remove("hidden");
  expandWidth()
});

thirdBtn1.addEventListener("click", function () {
    document.getElementById("forth-page").classList.remove("hidden");
    expandWidth()
   
});

thirdBtn2.addEventListener("click", function () {
    document.getElementById("forth-page").classList.remove("hidden");
    expandWidth()
});
thirdBtn3.addEventListener("click", function () {
    document.getElementById("forth-page").classList.remove("hidden");
    expandWidth()
});

forthBtn.addEventListener("click", function () {
    document.getElementById("fifth-page").classList.remove("hidden");
    expandWidth()
    
});
fifthBtn.addEventListener("click", function () {
   
    if (validateInput()) {
        document.getElementById("sixth-page").classList.remove("hidden");
        expandWidth()
      
    }
});
sixthBtn.addEventListener("click", function () {
    
    if (validateInput2()) {
        document.getElementById("seventh-page").classList.remove("hidden");
        expandWidth()
       
    }
});

seventhBtn.addEventListener("click", function () {
   
    if (validateInput3()) {
        document.getElementById("eighth-page").classList.remove("hidden");
        expandWidth()
        
    }
});
eighthBtn.addEventListener("click", function () {
   
    if (validateInput4()) {
        document.getElementById("nineth-page").classList.remove("hidden");
        expandWidth()
     
    }
});
ninethbtn1.addEventListener("click", function () {
    document.getElementById("tenth-page").classList.remove("hidden");
    expandWidth()
  

});
ninethbtn2.addEventListener("click", function () {
    document.getElementById("tenth-page").classList.remove("hidden");
    expandWidth()

});
ninethbtn3.addEventListener("click", function () {
    document.getElementById("tenth-page").classList.remove("hidden");
    expandWidth()

});
tenthbtn.addEventListener("click", function () {
       
    if (validateInput5()) {
        document.getElementById("eleventh-page").classList.remove("hidden");
        expandWidth()
       
    }
    

});
eleventhbtn.addEventListener("click", function () {
    document.getElementById("twelveth-page").classList.remove("hidden");
    expandWidth()

});
twelvethbtn.addEventListener("click", function () {
       
    if (validateInput6()) {
        document.getElementById("thirteenth-page").classList.remove("hidden");
        expandWidth()
       
    }
    

});
thirteenthbtn.addEventListener("click", function () {
       
    if (validateInput7()) {
        document.getElementById("forteenth-page").classList.remove("hidden");
        expandWidth()
       
    }
    

});

function showNextPage(step) {
    switch (step) {
        case 1:
            document.getElementById("second-page").classList.remove("hidden");
            
            onPageChange();

            break;
        case 2:
            document.getElementById("third-page").classList.remove("hidden");

            break;
        case 3:
            document.getElementById("forth-page").classList.remove("hidden");
            break;
        case 4:
           
            document.getElementById("fifth-page").classList.remove("hidden");
            break;
        case 5:
            document.getElementById("fifth-page").classList.remove("hidden");
            document.getElementById("alert").style.opacity=1;
            
            break;
        case 6:
            if (step === 6 && validateInput()) {
                document
                    .getElementById("sixth-page")
                    .classList.remove("hidden");
            }

            break;
        case 7:
            if (step === 7 && validateInput2()) {
                document
                    .getElementById("seventh-page")
                    .classList.remove("hidden");
            }
            case 8:
                if (step === 8 && validateInput3()) {
                    document
                        .getElementById("eighth-page")
                        .classList.remove("hidden");
                }
                break;
                case 9:
                    document.getElementById("nineth-page")
                    .classList.remove("hidden");
                    break;
                    case 10:
                        document
                                    .getElementById("tenth-page")
                                    .classList.remove("hidden");
                   
                        case 11:
                            if (step === 11 && validateInput5()) {
                                document
                                    .getElementById("eleventh-page")
                                    .classList.remove("hidden");
                            }
                            break;



            
    }
}
function showPrevPage(step) {
    addhidden(step);
    switch (step) {
        case 1:
            document.getElementById("main-page").classList.remove("hidden");
            break;
        case 2:
            document.getElementById("second-page").classList.remove("hidden");
            break;
        case 3:
            document.getElementById("third-page").classList.remove("hidden");
            break;
        case 4:
            document.getElementById("forth-page").classList.remove("hidden");
            break;
        case 5:
            document.getElementById("fifth-page").classList.remove("hidden");
            
            break;
        case 6:
            if (step === 6 && validateInput()) {
                document
                    .getElementById("sixth-page")
                    .classList.remove("hidden");
            }
            break;
        case 7:
            document.getElementById("seventh-page").classList.remove("hidden");
            break;
            case 8:
                document.getElementById("eighth-page").classList.remove("hidden");
                break;
        
    }
}

function nextpage() {
    if (step === 7) return;
    step = step + 1;
    showNextPage(step);
}

function prevpage() {
    if (step === 0) return;
    step = step - 1;
    showPrevPage(step);
}

function addhidden(index) {
    pages.forEach((e, i) => {
        if (i == index) return;
        e.classList.add("hidden");
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function () {
    ninethbtn1.addEventListener("click", function () {
        document.getElementById("checkmark3").style.display = 'block';
    });

    ninethbtn2.addEventListener("click", function () {
        document.getElementById("checkmark4").style.display = 'block';
    });

    ninethbtn1.addEventListener("click", function () {
        this.style.border = "2px solid white";
    });

    ninethbtn2.addEventListener("click", function () {
        this.style.border = "2px solid white";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    thirdBtn1.addEventListener("click", function () {
        document.getElementById("checkmark1").classList.remove("hidden2");
    });

    thirdBtn2.addEventListener("click", function () {
        document.getElementById("checkmark2").classList.remove("hidden2");
    });

    thirdBtn2.addEventListener("click", function () {
        this.style.border = "2px solid white";
    });

    thirdBtn1.addEventListener("click", function () {
        this.style.border = "2px solid white";
    });
});
//////////////////functions for forms and scrolling//////////////////////
document.getElementById("myForm").addEventListener("input", validateInput);

fifthBtn.addEventListener("click", function () {
    const result = validateInput();
    if (!result) return;
    document.getElementById("sixth-page").classList.remove("hidden");
});

function validateInput(event) {
    var answer = document.getElementById("answer").value.trim();
    var errorMessage = document.getElementById("errorMessage");
    var fifthBtn = document.getElementById("fifth-btn");

    if (answer === "") {
        errorMessage.style.display = "block";
        fifthBtn.style.display = "none";
        const button = document.getElementById("x");
        button.addEventListener("click", function (event) {
            event.preventDefault();
        });
        return false;
    } else {
        errorMessage.style.display = "none";
        fifthBtn.style.display = "block";
        return true;
    }
}

document.getElementById("myForm2").addEventListener("input", validateInput2);

sixthBtn.addEventListener("click", function () {
    const result = validateInput2();
    if (!result) return;
    document.getElementById("seventh-page").classList.remove("hidden");
});

function validateInput2(event) {
    var answer = document.getElementById("answer2").value.trim();
    var errorMessage = document.getElementById("errorMessage2");
    var sixthBtn = document.getElementById("sixth-btn");

    if (answer === "") {
        errorMessage.style.display = "block";
        sixthBtn.style.display = "none";
        const button = document.getElementById("x");
        button.addEventListener("click", function (event) {
            event.preventDefault();
        });
        return false;
    } else {
        errorMessage.style.display = "none";
        sixthBtn.style.display = "block";
        return true;
    }
}
document.getElementById("myForm3").addEventListener("input", validateInput3);
seventhBtn.addEventListener("click", function () {
    const result = validateInput3();
    if (!result) return;
    document.getElementById("seventh-page").classList.remove("hidden");
});

function validateInput3(event) {
    var answer = document.getElementById("answer3").value.trim();
    var errorMessage = document.getElementById("errorMessage3");
    var btn = document.getElementById("btn7");
    var message4 = document.getElementById("error-message4");

    if (answer === "") {
        errorMessage.style.display = "block";
        btn.style.display = "none";
        message4.style.display = "none";
        return false;
    } else if (!isWebsite(answer)) {

        errorMessage.style.display = "none";
       
        btn.style.display = "block"; 
        btn.addEventListener('click',()=>{
        message4.style.display = "block"; 
        btn.style.display="none"
        })
        return false;
    } else {
        errorMessage.style.display = "none";
        btn.style.display = "block"; 
        message4.style.display = "none"; 
        btn.addEventListener('click',()=>{
        message4.style.display = "none"; 
      
            })
        return true;
    }
}

function isWebsite(input) {
    return input.includes(".com") || input.includes(".net") || input.includes(".org");
}
document.getElementById("countryForm").addEventListener("input", validateInput4);
btn8.addEventListener("click", function () {
  const result = validateInput4();
  if (!result) return;
  document.getElementById("seventh-page").classList.remove("hidden");
});

function validateInput4(event) {
  var answer = document.getElementById("countryInput").value.trim();
  var errorMessage = document.getElementById("error-message5");
  var btn = document.getElementById("btn8");
  
 

  if (answer === "") {
      errorMessage.style.display = "block";
      btn.style.display = "none";
     
      return false;
  }
 else {
      errorMessage.style.display = "none";
      btn.style.display = "block"; 
      btn.addEventListener('click',()=>{
    
          })
      return true;
  }
}
document.getElementById("tell-us-more-form").addEventListener("input", validateInput5);
btn10.addEventListener("click", function () {
    const result = validateInput5();
    if (!result) return;
    document.getElementById("seventh-page").classList.remove("hidden");
});
  function validateInput5(event) {
    var answer = document.getElementById("tell-us-more").value.trim();
    var errorMessage = document.getElementById("error-message2");
    var btn = document.getElementById("btn10");
    
   

    if (answer === "") {
        errorMessage.style.display = "block";
        btn.style.display = "none";
       
        return false;
    }
   else {
        errorMessage.style.display = "none";
        btn.style.display = "block"; 
        btn.addEventListener('click',()=>{
      
            })
        return true;
    }
}
document.getElementById("whats-ur-name").addEventListener("input", validateInput6);
btn12.addEventListener("click", function () {
    const result = validateInput6();
    if (!result) return;
    document.getElementById("thirteenth-page").classList.remove("hidden");
});
  function validateInput6(event) {
    var answer = document.getElementById("ur-name").value.trim();
    var errorMessage = document.getElementById("error-message3");
    var btn = document.getElementById("btn12");
    
   

    if (answer === "") {
        errorMessage.style.display = "block";
        btn.style.display = "none";
       
        return false;
    }
   else {
        errorMessage.style.display = "none";
        btn.style.display = "block"; 
        btn.addEventListener('click',()=>{
      
            })
        return true;
    }
}
document.getElementById("company-website").addEventListener("input", validateInput7);
btn13.addEventListener("click", function () {
    const result = validateInput7();
    if (!result) return;
    document.getElementById("thirteenth-page").classList.remove("hidden");
});
  function validateInput7(event) {
    var answer = document.getElementById("comp-website").value.trim();
    var errorMessage = document.getElementById("error-message5");
    var message = document.getElementById("error-message6");
    var btn = document.getElementById("btn13");
    
   

    if (answer === "") {
        errorMessage.style.display = "block";
        btn.style.display = "none";
        message.style.display = "none";
        return false;
    } else if (!isWebsite(answer)) {

        errorMessage.style.display = "none";
       
        btn.style.display = "block"; 
        btn.addEventListener('click',()=>{
        message.style.display = "block"; 
        btn.style.display="none"
        })
        return false;
    } else {
        errorMessage.style.display = "none";
        btn.style.display = "block"; 
        message.style.display = "none"; 
        btn.addEventListener('click',()=>{
        message.style.display = "none"; 
      
            })
        return true;
    }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


  var countryInput = document.getElementById('countryInput');
  var countryList = document.getElementById('countryList');
  var countryForm = document.getElementById('countryForm');


  function displayCountryList() {
    countryList.innerHTML = '';
    countries.forEach(function(country) {
      var option = document.createElement('div');
      var countryDiv = document.createElement('div');
      countryDiv.textContent = country;
      option.classList.add('countryOption');
      option.appendChild(countryDiv);
      option.addEventListener('click', function() {
        countryInput.value = country;
        countryList.style.display = 'none';
      });
      countryList.appendChild(option);
    });
    countryList.style.display = 'block';
  }


  countryForm.addEventListener('click', function(event) {
    event.stopPropagation();
    if (countryList.style.display === 'block') {
      countryList.style.display = 'none';
    
    } else {
      displayCountryList();
   
    }
  });


  countryInput.addEventListener('input', function() {
    var input = this.value.trim().toLowerCase();
    var options = countryList.getElementsByClassName('countryOption');
    Array.from(options).forEach(function(option) {
      var country = option.textContent.toLowerCase();
      if (country.indexOf(input) !== -1) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });
  });


  document.addEventListener('click', function(event) {
    if (!event.target.closest('form')) {
      countryList.style.display = 'none';
     
    }
  });
  ////////////
  

  /////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////

function expandWidth() {
    const topBar = document.getElementById('topBar');
    const currentWidth = parseFloat(topBar.style.width) || 10; 
    const newWidth = currentWidth + 20;
    topBar.style.width = `${newWidth}px`;
    topBar.style.transitionProperty="width"
    topBar.style.transitionDuration="0.5s"
}