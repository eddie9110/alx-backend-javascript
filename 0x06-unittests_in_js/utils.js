const Utils = {
  calculateNumber(type, a, b) {
    let ans = 0;
    const num1 = Math.round(a);
    const num2 = Math.round(b);

    switch (type) {
      case "SUM":
        ans = num1 + num2;
        break;
      case "SUBTRACT":
        ans = num1 - num2;
        break;
      case "DIVIDE":
        ans =  num2 === 0 ? "Error" : num1 / num2;
        break;
    }
    return ans;
  }
};

module.exports = Utils;
