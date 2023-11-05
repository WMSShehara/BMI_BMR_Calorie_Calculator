"use client";
import React, { useState } from "react";
import HealthCal from "@/components/health/HealthCal";

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Body Mass Index (BMI) and Calorie Requirement Calculator</h1>
      <HealthCal />
    </div>
    </main>
  )
}
