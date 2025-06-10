import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# This is a demonstration script to analyze the car dataset
# In a real scenario, you would load the actual CSV file

# Create a sample dataframe based on the schema
data = {
    'ID': range(1, 11),
    'Company': ['Maruti', 'Hyundai', 'Honda', 'Toyota', 'Mahindra', 'Tata', 'Ford', 'Renault', 'Volkswagen', 'BMW'],
    'Model': ['Swift', 'i20', 'City', 'Innova', 'XUV500', 'Nexon', 'EcoSport', 'Duster', 'Polo', 'X1'],
    'Type': ['Hatchback', 'Hatchback', 'Sedan', 'MUV', 'SUV', 'SUV', 'SUV', 'SUV', 'Hatchback', 'SUV'],
    'Fuel': ['Petrol', 'Petrol', 'Petrol', 'Diesel', 'Diesel', 'Petrol', 'Petrol', 'Diesel', 'Petrol', 'Diesel'],
    'Transmission': ['Manual', 'Manual', 'Automatic', 'Manual', 'Automatic', 'Manual', 'Automatic', 'Manual', 'Manual', 'Automatic'],
    'Engine': [1197, 1197, 1498, 2494, 2179, 1198, 1496, 1498, 999, 1995],
    'Mileage': [21.21, 20.35, 17.8, 15.1, 15.1, 17.0, 18.9, 19.87, 18.24, 20.37],
    'Kms_driven': [15000, 32000, 45000, 80000, 25000, 18000, 30000, 40000, 22000, 35000],
    'Buyers': [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    'Horsepower (kw)': [61, 61, 89, 110, 103, 81, 91, 78, 70, 140],
    'Year': [2018, 2017, 2019, 2016, 2020, 2019, 2018, 2017, 2018, 2019],
    'Price (Lakhs)': [5.5, 6.2, 9.5, 14.2, 15.8, 7.8, 9.2, 8.5, 6.8, 35.5]
}

df = pd.DataFrame(data)

print("Dataset Analysis for Car Price Prediction")
print("========================================")

# Basic statistics
print("\nBasic Statistics:")
print(f"Number of records: {len(df)}")
print(f"Number of features: {len(df.columns)}")

# Summary statistics for numerical columns
print("\nSummary Statistics for Numerical Features:")
numerical_cols = ['Engine', 'Mileage', 'Kms_driven', 'Horsepower (kw)', 'Year', 'Price (Lakhs)']
print(df[numerical_cols].describe())

# Distribution of categorical features
print("\nDistribution of Car Companies:")
print(df['Company'].value_counts())

print("\nDistribution of Car Types:")
print(df['Type'].value_counts())

print("\nDistribution of Fuel Types:")
print(df['Fuel'].value_counts())

print("\nDistribution of Transmission Types:")
print(df['Transmission'].value_counts())

# Correlation analysis
print("\nCorrelation with Price:")
correlations = df[numerical_cols].corr()['Price (Lakhs)'].sort_values(ascending=False)
print(correlations)

# Visualize price distribution
plt.figure(figsize=(10, 6))
plt.hist(df['Price (Lakhs)'], bins=20, color='skyblue', edgecolor='black')
plt.title('Distribution of Car Prices')
plt.xlabel('Price (Lakhs)')
plt.ylabel('Frequency')
plt.grid(True, alpha=0.3)
plt.show()

# Visualize relationship between features and price
plt.figure(figsize=(12, 8))
plt.scatter(df['Year'], df['Price (Lakhs)'], alpha=0.7)
plt.title('Car Price vs. Year')
plt.xlabel('Year')
plt.ylabel('Price (Lakhs)')
plt.grid(True, alpha=0.3)
plt.show()

plt.figure(figsize=(12, 8))
plt.scatter(df['Horsepower (kw)'], df['Price (Lakhs)'], alpha=0.7)
plt.title('Car Price vs. Horsepower')
plt.xlabel('Horsepower (kW)')
plt.ylabel('Price (Lakhs)')
plt.grid(True, alpha=0.3)
plt.show()

print("\nAnalysis Complete!")
