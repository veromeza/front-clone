import { config } from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import {ApolloProvider} from "@apollo/react-hooks";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import client from './graphql';
import './scss/clean-blog.scss';
import "typeface-roboto";

config();



ReactDOM.render(

    
<ApolloProvider client={client}>

<Router>
     <Routes/>
 </Router> 

</ApolloProvider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
