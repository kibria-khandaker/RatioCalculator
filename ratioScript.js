// (1) Function to calculate ratio from numbers
function calculateRatio() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const result = document.getElementById('result');
  
    if (isNaN(input1) || isNaN(input2) || input1 <= 0 || input2 <= 0) {
      result.textContent = "Error: Please enter valid positive numbers.";
      return;
    }
  
    const ratio = (input2 / input1).toFixed(3); // Ratio with 3 decimal places
    result.textContent = `Result: [1:${ratio}]`;
}
  
// (2) Function to calculate numbers from ratio
function calculateNumbersFromRatio() {
    const ratio1 = parseFloat(document.getElementById('ratio1').value);
    const ratio2 = parseFloat(document.getElementById('ratio2').value);
    const smallerTarget = parseFloat(document.getElementById('smallerTarget').value);
    const scalingFactor = parseFloat(document.getElementById('scalingFactor').value);
    const numberResult = document.getElementById('numberResult');
  
    // Validation check for ratio inputs and scaling factor
    if (
      isNaN(ratio1) || isNaN(ratio2) || ratio1 <= 0 || ratio2 <= 0 ||scalingFactor <= 0
    ) {
      numberResult.textContent = "Error: Please enter valid positive numbers and scaling factor.";
      return;
    }
  
    let scale = scalingFactor; // Default scaling factor

    // If smallerTarget is provided and is a valid number, calculate the scaling factor based on it
    if (!isNaN(smallerTarget) && smallerTarget !== "") {
      // Calculate scaling factor using the smaller target
      scale = smallerTarget / ratio1;
      document.getElementById('scalingFactor').value = scale; // Update scaling factor field
    }

    // Calculate the resulting numbers
    const number1 = (ratio1 * scale).toFixed(0);
    const number2 = (ratio2 * scale).toFixed(0);
  
    // Show the result
    numberResult.textContent = `Result: [${number1}:${number2}]`;
}
  
// (3) Function to calculate expected scaling factor
function calculateScalingFactor() {
    const smallNumber = parseFloat(document.getElementById('smallNumber').value);
    const largerNumber = parseFloat(document.getElementById('largerNumber').value);
    const scalingFactorResult = document.getElementById('scalingFactorResult');

    if (isNaN(smallNumber) || isNaN(largerNumber) || smallNumber <= 0 || largerNumber <= 0) {
        scalingFactorResult.textContent = "Error: Please enter valid positive numbers.";
        return;
    }

    const scalingFactor = (largerNumber / smallNumber).toFixed(3); // Scaling factor with 3 decimal places
    scalingFactorResult.textContent = `Expected Scaling Factor: [${scalingFactor}]`;
}
  