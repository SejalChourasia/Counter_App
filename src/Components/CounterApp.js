import React,{useState,useEffect} from 'react'
import CartIcon from './img/shopping-cart-solid.svg'
import watch from './img/watch.jpg'
import phone from './img/purse.png'
import tshirt from './img/heel.jpg'
import { Card,Button,Navbar,Nav,CardDeck } from 'react-bootstrap';

function CounterApp() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <Navbar bg="light" variant="dark">
                <h3>Cart</h3>
                <Navbar.Collapse className="justify-content-center">
                <img src={CartIcon} alt="" width="30" className=" mr-sm-3"/>
                <Button className=" mr-sm-3" variant="info">{count}</Button>
                <h3>items</h3>
                </Navbar.Collapse>
            </Navbar>

            {/* clear cart */}
            <Button onClick={() => setCount(0)} variant="warning" className=" my-sm-4">Clear Cart</Button>

            {/* items */}
            <CardDeck className="ml-sm-4 my-sm-4" style={{ width: '90rem' }}>
            <Card >
                <Card.Img variant="top" src={watch} height="300" />
                <Card.Body>
                    <Card.Title>Watch</Card.Title>
                    <Button onClick={() => setCount(prevCount=>prevCount+1)} className="my-sm-4 mr-sm-3" variant="success">Add Item</Button>
                    <Button onClick={() => setCount(prevCount=>prevCount-1)} variant="primary">Remove Item</Button>
                </Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src="https://www.upsieutoc.com/images/2020/06/27/img3.jpg" height="300"/>
                <Card.Body>
                    <Card.Title>Shoes</Card.Title>
                    <Button onClick={() => setCount(prevCount=>prevCount+1)} className="my-sm-4 mr-sm-3" variant="success">Add Item</Button>
                    <Button onClick={() => setCount(prevCount=>prevCount-1)} variant="primary">Remove Item</Button>
                </Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={phone} height="300"/>
                <Card.Body>
                    <Card.Title>Purse</Card.Title>
                    <Button onClick={() => setCount(prevCount=>prevCount+1)} className="my-sm-4 mr-sm-3" variant="success">Add Item</Button>
                    <Button onClick={() => setCount(prevCount=>prevCount-1)} variant="primary">Remove Item</Button>
                </Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={tshirt} height="300"/>
                <Card.Body>
                    <Card.Title>Heels</Card.Title>
                    <Button onClick={() => setCount(prevCount=>prevCount+1)} className="my-sm-4 mr-sm-3" variant="success">Add Item</Button>
                    <Button onClick={() => setCount(prevCount=>prevCount-1)} variant="primary">Remove Item</Button>
                </Card.Body>
            </Card>
            </CardDeck>
            
        </div>
    )
}

export default CounterApp
