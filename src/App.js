import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Header>
      <main>
        {contactSelected ? (
          <Contact></Contact>
        ) : resumeSelected ? (
          <Resume></Resume>
        ) : (
          <>
          <About></About>
          <Projects></Projects>
          </>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
