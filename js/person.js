// saving and loading implemented from example by geoffreycrofte - https://gist.github.com/geoffreycrofte/5c0c122bbab270b281fbe2b154b30abf
// class for creating patients

class Person {
    constructor() {
        this.data = {};
    }

    saveData(form) {
        const inputs = form.querySelectorAll("input, textarea, select");

        for(let input of inputs) {
            const inputType = input.getAttribute("type");
            let value;

            switch(inputType) {
                case "radio":
                    if(input.checked) {
                        value = input.value;
                    }
                    break;
                case "checkbox":
                    value = input.checked;
                    break;
                default:
                    value = input.value;
                    break;
            }

            if(value !== undefined) {
                this.data[input.id] = value;
            }
        }
        localStorage.setItem("person1", JSON.stringify(this.data));
    }

    loadData() {
        const data = JSON.parse(localStorage.getItem("person1"));

        for (const key in data) {
            if(data.hasOwnProperty(key)) {
                const input = document.querySelector(`#${key}`);
                const inputType = input.getAttribute("type");

                switch (inputType) {
                    case "radio":
                        if(input.value === data[key]) {
                            input.checked = true;
                        }
                        break;
                    case "checkbox":
                        input.checked = true;
                        break;
                    default:
                        input.value = data[key];
                        break;
                }
            }
        }
    }
}

const person1 = new Person();

const form = document.querySelector("#person__form");
form.addEventListener("submit", (e) => {
    // e.preventDefault();
    person1.saveData(form);
});

person1.loadData();