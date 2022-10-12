import React, { Fragment, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

const ExampleData = (props) => {
  const [exampleData, setExampleData] = useState([]);

  useEffect(() => {
    const fetchExampleData = async () => {
      try {
        axiosReq.get("http://localhost:8080/Example/data").then((response) => {
          setExampleData(response.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchExampleData();
  }, []);

  const dataList = exampleData.map((e) => (
    <div key={e.id}>
      <h4>Title: {e.title}</h4>
      <p>Body: {e.body}</p>
      <p>
        Categories: <br />
        {e.category.map((cat) => (
          <span key={cat.id}>
            {cat.category_name} <br />
          </span>
        ))}
      </p>
      <hr />
    </div>
  ));

  return (
    <div>
      <h2>Example data results:</h2>
      <div>{dataList}</div>
    </div>
  );
};

export default ExampleData;
