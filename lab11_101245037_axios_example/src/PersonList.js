import React, { Component } from 'react'
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

export default class PersonList extends Component {

//Define state default values
constructor(props){
    super(props)

     this.state = {
         persons: []
     }
 }

 //Component Lifecycle Callback
componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
    .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
    })
}

    render() {
        return (
            <div style={{backgroundColor: 'cadetblue'}}>
                {
                    this.state.persons.map(u => (
                        <div style = {{paddingLeft: '10%'}}>
                            <h4 style={{fontWeight: 'bold', paddingRight:'50%'}}>{u.name.title} {u.name.first} {u.name.last} - {u.login.uuid}</h4>
                                <Container>
                                    <Row>
                                        <Row>
                                            <Col>
                                                <img style={{ borderRadius:'50%', width:'200px', float:'left'}} src={u.picture.large}/>
                                            </Col>
                                            <Col>
                                                <button style={{float:'left'}}>Details</button>
                                            </Col>
                                        </Row>
                                        <Col style={{paddingRight:'61%'}}>
                                            <Row style={{paddingRight:'10%', fontWeight: 'bold'}} className="mb-2">User Name: {u.login.username}</Row>
                                            <Row style={{textTransform:'uppercase'}} className="mb-2">Gender: {u.gender}</Row>
                                            <Row className="mb-2">Time Zone Description: {u.location.timezone.description}</Row>
                                            <Row className="mb-2">Address: {u.location.street.number} {u.location.street.name}, {u.location.city}, {u.location.state}, {u.location.country} - {u.location.postcode}</Row>
                                            <Row className="mb-2">Email: {u.email}</Row>
                                            <Row className="mb-2">Birth Date and Age: {u.dob.date} ({u.dob.age}) </Row>
                                            <Row className="mb-2">Register Date: {u.registered.date}</Row>
                                            <Row className="mb-2">Phone#: {u.phone}</Row>
                                            <Row className="mb-2">Cell#: {u.cell}</Row>
                                        </Col>
                                    </Row>
                                </Container>
                        </div>
                    ))
                }
            </div>
        )
    }
}
