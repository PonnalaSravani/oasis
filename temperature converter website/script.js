function convertTemperature() {
    // Get user input
    const temperatureInput = document.getElementById('temperature').value;
    const unitInput = document.getElementById('unit').value;

    // Validate input
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Convert temperature
    let convertedTemperature;
    let resultUnit;

    if (unitInput === 'celsius') {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * (5 / 9);
        resultUnit = 'Celsius';
    } else if (unitInput === 'fahrenheit') {
        convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
        resultUnit = 'Fahrenheit';
    } else if (unitInput === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        resultUnit = 'Kelvin';
    }

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
