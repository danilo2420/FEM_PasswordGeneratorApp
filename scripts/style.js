

// Copy to clipboard
const copyIcon = document.querySelector('.password__copy__icon');
const copyText = document.querySelector('.password__copy__text');
const passwordElement = document.querySelector('.password__value');
copyIcon.addEventListener('click', handleCopyIcon);

let removeStyle = () => {};

function handleCopyIcon() {
    if (!passwordElement.classList.contains('password--disabled')) {
        const password = passwordElement.innerText;
        navigator.clipboard.writeText(password);
        copyText.classList.remove('copyText--disabled');
        clearTimeout(removeStyle);
        removeStyle = setTimeout(() => {
            copyText.classList.add('copyText--disabled');
        }, 2000);
    }
}


// Slider
const slider = document.querySelector('.slider');
const sliderOutput = document.querySelector('.generate__charLength__output__value');
handleSlider();
slider.addEventListener('input', handleSlider);

function handleSlider() {
    setSliderStyle();
    setOutputNumber();
}

function setSliderStyle() {
    const maxValue = slider.max;
    const value = slider.value;
    const valPercent = (value / maxValue) * 100;
    
    slider.style.background = 
        `linear-gradient(to right, #A4FFAF ${valPercent}%, #18171F ${valPercent}%)`;
}

function setOutputNumber() {
    const value = slider.value;
    sliderOutput.textContent = value;
}


// Checkboxes
const checkboxes = document.querySelectorAll('.generate__options__item__checkbox');
checkboxes.forEach(handleCheckbox);
function handleCheckbox(checkbox) {
    checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('checkbox--active');
    })
} 