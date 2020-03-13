import React from "react"; //useState  -> hook
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Layout from '../components/Layout';
import Card from "../components/Card";
import Map from '../components/Map';

const GET_HOUSES = gql`
  {
    getHouses {
      _id
      title
      banner
      wc
      camas
      huespedes
      servicios
      description
      createdAt
      created_by {
        first_name
        last_name
      }
    }
  }
`;

function Home() {
  //const [title,setTitle] = useState('Clone de Meetup')
  const { loading, data, error } = useQuery(GET_HOUSES);
  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h3>{error.message}</h3>;

  return (
     
       <Layout title="Airbnb clone" 
               subtitle="Clone para aparender react">

<div className="d-flex m-4  ">

<div className=" flex-column mr-auto " style={{ width: '50%' }} >



           {data.getHouses.map(house => (
                <Card
                  id={house._id}
                  title={house.title}
                  author={`${house.created_by.first_name} ${house.created_by.last_name} `}
                  date={house.createdAt}
                  huespedes={house.huespedes}
                  camas={house.camas}
                  wc={house.wc}
                  servicios={house.servicios}
                  description={house.description}
                  banner={house.banner}
                />
              ))}
              </div>
           
                <Map/>
                </div>
              

       </Layout>
            
  );
}

export default Home;