import React,{ useState } from "react";
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Layout from "../components/Layout";

const LOGIN =  gql`
  query sendLogin($email:String,$password:String){
    login(email:$email,password:$password)
  }
`

function Login(props) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [executeQuery,{loading,data,error}] = useLazyQuery(LOGIN,{variables:{ email,password }})

  const handleSubmit = (event) => {
    event.preventDefault();
    executeQuery();
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
      <h2 className="">Inicar sesión</h2>
      <form onSubmit={handleSubmit} name="sentMessage" id="contactForm" novalidate>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={ (house) => setEmail(house.target.value)  }
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={ (house) => setPassword(house.target.value)  }
              required
            />
          </div>
        </div>
        <br/>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" id="sendMessageButton">
            Submit
          </button>
        </div>
      </form>

      </div>
      </div>
    </Layout>
  );
}

export default Login;