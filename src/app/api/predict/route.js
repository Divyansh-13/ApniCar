import { NextResponse } from "next/server"

// Simulated car data for more realistic predictions
const carDatabase = [
  { Company: "Maruti", Model: "Swift", Year: 2020, Fuel: "Petrol", Transmission: "Manual", basePrice: 6.5 },
  { Company: "Maruti", Model: "Alto", Year: 2019, Fuel: "Petrol", Transmission: "Manual", basePrice: 4.2 },
  { Company: "Hyundai", Model: "i20", Year: 2021, Fuel: "Petrol", Transmission: "Automatic", basePrice: 8.5 },
  { Company: "Hyundai", Model: "Creta", Year: 2022, Fuel: "Diesel", Transmission: "Automatic", basePrice: 14.5 },
  { Company: "Tata", Model: "Nexon", Year: 2020, Fuel: "Diesel", Transmission: "Manual", basePrice: 9.8 },
  { Company: "Honda", Model: "City", Year: 2021, Fuel: "Petrol", Transmission: "Automatic", basePrice: 12.5 },
  { Company: "Toyota", Model: "Innova", Year: 2020, Fuel: "Diesel", Transmission: "Manual", basePrice: 18.5 },
  { Company: "Mahindra", Model: "XUV300", Year: 2019, Fuel: "Diesel", Transmission: "Manual", basePrice: 10.2 },
];

function calculatePrice(formData) {
  const { Company, Model, Year, Mileage, Fuel, Transmission, Engine, Kms_driven, Buyers, Horsepower, Type } = formData;
  
  // Enhanced calculation based on new parameters
  let basePrice = 8.0;
  
  // Company-based pricing
  const premiumBrands = ["BMW", "Mercedes-Benz", "Audi", "Jaguar", "Land Rover", "Volvo"];
  const midRangeBrands = ["Toyota", "Honda", "Volkswagen", "Skoda"];
  
  if (premiumBrands.includes(Company)) {
    basePrice = 25.0;
  } else if (midRangeBrands.includes(Company)) {
    basePrice = 12.0;
  }
  
  // Type adjustment
  const typeMultipliers = {
    "Luxury": 1.5,
    "SUV": 1.3,
    "MUV": 1.2,
    "Sedan": 1.1,
    "Hatchback": 0.9,
    "Coupe": 1.4,
    "Convertible": 1.6
  };
  basePrice *= (typeMultipliers[Type] || 1.0);
  
  // Age depreciation
  const currentYear = new Date().getFullYear();
  const carAge = currentYear - parseInt(Year);
  basePrice *= Math.max(0.3, 1 - (carAge * 0.08));
  
  // Kilometers driven impact
  const kmsDriven = parseInt(Kms_driven);
  if (kmsDriven > 100000) basePrice *= 0.8;
  else if (kmsDriven > 50000) basePrice *= 0.9;
  else if (kmsDriven < 10000) basePrice *= 1.1;
  
  // Engine size impact
  const engineSize = parseInt(Engine);
  if (engineSize > 2000) basePrice *= 1.2;
  else if (engineSize > 1500) basePrice *= 1.1;
  else if (engineSize < 1000) basePrice *= 0.9;
  
  // Horsepower impact
  const hp = parseInt(Horsepower);
  if (hp > 150) basePrice *= 1.2;
  else if (hp > 100) basePrice *= 1.1;
  else if (hp < 60) basePrice *= 0.9;
  
  // Fuel type adjustment
  if (Fuel === "Electric") basePrice *= 1.4;
  else if (Fuel === "Hybrid") basePrice *= 1.3;
  else if (Fuel === "Diesel") basePrice *= 1.1;
  
  // Transmission adjustment
  if (Transmission === "Automatic" || Transmission === "CVT" || Transmission === "DCT") {
    basePrice *= 1.15;
  }
  
  // Previous owners impact
  const buyers = parseInt(Buyers);
  basePrice *= Math.max(0.7, 1 - ((buyers - 1) * 0.1));
  
  return Math.max(2.0, basePrice * (0.85 + Math.random() * 0.3));
}

function findNearestNeighbors(formData) {
  const { Company, Fuel, Transmission } = formData;
  
  return carDatabase
    .filter(car => 
      car.Company.toLowerCase() === Company.toLowerCase() || 
      car.Fuel === Fuel || 
      car.Transmission === Transmission
    )
    .slice(0, 5)
    .map(car => ({
      Company: car.Company,
      Model: car.Model,
      Year: car.Year,
      Price: car.basePrice,
      distance: Math.random() * 0.3 // Random distance for demo
    }));
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['Company', 'Model', 'Year', 'Mileage', 'Fuel', 'Transmission'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Calculate predicted price
    const predictedPrice = calculatePrice(body);
    const nearestNeighbors = findNearestNeighbors(body);
    
    // Simulate model metrics
    const response = {
      predicted_price: predictedPrice.toFixed(2),
      confidence_score: 0.82 + Math.random() * 0.15, // 82-97% confidence
      nearest_neighbors: nearestNeighbors,
      model_metrics: {
        mae: 1.1 + Math.random() * 0.8, // Mean Absolute Error
        rmse: 1.5 + Math.random() * 1.0, // Root Mean Square Error
        r2_score: 0.85 + Math.random() * 0.1 // R-squared score
      },
      input_data: body // Echo back the input for verification
    };
    
    // Add a small delay to simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    return NextResponse.json(response);
    
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to process prediction request" },
      { status: 500 }
    );
  }
}

// Handle GET requests for health check
export async function GET() {
  return NextResponse.json({
    status: "healthy",
    message: "Car price prediction API is running",
    timestamp: new Date().toISOString()
  });
}
