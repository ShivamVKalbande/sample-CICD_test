export default function Rockets() {
  const rockets = [
    { name: "Rocket One", img: "https://via.placeholder.com/400x500" },
    { name: "Rocket Two", img: "https://via.placeholder.com/400x500" },
    { name: "Rocket Three", img: "https://via.placeholder.com/400x500" },
  ];

  return (
    <section id="rockets" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">Our Rockets</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10 px-10">
        {rockets.map((rocket) => (
          <div key={rocket.name} className="bg-white rounded-xl shadow-lg p-4">
            <img src={rocket.img} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{rocket.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
