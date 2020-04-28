
import React,{useState,useEffect} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
const Chart = () => {
   // const [data,setData]= useState([]);
   const[element,setElement]=useState([])
   const[bar,showBar] = useState(false);
   const[line,showLine] = useState(false);
   const[pie,showPie]=useState(false);
    const[labels,setLabels]=useState(['January', 'February', 'March','April', 'May'])
    const[datasets,setDatesets]= useState(
        [
                {
                  label: 'Covid-19',
                 
                  backgroundColor: [
                    '#B21F00','#161750','#12BD93 ','#57BD12 ','#E1A932 ',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4','#E7F323 '   ,'#B21F00','#161750','#12BD93 ','#57BD12 ','#E1A932 ',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4','#E7F323 '
                  ],
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: [65, 59, 80, 81, 56]
                }
              ]
    )

   async function fetchData() {
        const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json");
        res
          .json()
          .then(res =>  setLabels( Object.entries(res)[1][1]
          .filter((item,index) => ((index > 0 && index < 20) ? item : ""))
          .map(item => item.state)))
          .catch(err => console.log(err));
      }
    useEffect(() => {
        fetchData();
      },[]);

      async function fetchData2() {
        const res = await fetch("https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json");
        res
          .json()
          .then(res =>  setElement( Object.entries(res)[1][1]
          .filter((item,index) => ((index > 0 && index < 20) ? item : ""))
          .map(item => item.active)))
          .catch(err => console.log(err));
      }
    useEffect(() => {
        fetchData2();
      },[]);
     
     datasets.forEach(item => {
         item.data = element ;
       
     })
    const statedata = {
        labels,datasets
    }
    const handleChange = ()=>{
      showBar(!bar);
      showLine(false);
      showPie(false);
    }
    const handleChangeLine = ()=>{
      showBar(false);
      showPie(false)
      showLine(!line);
    }
    const handleChangePie = ()=>{
      showBar(false);
      showLine(false);
      showPie(!pie);
    }
    return (
        <div>
          <button className="waves-effect light-green btn btn-large " 
          onClick={handleChange} style={{marginLeft:"36%",marginRight:"30px",marginTop:"20px"}}>  BarChart  </button>
          <button className="waves-effect waves-light btn btn-large"
           onClick={handleChangeLine} style={{marginRight:"30px",marginTop:"20px"}}>  LineChart  </button>
          <button className="waves-effect blue btn btn-large" 
          onClick={handleChangePie} style={{marginTop:"20px"}}>  PieChart  </button>
        {
          bar ? 
        
        <div style={{height:"400px",width:"60%",marginBottom:"50px",marginTop:"50px",marginLeft:"20%"}}>
          <Bar
            data={statedata}
            options={{
              title:{
                display:true,
                text:'Covid-19 active case',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
        : " " }
        {
          line ? 
        
        <div style={{height:"400px",width:"60%",marginBottom:"50px",marginTop:"50px",marginLeft:"20%"}}>
        <Line
        data={statedata}
        options={{
          title:{
            display:true,
            text:'Covid-19 active case',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />     
        </div>
        : " " }
        {
          pie ? 
        
        <div style={{height:"400px",width:"60%",marginBottom:"50px",marginTop:"50px",marginLeft:"20%"}}>
          <Pie
            data={statedata}
            options={{
              title:{
                display:true,
                text:'Covid-19 active case',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div> : " "}
        </div>
    );
};

export default Chart;


