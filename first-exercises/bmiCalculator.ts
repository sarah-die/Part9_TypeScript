const calculateBmi = (height: number, weight: number): string => {
    const bmi = weight / (height/100)**2;
    if (bmi < 18.5) {
        return(`Underweight. BMI is ${bmi}`);
    } else if (bmi < 25) {
        return(`Normal (healthy weight). BMI is ${bmi}`);
    } else {
        return(`Overweight. BMI is ${bmi}`);
    }
}

console.log(calculateBmi(180, 100));
