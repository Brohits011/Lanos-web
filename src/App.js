import './App.css';
import Navbar from './Navbar';
import Herosection from './Herosection';
import CourseCard from './CourseCard';
import PercentageSec from './percentageSec';
import Growsection from'./Growsection';
import ContactUs from './ContactUs';
import Footer from'./Footer.js'
import AdminLogin from'./AdminLogin.js'
import StudentAdminPanel from './StudentAdminPanel.js'

import Java from './java-development.jpg';
import Mern from './MERN-stack-development.jpg';
import Python from './Python-development.jpg'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <div className="course-container">
        <CourseCard
          image={Java}
          title="Full Stack Java Development 2024"
          instructor="Mr. Vinod Ahirwar"
          price="₹5500"
          discount="40% off"
          rating={4}
        />
        <CourseCard
          image={Mern}
          title="Full Stack Mern Development 2024"
          instructor="Mr. Yogesh Tiwari"
          price="₹3000"
          discount="40% off"
          rating={4}
        />
        <CourseCard
          image={Python}
          title="Full Stack Python Development 2024"
          instructor="Ms. Lilawati Shekhawat"
          price="₹6000"
          discount="40% off"
          rating={4}
        />
      </div>
      <PercentageSec/>
      <Growsection/>
      <ContactUs/>
      <Footer/>
      <StudentAdminPanel/>
      
    </div>
  );
}

export default App;
