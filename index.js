
class Calculator {
    _self = this;
    constructor() {
        this.button = 'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) =';
        this.val = null;
        this.operator = null;
    }

    init(el, result) {
        this.result = result;
        this.createContainer(el)
    }

    createContainer(div) {
        div.insertAdjacentHTML('beforeend', '<div class="container-calculator grid-container"></div>');
        this.createButton(document.querySelector('.container-calculator'), this.button);
    }

    createButton(container, buttons) {
        buttons.split(' ').map(item => {
            container.insertAdjacentHTML('beforeend', `<button value="${item}" class="btn"> ${item}</button>`)
        });
        this.numberButtons()
    }

    numberButtons() {
        let buttons = document.querySelectorAll('button');
        buttons.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (isNaN(item.value)) {
                    this.operataionButtons(e.target, e.target.value);
                } else {
                    this.result.innerText += e.target.value;
                };
            })
        })
    }
    operataionButtons(elem, elemValue) {
        if (elemValue === '=') {
            return this._self.resultOperation(this.result.innerText)
        } else if
            (elemValue === '+' || '•' || '/' || '-') {
            this._self.operator = elemValue;
            this._self.val = this.result.innerText;
            this.result.innerText = '';
        } else {
            return this.result.innerText = '';
        }
    }
    resultOperation(resultVal) {
        return this.result.innerText = eval(`${this._self.val} ${this._self.operator} ${resultVal} `);
    }

}

let n = new Calculator()
n.init(document.querySelector('[data-calculator]'), document.getElementById("result"))
