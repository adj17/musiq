import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Card ,Button} from 'react-bootstrap';

function PlaylistPage() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const apiKey = 'AIzaSyCMPP-toZgfR3GXFM6C-rnZw8xKy0pShnE';
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/videos',
          {
            params: {
              part: 'snippet',
              id: videoId,
              key: apiKey,
            },
          }
        );

        console.log('API Response:', response.data);

        if (response.data.items.length > 0) {
          setVideo(response.data.items[0]);
        } else {
          console.error('Video not found');
        }
      } catch (error) {
        console.error('Error fetching video:', error.message);
      }
    };
  
    fetchVideo();
  }, [videoId]);

  return (
    <><div className='play'>
      <h1 className='head5'>My Playlist</h1>
      {video ? (
        <Card className='playcard'>
          <Card.Img variant="top" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          <Card.Body>
            <Card.Title>{video.snippet.title}</Card.Title>
            <Button variant="outline-dark" href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank">
              Play Now    <i class="fa-solid fa-play"></i>
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}  <Link to="/User"> <Button variant="outline-dark">
      Home <i class="fa-solid fa-home"></i>
     </Button></Link>
    </div></>
  );
}

export default PlaylistPage;
