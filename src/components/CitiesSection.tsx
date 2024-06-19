import Link from 'next/link';

const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Multan'];

const CitiesSection = () => {
  return (
    <section id="cities" className="p-8 text-center bg-gray-100" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-4">Our Cities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cities.map((city) => (
          <Link key={city} href={`/cities/${city.toLowerCase()}`}>
            <p className="block border p-4 rounded shadow-lg bg-white">{city}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CitiesSection;
