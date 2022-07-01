import React from 'react';
import Navbar from "../components/Navbar";
import {
  Button,
  Container
} from '@chakra-ui/react';
import data from "../Data";

const Course = () => {
  return (
    <div>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>
      <div className="container">
        <div className="center">
            <h1 className="text1">{data[0].title}</h1>
        </div>
            <iframe width="855" height="481" src={data[0].url} title={data[0].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h2 className="text1">Details</h2>
            <p>{data[0].details}</p>
      {/* {data.map((d) => {
          return (
            <div>
                <iframe width="855" height="481" src={d.url} title={d.title}></iframe>
                <h1>{d.title}</h1>
                <p>{d.details}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Course;
