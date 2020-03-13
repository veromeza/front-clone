import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `${props.title}`
    };
  }

render() {

    return (

        <>

        

{/* <div classNameName="post-preview">
          <a href="post.html">
            <h2 classNameName="post-title">
              {props.title}
            </h2>
            
          </a>
          <p classNameName="post-meta">Posted by
            <Link to={`/house/${props.id}`} >{props.author}</Link>
            on {props.date}</p>
        </div> */}

<div className="card" >

    <div class="row">
      <div class="col-8 col-sm-6">
      <div >
  <img alt="Casa" src={this.props.banner} style={{  width: 300 }}/>
  </div>
      </div>
      <div class="col-4 col-sm-6">
      <div className="card-body">
  
  <Link to={`/house/${this.props.id}`}>
    <h5 className="card-title">{this.props.title}</h5>
    </Link>
    {/* <p className="card-text">Anfitrión {" "}
            {this.props.author}
            on {this.props.date}</p> */}
    <p className="card-text">{this.props.huespedes}{" "} huespedes {this.props.camas}{" "} camas {this.props.wc}{" "} baños {this.props.servicios}{" "} servicios  </p>
  </div>
</div>
      </div>
    </div>


  




        <hr/>
        </>

    )
}
}
Card.propTypes = {
  title:PropTypes.string.isRequired,
  subtitle:PropTypes.string.isRequired
}
// <MasterHead title="Mi titulo" />
export default Card;