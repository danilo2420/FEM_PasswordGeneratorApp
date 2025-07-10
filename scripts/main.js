// Elements
const btnGenerate = document.querySelector('.generate__generate__button');
const checkBoxes = document.querySelectorAll('.generate__options__item__checkbox');
// Functions


/* UI EVENTS */
// Generate password
const setLowercase = 'abcdefghijklmnopqrstuvwxyz';
const setUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const setNumbers = '0123456789';
const setSymbols = '!"·$%&/()=?¿+ç-.,';

function generatePassword() {
    // if (btnGenerate is disabled) return;

    // Get configuration
    const charsNumber = slider.value;
    let input = [];
    checkBoxes.forEach((elmnt) => {
        if (elmnt.classList.contains('checkbox--active')) {
            const value = elmnt.dataset.input;
            input.push(value);
        }
    });

    // Build set to extract password from
    let set = '';
    input.forEach((subset) => {
        switch (subset) {
            case 'lowercase':
                set += setLowercase;
                break;
            case 'uppercase':
                set += setUppercase;
                break;
            case 'numbers':
                set += setNumbers;
                break;
            case 'symbols':
                set += setSymbols;
                break;
        }
    });

    // Create password
    let result = '';
    for (let i = 0; i < charsNumber; i++) {
        const nextChar = set.charAt(Math.random() * set.length);
        result += nextChar;
    }

    // Set value as output
    passwordElement.innerHTML = result;
    passwordElement.classList.remove('password--disabled');
}

// Enable/disable button
setButtonState = function() {
    btnGenerate.classList.remove('button--disabled');

    const sliderValue = slider.value;
    if (sliderValue == 0) {
        btnGenerate.classList.add('button--disabled');
        return;
    }
    for (cb of checkBoxes) { 
        if (cb.classList.contains('checkbox--active')) {
            return;
        }
    }
    btnGenerate.classList.add('button--disabled');
}