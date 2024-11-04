
const About = () => {
  return (
    <div className="bg-gray-800 flex justify-center items-center min-h-screen font-sans p-5">
      <div className="text-center">
        <h1 className="text-white mb-5 text-4xl">Hello world</h1>
        <h2 className="text-[#B99B6C] mb-5 text-2xl">One Man, Many Faces</h2>
        <p className="text-white leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reprehenderit quae, ex doloribus officia accusantium. Illo, dolorem incidunt. Eos quas animi commodi a, officia rerum eaque culpa eveniet quidem delectus.</p>
      </div>
      <div className="flex justify-center items-center w-4/5 mt-5">
        <img src="../canva.png" alt="profile" className="max-w-full h-auto"/>
      </div>
    </div>
  );
}

export default About;