import React from 'react';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react'
import data from "../Data";


const CourseList = () => {
  const dataTable = data.map((item) => {
    return (
      <Tr>
        <Td>
          <Stack direction='row'>
            <Image
              boxSize='50px'
              objectFit='cover'
              src='/assets/images/img3.png'
            />
            <Text fontSize='md' display="flex" alignItems="center">{item.title}</Text>
          </Stack>
        </Td>
        <Td>{item.describe}</Td>
        <Td>20 februari</Td>
        <Th>
          <Link to={`/course/${item.title}`}>Masuk</Link>
        </Th>
      </Tr>
    );
  });
  return (
    <div>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>
      <div className="containerCourse-list">
        <h1>All Courses</h1>
        <TableContainer w='70%'>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Name Course</Th>
                <Th>Description</Th>
                <Th>Deadline</Th>
                <Th>Progress</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataTable}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default CourseList;