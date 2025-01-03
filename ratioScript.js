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
  const smallerTarget = document.getElementById('smallerTarget').value; // Keep as string to check emptiness
  const scalingFactorInput = document.getElementById('scalingFactor');
  const scalingFactorValue = parseFloat(scalingFactorInput.value);
  const numberResult = document.getElementById('numberResult');

  // Validate First Ratio and Second Ratio
  if (isNaN(ratio1) || isNaN(ratio2) || ratio1 <= 0 || ratio2 <= 0) {
      numberResult.textContent = "Error: Please enter valid positive values for the ratios.";
      return;
  }

  // Handle case where both Smaller Target and Scaling Factor are empty
  if (!smallerTarget && scalingFactorInput.value === "") {
      numberResult.textContent = "Error: Please provide a valid Scaling Factor or Smaller Target.";
      return;
  }

  let scale = scalingFactorValue; // Default to the Scaling Factor input

  // If Smaller Target is provided, calculate the Scaling Factor
  if (smallerTarget) {
      const smallerTargetValue = parseFloat(smallerTarget);

      // Validate Smaller Target
      if (isNaN(smallerTargetValue) || smallerTargetValue <= 0) {
          numberResult.textContent = "Error: Please enter a valid positive number for the Smaller Target.";
          return;
      }

      scale = smallerTargetValue / ratio1; // Calculate scaling factor from Smaller Target
      scalingFactorInput.value = scale.toFixed(2); // Update the Scaling Factor input field
  }

  // Validate Scaling Factor
  if (isNaN(scale) || scale <= 0) {
      numberResult.textContent = "Error: Scaling Factor is invalid.";
      return;
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
  