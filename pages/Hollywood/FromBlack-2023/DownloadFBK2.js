
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';





function DownloadFBK2({ movie }) {
  

  if (!movie) {
    return <div className="text-3xl text-red-600 text-center">Loading...</div>;
  }
  useEffect(() => {
    const handleContextmenu = e => {
        e.preveFBKefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  const scrollSearch = myKey => {
    window.scrollTo(0, 0);
    frontMatter.handleSearch(myKey)
  };
  const [showPopup, setShowPopup] = useState(false);
  
  function togglePopup() {
    setShowPopup(!showPopup);
  }
  const ldJsonData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.name,
    "description": movie.synopsis,
    "image": movie.poster,
    "genre": movie.genre,
    "datePublished": movie.yearRelease,
    "director": movie.director,
    "actor": movie.starring,
    "url": movie.link,
    "potentialAction": {
      "@type": "WatchAction",
      "target": [
        {
          "@type": "EntryPoint",
          "name": "From Black (2023)",
          "urlTemplate": "https://gomovies.netlify/Hollywood/FromBlack-2023/FromBlack"
        },
        {
          "@type": "EntryPoint",
          "name": "From Black (2023)",
          "urlTemplate": "https://gomovies.netlify/Hollywood/FromBlack-2023/FBKSR1"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": movie.rating,
      "bestRating": 10,
      "worstRating": 0,
      "ratingCount": 1
    },
    "author": [
      {
        "@type": "Person",
        "name": "DrTrailer",
        "url": "https://gomovies.netlify/DrTrailer.png"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Go Movies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gomovies.netlify/og_image.jpg"
      }
    },
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Action Platform",
      "value": [
        "Desktop Web Platform",
        "iOS Platform",
        "Android Platform"
      ]
    }
  });
    
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJsonData }}
      />
    <Head>
     <title>Watch From Black (2023) Full Movie Online Free | Go Movies™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="Go Movies,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch from black movie,index of from black movie,from black movie 2023,from black movie online,watch from black movie online free,from black tv series,from black movie download,from black movie free download,from black movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch From Black (2023) | Go Movies™" />
<meta property="og:url" content="https://gomovies.netlify/Hollywood/FromBlack-2023/FromBlack" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1682771578/from-black-2023_mqzkdr.webp" />
<meta property="og:image:secure_url" content="https://gomovies.netlify/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch From Black (2023) | Go Movies™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1682771578/from-black-2023_mqzkdr.webp" />
<meta name="description" content="Watch One Day As A Lion Full Movie Online on Go Movies™, You can also download From Black (2023) in full HD quality to watch later offline." />

<link rel="canonical" href="https://gomovies.netlify/Hollywood/FromBlack-2023/" />
       </Head>
<Script src="../../propler/ads.js" defer />

       <div className="bg-gray-600 shadow ">



     
  <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="https://gomovies.netlify" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://gomovies.netlify/og_image.jpg" />
<img src={movie.banner} alt={`Banner for ${movie.title}`} loading="lazy" className=" rounded-3xl  mx-auto my-10 "  />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD {movie.title} (2023) </h2>
  
  
    
 
<a href={movie.down2link1} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>

<h2 className="text-blue-500 text-3xl title-font  mb-3 font-bold md:text-3xl">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-3xl title-font  mb-3 font-bold md:text-3xl ">
Please Share the Link.</h2>
<Max />



<a href="../../Hollywood/FromBlack-2023/FBKSR1" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Back

</button></a>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://gomoviesfree.vercel.app/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'FBK');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default DownloadFBK2;