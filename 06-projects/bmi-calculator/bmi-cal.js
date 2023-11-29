let formEle = document.querySelector("form");
// console.log(formEle);

formEle.addEventListener("submit", function (e) {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#result");
  //   console.log(`${height} -- ${weight}`)

  if (height == undefined || height == null || isNaN(height)) {
    // message=`Please give proper height ${height}`
    results.innerHTML = `Please give proper height ${height}`;
  } else if (weight == undefined || weight == null || isNaN(weight)) {
    results.innerHTML = `Please give proper height ${weight}`;
  } else {
    let bmi = ((weight * 100 * 100) / (height * height)).toFixed(2);
    // results.innerHTML = `the BMI is ${bmi}`;

    if (bmi < 18.6) {
      results.innerHTML = `the BMI is ${bmi} <br> and You are under Weight `;
    } else if (bmi > 24.9) {
      results.innerHTML = `the BMI is ${bmi} <br> and you are OverWeight`;
    } else {
      results.innerHTML = `the BMI is ${bmi} <br> and Your BMI is in Normal Range`;
    }
  }
});
