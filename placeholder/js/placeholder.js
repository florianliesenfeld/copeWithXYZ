const conditions = [  "xyz","allergies","intolerances","mentalLoad","chronicDisease",
                    "alzheimer","care","MECFS","POTS","MCAD","longCovid","postCovid","life"];
const urlEnding = document.querySelector(".url__ending");
const intervalID = window.setInterval(changeEnding,2000);
let index = 0;
let i=0;
let conditionToUse = [];

function changeEnding() {
    if(conditionToUse.length<1) {
        conditionToUse = [...conditions];
    }
    if(i%2===0){
        urlEnding.textContent = conditionToUse[index];
        conditionToUse.splice(index,1);
        index = Math.floor(Math.random()*conditionToUse.length);
    } else {
        // urlEnding.classList.toggle("url__ending--middle");
    }
    urlEnding.classList.toggle("url__ending--up");
    i++;
}

// use setTimout to execute change after certain seconds
// setTimeout()