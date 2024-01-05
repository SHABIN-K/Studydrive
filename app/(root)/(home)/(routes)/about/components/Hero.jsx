const Hero = () => {
  const text = {
    tittle_one: "Dive into the Sea of ",
    tittle_two: "Study Resources 🌊",
    descrption:
      "Join the community on a mission to make education more accessible and enjoyable. Start your journey with Paschub today!",
  };
  return (
    <section className="text-white">
      <div className="mx-auto text-center mt-10 items-center justify-center max-w-3xl">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl md:text-7xl">
          {text.tittle_one}
          <span className="sm:block">{text.tittle_two}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl sm:text-xl font-medium">
          {text.descrption}
        </p>
      </div>
    </section>
  );
};

export default Hero;
