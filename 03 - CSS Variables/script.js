const inputs = document.querySelectorAll('.controls input');

function handleUpdated() {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
    console.log(`--${this.id}`, `${this.value}${suffix}`);
}

inputs.forEach(input => input.addEventListener('change', handleUpdated)); 
inputs.forEach(input => input.addEventListener('mousemove', handleUpdated)); 


