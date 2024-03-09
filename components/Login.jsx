
import { Button, Form ,Col,Row,Container} from 'react-bootstrap';
import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
   
      });

      const { token, user } = response.data;

    if (token && user && user.email === email) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      history('/User', { state: { id: email } });
    } else {
      alert('Authentication failed. Email may not be registered.');
    }
  } catch (error) {
    alert('Error occurred while logging in.');
    console.error(error);
  }
}
  return (
    <><div className='reg' >
      <Container className='rees'>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="registration-box">
              <h2 className='head3'>  Sign-In</h2>

              <Form onSubmit={submit}>

              
                <input className='form-control'
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" /><br></br>
                <input className='form-control'
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" /><br></br>
                

                <Button className='bot2' variant="outline-dark" type="submit">
                  Sign-In
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

export default Login;