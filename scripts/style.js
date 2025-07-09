

// Slider
const slider = document.querySelector('.slider');
setSliderStyle();
slider.addEventListener('input', setSliderStyle);

function setSliderStyle() {
    const maxValue = slider.max;
    const value = slider.value;
    const valPercent = (value / maxValue) * 100;
    
    slider.style.background = 
        `linear-gradient(to right, #A4FFAF ${valPercent}%, #18171F ${valPercent}%)`;
}

// Checkboxes
const checkboxes = document.querySelectorAll('.generate__options__item__checkbox');
checkboxes.forEach(handleCheckbox);
function handleCheckbox(checkbox) {
    checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('checkbox--active');
    })
} 