
import React,{useState} from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactForm from './components/Contact'
import CreatJob from './components/jobposting'

function App() {

  // any functions you create must be inside your react functional component
  // you must have ONE parent container for your entire component
  // App is your highest level component
const [page, setPage] = useState(<AboutMe/>)
  return (
    <div className="App">
      <Navbar setPage={setPage}AboutMe = {<AboutMe/>} ContactForm = {<ContactForm/>} ></Navbar>
      <main>
        {page}
        <CreatJob></CreatJob>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
