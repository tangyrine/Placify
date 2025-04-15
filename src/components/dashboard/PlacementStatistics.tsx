import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const placementData = [
  { year: "2015", students: 60 },
  { year: "2016", students: 65 },
  { year: "2017", students: 75 },
  { year: "2018", students: 85 },
  { year: "2019", students: 75 },
  { year: "2020", students: 90 },
  { year: "2021", students: 100 },
  { year: "2022", students: 120 },
  { year: "2023", students: 140 },
  { year: "2024", students: 160 },
];

const companyData = [
  { name: "IBM", value: 18.4 },
  { name: "Microsoft", value: 20.8 },
  { name: "Amazon", value: 22.6 },
  { name: "Google", value: 25.2 },
  { name: "Visteon", value: 13.0 },
];

const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

const PlacementStatistics = () => {
  return (
    <div className="space-y-8 bg-blue-50 min-h-screen">
      <h2 className="text-xl font-semibold mb-6">
        Top three packages of the year
      </h2>
      <div className="flex gap-2 mb-4">
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm w-full border border-blue-100 rounded-3xl relative group">
          <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            View LinkedIn Profile
          </div>
          <div className="mr-4">
            <img
              src="https://i.pinimg.com/736x/13/9f/bd/139fbd312e9441edbb356e38fa967852.jpg"
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="font-medium">Nisha Naik</h3>
            <p className="text-sm text-gray-600">Software Developer, Google</p>
          </div>
          <div className="text-lg font-bold text-orange-500">40LPA</div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm w-full border border-blue-100 rounded-3xl relative group">
          <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            View LinkedIn Profile
          </div>
          <div className="mr-4">
            <img
              src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg"
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="font-medium">Ashton Souza</h3>
            <p className="text-sm text-gray-600">Data Analyst, IBM</p>
          </div>
          <div className="text-lg font-bold text-orange-500">30LPA</div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm w-full border border-blue-100 rounded-3xl relative group">
          <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            View LinkedIn Profile
          </div>
          <div className="mr-4">
            <img
              src="https://i.pinimg.com/736x/3c/07/d4/3c07d4d147861c7233aec7c824e34cb5.jpg"
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="font-medium">Ananya Sharma</h3>
            <p className="text-sm text-gray-600">Devops Engineer, IBM</p>
          </div>
          <div className="text-lg font-bold text-orange-500">20LPA</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 rounded-3xl">
          <h2 className="text-lg text-center font-semibold mb-4">
            Trends Over the years
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={placementData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="students"
                fill="#69b3f8"
                isAnimationActive={true}
                animationBegin={0}
                animationDuration={1500}
                animationEasing="ease-out"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 rounded-3xl">
          <h2 className="text-lg text-center font-semibold mb-4">
            Top 5 companies that hired candidates
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={companyData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(1)}%`
                }
                isAnimationActive={true}
                animationBegin={0}
                animationDuration={1500}
                animationEasing="ease-out"
              >
                {companyData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Placement Details</h2>
      <div className="flex flex-wrap gap-4">
        <div className="bg-white py-3 px-6 rounded-full shadow-sm border border-blue-100">
          40 Students placed at Oracle
        </div>
        <div className="bg-white py-3 px-6 rounded-full shadow-sm border border-blue-100">
          10 Students placed at Google
        </div>
        <div className="bg-white py-3 px-6 rounded-full shadow-sm border border-blue-100">
          10 Students placed at Amazon
        </div>
        <div className="bg-white py-3 px-6 rounded-full shadow-sm border border-blue-100">
          20 Students placed at IBM
        </div>
        <div className="bg-white py-3 px-6 rounded-full shadow-sm border border-blue-100">
          4 Students placed at Visteon
        </div>
        <div className="bg-white py-3 px-6 rounded-full shadow-sm border border-blue-100">
          10 Students placed at Emergence
        </div>
        <div className="bg-white py-3 px-6 rounded-full shadow-sm border border-blue-100">
          4 Students placed at OneShield
        </div>
      </div>
    </div>
  );
};

export default PlacementStatistics;
