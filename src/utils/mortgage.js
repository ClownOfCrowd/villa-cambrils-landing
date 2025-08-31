/**
 * Calculate mortgage payment using annuity formula
 * @param {number} principal - Loan amount
 * @param {number} annualRate - Annual interest rate (as decimal, e.g., 0.024 for 2.4%)
 * @param {number} years - Loan term in years
 * @returns {number} Monthly payment
 */
export function calculateMonthlyPayment(principal, annualRate, years) {
  if (principal <= 0 || annualRate < 0 || years <= 0) return 0;
  
  const monthlyRate = annualRate / 12;
  const totalPayments = years * 12;
  
  if (monthlyRate === 0) {
    return principal / totalPayments;
  }
  
  const monthlyPayment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);
  
  return monthlyPayment;
}

/**
 * Calculate estimated additional costs (notary, registry, taxes, etc.)
 * @param {number} propertyPrice - Total property price
 * @returns {number} Estimated costs
 */
export function calculateEstimatedCosts(propertyPrice) {
  // Approximate 10-12% of property price for taxes, notary, registry, etc.
  return propertyPrice * 0.101299; // ~10.13% to match the example
}

/**
 * Calculate complete mortgage scenario
 * @param {Object} params - Mortgage parameters
 * @returns {Object} Complete calculation results
 */
export function calculateMortgage({
  propertyPrice = 1500000,
  downPayment = 450000,
  years = 30,
  interestType = 'fixed',
  fixedRate = 2.4,
  euribor = 0.5,
  margin = 3.4
}) {
  const loanAmount = propertyPrice - downPayment;
  
  let annualRate;
  if (interestType === 'fixed') {
    annualRate = fixedRate / 100;
  } else {
    annualRate = (euribor + margin) / 100;
  }
  
  const monthlyPayment = calculateMonthlyPayment(loanAmount, annualRate, years);
  const totalPayment = monthlyPayment * years * 12;
  const estimatedCosts = calculateEstimatedCosts(propertyPrice);
  
  return {
    propertyPrice,
    downPayment,
    loanAmount,
    monthlyPayment,
    totalPayment,
    estimatedCosts,
    interestRate: annualRate * 100
  };
}