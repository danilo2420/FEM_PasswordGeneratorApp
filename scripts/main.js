// Elements
const btnGenerate = document.querySelector('.generate__generate__button');
const checkBoxes = document.querySelectorAll('.generate__options__item__checkbox');

const strengthElement = document.querySelector('.generate__generate__strength__boxes');
const strengthText = document.querySelector('.generate__generate__strength__boxes__text');

/* UI EVENTS */
// Generate password
const setLowercase = 'abcdefghijklmnopqrstuvwxyz';
const setUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const setNumbers = '0123456789';
const setSymbols = '~`! @#$%^&*()_-+={[}]|\:;"\'<,>.?/';

function generatePassword() {
    // if (btnGenerate is disabled) return;
    if (btnGenerate.classList.contains('button--disabled')) return;

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

// Set information about password's strength
setStrengthState = function() {
    const sliderValue = slider.value;

    let checkboxN = 0;
    for (cb of checkBoxes) {
        if (cb.classList.contains('checkbox--active')) {
            checkboxN++;
        }
    }

    if (sliderValue < 5) {
        setStrengthStateStyle(0);
    } else if (sliderValue < 10) {
        if (checkboxN < 2)
            setStrengthStateStyle(0);
        else
            setStrengthStateStyle(1); 
    } else if (sliderValue < 15) {
        if (checkboxN < 3)
            setStrengthStateStyle(1);
        else
            setStrengthStateStyle(2); 
    } else {
        if (checkboxN < 3) 
            setStrengthStateStyle(2);
        else 
            setStrengthStateStyle(3);
    }
}

function setStrengthStateStyle(strength) {
    switch (strength) {
        case 0:
            strengthText.innerHTML = 'TOO WEAK!';
            aux('strength--tooweak');
            break;
        case 1:
            strengthText.innerHTML = 'WEAK';
            aux('strength--weak');
            break;
        case 2:
            strengthText.innerHTML = 'MEDIUM';
            aux('strength--medium');
            break;
        case 3:
            strengthText.innerHTML = 'STRONG';
            aux('strength--strong');
            break;
    }
}

function aux(className) {
    strengthElement.classList.remove('strength--tooweak');
    strengthElement.classList.remove('strength--weak');
    strengthElement.classList.remove('strength--medium');
    strengthElement.classList.remove('strength--strong');

    strengthElement.classList.add(className);
}

setStrengthState();
setButtonState();