"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Car, IndianRupee, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PredictionResult } from "./prediction-result";

export function PredictionForm() {
  const [formData, setFormData] = useState({
    Company: "",
    Model: "",
    Type: "",
    Fuel: "",
    Transmission: "",
    Engine: 0,
    Mileage: 0,
    Kms_driven: 0,
    Buyers: 1,
    Horsepower: 0,
    Year: new Date().getFullYear(),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const carCompanies = [
    "Maruti",
    "Hyundai",
    "Honda",
    "Toyota",
    "Mahindra",
    "Tata",
    "Ford",
    "Renault",
    "Volkswagen",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Skoda",
    "Kia",
    "MG",
    "Jeep",
    "Jaguar",
    "Land Rover",
    "Volvo",
  ];

  const carTypes = ["Sedan", "Hatchback", "SUV", "MUV", "Luxury", "Coupe", "Convertible", "Wagon", "Van", "Pickup"];

  const fuelTypes = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid", "LPG"];

  const transmissionTypes = ["Manual", "Automatic", "AMT", "CVT", "DCT"];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError(null);
  };

  const validateForm = () => {
    if (!formData.Company || !formData.Model || !formData.Type || !formData.Fuel || !formData.Transmission) {
      setError("Please fill in all required fields");
      return false;
    }
    if (formData.Year < 1990 || formData.Year > new Date().getFullYear() + 1) {
      setError("Please enter a valid year");
      return false;
    }
    if (
      formData.Engine <= 0 ||
      formData.Mileage <= 0 ||
      formData.Kms_driven < 0 ||
      formData.Buyers <= 0 ||
      formData.Horsepower <= 0
    ) {
      setError("Please enter valid positive numbers for all numeric fields");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      console.log("Submitting form data:", formData);

      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get prediction");
      }

      const result = await response.json();
      console.log("Prediction result:", result);
      setPrediction(result);
    } catch (err) {
      console.error("Prediction error:", err);
      setError(err.message || "Failed to connect to prediction service. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="prediction-form" className="py-20 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get Your Car Price Prediction</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Enter your car details below and our AI model will provide an accurate price estimate in lakhs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-xl bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Car className="h-5 w-5 text-indigo-400" />
                  Car Details
                </CardTitle>
                <CardDescription className="text-black">Fill in the information about your car</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-900">
                        Company *
                      </Label>
                      <Select
                        onValueChange={(value) => handleInputChange("Company", value)}
                        value={formData.Company}
                        className="bg-gray-100 text-gray-900 border-gray-300"
                      >
                        <SelectTrigger className="bg-gray-100 text-gray-900 border-gray-300">
                          <SelectValue placeholder="Select car company" className="text-gray-900" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-100 text-gray-900">
                          {carCompanies.map((company) => (
                            <SelectItem key={company} value={company} className="bg-gray-100 text-gray-900">
                              {company}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="model" className="text-gray-900">
                        Model *
                      </Label>
                      <Input
                        id="model"
                        placeholder="e.g., Swift, i20, City"
                        value={formData.Model}
                        onChange={(e) => handleInputChange("Model", e.target.value)}
                        className="bg-gray-100 text-gray-900 border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type" className="text-gray-900">
                        Type *
                      </Label>
                      <Select
                        onValueChange={(value) => handleInputChange("Type", value)}
                        value={formData.Type}
                        className="bg-gray-100 text-gray-900 border-gray-300"
                      >
                        <SelectTrigger className="bg-gray-100 text-gray-900 border-gray-300">
                          <SelectValue placeholder="Select car type" className="text-gray-900" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-100 text-gray-900">
                          {carTypes.map((type) => (
                            <SelectItem key={type} value={type} className="bg-gray-100 text-gray-900">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fuel" className="text-gray-900">
                        Fuel Type *
                      </Label>
                      <Select
                        onValueChange={(value) => handleInputChange("Fuel", value)}
                        value={formData.Fuel}
                        className="bg-gray-100 text-gray-900 border-gray-300"
                      >
                        <SelectTrigger className="bg-gray-100 text-gray-900 border-gray-300">
                          <SelectValue placeholder="Select fuel type" className="text-gray-900" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-100 text-gray-900">
                          {fuelTypes.map((fuel) => (
                            <SelectItem key={fuel} value={fuel} className="bg-gray-100 text-gray-900">
                              {fuel}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="transmission" className="text-gray-900">
                        Transmission *
                      </Label>
                      <Select
                        onValueChange={(value) => handleInputChange("Transmission", value)}
                        value={formData.Transmission}
                        className="bg-gray-100 text-gray-900 border-gray-300"
                      >
                        <SelectTrigger className="bg-gray-100 text-gray-900 border-gray-300">
                          <SelectValue placeholder="Select transmission" className="text-gray-900" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-100 text-gray-900">
                          {transmissionTypes.map((transmission) => (
                            <SelectItem key={transmission} value={transmission} className="bg-gray-100 text-gray-900">
                              {transmission}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="year" className="text-gray-900">
                        Year *
                      </Label>
                      <Input
                        id="year"
                        type="number"
                        min="1990"
                        max={new Date().getFullYear() + 1}
                        value={formData.Year}
                        onChange={(e) => handleInputChange("Year", parseInt(e.target.value) || 0)}
                        className="bg-gray-100 text-gray-900 border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="kms_driven" className="text-gray-900">
                        Kilometers Driven *
                      </Label>
                      <Input
                        id="kms_driven"
                        type="number"
                        min="0"
                        placeholder="Total kilometers driven"
                        value={formData.Kms_driven}
                        onChange={(e) => handleInputChange("Kms_driven", parseInt(e.target.value) || 0)}
                        className="bg-gray-100 text-gray-900 border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="Engine" className="text-gray-900">
                        Engine (cc) *
                      </Label>
                      <Input
                        id="Engine"
                        type="number"
                        min="1"
                        placeholder="Engine capacity in cc"
                        value={formData.Engine}
                        onChange={(e) => handleInputChange("Engine", parseInt(e.target.value) || 0)}
                        className="bg-gray-100 text-gray-900 border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="Mileage" className="text-gray-900">
                        Mileage (kmpl) *
                      </Label>
                      <Input
                        id="Mileage"
                        type="number"
                        min="1"
                        step="0.1"
                        placeholder="Fuel efficiency"
                        value={formData.Mileage}
                        onChange={(e) => handleInputChange("Mileage", parseFloat(e.target.value) || 0)}
                        className="bg-gray-100 text-gray-900 border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="Horsepower" className="text-gray-900">
                        Horsepower *
                      </Label>
                      <Input
                        id="Horsepower"
                        type="number"
                        min="1"
                        placeholder="Engine horsepower"
                        value={formData.Horsepower}
                        onChange={(e) => handleInputChange("Horsepower", parseInt(e.target.value) || 0)}
                        className="bg-gray-100 text-gray-900 border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="Buyers" className="text-gray-900">
                      Number of Previous Buyers *
                    </Label>
                    <Input
                      id="Buyers"
                      type="number"
                      min="1"
                      max="10"
                      placeholder="Number of previous owners"
                      value={formData.Buyers}
                      onChange={(e) => handleInputChange("Buyers", parseInt(e.target.value) || 1)}
                      className="bg-gray-100 text-gray-900 border-gray-300"
                    />
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <Info className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Predicting Price...
                      </>
                    ) : (
                      <>
                        <IndianRupee className="mr-2 h-4 w-4" />
                        Get Price Prediction
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {prediction && (
              <PredictionResult prediction={prediction} carData={formData} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
