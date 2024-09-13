function calculateTax(income, expenses) {
  if (income >= 0 && expenses >= 0) {
    if ((income % 2 != 0 || income % 2 == 0) && expenses > income) {
      return "Invalid Input";
    } else if (income === expenses) {
      return 0;
    } else {
      let x = income - expenses;
      if (x) {
        let tax = x * 0.2;
        return tax;
      }
    }
  }

  return "Invalid Input";
}

function signature(email) {
  if (typeof email === "string") {
    let email_arr = email.split("@");
    let name = email_arr[0];
    return `${name} sent you an email from ${email_arr[1]}`;
  }

  return "Invalid Input";
}

function checkDigitsInName(name) {
  if (typeof name === "string") {
    if (typeof name === "string") {
      return /\d/.test(name);
    } else {
      return false;
    }
  }

  return "Invalid Input";
}

function calculateFinalScore(obj) {
  if (typeof obj === "object") {
    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (isFFamily === true) {
      let fullMark = testScore + schoolGrade + 20;
      if (fullMark >= 80) {
        return true;
      }
    }
    return false;
  }

  return "Invalid Input";
}

function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
    let avg = 0;
    for (let x of waitingTimes) {
      avg += x;
    }
    avg = Math.floor(avg / waitingTimes.length);
    let totalWaiting = serialNumber - waitingTimes.length - 1;
    if (avg > 0) {
      return totalWaiting * avg;
    }
  }

  return "Invalid Input";
}
