document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    
    if (height > 0 && weight > 0) {
        let heightInMeters = height / 100;
        let bmi = weight / (heightInMeters * heightInMeters);
        bmi = bmi.toFixed(2);
        
        let resultText = `Tu IMC es ${bmi}. `;
        
        if (bmi < 18.5) {
            resultText += "Estás bajo de peso.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText += "Tienes un peso normal.";
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText += "Estás en sobrepeso.";
        } else {
            resultText += "Tienes obesidad.";
        }
        
        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = "Por favor, introduce valores válidos.";
    }
});
