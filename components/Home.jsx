/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button ,Form,Card,Dropdown,Carousel} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
function Home(){


return(
 <><><div className='frontpage'>

    <Navbar className='navbar'>
      <Container className='con'><Image className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkA-HX4QoDaFwpMJNCcfx9KWX8cQaK_O-rE47fPk0m-ichbNw"></Image>
        <Navbar.Brand href="#home"><h1 className='head1'>MuSiQ    </h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search music,artist,album"
              className="me-2"
              aria-label="Search" /><Button className='bot' variant="outline-dark">
              <i class="fa-solid fa-magnifying-glass"></i></Button>
          </Form>
          <Nav className="me-2">

            <Nav.Link href="#home"></Nav.Link><Nav.Link href="#home"></Nav.Link>   <Nav.Link href="#home"></Nav.Link>
            <Link to='/Register'> <Button className='bot' variant="outline-dark"> Sign-Up</Button></Link> <Nav.Link href="#home"></Nav.Link>
            <Link to='/Login'>  <Button className='bot' variant="outline-dark">Sign-In</Button></Link>
          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>

    <Navbar className='nav2'>
      <Container className='con2'>
        <Button className="bot" variant="outline-dark">Trending</Button>
        <Button className="bot" variant="outline-dark">Old songs</Button>
        <Button className="bot" variant="outline-dark">New songs</Button>
        <Dropdown>
          <Dropdown.Toggle className="bot" variant="outline-dark" id="dropdown-basic">
            Top Playlist
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
            <Dropdown.Item href="#/action-2"> Tamil</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> malayalam</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button className="bot" variant="outline-dark">Top artist</Button>
        <Button className="bot" variant="outline-dark">Podcast</Button>
        <Dropdown>
          <Dropdown.Toggle className="bot" variant="outline-dark" id="dropdown-basic">
            Top albums
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
            <Dropdown.Item href="#/action-2"> Tamil</Dropdown.Item>
            <Dropdown.Item href="#/action-3"> malayalam</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
 
    {/* <Image className='img2' src="logo.png"></Image> */}

  </div>
    <div className='bod'>
      <h1 className='head2'>Now Trending</h1>
      <Carousel className='caro' data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/BAzNv_Vb8R8/maxresdefault.jpg" />
          <Carousel.Caption>
            <Button className="bot" variant="outline-dark">Play Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/KfUExOXxU5Q/maxresdefault.jpg" />
          <Carousel.Caption>
            <Button className="bot" variant="outline-dark"> Play Now</Button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <img
            className="d-block w-100"
            src="https://m.timesofindia.com/photo/89616866/size-89160/89616866.jpg" />
          <Carousel.Caption>
            <Button className="bot" variant="outline-dark"> Play Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/YxWlaYCA8MU/maxresdefault.jpg" />
          <Carousel.Caption>
            <Button className="bot" variant="outline-dark"> Play Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
    <h1 className='head2'>Top Music</h1>
    <div className='cardo'>
   
    <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://c.saavncdn.com/513/Nenjame-From-Doctor--Tamil-2020-20200820100702-500x500.jpg" />
                      <Card.Body>
                          <Card.Title>Nenjame (From 'Doctor') Songs Download - Tamil Songs </Card.Title>
                       <Link to="/Signin"> 
                          <Button className='bot' variant="outline-dark"><i class="fa-solid fa-play"></i> Play now</Button></Link>
                      </Card.Body>
                  </Card>


                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://c.saavncdn.com/editorial/Romancham_20230127093940.jpg" />
                      <Card.Body>
                          <Card.Title>Romancham - Latest Songs Online  </Card.Title>
                       <Link to="/Signin"> 
                          <Button className='bot' variant="outline-dark"><i class="fa-solid fa-play"></i> Play now</Button></Link>
                      </Card.Body>
                  </Card>

                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://i1.sndcdn.com/artworks-000122273241-m3r3k0-t500x500.jpg" />
                      <Card.Body>
                          <Card.Title>Stream Malare (Premam) - Cover by SidSethu  </Card.Title>
                       <Link to="/Signin"> 
                          <Button className='bot' variant="outline-dark"><i class="fa-solid fa-play"></i> Play now</Button></Link>
                      </Card.Body>
                  </Card>

                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://i1.sndcdn.com/artworks-000222293162-3m55gl-t500x500.jpg" />
                      <Card.Body>
                          <Card.Title>Listen to Godha - Aaro Nenjil, Cover by RvT in Malayalam Songs playlist  </Card.Title>
                       <Link to="/Signin"> 
                          <Button className='bot' variant="outline-dark"><i class="fa-solid fa-play"></i> Play now</Button></Link>
                      </Card.Body>
                  </Card>


                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://a10.gaanacdn.com/images/albums/17/8229317/crop_480x480_1698057396_8229317.jpg" />
                      <Card.Body>
                          <Card.Title>Leke Prabhu Ka Naam (From "Tiger 3")MP3 Song Online Free on Gaana.com
</Card.Title>
                       <Link to="/Signin"> 
                          <Button className='bot' variant="outline-dark"><i class="fa-solid fa-play"></i> Play now</Button></Link>
                      </Card.Body>
                  </Card>




    </div>
    {/* cards2 */}
    <div className='cardo2'>
   
    <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://c.saavncdn.com/622/Welcome-To-My-Life-English-2017-500x500.jpg" />
                      <Card.Body>
                          <Card.Title>Chris brown - welcome to my life</Card.Title>
                       <Link to="/Signin"> 
                          <Button className='bot' variant="outline-dark"><i class="fa-solid fa-play"></i> Play now</Button></Link>
                      </Card.Body>
                  </Card>


                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak27WnR4XbhCGRzEf7eDzd2BNSaQ2Co5wUKFOgbLIvCK69pBuavUXaAHjHKFKd_2rGss&usqp=CAU" />
                      <Card.Body>
                          <Card.Title>Stay - song and lyrics by Frank Rivers | Spotify  </Card.Title>
                       <Link to="/Signin"> 
                          <Button className='bot' variant="outline-dark"><i class="fa-solid fa-play"></i> Play now</Button></Link>
                      </Card.Body>
                  </Card>

                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://c.saavncdn.com/152/Ranjithame-From-Varisu-Tamil-2022-20221105151002-500x500.jpg" />
                      <Card.Body>
                          <Card.Title>Ranjithame (From "Varisu") - Song Download  </Card.Title>
                       <Link to="/Signin"> 
                          <Button className='bot' variant="outline-dark"><i class="fa-solid fa-play"></i> Play now</Button></Link>
                      </Card.Body>
                  </Card>

                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61HxKWhoZJL._UXNaN_FMjpg_QL85_.jpg" />
                      <Card.Body>
                          <Card.Title>Naa Ready (From "Leo") by Anirudh Ravichander, Thalapathy Vijay & Asal Kolaar  </Card.Title>
                       <Link to="/Signin"> 
                          <Button className='bot' variant="outline-dark"><i class="fa-solid fa-play"></i> Play now</Button></Link>
                      </Card.Body>
                  </Card>


                  <Card style={{ width: '20rem' }}>
                      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                      <Card.Body>
                          <Card.Title>Lucifer Video Song | Kadavule Pole | Mohanlal | Prithviraj Sukumaran | Deepak Dev
</Card.Title>
                       <Link to="/Signin"> 
                          <Button className='bot' variant="outline-dark"><i class="fa-solid fa-play"></i> Play now</Button></Link>
                      </Card.Body>
                  </Card>




    </div>
  </><footer className='foot'>
    <div class="footer-row-2">
      <div class="column-1">
        <br></br>
        Investor Relations       |
        Privacy|
        musiq Test

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
      <p>Contact us at contact@musiq.com</p>
    </div><br></br>
    <div class="footer-row-4">
      <p>Copyright ©2022 All rights reserved Made with  by MuSiQ company.</p>
    </div>

  </footer></>
   


)
}
export default Home