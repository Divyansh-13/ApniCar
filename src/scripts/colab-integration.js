/**
 * Google Colab Integration Helper
 * This script helps connect the frontend with Google Colab backend
 */

export class ColabIntegration {
  constructor(baseUrl) {
    this.baseUrl = baseUrl || process.env.NEXT_PUBLIC_COLAB_URL;
  }

  /**
   * Send prediction request to Colab backend
   */
  async predictPrice(carData) {
    try {
      const response = await fetch(`${this.baseUrl}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(carData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Colab integration error:', error);
      throw new Error('Failed to connect to prediction service');
    }
  }

  /**
   * Check if Colab backend is available
   */
  async healthCheck() {
    try {
      const response = await fetch(`${this.baseUrl}/health`, {
        method: 'GET',
        timeout: 5000
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get model information
   */
  async getModelInfo() {
    try {
      const response = await fetch(`${this.baseUrl}/model-info`);
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Failed to get model info:', error);
      return null;
    }
  }
}

// Usage instructions for Google Colab:
/*
1. In your Colab notebook, use ngrok to expose your Flask app:
   
   !pip install pyngrok
   from pyngrok import ngrok
   
   # Assuming your Flask app runs on port 5000
   public_url = ngrok.connect(5000)
   print(f"Public URL: {public_url}")

2. Set the NEXT_PUBLIC_COLAB_URL environment variable in your .env.local:
   NEXT_PUBLIC_COLAB_URL=https://your-ngrok-url.ngrok.io

3. Your Colab Flask app should have these endpoints:
   - POST /predict: for price predictions
   - GET /health: for health checks
   - GET /model-info: for model information

Example Flask endpoints for Colab:

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # Your ML prediction logic here
    result = {
        "predicted_price": 12.5,
        "confidence_score": 0.85,
        "nearest_neighbors": [...],
        "model_metrics": {...}
    }
    return jsonify(result)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"})

@app.route('/model-info', methods=['GET'])
def model_info():
    return jsonify({
        "model_type": "K-Nearest Neighbors",
        "features": ["make", "model", "year", "mileage", "fuel", "transmission"],
        "accuracy": 0.89
    })

if __name__ == '__main__':
    app.run(port=5000)
*/
