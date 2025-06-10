import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, TrendingUp, Users, BarChart3 } from "lucide-react";

export function PredictionResult({ prediction, carData }) {
  if (!prediction) return null;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          Price Prediction Results
        </CardTitle>
        <CardDescription>
          AI-powered price estimate for your {carData.Company} {carData.Model}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-4xl font-bold text-green-600 mb-2">
            <IndianRupee className="h-8 w-8" />
            {prediction.predicted_price} Lakhs
          </div>
          <Badge variant="secondary" className="mb-4">
            Confidence: {(prediction.confidence_score * 100).toFixed(1)}%
          </Badge>
        </div>

        {prediction.nearest_neighbors && prediction.nearest_neighbors.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Similar Cars in Market
            </h4>
            <div className="space-y-2">
              {prediction.nearest_neighbors.slice(0, 3).map((car, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{car.Company} {car.Model}</div>
                    <div className="text-sm text-gray-500">{car.Year}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">₹{car.Price} L</div>
                    <div className="text-xs text-gray-400">
                      Match: {((1 - car.distance) * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {prediction.model_metrics && (
          <div className="pt-4 border-t">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Model Performance
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-blue-600">
                  {prediction.model_metrics.r2_score?.toFixed(3)}
                </div>
                <div className="text-xs text-gray-500">R² Score</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-600">
                  {prediction.model_metrics.mae?.toFixed(1)}L
                </div>
                <div className="text-xs text-gray-500">MAE</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-600">
                  {prediction.model_metrics.rmse?.toFixed(1)}L
                </div>
                <div className="text-xs text-gray-500">RMSE</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
