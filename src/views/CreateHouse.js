import React, {useState} from "react";
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Layout from "../components/Layout";
import useForm from '../hooks/useForm';
//import Authenticated from '../Utils/Authenticated'


const CREATE_HOUSE = gql`
    mutation addHouse($data:Houseadd){
        createHouse(data:$data){
            _id
        }
    }
`;


function CreateHouse(props) {

    const [executeMutation, {loading,data,error}] =  useMutation(CREATE_HOUSE);

    const [banner,setBanner] = useState('');
    const [preview,setPreview] =  useState('')
    const {inputs:addressInputs, handleInputChange:addressHandle } = useForm()

    const catchSubmit = (inputs) => {
        const payload = {
            ...inputs,
            banner,
            address:{
                ...addressInputs
            }
        }
        executeMutation({variables:{data:payload}})
    }

    if(!loading && data)  props.history.push('/')
    if(!loading && error) alert(error.message)

    const {inputs,handleInputChange,handleSubmit  } = useForm(catchSubmit)

   
    const handleBanner = (house) => {

        const reader =  new FileReader(); // Va a recivir un archivo
        const file = house.target.files[0]; // Aqui es dode obtenemos el archivo

        reader.onloadend = () => { //Cuando termina de cargar la imagen
            setBanner(file);
            setPreview(reader.result) //Aqui se guarda el preview
        }

        reader.readAsDataURL(file); // Carga la imagen como una url


    }

  return (
    <Layout title="Crea un nuevo casa">

      <div className="control-group m-3 p-3 bg-white">


      <h2> Crear una casa</h2>
      <form onSubmit={handleSubmit}>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Título</label>
            <input
              type="text"
              className="form-control"
              placeholder="Titulo del casa"
              name="title"
              value={inputs.title}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Descripción</label>
            <textarea name="description" 
            id="" cols="30" 
            rows="10" 
            value={inputs.description}
            onChange={handleInputChange}
            placeholder="Descripción"></textarea>
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Fechas</label>
            <input
              type="text"
              className="form-control"
              name="date"
              value={inputs.date}
              onChange={handleInputChange}
              placeholder="Fecha del casa"
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Foto</label>
            <input
              type="file"
              className="form-control"
              placeholder="casa"
              name="banner"
              onChange={handleBanner}
              required
            />
          </div>
        </div>
        <img src={preview} width="100px" />
        <h3>Ubicación</h3>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Calle</label>
            <input
              type="text"
              className="form-control"
              name="street"
              placeholder="Calle:"
              value={addressInputs.street}
              onChange={addressHandle}
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Numero:</label>
            <input
              type="text"
              className="form-control"
              name="number"
              value={addressInputs.number}
              onChange={addressHandle}
              placeholder="Numero:"
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Ciudad:</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={addressInputs.city}
              onChange={addressHandle}
              placeholder="Ciudad"
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>País:</label>
            <input
              type="text"
              className="form-control"
              placeholder="País"
              name="country"
              value={addressInputs.country}
              onChange={addressHandle}
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Estado:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Estado"
              name="state"
              value={addressInputs.state}
              onChange={addressHandle}
              required
            />
          </div>
        </div>

        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>CP:</label>
            <input
              type="text"
              className="form-control"
              placeholder="CP"
              name="zip"
              value={addressInputs.zip}
              onChange={addressHandle}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" >
            Submit
        </button>

      </form>

      </div>

    </Layout>
  );
}

export default (CreateHouse);