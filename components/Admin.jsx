import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, Link } from 'react-router-dom';
import { Button ,Image,Form} from 'react-bootstrap';

function Admin(){


return (<><><div className='dash'>
<Navbar expand="lg" className="userbar">

  <Container className='cony'><Image className='img' src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBQTJKoWai61mNngWkMyjBJ8whkOnbBkPE.8yRpk4iJykqEv_kAlzyLoaX2FcWbSSL81PrHBpXA9lkebbwk0wqRo-&format=source"></Image>
    <Navbar.Brand href="#home"><h1 className='head1'>MuSiC</h1></Navbar.Brand>
    <Navbar.Brand href="#home"><h3 className='head1'>Hello,Admin</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search music,artist,album"
              className="me-2"
              aria-label="Search" /><Button className='bot' variant="outline-success">
              <i class="fa-solid fa-magnifying-glass"></i></Button>
          </Form>
          <Nav className="me-2">

            <Nav.Link href="#home"></Nav.Link><Nav.Link href="#home"></Nav.Link>   <Nav.Link href="#home"></Nav.Link>
            <Link to='/Login'>  <Button className='bot' variant="outline-success">Users  <i class="fa-regular fa-user"></i></Button></Link>
            <Nav.Link href="#home"></Nav.Link>
            <Link to='/Login'>  <Button className='bot' variant="outline-success">Profile  <i class="fa-regular fa-user"></i></Button></Link>
          </Nav>

        </Navbar.Collapse>
  </Container>
</Navbar></div><Image className='hop' src="https://c4.wallpaperflare.com/wallpaper/57/286/414/notes-green-hd-wallpaper-preview.jpg"></Image>
</><footer className='foot'>
      <div class="footer-row-2">
        <div class="column-1">
          <br></br>
          Investor Relations       |
          Privacy|
          Job Test

        </div><br></br>
        <div class="column-2">
          home|

          Cookie Preferences|
          Legal Notices
        </div><br></br>
        <div class="column-3">
          <p>Account  |
            Ways to Apply|
            Corporate Information</p>

        </div><br></br>
        <div class="column-4">
          Media Centre  |<></>
          Terms of Use|
          Contact Us|
        </div>
      </div>
      <div class="footer-row-3">
        <p>&copy; 2023 Your Company</p>
        Privacy Policy| Terms of Service
        <p>Contact us at contact@job&job.com</p>
      </div><br></br>
      <div class="footer-row-4">
        <p>Copyright ©2022 All rights reserved Made with  by Job & Job company.</p>
      </div>

    </footer></>

);
}

export default Admin;