import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const ExampleData = (props) => {
  const [data, setData] = useState([]);
  const listItems = data.map((example) => (
    <li key={example.id}>
      {example.title}, {example.body}
    </li>
  ));

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "Example/data")
      .then((response) => {
        console.log(response.data.data[0]);
        setData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      React and Laravel Results:<br></br>
      <ol>{listItems}</ol>
    </Fragment>
  );
};

export default ExampleData;
