
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Translate from '@components/Translate';
import ShareThis from '@components/ShareThis';

export default function Page4() {
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
        <title>Watch Free Movie™ Page4</title>
      
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
  <link rel="canonical" href="https://watchfreemovie.netlify.app/Page4" />
      </Head>
<Translate />
<main>
        <div>
        
      <div className="flex flex-col items-center justify-center space-y-12">
    <section className="text-gray-600 body-font">
    <h1 className="mb-4 font-bold leading-none tracking-tight text-white my-2 text-center md:text-4xl dark:text-white"> Watch Free Movie™ Watch Latest Movies</h1>
      <div className="flex container flex-wrap sm:-m-4 -mx-0 -mb-10 -mt-4 md:space-y-0 space-y-6">
      
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/ChingariChaubey-2023/ChingariChaubey">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/chingari-chaubey-2023.webp' alt='CHINGARI CHAUBEY - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CHINGARI CHAUBEY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The plot revolves around the youngster roaming around the find his true love. He mts another lady and it inches close to his fantasy.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/ChingariChaubey-2023/ChingariChaubey">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/VirginBahus-2023/VirginBahus">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/virgin-bahus-2023.webp' alt='VIRGIN BAHUS - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VIRGIN BAHUS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The plot revolves around the family with three marriages. The daughter in laws entered into a mood of confusion. watch Virgin Bahus - 2023</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/VirginBahus-2023/VirginBahus">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>

         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/WalkManP1-2022/WlkP1Ads">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/walkman1-2022.webp' alt='WALKMAN PART 1 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WALKMAN PART 1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A newlywed Roshini is disheartened when her dreams and aspirations are left short lived, both on and off bed. In a twist of fate tales.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/WalkManP1-2022/WalkManP1">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/WalkManP2-2022/WalkManP2">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/walkman2-2022.webp' alt='WALKMAN PART 2 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WALKMAN PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A newlywed Roshini is disheartened when her dreams and aspirations are left short lived, both on and off bed. In a twist of fate tales.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/WalkManP2-2022/WalkManP2">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/WalkManP3-2022/WalkManP3">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/walkman3-2022.webp' alt='WALKMAN PART 3 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WALKMAN PART 3 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A newlywed Roshini is disheartened when her dreams and aspirations are left short lived, both on and off bed. In a twist of fate tales.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18 
       </div>
       <a href="../../Adult/WalkManP3-2022/WalkManP3">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Kuttey-2023/Kuttey">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/kuttey-2023.webp' alt='KUTTEY - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KUTTEY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A van carrying crores of cash. One rainy night in the outskirts of Mumbai. Unaware of each other, three stray gangs cross paths on the hunt.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, CRIME
       </div>
       <a href="../../Bollywood/Kuttey-2023/Kuttey"> 
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
      <a href="/" tabindex="-1" >Home</a></button>
    </li>
    <li>
    <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      <a href="../../Page1" >1</a></button>
    </li>
    <li>
    <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      <a href="../../Page2" >2</a></button>
    </li>
    <li>
    <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      <a href="../../Page3" >3</a></button>
    </li>
    <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
      <a href="../../Page4" >4</a></button>
  </ul>
</nav>
</div>
      </main>
      </div>

      < ShareThis async defer />
</div>
    )
  }
  