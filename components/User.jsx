import React ,{useState ,useEffect}from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, Link } from 'react-router-dom';
import { Button ,Image,Form,Row,Col,Card} from 'react-bootstrap';
import axios from 'axios';
function User(){
  const [videos, setVideos] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'AIzaSyCMPP-toZgfR3GXFM6C-rnZw8xKy0pShnE';
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              q: 'music',
              type: 'audio',
              maxResults: 42,
              key: apiKey,
            },
          }
        );
    
        console.log('API Response:', response.data);
    
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching data from YouTube:', error.message);
      }
    };

    fetchData();
  }, []);
  const history = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    history('/Login');
  }
  useEffect(() => {
   
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);
return (<><><><div className='dash'>
  <Navbar expand="lg" className="userbar">

    <Container className='cony'><Image className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkA-HX4QoDaFwpMJNCcfx9KWX8cQaK_O-rE47fPk0m-ichbNw"></Image>
      <Navbar.Brand href="#home"><h1 className='head1'>MuSiC</h1></Navbar.Brand>
      <Navbar.Brand href="#home"><h3 className='head1'>Hello, {user ? user.username : 'Loading...'}
</h3></Navbar.Brand>
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
          <Link to='/Playlistpage'> <Button className='bot' variant="outline-dark"> Your Playlist  <i class="fa-solid fa-music"></i></Button></Link> <Nav.Link href="#home"></Nav.Link>
          <Link to='/Profile'>  <Button className='bot' variant="outline-dark">Profile  <i class="fa-regular fa-user"></i></Button></Link><Nav.Link href="#home"></Nav.Link>
          <Link to='/Login'>  <Button className='bot'onClick={handleLogout} variant="outline-dark">  <i class="fa-solid fa-right-from-bracket"></i></Button></Link>
          
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar></div><Image className='hop' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkA-HX4QoDaFwpMJNCcfx9KWX8cQaK_O-rE47fPk0m-ichbNw"></Image>
  <div className='userport'>
      <h1 className='head5'>Musiq Videos</h1>
      <br></br>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
  {videos.map((video) => (
    <div key={video.id.videoId} style={{ width: '250px', margin: '1px', padding: '5px', border: '2px solid #000' }}>
      <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} style={{ width: '100%' }} />
      <h5>{video.snippet.title}</h5>
      <Button variant="outline-dark" href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">
        Play Now <i class="fa-solid fa-play"></i>
      </Button>
      <br></br><br></br>
      <Button className="bot" variant="outline-dark">
        <i class="fa-solid fa-plus"></i>
        <Link className="btn" to={`/Playlistpage/${video.id.videoId}`}> Add to my playlist</Link>
      </Button>
    </div>
  ))}
</div>

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

  </footer></></>

);
}

export default User;