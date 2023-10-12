function convertCelsius(celsius) {
    return (celsius * 9/5) + 32;
}

document.querySelector('input[value="Konversi"]').addEventListener('click', function() {
    const suhuCelsius = parseInt(document.getElementById('suhuC').value);

    if (!isNaN(suhuCelsius)) {
        const suhuFahrenheit = convertCelsius(suhuCelsius);
        document.getElementById('suhuF').value = suhuFahrenheit;
        document.getElementById('answer').value = `${suhuCelsius} * (9/5) + 32 = ${suhuFahrenheit}℉`;
    } else {
        alert('Masukkan suhu dalam format angka');
    }
});

document.querySelector('input[value="Reset"]').addEventListener('click', function() {
    document.getElementById('suhuC').value = '';
    document.getElementById('suhuF').value = '';
    document.getElementById('answer').value = '';
});

document.querySelector('input[value="Reverse"]').addEventListener('click', function() {
    const suhuFahrenheit = parseInt(document.getElementById('suhuF').value);

    if (!isNaN(suhuFahrenheit)) {
        const suhuCelsius = (suhuFahrenheit - 32) * 5/9;
        document.getElementById('suhuC').value = suhuCelsius;
        document.getElementById('answer').value = `(${suhuFahrenheit} - 32) * 5/9 = ${suhuCelsius}℃`;
    } else {
        alert('Masukkan suhu dalam format angka');
    }
});

const caraaa = document.getElementById('caraaa');
caraaa.addEventListener('click', function() {
    if(caraaa.value =='Fahrenheit ke Celsius'){
        caraaa.value = 'Celsius ke Fahrenheit';

        document.getElementById('judul').textContent = 'Cara Konversi Dari Fahrenheit (°F) ke Celsius (℃)'; 
        document.getElementById('penjelasan').textContent ='Suhu S dalam derajat Celsius (℃) sama dengan suhu S dalam derajat Fahrenheit (℉) kurang 32 kali 5/9.';
        document.getElementById('rumus1').textContent = 'S(℃) =(S(℉) -32) * 5/9';
        document.getElementById('rumus2').textContent = 'S(℃) =(S(℉) -32) * 0.5556';
    } else if(caraaa.value =='Celsius ke Fahrenheit') {
        caraaa.value = 'Fahrenheit ke Celsius';

        document.getElementById('judul').textContent = 'Cara Konversi Dari Celsius (℃) ke Fahrenheit (°F)'; 
        document.getElementById('penjelasan').textContent ='Suhu S dalam derajat Fahrenheit (℉) sama dengan suhu S dalam derajat Celsius (℃) kali 9/5 tambah 32.';
        document.getElementById('rumus1').textContent = 'S(℉) =(S(℃) * 9/5) + 32';
        document.getElementById('rumus2').textContent = 'S(℉) =(S(℃) * 1.8) + 32';
    }       
});