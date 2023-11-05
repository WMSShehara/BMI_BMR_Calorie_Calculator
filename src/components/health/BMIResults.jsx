import React, { useState } from "react";
import { useEffect } from "react";
import ResultLines from "../reusableComponents/ResultLines";

const BMIResults = (
{   
    height,
    weight,}
    
) => {

const heightNumber = parseFloat(height);
const weightNumber = parseFloat(weight);
// const gender = selectedGender;

const [bmi, setBMI] = useState("");
const [weightStatus, setWeightStatus] = useState("");

useEffect(() => {
    if (!isNaN(heightNumber) && !isNaN(weightNumber)) {
        const heightMeters = heightNumber / 100;
        const calculatedBMI = weightNumber / (heightMeters * heightMeters);
        setBMI(calculatedBMI.toFixed(2));

        if (calculatedBMI < 18.5) {
            setWeightStatus("Underweight");
           
        } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
            setWeightStatus("Normal weight");
           
        } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
            setWeightStatus("Overweight");
            
        } else if (calculatedBMI >= 30) {
            setWeightStatus("Obesity");
           
        } else {
            setWeightStatus("Error");
           
        }
    } 
   
}, [heightNumber, weightNumber]);
return(
    <>
    <ResultLines leftContent="Your BMI Value:" rightContent={bmi} />
    <ResultLines leftContent="Your Weight Status:" rightContent={weightStatus} />
    </>
)

}
export default BMIResults;