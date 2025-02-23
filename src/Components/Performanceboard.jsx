import { CgPerformance } from "react-icons/cg";

export default function Performanceboard() {
  return (
    <div className="bg-[#0F2C69] p-12 w-full mt-5">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="text-white flex flex-col items-center md:items-start w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <div className="p-1 border border-white rounded-full flex items-center justify-center">
              {/* <img
                  src="/logo.png" // Replace with actual logo
                  alt="Logo"
                  className="w-8 h-8"
                /> */}

              <CgPerformance className="text-3xl" />
            </div>
            <h2 className="text-lg font-semibold text-center md:text-left">
              Performance <span className="font-bold">Smart Board</span>
            </h2>
          </div>
          <button className="mt-4 px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-[#0F2C69] transition w-full md:w-auto">
            View All Events
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 md:mt-0 w-full justify-center">
          <StatCard icon="📅" value="1+" label="Total Events" />
          <StatCard
            icon="📝"
            value="2,305+"
            label="Total Registered Candidates"
          />
          <StatCard icon="🏆" value="12+" label="Total Wins" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-full sm:w-64 relative border-l-4 border-[#0F2C69]">
      <span className="text-3xl">{icon}</span>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
      <p className="text-gray-600 text-center">{label}</p>
    </div>
  );
}
