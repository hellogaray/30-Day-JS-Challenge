const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))


let lastChecked;

function handleCheck(event) {
    if (event.shiftKey && this.checked) {
        let inBetween = false;

        const marking = (checkbox) => {

            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log(checkbox)
            }
            else if (inBetween) {
                checkbox.checked = true;
            }
        }
        checkboxes.forEach((checkbox) => marking(checkbox));
    };

    lastChecked = this;
};