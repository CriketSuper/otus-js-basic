function sum(a, b) {
    return a + b;
  }

function multiplication(a, b) {
    return a * b;
}

function logResult(a, b) {
    console.log(`${sum(a, b)}, ${multiplication(a, b)}`);
}
module.exports = {
  sum,
  multiplication,
  logResult
};