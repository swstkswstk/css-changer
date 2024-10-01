console.log("JS linked successfully");

const inputs = document.querySelectorAll(".css-controller input");

function update() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', update));
inputs.forEach(input => input.addEventListener('change', update));

// Initialize default values
window.addEventListener('load', () => {
  inputs.forEach(input => {
    const suffix = input.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
  });
});