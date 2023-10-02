const calculate = (event) => {
  event.preventDefault();

  const beratInput = document.getElementById('berat');
  const tinggiInput = document.getElementById('tinggi');
  const hasil = document.getElementById('result');
  const form = document.getElementById('form');

  const beratBadan = parseFloat(beratInput.value);
  const tinggiBadan = parseFloat(tinggiInput.value);

  if (
    isNaN(beratBadan) ||
    isNaN(tinggiBadan) ||
    beratBadan <= 0 ||
    tinggiBadan <= 0
  ) {
    hasil.innerHTML = `<span>Inputan berat dan tinggi harus valid dan lebih dari 0</span>`;
  } else {
    const bmi = (beratBadan / Math.pow(tinggiBadan / 100, 2)).toFixed(1);

    if (bmi <= 18.5) {
      hasil.innerHTML = `<span>Your BMI is <b>${bmi}</b> which means You are <b>Underweight</b></span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      hasil.innerHTML = `<span>Your BMI is <b>${bmi}</b> which means You are <b>Normal</b></span>`;
    } else if (bmi >= 25 && bmi < 29.9) {
      hasil.innerHTML = `<span>Your BMI is <b>${bmi}</b> which means You are <b>Overweight</b></span>`;
    } else {
      hasil.innerHTML = `<span>Your BMI is <b>${bmi}</b> which means You are <b>Obesity</b></span>`;
    }
  }

  form.reset();
};

const btn = document.getElementById('btn');
btn.addEventListener('click', calculate);
