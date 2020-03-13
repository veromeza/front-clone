import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Layout from '../components/Layout';

const GET_HOUSE = gql `

        query getOneHouse($id:ID!){

            getHouse (id:$id) {
      _id
      title
      createdAt
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
            <h1>{data.getHouse.title}</h1>
            <h3>Anfitrión {data.getHouse.created_by.first_name}{" "} {data.getHouse.created_by.last_name} </h3>
            <p> {data.getHouse.description} </p>
        </Layout>
    )
}

    export default DetailHouse;