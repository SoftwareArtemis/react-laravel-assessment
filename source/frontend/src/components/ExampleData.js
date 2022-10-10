import React, { useEffect, useState } from "react";

const ExampleData = (props) => {
  const [exampleData, setExampleData] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/Example/data", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        setExampleData(response.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div>
      <h2>Data fetch results</h2>
      <ul>
        {exampleData.map((e) => (
          <li key={e.id}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleData;
