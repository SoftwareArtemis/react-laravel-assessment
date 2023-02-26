import React,{useState,useEffect} from 'react'



const Data = props => {

const [data, setData] = useState([]);

const fetchData = () => {
  return fetch("http://localhost:8080/Example/data")
        .then((response) => response.json())
        .then((data) => setData(data));
}

useEffect(() => {
  fetchData();
},[])

// const sliceData=data.slice() //
return (
  <div>
    <h1>Example Table</h1>
    <div>
      {data.map((item) => ( // replacing data with slice to slice our data
        <div key={item.id} >
          <div >
            <h3 >Title:{item.title}</h3>
            
            <p >{item.body}</p>
            <p >created:{item.created_at}</p>
            <p >updated:{item.updated_at}</p>
            
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Data




