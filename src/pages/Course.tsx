import React from 'react';
import Navbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
import {
  Button,
  Container
} from '@chakra-ui/react';
import data from "../Data";


const Course = () => {
  let { title} = useParams<{title?: string | undefined}>();
  console.log(title)
  const find = data.filter(element => element.title === title).map(filteredTitle => {
    return (
      <div className="container">
        <div className="center">
          <h1 className="text1">{filteredTitle.title}</h1>
        </div>
        <iframe width="855" height="481" src={filteredTitle.url} title={filteredTitle.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h2 className="text1">Details</h2>
        <p>{filteredTitle.details}</p>
      </div>
    )
  });

  return (
    <div>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>
      {find}
    </div>
  )
}

export default Course;


