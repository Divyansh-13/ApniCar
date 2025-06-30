# ApniCar

ApniCar is a smart web-based tool that leverages Machine Learning, specifically the K-Nearest Neighbors (KNN) algorithm, to predict car prices. By analyzing features such as mileage, age, and brand, ApniCar identifies similar vehicles in its dataset and provides an estimated price based on comparable data points. This helps users make more informed decisions when buying or selling cars.

## Features

- **Car Price Prediction:** Enter vehicle details (mileage, age, brand, etc.) to get an estimated price.
- **KNN-Based Model:** Uses the K-Nearest Neighbors algorithm for accurate, data-driven predictions.
- **User-Friendly Interface:** Simple web interface for quick and easy access.
- **Informed Decisions:** Helps buyers and sellers with price estimates based on real data.

## Technology Stack

- **Frontend:** JavaScript, HTML, CSS
- **Backend:** Python (KNN Machine Learning Model)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (for the frontend)
- [Python 3.x](https://www.python.org/) (for the backend)
- Python dependencies (see below)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Divyansh-13/ApniCar.git
cd ApniCar
```

#### 2. Setting Up & Running the Frontend

```bash
cd frontend   # Navigate to the frontend directory if present
npm install
npm run dev
```
The frontend will typically be available at [http://localhost:3000](http://localhost:3000).

#### 3. Setting Up & Running the Backend

In a new terminal window:

```bash
cd backend    # Navigate to the backend directory if present
pip install -r requirements.txt   # Install Python dependencies
python app.py
```
The backend will typically be available at [http://localhost:5000](http://localhost:5000).

**Note:** If there are no separate `frontend` or `backend` folders, run the commands from the root or relevant directories. Adjust the above commands to fit your project structure.

### Project Structure

```
ApniCar/
├── backend/
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── [frontend files]
│   └── package.json
├── README.md
└── ...
```

## Usage

1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. Enter your car's details (make, model, year, mileage, etc.).
3. Receive an estimated market price for your vehicle.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

> **ApniCar** – Smart price prediction for cars using KNN and real-world data.
