import React from 'react';

import { useState } from 'react';
import { Button, Form ,Col,Row,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Register() {
   const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  
  });

  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await fetch('/reg', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData),
      });
      // Handle the response as needed (e.g., show a success message).
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  return (
    <><div className='reg' >
      <Container className='rees'>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="registration-box">
              <h2 className='head3'>  Sign-Up</h2>

              <Form onSubmit={handleSubmit}>

                <input className='form-control'
                  type="text"
                  name="username"
                  placeholder="Username" 
                   value={formData.username}
        onChange={handleChange}/><br></br>
                <input className='form-control'
                  type="email"
                  name="email"
                  placeholder="Email"   
                   value={formData.email}
                  onChange={handleChange}
                /><br></br>
                <input className='form-control'
                  type="password"
                  name="password"
                  placeholder="Password"  value={formData.password}
                  onChange={handleChange}
                  /><br></br>
                

                <Button className='bot2' variant="outline-dark" type="submit">
                  Sign-Up
                </Button><br></br><br></br>
            <Link to='/'>   <Button className="bot2" variant="outline-dark">     Home <i class="fa-solid fa-home"></i>
     </Button></Link>
   </Form>
   </div>
          </Col>
        </Row>
      </Container>

    </div></>
)}

export default Register;