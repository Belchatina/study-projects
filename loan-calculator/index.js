const loanAmountEl = document.getElementById('loan-amount');
const interestRateEl = document.getElementById('interest-rate');
const monthsToPayEl = document.getElementById('months-to-pay');
const monthlyPayment = document.getElementById('monthly-payment');

loanAmountEl.addEventListener('input', calculateLoan);
interestRateEl.addEventListener('input', calculateLoan);
monthsToPayEl.addEventListener('input', calculateLoan);

function calculateLoan() {
  const loan = parseFloat(loanAmountEl.value) || 0;
  const interest = parseFloat(interestRateEl.value) || 0;
  const months = parseInt(monthsToPayEl.value) || 1;

  const payment = (loan * (1 + interest / 100)) / months;
  monthlyPayment.innerText = `Monthly payment: $${payment.toFixed(2)}`;
}
