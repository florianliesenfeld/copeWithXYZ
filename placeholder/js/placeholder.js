let conditions = [  "xyz","allergies","intolerances","mentalLoad","chronicDisease",
                    "alzheimer","care","MECFS","POTS","MCAD","longCovid","postCovid","life"];
const urlEnding = document.querySelector(".url__ending");
const intervalID = window.setInterval(changeEnding,2000);
let index = 0;
let i=0;
let contidionsToUse = [];

function changeEnding() {
    if(contidionsToUse.length<1) {
        contidionsToUse = [...conditions];
    }
    if(i%2===0){
        urlEnding.textContent = contidionsToUse[index];
        contidionsToUse.splice(index,1);
        index = Math.floor(Math.random()*contidionsToUse.length);
    } else {
        // urlEnding.classList.toggle("url__ending--middle");
    }
    urlEnding.classList.toggle("url__ending--up");
    i++;
}

// use setTimout to execute change after certain seconds
// setTimeout()