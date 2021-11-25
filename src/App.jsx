import React from 'react' ;
import './Styles/index.scss' ;
//components
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';


const App = () => {
       return (
              <React.Fragment>
                   <Navbar />
                   <Header />
                   <Section />
                   <Footer />
              </React.Fragment>
       )
}

export default App
