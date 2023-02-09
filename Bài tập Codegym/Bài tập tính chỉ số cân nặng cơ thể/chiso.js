function bmi() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight / (Math.pow(height, 2));
    let result = "";
    if (bmi < 18)
        result = "Underweight";
    else if (bmi < 25)
        result = "Normal";
    else if (bmi < 30.0)
        result = "Overweight";
    else
        result = "Obese";
    document.getElementById("result").innerHTML = "Chỉ số bmi là: " + bmi + ". Bạn " + "<b>" + result + "</b>";
}