import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Layout from '../components/Layout';

const GET_HOUSE = gql `

        query getOneHouse($id:ID!){

            getHouse (id:$id) {
      _id
      title
      description
      banner
      wc
      huespedes
      camas
      servicios
      createdAt
      address{
          city
      }
      created_by {
        first_name
        last_name

        }
            }
        }
`

function DetailHouse (props){

    const {loading,data,error} = useQuery(GET_HOUSE, {variables:{
        id:props.match.params.id
    }} )

    if (loading) return <h2>Cargando...</h2>
    if (!loading && error) return <h3>(error.message)</h3> 

    return(
        <Layout>

<div className="container m-3 p-3 bg-white">


           
            <img alt="Casa" src={data.getHouse.banner} style={{width: '100%'}} />
            <h1>{data.getHouse.title}</h1>
            <p>{data.getHouse.address.city}</p>
            <br/>
            <br/>
            <h3>Descripción</h3>
            <p> {data.getHouse.description} </p>
            <br/>
            <br/>
            <h3>Características</h3>
            <p> {data.getHouse.huespedes} huéspedes </p>
             <p> {data.getHouse.camas} camas,</p>
              <p>{data.getHouse.wc} baños, </p>
              <p>servicios: {data.getHouse.servicios} </p>

            </div>

        </Layout>
    )
}

    export default DetailHouse;