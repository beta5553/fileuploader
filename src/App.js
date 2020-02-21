import React from 'react';
import logo from './logo.svg';
import './App.css';
import './fileuploader/FileUploader'
import FileUploader from './fileuploader/FileUploader';
import Footer from './footer/Footer'

function App() {
  return (
    <div className="App">
      
        <FileUploader /> 
        <Footer />
      
    </div>
  );
}

export default App;
