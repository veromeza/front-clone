import React, { useState } from 'react';
//import logo from './logo.svg';
import { useQuery } from "@apollo/react-hooks";
import {gql} from 'apollo-boost';
import Layout from './components/layout'
import Card from './components/card';


const GET_HOUSES = gql `
{
  getHouses{
    _id
    title
    createdAt
    created_by{
      first_name
      last_name
    }
  }
}
`

function App() {
  //const [title,setTitle]= useState('Clone Meetup')

  const {loading,data,error}= useQuery(GET_HOUSES);
  if (loading) return <h1>Cargando...</h1>
  if (error) return <h3>{error.message}</h3>

  return (
    
    <Layout title="Clone Meetup" subtitle="Este es un clone educacional de un meetup">
         {data.getHouses.map(house=> (
           <Card 
            title={house.title} 
            author={`${house.first_name} ${house.last_name}`}
            date={house.createdAt}
            />
            ))}
</Layout>
    
  );
}

export default App;
