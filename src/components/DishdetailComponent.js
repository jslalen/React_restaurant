import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({comments}) {
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
    
function RenderDish({dish}) {
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
}
const  DishDetail = (props) => {
    if(props.dish!=null) {    
        return (
            <div className="container">
                <div className=" row ">
                    <RenderDish dish={props.dish} />
                    <div className="col-12 col-md-5 m-1">                    
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div> 
            </div>    
        );
    }
    else return <div></div>
}

export default DishDetail;

