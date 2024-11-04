import './Home.css';
const Home = () => {
  return (
    <div className="alfaContainer">
      <div className="braContent">
        <div className='w-32 h-32 '>
          <div className="homeImage">
            <img src="../pro-foto.png" alt="profile" />
          </div>
        </div>
        <div className="homeText">
          <h1>Hello,</h1>
          <h2 className='alfa-h2'>Iam <span>Zakaria</span> </h2>
          <h2 className='bra-h2'>a Web Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsum quo error ad consequatur placeat nobis, doloribus, voluptas culpa ex eius maxime magnam ratione ab quaerat nesciunt odit doloremque perferendis? lo</p>

          <div className='btn'>
            <button className='btn-alfa'>Download CV</button>
            <button>Let's Connect</button>
         </div>
        
          
      
        </div>
      </div>
    </div>
  );
}

export default Home;