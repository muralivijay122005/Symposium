import { useState } from "react";

const busRoutes = {
    "Route 1 – East Tambaram": [
      { stop: "Bharath College", time: "6:50" },
      { stop: "Camp Road", time: "6:55" },
      { stop: "Tambaram", time: "7:00" },
      { stop: "Valluvar Gurukulam", time: "7:01" },
      { stop: "Sanitorium", time: "7:02" },
      { stop: "Chrompet", time: "7:05" },
      { stop: "Pallavaram", time: "7:10" },
      { stop: "Meenambakkam", time: "7:12" },
      { stop: "Nanganallur Jn", time: "7:15" },
      { stop: "Kathipara Junction", time: "7:20" },
      { stop: "Ekkadu Thangal", time: "7:23" },
      { stop: "Kasi Theatre", time: "7:25" },
      { stop: "Ashok Pillar", time: "7:30" },
      { stop: "Kumaran Hospital", time: "7:32" },
      { stop: "Lakshman Sruthi", time: "7:34" },
      { stop: "Vadapalani", time: "7:36" },
      { stop: "Ambika Empire", time: "7:37" },
      { stop: "Thirunagar", time: "7:38" },
      { stop: "MMDA", time: "7:40" },
      { stop: "SAF", time: "7:42" },
      { stop: "VEC", time: "7:45" }
    ],
    "Route 2 – Medavakkam": [
      { stop: "Kovilambakkam Sathya Agency", time: "6:35" },
      { stop: "Eachangadu", time: "6:45" },
      { stop: "Kamatchi Hospital", time: "6:50" },
      { stop: "Kaively Signal", time: "6:55" },
      { stop: "Velachery Venkadeswara Super Market", time: "7:00" },
      { stop: "Kajana Jewellery", time: "7:02" },
      { stop: "Murugan Kalayana Mahal", time: "7:03" },
      { stop: "Erikkarai", time: "7:05" },
      { stop: "Check post", time: "7:10" },
      { stop: "Little Mount", time: "7:13" },
      { stop: "Saidapet (Hotel Metro)", time: "7:15" },
      { stop: "T.Nagar terminus", time: "7:23" },
      { stop: "North Usman Road", time: "7:28" },
      { stop: "Mahalingapuram", time: "7:30" },
      { stop: "Soolaimedu", time: "7:32" },
      { stop: "Mehtha Nagar", time: "7:33" },
      { stop: "Skywalk", time: "7:37" },
      { stop: "Aminjikkarai Police station", time: "7:40" },
      { stop: "VEC", time: "7:45" }
    ],
    "Route 3 – Palavakkam": [
      { stop: "Palavakkam", time: "6:25" },
      { stop: "RTO Office", time: "6:30" },
      { stop: "Thruvanmiyur", time: "6:35" },
      { stop: "Jeyanthi Theatre", time: "6:37" },
      { stop: "Adayar Depot", time: "6:39" },
      { stop: "Malar Hospital", time: "6:45" },
      { stop: "Sathya Studio", time: "6:47" },
      { stop: "Mandaiveli Depot", time: "6:50" },
      { stop: "Mylapore Theppakkulam", time: "6:55" },
      { stop: "Royapettai Police Station", time: "7:03" },
      { stop: "Mesapet Market", time: "7:04" },
      { stop: "Ice House", time: "7:06" },
      { stop: "Rathna Café", time: "7:20" },
      { stop: "Commissioner Office", time: "7:30" },
      { stop: "Purasaiwalkam BSNL", time: "7:35" },
      { stop: "Kilpauk Mental Hospital", time: "7:37" },
      { stop: "Ayanavaram ESI", time: "7:38" },
      { stop: "Sayani", time: "7:42" },
      { stop: "Joint Office", time: "7:44" },
      { stop: "ICF", time: "7:47" },
      { stop: "Kallukkadai", time: "7:48" },
      { stop: "Villivakkam", time: "7:50" },
      { stop: "VEC", time: "7:55" }
    ],
    "Route 3-A – Chinthamani": [
      { stop: "Chinthamani", time: "7:25" },
      { stop: "Lotus Colony", time: "7:28" },
      { stop: "New Avadi Road", time: "7:30" },
      { stop: "New Avadi Road ICF Signal", time: "7:33" },
      { stop: "Nathamuni", time: "7:35" },
      { stop: "Sidco", time: "7:36" },
      { stop: "Rajamangalam Police station", time: "7:51" },
      { stop: "Srinivasan Nagar", time: "7:53" },
      { stop: "Poombhukar nagar", time: "7:55" },
      { stop: "Matha temple", time: "7:57" },
      { stop: "State Bank", time: "7:59" },
      { stop: "Kulathur", time: "8:01" },
      { stop: "VEC", time: "8:05" }
    ],
    "Route 4 – Kumanan Chavadi": [
      { stop: "Kumanan Chavadi", time: "6:45" },
      { stop: "Kattupakkam", time: "6:48" },
      { stop: "Durgai Amman Koil", time: "6:52" },
      { stop: "Iyyappanthangal", time: "6:53" },
      { stop: "Ramachandra Hospital", time: "6:54" },
      { stop: "Porur Signal", time: "7:00" },
      { stop: "Karambakkam Vasanth & Co", time: "7:01" },
      { stop: "Valasaravakkam", time: "7:05" },
      { stop: "Kesavarthini", time: "7:08" },
      { stop: "Alwar thirunagar", time: "7:10" },
      { stop: "Vembuli Amman Koil", time: "7:12" },
      { stop: "Virugambakkam", time: "7:15" },
      { stop: "Avichi School", time: "7:16" },
      { stop: "Thai Sathya School", time: "7:18" },
      { stop: "KK Nagar RTO office", time: "7:20" },
      { stop: "Pondicheri guest house", time: "7:21" },
      { stop: "Nesapakkam", time: "7:23" },
      { stop: "Ajanta Bus stop", time: "7:24" },
      { stop: "Udipi hotel bus stop", time: "7:25" },
      { stop: "Virugambakkam Market", time: "7:31" },
      { stop: "Elango Nagar", time: "7:33" },
      { stop: "Natesan Nagar", time: "7:34" },
      { stop: "Sai Nagar", time: "7:35" },
      { stop: "Chinmaya Nagar", time: "7:36" },
      { stop: "Vijayakanth Thirumana Mandapam", time: "7:39" },
      { stop: "Senthil Nagar", time: "7:50" },
      { stop: "Rettai Eri RTO office", time: "7:55" },
      { stop: "VEC", time: "8:00" }
    ],
    "Route 5 – Thiruvallur": [
      { stop: "Manavala Nagar Signal", time: "6:40" },
      { stop: "Periyakuppam", time: "6:45" },
      { stop: "Oil mill (GRT)", time: "6:50" },
      { stop: "Post Office", time: "6:50" },
      { stop: "State Bank", time: "6:55" },
      { stop: "Fire Service", time: "6:55" },
      { stop: "Theradi", time: "7:00" },
      { stop: "Kakkalur", time: "7:05" },
      { stop: "Veppampet", time: "7:15" },
      { stop: "Thiruninravur Police station", time: "7:25" },
      { stop: "Thiruninravur Abiramy", time: "7:25" },
      { stop: "Thiruninravur Temple", time: "7:30" },
      { stop: "Pattabiram", time: "7:35" },
      { stop: "Avadi Check post", time: "7:40" },
      { stop: "VEC", time: "7:45" }
    ],
    "Route 5-A – Senneerkuppam": [
      { stop: "Senneerkuppam", time: "7:10" },
      { stop: "Kaduvetti", time: "7:12" },
      { stop: "Paruthipattu Velammal School", time: "7:20" },
      { stop: "Ayyankulam", time: "7:22" },
      { stop: "Kovarthana Giri", time: "7:24" },
      { stop: "JP estate", time: "7:28" },
      { stop: "Avadi Market", time: "7:30" },
      { stop: "Ramarathna Theatre", time: "7:32" },
      { stop: "Check post", time: "7:34" },
      { stop: "Avadi Bus stand", time: "7:36" },
      { stop: "Murugappa polytechnic", time: "7:40" },
      { stop: "Vaishnavi Nagar", time: "7:45" },
      { stop: "Thirumullaivayil", time: "7:47" },
      { stop: "Manikandapuram", time: "7:49" },
      { stop: "Stedford Hospital", time: "7:51" },
      { stop: "VEC", time: "7:55" }
    ],
    "Route 6 – Thachur Koot Road": [
      { stop: "Thatchurkoot road", time: "6:30" },
      { stop: "Andarkuppam", time: "6:35" },
      { stop: "Krishnapuram", time: "6:40" },
      { stop: "Ponneri", time: "6:45" },
      { stop: "Elavam Pedu", time: "7:05" },
      { stop: "Vembakkam", time: "7:10" },
      { stop: "Minjur", time: "7:15" },
      { stop: "Nandhiambakkam", time: "7:20" },
      { stop: "Vallur camp", time: "7:25" },
      { stop: "Manali New town", time: "7:30" },
      { stop: "Andar Kuppam", time: "7:35" },
      { stop: "Manali Market", time: "7:45" },
      { stop: "Milk depot", time: "7:50" },
      { stop: "Madhavaram Thapal petti", time: "8:00" },
      { stop: "VEC", time: "8:05" }
    ],
    "Route 7 – Ennore": [
      { stop: "Ennore", time: "6:40" },
      { stop: "Thalankuppam", time: "6:45" },
      { stop: "Burma Nagar", time: "6:50" },
      { stop: "Wimco Nagar", time: "6:55" },
      { stop: "Ajax", time: "7:00" },
      { stop: "Periyar Nagar", time: "7:02" },
      { stop: "Theradi", time: "7:10" },
      { stop: "Rajakadai", time: "7:15" },
      { stop: "Thangal", time: "7:17" },
      { stop: "Toll gate (Tondayarpet)", time: "7:20" },
      { stop: "Pudhu Vannarapettai cross road", time: "7:25" },
      { stop: "Lakshmi Koil", time: "7:27" },
      { stop: "Appolo", time: "7:30" },
      { stop: "VEC", time: "7:35" }
    ],
    "Route 7-A – Tondiarpet": [
      { stop: "Tondiarpet Metro", time: "7:20" },
      { stop: "Manikoondu", time: "7:22" },
      { stop: "Maharani", time: "7:25" },
      { stop: "Singapore Complex", time: "7:27" },
      { stop: "Cement Road", time: "7:30" },
      { stop: "Mint", time: "7:35" },
      { stop: "MKB Nagar", time: "7:40" },
      { stop: "EB Office", time: "7:42" },
      { stop: "Mullai Nagar", time: "7:45" },
      { stop: "MR Nagar", time: "7:47" },
      { stop: "Petrol Bunk", time: "7:50" },
      { stop: "Sidco Nagar", time: "7:52" },
      { stop: "Pavithra Hospital", time: "7:55" },
      { stop: "Erukkancherry Signal", time: "7:59" },
      { stop: "Moolakkadai", time: "8:00" },
      { stop: "VEC", time: "8:05" }
    ],
    "Route 8 – Doveton": [
      { stop: "Doveton", time: "7:10" },
      { stop: "Bhuvaneshwari Theatre", time: "7:15" },
      { stop: "Pattalam Manikoondu", time: "7:18" },
      { stop: "Pattalam Market", time: "7:20" },
      { stop: "Jeeva Station", time: "7:25" },
      { stop: "PB Road Bakery", time: "7:30" },
      { stop: "Perambur bus stand", time: "7:35" },
      { stop: "Railway station", time: "7:37" },
      { stop: "Gandhi Silai", time: "7:40" },
     { stop: "Veenus", time: "7:42" },
      { stop: "Periyar Nagar", time: "7:44" },
      { stop: "70 Feet Road", time: "7:46" },
      { stop: "Don Bosco Periyar statue", time: "7:50" },
      { stop: "Welding Shop", time: "7:51" },
      { stop: "Moogambikai", time: "7:55" },
      { stop: "VEC", time: "8:00" }
    ],
    "Route 9 – Ambattur Estate": [
      { stop: "Ambattur Estate", time: "7:15" },
      { stop: "Mugapp essentielleair MGR Statue", time: "7:20" },
      { stop: "Mugappair Shoba Showroom", time: "7:21" },
      { stop: "Velammal West School", time: "7:24" },
      { stop: "Ambedkar Ground", time: "7:25" },
      { stop: "7H Bus Stand", time: "7:27" },
      { stop: "Panneer Nagar", time: "7:27" },
      { stop: "Golden Flat", time: "7:29" },
      { stop: "Main School", time: "7:32" },
      { stop: "Cheriyan Hospital", time: "7:33" },
      { stop: "Collector Nagar", time: "7:34" },
      { stop: "HP Petrol Bunk", time: "7:35" },
      { stop: "Thirumangalam Signal", time: "7:37" },
      { stop: "Anna Nagar Depot", time: "7:38" },
      { stop: "Lucas Bus Stop", time: "7:40" },
      { stop: "VEC", time: "7:45" }
    ],
    "Route 10 – Velappan Chavadi": [
      { stop: "Velappanchavadi", time: "7:05" },
      { stop: "Vanagaram Signal", time: "7:10" },
      { stop: "Maduravayal Erikkarai Bus Stop", time: "7:12" },
      { stop: "Maduravoyal Market", time: "7:13" },
      { stop: "Maduravoyal Post Office", time: "7:14" },
      { stop: "Ration Shop", time: "7:15" },
      { stop: "Venkaya Mandi", time: "7:18" },
      { stop: "SBIO School", time: "7:21" },
      { stop: "AP Abinava", time: "7:23" },
      { stop: "7M Bus Stop", time: "7:25" },
      { stop: "DR Super Market", time: "7:26" },
      { stop: "State Bank", time: "7:27" },
      { stop: "ICF Colony Church", time: "7:35" },
      { stop: "Ayapakkam Water Tank", time: "7:37" },
      { stop: "Dunlop", time: "7:45" },
      { stop: "TI Cycle", time: "7:47" },
      { stop: "Orakadam", time: "7:51" },
      { stop: "Kallikuppam", time: "7:57" },
      { stop: "VEC", time: "8:00" }
    ]
};

// Suggestion logic
const getSuggestions = (query, busRoutes) => {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  const suggestions = new Set();

  Object.entries(busRoutes).forEach(([routeName, stops]) => {
    if (routeName.toLowerCase().includes(lowerQuery)) {
      suggestions.add(routeName);
    }
    stops.forEach(({ stop }) => {
      if (stop.toLowerCase().includes(lowerQuery)) {
        suggestions.add(stop);
      }
    });
  });

  return Array.from(suggestions).slice(0, 5); // limit to 5
};

export default function BusRoute() {
  const [inputQuery, setInputQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoute, setSelectedRoute] = useState("None");

  const routeOptions = ["None", "All", ...Object.keys(busRoutes)];
  const isFiltering = selectedRoute !== "None" || searchQuery.trim() !== "";

  const handleSearch = () => {
    setSearchQuery(inputQuery.trim());
  };

  const handleSuggestionClick = (suggestion) => {
    setInputQuery(suggestion);
    setSearchQuery(suggestion); // Trigger search immediately
  };

  const filteredRoutes = Object.entries(busRoutes).filter(
    ([routeName, stops]) => {
      const isRouteMatch =
        selectedRoute === "All" || selectedRoute === routeName;

      const isStopMatch =
        searchQuery === "" ||
        routeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stops.some(({ stop }) =>
          stop.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return isFiltering && isRouteMatch && isStopMatch;
    }
  );

  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-10 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Velammal Bus Routes</h1>
          <p className="text-gray-400 text-lg">Academic Year 2024–25</p>
          <a
            href="/bus_routes.pdf"
            download
            className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition text-lg"
          >
            Download PDF
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 relative z-10">
          {/* Search Input + Suggestions */}
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              placeholder="Search stop or route..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-[#1e1e1e] text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {inputQuery.trim() && (
              <ul className="absolute z-20 w-full mt-1 bg-[#1e1e1e] border border-gray-700 rounded-md max-h-48 overflow-y-auto shadow-lg">
                {getSuggestions(inputQuery, busRoutes).map(
                  (suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 cursor-pointer hover:bg-[#2a2a2a] text-gray-200"
                    >
                      {suggestion}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          {/* Route Dropdown */}
          <select
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value)}
            className="px-4 py-3 rounded-md bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {routeOptions.map((route) => (
              <option key={route} value={route}>
                {route === "None" ? "Select Route" : route}
              </option>
            ))}
          </select>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md transition text-lg"
          >
            Search
          </button>
        </div>

        {/* Results */}
        {!isFiltering ? (
          <p className="text-center text-gray-500">
            Use the search or select a route to begin.
          </p>
        ) : filteredRoutes.length === 0 ? (
          <p className="text-center text-gray-500">
            No matching routes or stops.
          </p>
        ) : (
          <div className="space-y-8">
            {filteredRoutes.map(([routeName, stops]) => (
              <div
                key={routeName}
                className="bg-[#1e1e1e] rounded-md p-5 border border-gray-700"
              >
                <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
                  {routeName}
                </h2>
                <ul className="space-y-2 text-gray-200">
                  {stops
                    .filter(({ stop }) =>
                      stop.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map(({ stop, time }, index) => (
                      <li
                        key={index}
                        className="flex justify-between border-b border-gray-700 pb-2"
                      >
                        <span className="text-lg">{stop}</span>
                        {time && (
                          <span className="text-base text-gray-400">
                            {time}
                          </span>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
