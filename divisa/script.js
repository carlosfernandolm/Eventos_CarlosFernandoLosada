const conversionRate = 140; // 1 dólar = 140 pesos

document.getElementById('dollars').addEventListener('input', function() {
    const dollars = parseFloat(this.value);
    const pesos = (dollars * conversionRate).toFixed(2);
    document.getElementById('pesos').value = pesos;
});

document.getElementById('pesos').addEventListener('input', function() {
    const pesos = parseFloat(this.value);
    const dollars = (pesos / conversionRate).toFixed(2);
    document.getElementById('dollars').value = dollars;
});
