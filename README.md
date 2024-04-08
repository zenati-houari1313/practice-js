# practice-js
//function showPrevPage(step) {
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
//}