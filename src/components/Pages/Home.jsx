import "./Home.css";
const Home = () => {
  return (
    <div className="alfaContainer">
      <div className="braContent">
        <div className="w-35 h-32 ">
          <div className="homeImage">
            <img src="../pro-foto.png" alt="profile" />
          </div>
        </div>
        <div className="homeText">
          <h1>Hello,</h1>
          <h2 className="alfa-h2">
            I'am <span>Zakaria</span>{" "}
          </h2>
          <h2 className="bra-h2">a Web Developer</h2>
          <p>
            What if I told you that in just 14 months, I transformed my
            curiosity about coding into the ability to build powerful web
            applications? My name is Zakaria and I'm a dedicated Fullstack web
            developer with a strong foundation built over the past 14 months. At
            DCI I was able to gain knowledge about agile methodologies in web
            development including the MERN Stack. It is my priority to design a
            secure and user-friendly website but I want to put my passion for
            web development into practice by creating digital success. I am
            particularly skilled in HTML, CSS, JavaScript, React, Node.js and
            MongoDB. My technical abilities are complemented by a strong
            understanding of project management and teamwork. I love what I do,
            and I am ready to apply my skills on a larger scale. My goal is to
            advance my knowledge and to contribute to a company that values
            innovative web solutions and cutting-edge products. If you're
            looking for a motivated and responsible web developer, do not
            hesitate to contact me.
          </p>

          <div className="btn">
            <button className="btn-alfa">Download CV</button>
            <button>Let's Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
