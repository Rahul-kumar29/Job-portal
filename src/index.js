import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Cards';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 className='heading_style'> Job Portal</h1>
    <Card 
      imgsrc = "./adgpi.jpg"
      sname = "Indian Army"
      title = "Job Portal"
      link = "https://joinindianarmy.nic.in/default.aspx"
    />
    <Card 
      imgsrc = "./airforce.png"
      sname = "Indian Airforce"
      title = "Job Portal"
      link = "https://afcat.cdac.in/AFCAT/"
     />
    <Card 
      imgsrc = "./navy.png"
      sname = "Indian Navy"
      title = "Job Portal"
      link = "https://www.joinindiannavy.gov.in/"
    />
    <Card 
      imgsrc = "./state_job.png"
      sname = "State Jobs"
      title = "Job Portal"
      link = "https://www.freejobalert.com/state-government-jobs/"
    />
    <Card 
      imgsrc = "./india_job.jpeg"
      sname = "India Job"
      title = "Job Portal"
      link = "https://www.freejobalert.com/government-jobs/"
    />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
