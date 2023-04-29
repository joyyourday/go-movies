import Head from 'next/head'
import '@styles/styles.module.css'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Translate from '@components/Translate';
import ShareThis from '@components/ShareThis';

const bollywood = () => {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
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
const schemaData   = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"CollectionPage",
      "@id":"https://watchfreemovie.netlify.app/",
      "url":"https://watchfreemovie.netlify.app/",
      "name":"Watch Free Movie™ | Watch Movies and TV-Series Online Free",
      "isPartOf":{
        "@id":"https://watchfreemovie.netlify.app/#website"
      },
      "about":{
        "@id":"https://watchfreemovie.netlify.app/#organization"
      },
      "description":"Watch Free Movie™ - Hollywood | Bollywood | Adult Watch Movies and TV-Series Online Free",
      "breadcrumb":{
        "@id":"https://watchfreemovie.netlify.app/#breadcrumb"
      },
      "inLanguage":"en-US"
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://watchfreemovie.netlify.app/#breadcrumb",
      "itemListElement":[
        {
          "@type":"ListItem",
          "position":1,
          "name":"Watch Free Movie™ | Watch Movies and TV-Series Online Free"
        }
      ]
    },
    {
      "@type":"WebSite",
      "@id":"https://watchfreemovie.netlify.app/#website",
      "url":"https://watchfreemovie.netlify.app/",
      "name":"Watch Free Movie™ | Watch Movies and TV-Series Online Free",
      "description":"Watch Free Movie™ - Hollywood | Bollywood | Adult Watch Movies and TV-Series Online Free",
      "publisher":{
        "@id":"https://watchfreemovie.netlify.app/#organization"
      },
      "potentialAction":[
        {
          "@type":"SearchAction",
          "target":{
            "@type":"EntryPoint",
            "urlTemplate":"https://watchfreemovie.netlify.app/?s={search_term_string}"
          },
          "query-input":"required name=search_term_string"
        }
      ],
      "inLanguage":"en-US"
    },
    {
      "@type":"Organization",
      "@id":"https://watchfreemovie.netlify.app/#organization",
      "name":"Watch Free Movie™ | Watch Movies and TV-Series Online Free",
      "url":"https://watchfreemovie.netlify.app/",
      "logo":{
        "@type":"ImageObject",
        "inLanguage":"en-US",
        "@id":"https://watchfreemovie.netlify.app/#/schema/logo/image/",
        "url":"https://watchfreemovie.netlify.app/logo.png",
        "contentUrl":"https://watchfreemovie.netlify.app/logo.png",
        "width":834,
        "height":135,
        "caption":"Watch Free Movie™ | Watch Movies and TV-Series Online Free"
      },
      "image":{
        "@id":"https://watchfreemovie.netlify.app/#/schema/logo/image/"
      }
    }
  ]
};

  return (
  
    <div >
       <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
      <div className="bg-gray-900 ">
      <Head>
        <title>Watch Free Movie™ Bollywood | Watch Movies and TV-Series Online Free</title>
      
        <meta name="robots" content="index, follow" />  
        <meta name="revisit-after" content="1 days" />
        <meta name="facebook-domain-verification" content="rzl6telvcn1ktdcxrb4xpk9vfud3q5" />
        <meta property="fb:app_id" content="602176271414602" />
	      <meta name="description" content="Watch Free Movie™ - Hollywood | Bollywood | Adult Watch Movies and TV-Series Online Free" />
	     <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta name="keywords" content="watch free movie, watch movies, movies online, watch TV, TV online, TV shows online, watch TV shows, stream movies, stream tv, instant streaming, watch online, movies, watch movies India, watch TV online, no download, full length movies, watch free movies, free movies to watch online, watch movies online free, free movies streaming, free movies full, free movies download, watch movies hd, movies to watch" />
	     <meta property="og:locale" content="en_US" />   

	     <meta property="og:site_name" content="Watch Free Movie™ | Watch Movies and TV-Series Online Free " />
	     <meta property="og:type" content="website" />
	     <meta property="og:image:height" content="1280"/>
	     <meta property="og:image:width" content="720"/>
	     <meta property="og:title" content="Watch Free Movie™ | Watch Movies and TV-Series Online Free " />
	     <meta property="og:description" content="Watch Free Movie™ - Hollywood | Bollywood | Adult Watch Movies and TV-Series Online Free " />
	     <meta property="og:url" content="https://watchfreemovie.netlify.app/" />
	     <meta property="og:image:type" content="image/jpeg" />
	     <meta property="og:image" content="https://watchfreemovie.netlify.app/og_image.jpg" />
	     <meta property="og:image:secure_url" content="https://watchfreemovie.netlify.app/og_image.jpg" />
	     <meta name="twitter:card" content="summary_large_image" />
	     <meta name="twitter:title" content="Watch Free Movie™ " />
	     <meta name="twitter:description" content=" Watch Free Movie™ - Hollywood | Bollywood | Adult Watch Movies and TV-Series Online Free " />
	     <meta name="twitter:image" content="https://watchfreemovie.netlify.app/og_image.jpg" />
       <meta name="google-site-verification" content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg" />
    
  <link rel="alternate" hreflang="en-us" 	href="https://watchfreemovie.netlify.app/"/>
	<link rel="alternate" hreflang="en-gb" 	href="https://watchfreemovie.netlify.app/"/>
	<link rel="alternate" hreflang="en-ca" 	href="https://watchfreemovie.netlify.app/"/>
	<link rel="alternate" hreflang="en-au" 	href="https://watchfreemovie.netlify.app/"/>
	<link rel="alternate" hreflang="en-se" 	href="https://watchfreemovie.netlify.app/"/>
	<link rel="alternate" hreflang="en-fr" 	href="https://watchfreemovie.netlify.app/"/>
	<link rel="alternate" hreflang="en-dk" 	href="https://watchfreemovie.netlify.app/"/>
	<link rel="alternate" hreflang="en-no" 	href="https://watchfreemovie.netlify.app/"/>
	<link rel="alternate" hreflang="x-default" 	href="https://watchfreemovie.netlify.app/"/>

  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest"></link>
  <link rel="canonical" href="https://watchfreemovie.netlify.app/Bollywood/" />
  </Head>

  <Translate/>
      <main>
        <div>
      <div className="flex flex-col items-center justify-center space-y-12">
    <section className="text-gray-600 body-font">
    <h1 className="mb-4 font-bold leading-none tracking-tight text-white my-2 text-center md:text-4xl dark:text-white">Watch Free Movie™ Watch Latest Movies</h1>
      <div className="flex container flex-wrap sm:-m-4 -mx-0 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TuJhoothiMainMakkaar-2023/TuJhoothiMainMakkaar">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/tu-jhoothi-main-makkaar-2023.webp' alt='TU JHOOTHI MAIN MAKKAAR - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TU JHOOTHI MAIN MAKKAAR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Madness ensues when a 'player' in the world of romantic relationships finds a girl who's a worthy opponent, that believes love is a battle of wits.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, ROMANCE
       </div>
       <a href="../../Bollywood/TuJhoothiMainMakkaar-2023/TuJhoothiMainMakkaar">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/SatarchaSalman-2023/SatarchaSalman">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/satarcha-salman-2023.webp' alt='SATARCHA SALMAN - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SATARCHA SALMAN - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Arun always wanted to be an actor but could never fulfill his dream for which the village ridiculed him. Angry about his failure.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.2 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, FAMILY
       </div>
       <a href="../../Bollywood/SatarchaSalman-2023/SatarchaSalman">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/VictoriaEkRahasya-2023/VictoriaEkRahasya">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/victoria-ek-rahasya-2023.webp' alt='VICTORIA EK RAHASYA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VICTORIA EK RAHASYA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A couple arrives at Hotel Victoria and are greeted by the creepy owner who is the only occupant of the sprawling property. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.8 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :HORROR, THRILLER
       </div>
       <a href="../../Bollywood/VictoriaEkRahasya-2023/VictoriaEkRahasya">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TheLegend-2023/TheLegend">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-legend-2023.webp' alt='THE LEGEND - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE LEGEND - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Saravanan, a foreign-educated researcher returns to his native place in India. His family runs colleges and hospitals.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/TheLegend-2023/TheLegend">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Raundal-2023/Raundal">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/raundal-2023.webp' alt='RAUNDAL - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">RAUNDAL - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The story of a farmer from Maharashtra who knows to how to grow agricultural produce but finds it difficult to sell it.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/Raundal-2023/Raundal">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/LoveAtFirstKiss-2023/LoveAtFirstKiss">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/love-at-first-kiss-2023.webp' alt='LOVE AT FIRST KISS - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LOVE AT FIRST KISS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follow the story of a 16-year-old who finds he can see the whole future of a romantic relationship when he kisses a girl for the first time.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.8 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, ROMANCE
       </div>
       <a href="../../Bollywood/LoveAtFirstKiss-2023/LoveAtFirstKiss">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/InCar-2023/InCar">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/incar-2023.webp' alt='INCAR - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">INCAR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A kidnapped girl's terrifying journey of survival.InCar is a Drama Thriller Movie.Directed by Harsh Warrdhan.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/InCar-2023/InCar">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Gulmohar-2023/Gulmohar">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/gulmohar-2023.webp' alt='GULMOHAR - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">GULMOHAR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follows the final four days of the Batra family living in their 31-year-old family home as they move to a new city.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Gulmohar-2023/Gulmohar">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Selfiee-2023/Selfiee">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/selfiee-2023.webp' alt='SELFIEE - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SELFIEE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">21-year old Vicky is diagnosed with mental health issues and starts having illusory images which he needs to break out his situation.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Selfiee-2023/Selfiee">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/OuterBanks-2023/OuterBanks">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/outer-banks-2023.webp' alt='OUTER BANKS - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">OUTER BANKS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">On an island of haves and have-nots, teen John B enlists his three best friends to hunt for a treasure linked to his father's disappearance.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/OuterBanks-2023/OuterBanks">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Triptych-2023/Triptych">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/Triptych-2023.webp' alt='TRIPTYCH - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TRIPTYCH - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Triada Title Announcement (Latin America Market)
It follows Becca, a forensics expert who, when investigating a murder.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, MYSTERY
       </div>
       <a href="../../Bollywood/Triptych-2023/Triptych">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/IruDhuruvam-2023/IruDhuruvam">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/iru-dhuruvam-2023.webp' alt='IRU DHURUVAM - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IRU DHURUVAM - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Six months after killing Sekar, Viktor has been off-duty to take care of Gayathri, who is rehabilitating. SI Kishore and his superior.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/IruDhuruvam-2023/IruDhuruvam">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
    
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/DieHart-2023/DieHart">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/die-hart-2023.webp' alt='DIE HART - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DIE HART - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follows a fictionalized version of Kevin Hart, as he tries to become an action movie star. He attends a school run by Ron Wilcox.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 fl ex-shrink-0" > IMDb RATING:  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                4.6 Out of 10</h3>
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/DieHart-2023/DieHart">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Hunt-2023/Hunt">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/hunt-2023.webp' alt='HUNT - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">HUNT - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An assistant police commissioner must tackle his inner demons and confront external enemies who are trying to keep him from solving a mystery.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME 
       </div>
       <a href="../../Bollywood/Hunt-2023/Hunt">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/HoJaMukat-2023/HoJaMukat">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/ho-ja-mukat-2023.webp' alt='HO JA MUKAT - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">HO JA MUKAT - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">21-year old Vicky is diagnosed with mental health issues and starts having illusory images which he needs to break out his situation.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/HoJaMukat-2023/HoJaMukat">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Shehzada-2023/Shehzada">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/shehzada-2023.webp' alt='SHEHZADA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SHEHZADA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Bantu is hated by his father Valmiki since he was a toddler. Samara, his boss show him affection & love until he discovers the Jindals are his parents.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Shehzada-2023/Shehzada">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TheNightManager-2023/TheNightManager">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-night-manager-2023.webp' alt='THE NIGHT MANAGER - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE NIGHT MANAGER - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follows Jonathan, an ex-soldier, who must infiltrate an arms dealer's inner circle to avenge the death of his girlfriend.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/TheNightManager-2023/TheNightManager">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Vaathi-2023/Vaathi">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/vaathi-2023.webp' alt='VAATHI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VAATHI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The life of a young man and his struggles against the privatization of education.Vaathi is a Action Dram Movies.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Vaathi-2023/Vaathi">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MrLocal-2023/MrLocal">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/mr-local-2023.webp' alt='MR.LOCAL - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MR.LOCAL - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The film revolves around a carefree "local" guy, Manohar, who leads a happy life with his mother and sister. When he picks up frequent fights </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/MrLocal-2023/MrLocal">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TheCheckPost-2023/TheCheckPost">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-check-post-2023.webp' alt='THE CHECK POST - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE CHECK POST - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Check Post 1995 is a Telugu movie featuring Master Mahendran and Shagna in lead roles. The Check Post Ia remake of Telugu Movie.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/TheCheckPost-2023/TheCheckPost">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Lost-2023/Lost">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/lost-2023.webp' alt='LOST - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LOST - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An emotional thriller that represents a higher quest, a search for lost values of empathy and integrity. Lost is a Dram Movies.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Lost-2023/Lost">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MinusOne-2023/MinusOne">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/minus-one-2023.webp' alt='MINUS ONE - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MINUS ONE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Minus One - New Chapter is an ode to a relationship that spans several phases of life. Through the relationship of Varun and Ria.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>

       <a href="../../Bollywood/MinusOne-2023/MinusOne">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Amigos-2023/Amigos">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/amigos-2023.webp' alt='AMIGOS - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AMIGOS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Plot revolves around the 2 Doppelgangers, Siddharth an entrepreneur and Manjunath a software engineer of the Gangster Michael.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Amigos-2023/Amigos">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Christopher-2023/Christopher">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/christopher-2023.webp' alt='CHRISTOPHER - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CHRISTOPHER - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A maverick cop is forced to work outside the limits of law.The story weaves across the past & present while revealing the motives that shape his actions.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Christopher-2023/Christopher">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Dishkiyaoon-2023/Dishkiyaoon">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/dishkiyaoon-2023.webp' alt='DISHKIYAOON - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DISHKIYAOON - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Dishkiyaoon is a story of ambition, revenge and deception. It chronicles the life of Vicky Kartoos as he makes way top in the world of gangsters.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                NA Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DRAMA
       </div>
       <a href="../../Bollywood/Dishkiyaoon-2023/Dishkiyaoon">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Farzi-2023/Farzi">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/farzi-2023.webp' alt='FARZI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">FARZI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An artist who gets pulled into the murky high stakes of a con job and a fiery task force officer on the mission to rid the country in a fast-paced.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/Farzi-2023/Farzi">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/JaanbaazHindustanKe-2023/JaanbaazHindustanKe">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/jaanbaaz-hindustan-ke-2023.webp' alt='JAANBAAZ HINDUSTAN KE - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">JAANBAAZ HINDUSTAN KE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A single mother and celebrated IPS officer, Kavya Iyer's bravery and psychological strength are tested when she becomes the lead investigator.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/JaanbaazHindustanKe-2023/JaanbaazHindustanKe">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/JagguAniJulite-2023/JagguAniJulite">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/jaggu-ani-juliet-2023.webp' alt='JAGGU ANI JULIET - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">JAGGU ANI JULIET - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Jaggu and Juliet is a contemporary, fun filled laugh riot that revolves around people, love, travel, fun and discovering a soul mate.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.7 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ROMANCE, DRAMA
       </div>
       <a href="../../Bollywood/JagguAniJulite-2023/JagguAniJulite">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Kranti-2023/Kranti">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/kranti-2023.webp' alt='KRANTI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KRANTI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Protecting government schools and the hero is business man when he knows there family in trubel the was come and slove this case.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/Kranti-2023/Kranti">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Michale-2023/Michale">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/michael-2023.webp' alt='MICHAEL - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MICHAEL - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The gang fighting over places. A youngster decides to gain control of the area. Can he complete his dream of ruling over the place?</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/Michale-2023/Michale">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MrTharak-2023/MrTharak">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/mr-tharak-2023.webp' alt='MR THARAK - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MR THARAK - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A scientist was doing research about the parallel universe. While testing it, the heavy power supply the lab blasted which led to consequences.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :FAMILY, MYSTERY
       </div>
       <a href="../../Bollywood/MrTharak-2023/MrTharak">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/RaftaRafta-2023/RaftaRafta">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/rafta-rafta-2023.webp' alt='RAFTA RAFTA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">RAFTA RAFTA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A modern young couple finds themselves slowly learning about each other as they learn more about themselves.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ROMANCE, DRAMA
       </div>
       <a href="../../Bollywood/RaftaRafta-2023/RaftaRafta">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/ShivShastriBalboa-2023/ShivShastriBalboa">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/shiv-shastri-balboa-2023.webp' alt='SHIV SHASTRI BALBOA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SHIV SHASTRI BALBOA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Shiv Shastri a retiree from India and a big Rocky movie fan moves to USA and ends up on an road trip through the American heartland.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DRAMA
       </div>
       <a href="../../Bollywood/ShivShastriBalboa-2023/ShivShastriBalboa">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/ZindagiShatranjHai-2023/ZindagiShatranjHai">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/zindagi-shatranj-hai-2023.webp' alt='ZINDAGI SHATRANJ HAI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">ZINDAGI SHATRANJ HAI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A men whose wife not ready to accept him has a husband despite of the fact that everyone else was telling that he is her husband.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/ZindagiShatranjHai-2023/ZindagiShatranjHai">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MissionMajnu-2023/MissionMajnu">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/mission-maju-2023.webp' alt='MASSION MAJNU - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MASSION MAJNU - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">In the 1970s, an undercover Indian spy takes on a deadly mission to expose a covert nuclear weapons program in the heart of Pakistan.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/MassionMajnu-2023/MissionMajnu">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Pathaan-2023/Pathaan">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/pathan-2023.webp' alt='PATHAAN - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">PATHAAN - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Pathaan is an Indian spy Story. An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.1 Out of 10</h3>
                 
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
       <a href="../../Bollywood/Pathaan-2023/Pathaan">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TheY-2023/TheY">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-y-2023.webp' alt='THE Y - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">THE Y - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The Female Protagonist is a Mute. After her marriage the couple enters a new chapter of their life but face dilemma which they least expect. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :HORROR, THRILLER
       </div>
       <a href="../../Bollywood/TheY-2023/TheY">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TaazaKhabar-2023/TaazaKhabar">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl "  src='/taaza-khabar-2023.webp' alt='TAAZA KHABAR - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">TAAZA KHABAR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A Sanitation worker, how he stumbles upon magical powers which leads to a riveting new ride for the man, and how it stirs his humble life.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.3 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/TaazaKhabar-2023/TaazaKhabar">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
       
     </div>
      
  </section>
  </div>
  </div>
  <div className="container px-5 py-24 mx-auto items-center justify-center  flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px">
    <li>
    <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      <a href="../Bollywood/bollywood" tabindex="-1" >Home</a></button>
    </li>
    <li>
    <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      <a href="../Bollywood/BPage1" >1</a></button>
    </li>

  </ul>
</nav>
</div>
      </main>

      </div>
      < ShareThis async defer />
    </div>
  )
}
export default bollywood;