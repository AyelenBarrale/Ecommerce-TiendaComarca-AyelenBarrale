import React, {useState} from 'react';
import './../Item/Item.css';

import { Link } from 'react-router-dom';

//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from 'react-bootstrap';


const Item = ({id, img, nombre, precio}) => {

    const [cantidad, setCantidad] = useState(0)

    const sumar = () => {
        if(cantidad < 5){
            setCantidad(cantidad + 1);
        };
    };
    
    const restar = () => {
        if(cantidad > 0) {
        setCantidad(cantidad - 1);
        };
    };
    
    return (
        <div>
            <Card style={{ width: '18rem' }} className='item-context'>
                <Link to={`/item/${id}`}>
                    <Card.Img variant="top" src= {img} alt={nombre} />
                </Link>
                <Card.Body className="item-body">
                    <Card.Title> {nombre} </Card.Title>
                    <Card.Text> Precio: $ {precio} </Card.Text>
                    <div className="buttons-container">
                        <div className="buttons-block">
                            <Button style={{ backgroundColor:'#c59534', outline:'none', border:'transparent', borderRadius:'3px'}} className='item-button sumar' onClick={sumar} > + </Button>
                            <Card.Text style={{ marginBottom: '0', fontSize: '20px', padding: '0 0.5rem' }} className="cantidad-num"> {cantidad} </Card.Text>
                            <Button style={{ backgroundColor:'#c59534', outline:'none', border:'transparent', borderRadius:'3px'}} className='item-button restar' onClick={restar} > - </Button>
                        </div>
                        <Button style={{ backgroundColor:'#c59534', outline:'none', border:'transparent', borderRadius:'3px'}} className='item-button'> Comprar </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item;
