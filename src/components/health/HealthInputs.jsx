import React, { useState } from "react";

import LabeledInput from "../reusableComponents/LabelInput";
import LabeledSelect from "../reusableComponents/LabeledSelect";


const HealthInputs = (
    {onSubmit}
) => {
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [selectedGender,setSelectedGender] = useState("male")
    const [selectedActivityLevel, setSelectedActivityLevel] = useState("1");
    const [targetWeight, setTargetWeight] = useState("");

    const activityLevels = [
      { value: '1', label: 'Sedentary (No exercise)' },
      { value: '2', label: 'Light Exercise' },
      { value: '3', label: 'Moderate Exercise' },
      { value: '4', label: 'Heavy Exercise' },
      { value: '5', label: 'Athlete' },
    ];

    const submitInputs = () => {
        const data = {
            age: age,
            height: height,
            weight: weight,
            gender: selectedGender,
            activityLevel: selectedActivityLevel,
            targetWeight: targetWeight,
        }
        onSubmit(data);
    }
    const formSubmit = (e) => {
        e.preventDefault();
    }


    return (
                <form onSubmit={formSubmit}>
               <div className="mb-6">
                 <label>Gender
                 <input
                    className="mx-6"
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => setSelectedGender(e.target.value)}
                    checked = {selectedGender === "male"}/>
                    Male
                  <input
                    className="mx-6"
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => setSelectedGender(e.target.value)}
                    checked = {selectedGender === "female"}/>
                    Female
                    </label>
                </div>                                       
                <LabeledInput
                        label="Age"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="ex: 25"
                        unit="Years"
                      />
                <LabeledInput
                        label="Height"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="ex: 150"
                        unit="cm"
                      />
                <LabeledInput
                        label="Weight"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="ex: 50"
                        unit="kg"
                      />
                <LabeledSelect
                        label="Activity Level"
                        id="activityLevel"
                        value={selectedActivityLevel}
                        onChange={(e) => setSelectedActivityLevel(e.target.value)}
                        options={activityLevels}
                      />
                <LabeledInput
                        label="Target Weight"
                        id="targetWeight"
                        value={targetWeight}
                        onChange={(e) => setTargetWeight(e.target.value)}
                        placeholder="ex: 50"
                        unit="kg"
                      />
                <div className="flex items-center justify-start gap-4 py-5">
                        <button
                          type="button"
                          className="text-white py-2 w-full px-5 rounded-md self-end mb-4 bg-slate-600"
                          onClick={submitInputs}
                        >
                          Calculate
                        </button>
                      
                      </div>

                </form>
                    )

}
export default HealthInputs;