import React,{ useState, useEffect} from 'react';
import AnimatedNumber from "animated-number-react";
const Covid = () => {

    const [data,setData]= useState([]);
    const[global,setGlobalData]=useState([]);
    async function fetchData() {
        const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json");
        res
          .json()
          .then(res =>  setData( res.statewise))
          .catch(err => console.log(err));
      }
    async function fetchData2() {
        const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.covid19api.com/summary");
        res
          .json()
          .then(res =>  setGlobalData(res.Global))
          .catch(err => console.log(err));
      }  
    
      useEffect(() => {
        fetchData();
        fetchData2();
      },[]);
     const  formatValue = value => value.toFixed(0);
    
      const   usersOnline = data.filter((item,index) => (index < 1 ? item : ""));
      const renderData = usersOnline.map(item => (
        <div className="card" style={{height:"350px",width:"40%",float:"left",marginLeft:"70px"}} key={item.active}>
          <h2 style={{textAlign:"center",fontFamily:"Cormorant Upright"}}>India Covid-19 Case</h2>
          <div className="row">
              <div className="col s8"> 
               <p style={{fontSize:"40px",color:"#FFCC00",backgroundColor:"black",fontFamily:"Raleway"}}>Active case :
                  <span style={{fontFamily:"Jersey-m54"}}>
                    <AnimatedNumber
                    value={item.active}
                    formatValue={formatValue}
                    duration="5000"
                  /></span>
               </p>
               <p style={{fontSize:"40px",color:"#00ff00",backgroundColor:"black"}}>Recovered  :
                  <span style={{fontFamily:"Jersey-m54"}}>
                    <AnimatedNumber
                    value={item.recovered}
                    formatValue={formatValue}
                    duration="5000"
                  /></span>
               </p>
               </div>

              <div className="col s3" style={{marginBottom:"50px",marginTop:"13px"}}>
                 
                <p style={{fontSize:"40px",color:"#FFFFFF",backgroundColor:"black"}}> Death  <span style={{fontFamily:"Jersey-m54",}}>
                <AnimatedNumber
                value={item.deaths}
                formatValue={formatValue}
                duration="5000"
              /></span></p>
              </div>
          </div>
       
        </div>
      ))

      
      const renderGlobalData =  (
        <div className="card" style={{height:"350px",width:"40%",float:"left",backgroundColor:"",marginLeft:"150px"}}>
          <h2 style={{textAlign:"center",fontFamily:"Cormorant Upright"}}>Global Covid-19 Case</h2>
          <div className="row">
              <div className="col s8"> 
               <p style={{fontSize:"40px",color:"#FFCC00",backgroundColor:"black",fontFamily:"Raleway"}}>Active case :
                  <span style={{fontFamily:"Jersey-m54"}}>
                    <AnimatedNumber
                    value={global.TotalConfirmed}
                    formatValue={formatValue}
                    duration="5000"
                  /></span>
               </p>
               <p style={{fontSize:"40px",color:"#00ff00",backgroundColor:"black"}}>Recovered  :
                  <span style={{fontFamily:"Jersey-m54"}}>
                    <AnimatedNumber
                    value={global.TotalRecovered}
                    formatValue={formatValue}
                    duration="5000"
                  /></span>
               </p>
               </div>

              <div className="col s3" style={{marginBottom:"50px",marginTop:"13px"}}>
                 
                <p style={{fontSize:"40px",color:"#FFFFFF",backgroundColor:"black"}}> Death  <span style={{fontFamily:"Jersey-m54",}}>
                <AnimatedNumber
                value={global.TotalDeaths}
                formatValue={formatValue}
                duration="5000"
              /></span></p>
              </div>
          </div>
       
        </div>
      
      )
                
    //  const statewised = data.statewise;
    //  console.log(statewised) 
    return (
        <div style={{margin:"0 auto",alignContent:"center"}}>
           {renderData}
          {renderGlobalData} 
        </div>
    );
};

export default Covid;