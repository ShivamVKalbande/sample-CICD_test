export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold">Our Mission</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10 px-10">
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="font-semibold text-xl">Innovation</h3>
          <p className="text-gray-600 mt-2">Constantly pushing boundaries.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="font-semibold text-xl">Technology</h3>
          <p className="text-gray-600 mt-2">Building next-gen space systems.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="font-semibold text-xl">Future</h3>
          <p className="text-gray-600 mt-2">Making space accessible.</p>
        </div>
      </div>
    </section>
  );
}
