calculate = (event) => {
  event.preventDefault();

  let berat = document.getElementById('berat').value;
  let tinggi = document.getElementById('tinggi').value;
  let hasil = document.getElementById('result');
  let bmi = (berat / Math.pow(tinggi / 100, 2)).toFixed(1);
  let form = document.getElementById('form');

  if (berat === '' || isNaN(berat)) {
    hasil.innerHTML = 'inputan tidak boleh kosong';
  } else if (tinggi === '' || isNaN(tinggi)) {
    hasil.innerHTML = 'inputan tidak boleh kosong';
  } else {
    if (bmi < 18.6) hasil.innerHTML = `Under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      hasil.innerHTML = `Normal : <span>${bmi}</span>`;
    else hasil.innerHTML = `Over Weight : <span>${bmi}</span>`;
  }
  form.reset();
};

let btn = document.getElementById('btn');
btn.addEventListener('click', calculate);
