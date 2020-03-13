import React,{ useState } from "react";
import { useMutation} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Layout from "../components/Layout";

const createUser =  gql`
  mutation createUser($data:Useradd!){
    createUser(data:$data){
      _id
    }
  }
`

function SignUp(props) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [first_name,setFirstname] = useState('');
  const [last_name,setLastname] = useState('');
  const [executeMutation,{loading,data,error}] = useMutation(createUser)

  const handleSubmit = (event) => {
    event.preventDefault();
    executeMutation({variables:{data:{
      first_name,
      last_name,
      email,
      password
    }}});
    if(!loading && data){
      localStorage.setItem('clone',data.login)
      props.history.push('/')
    }else if(!loading && error){
      alert(error.message);
    }

  }
  return (
    <Layout title="Inicia Sesion">

<div className="container ">

<div className="col-8 col-sm-6 m-4 bg-white p-3">

      <h2>Regístrate</h2>


      <form onSubmit={handleSubmit} name="sentMessage" id="contactForm" novalidate>

      <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Nombre</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nombre"
              name="first_name"
              value={first_name}
              onChange={ (house) => setFirstname(house.target.value)  }
              required
            />
          </div>
        </div>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Apellido</label>
            <input
              type="text"
              class="form-control"
              placeholder="Apellido"
              name="last_name"
              value={last_name}
              onChange={ (house) => setLastname(house.target.value)  }
              required
            />
          </div>
        </div>


        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={ (house) => setEmail(house.target.value)  }
              required
            />
          </div>
        </div>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={ (house) => setPassword(house.target.value)  }
              required
            />
          </div>
        </div>
        <div class="form-group mt-4">
          <button type="submit" class="btn btn-primary" id="sendMessageButton">
            Submit
          </button>
        </div>
      </form>

      </div>
      </div>
    </Layout>
  );
}

export default SignUp;