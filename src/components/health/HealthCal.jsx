// Your parent component where you render BMIInputs
import React, { useState } from "react";
import HealthInputs from "./HealthInputs";
import BMIResults from "./BMIResults";
import CalorieRequirement from "./CalorieRequirement";

const HealthCal = () => {
    const [age,setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [targetWeight, setTargetWeight] = useState("");
    const [gender, setGender] = useState("male");
    const [showResults, setShowResults] = useState(false);
    const [bmr, setBMR] = useState(0);
    const [error, setError] = useState(null);
    

    const handleBMIFormSubmit = (data) => {
        if (!data.age || !data.height || !data.weight || !data.activityLevel || !data.targetWeight) {
            setError("You need to fill all the input fields first");
            setShowResults(false); // Hide results
        } else {
        setAge(data.age);
        setWeight(data.weight);
        setHeight(data.height);
        setActivityLevel(data.activityLevel);
        setTargetWeight(data.targetWeight);
        setGender(data.gender)
        setShowResults(true); // Show the results
        setError(null); // Remove error
        }
    };

    return (
        <div className="grid grid-cols-2 gap-6 mb-10 mt-5 md:flex-row ">
            <div className="flex flex-col gap-12 pe-5">
            <HealthInputs onSubmit={handleBMIFormSubmit} />
            </div>

            <div className="flex flex-col md:flex pt-40 ps-20 gap-12">
            {error && (
                    <div className="text-red-500">{error}</div>
                )}  
            {showResults && (
            <BMIResults  
                age={age}
                weight={weight}
                height={height}
            />
           
            )}

            {showResults && (
           
           <CalorieRequirement
                activityLevel={activityLevel}
                weight={weight}
                height={height}
                targetWeight={targetWeight}
                gender={gender}
                age={age}
                bmr={bmr}
           />
           )}
            </div>
        </div>
    );
};

export default HealthCal;
