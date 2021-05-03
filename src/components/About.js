import React, {useEffect, useState} from 'react';
import sanityClient from '../client.js';


function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "author"]{
      name,
      bio,
      "authoImage": image.asset->url
    }`).then((data) => setAuthor(data[0]))
    .catch(console.error)
  }, []);

  if(!author) return <div>Loading...</div>

  return (
    <div>
      <h1>IM ABOUT</h1>
    </div>
  )
}

export default About
