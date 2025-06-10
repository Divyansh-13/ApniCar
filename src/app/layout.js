import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ApniCar - AI-Powered Car Price Prediction | Accurate Vehicle Valuation",
  description:
    "Get instant, accurate car price predictions in India using our advanced AI technology. Compare market values, analyze trends, and make informed decisions for buying or selling vehicles.",
  keywords:
    "car price prediction, vehicle valuation, KNN algorithm, machine learning, auto pricing, Indian cars, car market analysis",
  authors: [{ name: "ApniCar Team" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <div className="relative z-50">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
