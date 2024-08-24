document.getElementById('calculate-btn').addEventListener('click', function() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let units = document.getElementById('units').value;

    if (units === 'imperial') {
        height = height * 2.54; 
        weight = weight * 0.453592; 
    }

    if (height > 0 && weight > 0) {
        let bmi = weight / ((height / 100) ** 2);
        document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)}`;

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
        document.getElementById('category').textContent = `Category: ${category}`;

        let minHealthyWeight = 18.5 * ((height / 100) ** 2);
        let maxHealthyWeight = 24.9 * ((height / 100) ** 2);
        document.getElementById('healthy-weight').textContent = `Healthy weight range: ${minHealthyWeight.toFixed(2)}kg - ${maxHealthyWeight.toFixed(2)}kg`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid height and weight.';
    }
});

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('category').textContent = '';
    document.getElementById('healthy-weight').textContent = '';
});
