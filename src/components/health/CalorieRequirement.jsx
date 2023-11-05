import React, { useState, useEffect } from "react";
import ResultLines from "../reusableComponents/ResultLines";

const CalorieRequirement = ({ activityLevel, weight, targetWeight, height, gender, age}) => {
     
    const [calorieRequirement, setCalorieRequirement] = useState(0);
    const heightNumber = parseFloat(height);
    const weightNumber = parseFloat(weight);
    const ageNumber = parseFloat(age);
    const isMale = gender === "male";
    const activityLevelNumber = parseInt(activityLevel);
    const [bmr, setBMR] = useState(0);
    const [weightGoal, setWeightGoal] = useState("maintain");

  useEffect(() => {
  
    if (!isNaN(ageNumber) && !isNaN(heightNumber) && !isNaN(weightNumber)) {
        if (isMale) {
          const calculatedBMR = (weightNumber * 10) + (6.25 * heightNumber) - (5 * ageNumber) + 5;
          setBMR(calculatedBMR.toFixed(2));
        } else {
          const calculatedBMR = (weightNumber * 10) + (6.25 * heightNumber) - (5 * ageNumber) - 161;
          setBMR(calculatedBMR.toFixed(2));
        }
      }

    let InitialCalorieRequirement = 0;
  if (activityLevelNumber === 1) {
    InitialCalorieRequirement  = bmr * 1.2;
  } else if (activityLevelNumber === 2) {
    InitialCalorieRequirement  = bmr * 1.375;
  } else if (activityLevelNumber === 3) {
    InitialCalorieRequirement  = bmr * 1.55;
  } else if (activityLevelNumber === 4) {
    InitialCalorieRequirement  = bmr * 1.725;
  } else if (activityLevelNumber === 5) {
    InitialCalorieRequirement  = bmr * 1.9;
  }

  if (weight > targetWeight) {
    setWeightGoal("lose");
  } else if (weight < targetWeight) {
    setWeightGoal("gain");
  } else {
    setWeightGoal("maintain");
  }

  if (weightGoal === "lose") {
    const calorieRequirement=InitialCalorieRequirement-500;
    setCalorieRequirement(calorieRequirement);
  } else if (weightGoal === "gain") {
    const calorieRequirement=InitialCalorieRequirement+500;
    setCalorieRequirement(calorieRequirement);
  }

  },[bmr, activityLevelNumber, weightGoal, ageNumber, heightNumber, weightNumber, isMale]);

  return (
    <>
    <ResultLines leftContent="Your BMR Value:" rightContent={`${bmr} Calories`} />
    <ResultLines leftContent={`Estimated calorie requirement per day to ${weightGoal} weight:`} rightContent={`${calorieRequirement} Calories`} />
    </>
  );
};

export default CalorieRequirement;
