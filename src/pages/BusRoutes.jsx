import { useState } from "react";

const busRoutes = {
  "Route 4 – Adyar": ["Ennore", "Tondiarpet", "Egmore", "Adyar"],
  "Route 12 – Mount": ["Mount", "Saidapet", "T. Nagar", "Central"],
  "Route 18 – Anna Nagar": ["Villivakkam", "Anna Nagar", "Egmore", "CMBT"],
};

export default function BusRouteDropdown() {
  const [selectedRoute, setSelectedRoute] = useState("");

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">
      {/* Title */}
      <div className="text-center relative">
        <h1 className="text-lg font-funnel mb-2">BUS ROUTES</h1>

        {/* Download Button (top right corner, slightly below title) */}
        <div className="absolute right-1 transform -translate-y-1/2">
          <a
            href="/bus_routes.pdf"
            download
            className="bg-emerald-400 hover:bg-emerald-700 text-white font-funnel py-2 px-4 rounded-full shadow"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Dropdown */}
      <div className="max-w-md mx-auto mt-10">
        <label className="block mb-2 text-lg">Select a Bus Route</label>
        <select
          value={selectedRoute}
          onChange={(e) => setSelectedRoute(e.target.value)}
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choose a Route --</option>
          {Object.keys(busRoutes).map((route) => (
            <option key={route} value={route}>
              {route}
            </option>
          ))}
        </select>

        {/* Bus Stops Display */}
        {selectedRoute && (
          <div className="mt-6 bg-gray-900 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">{selectedRoute}</h2>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              {busRoutes[selectedRoute].map((stop, index) => (
                <li key={index}>{stop}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
