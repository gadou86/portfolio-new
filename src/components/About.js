import React, {useEffect, useState} from 'react';
import sanityClient from '../client.js';
import bg from '../bg.jpg'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source)
  }

function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`).then((data) => setAuthor(data[0]))
    .catch(console.error)
  }, []);

  if(!author) return <div>Loading...</div>

  return (
    <main className="relative">
      <div className="absolute w-full"/>
      <div className="p-10 lg:pt-48  container mx-auto relative">
        <section className="bg-blue-800 opacity-90 shadow-2xl lg:flex p-20">
          <img src={urlFor(author.authorImage).url()} alt={author.name} className=" sm:w-32 h-32 lg:w-64 h-64 mr-8"/>
          <div className="text-lg flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">Hey there, I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent blocks={author.bio} projectId="7aha2f09" dataset="production"/>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About
