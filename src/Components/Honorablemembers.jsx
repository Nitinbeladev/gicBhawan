import honorablemembers from "../membersData/honorables/honorable.json";
export default function HonorableMembers() {
  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0F2C69] mb-6">
        Our Honorable Members
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {honorablemembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg text-center"
          >
            {" "}
            {/*honorable members image adjustments */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-scale-down rounded-md"
            />
            <h3 className="font-bold text-lg mt-4">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
