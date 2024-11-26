const fPerson = document.querySelector("#person__form");
const sPerson = document.querySelector("#person__select");
const fExpertise = document.querySelector("#person__expertise");

function switchType(type) {
    fExpertise.classList.add("fieldset--hide");
    switch (type) {
        case "physician":
            fExpertise.classList.remove("fieldset--hide");
            fExpertise.classList.add("fieldset--show");
            break;
        case "caregiver":
            
            break;
        case "relative":
            
            break;
        case "patient":
            
            break;
    
        default:
            break;
    }
}

sPerson.addEventListener("change", function() {
    switchType(sPerson.value);
});
