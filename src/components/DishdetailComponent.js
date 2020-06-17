import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        const com= comments.map((comm) => {
            return (
                <li key={comm.id}>
                    <div>{comm.comment}</div>
                    <div>{comm.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</div>
                </li>
            );
        });
        return (
            <ul className="list-unstyled">
                {com}
            </ul>
        );
    }
    
    render() {
        const menu = function(dish) {
            return (
              <div className="col-12 col-md-5 m-1">
                 <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
              </div>
            );
        };
        if(this.props.dish!=null) {    
            return (
                <div className="container">
                    <div className=" row ">
                        {menu(this.props.dish)}
                        <div className="col-12 col-md-5 m-1">                    
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div> 
                </div>    
            );
        }
        else return <div></div>
    }
}

export default DishDetail;

