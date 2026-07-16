import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Work } from './components/Work';
import { School } from './components/School';
import { Extracurriculars } from './components/Extracurriculars';
import { Sports } from './components/Sports';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Header */}
        <Hero />

        {/* 3. About Me */}
        <AboutMe />

        {/* 4. Work Experience */}
        <Work />

        {/* 5. Education & School */}
        <School />

        {/* 6. Extracurricular Activities */}
        <Extracurriculars />

        {/* 7. Sports */}
        <Sports />

        {/* 8. Hobbies & Interests */}
        <Hobbies />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
