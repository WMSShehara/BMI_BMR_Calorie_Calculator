"use client";
import HealthCal from "@/components/health/HealthCal";
import React, { useState } from "react";

const HealthCalculator = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Body Mass Index (BMI) and Calorie Requirement Calculator</h1>
      <HealthCal />
    </div>
  );
};

export default HealthCalculator;