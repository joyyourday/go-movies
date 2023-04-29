
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Translate from '@components/Translate';
import ShareThis from '@components/ShareThis';

export default function Page3() {
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
<div className="bg-[#1a202c]">

<Head>
        <title>Watch Free Movie™ Page3</title>
      
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
  <link rel="canonical" href="https://watchfreemovie.netlify.app/Page3" />
      </Head>
<Translate/>
<main>
        <div>
     
      <div className="flex flex-col items-center justify-center space-y-12">
    <section className="text-gray-600 body-font">
    <h1 className="mb-4 font-bold leading-none tracking-tight text-white my-2 text-center md:text-4xl dark:text-white"> Watch Free Movie™ Watch Latest Movies</h1>
      <div className="flex container flex-wrap sm:-m-4 -mx-0 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Thunivu-2023/Thunivu">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/thunivu-2023.webp' alt='THUNIVU - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THUNIVU - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A mysterious mastermind - Daredevil and his team forms a plan and commits bank heist to find the corporate looted people's money.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.9 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
       <a href="../../Bollywood/Thunivu-2023/Thunivu">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Varisu-2023/Varisu">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/varisu-2023.webp' alt='VARISU - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VARISU - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Varisu is a family drama with lost of action scene Vijay Rajendran is a happy to-go lucky man. Things change when his father dies unexpectedly</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.8 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Bollywood/Varisu-2023/Varisu">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>

         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/TrailByFire-2023/TrailByFire">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/trial-by-fire-2023.webp' alt='TRAIL BY FIRE - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TRAIL BY FIRE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Difficult yet resilient journey of two parents - Neelam and Shekhar Krishnamoorthy, trying to seek justice over the last two decades.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.3 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :CRIME, DRAMA
       </div>
       <a href="../../Bollywood/TrailByFire-2023/TrailByFire">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/MumbaiMafia-2023/MumbaiMafia">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/mumbai-mafia-2022.webp' alt='MUMBAI MAFIA... - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">MUMBAI MAFIA... - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">In 1990s Mumbai, a crime boss and his network wield unchecked power over the city of 'encounter cops' who brazenly kill their targets.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.4 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :CRIME, DRAMA
       </div>
       <a href="../../Bollywood/MumbaiMafia-2023/MumbaiMafia">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Chhatriwali-2023/Chhatriwali">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/chhatriwali-2023.webp' alt='CHHATRIWALI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CHHATRIWALI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Sanya is an unemployed chemistry genius looking for a job. However, she also wants to use her knowledge of chemistry to help young minds.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DRAMA
       </div>
       <a href="../../Bollywood/Chhatriwali-2023/Chhatriwali">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Narvik-2023/Narvik">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/narvik-2022.webp' alt='NARVIK 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">NARVIK 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Norway, a supposedly neutral country during World War II, was a target for the Germans and British because of the minerals and raw goods contingents.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.8 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DARAM, WAR
       </div>
       <a href="../../Hollywood/Narvik-2023/Narvik">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/OperationFortune-2023/OperationFortune">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/operation-fortune-ruse-de-uerre-2023.webp' alt='OPERATION FORTUNE... - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">OPERATION FORTUNE... - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Special agent Orson Fortune and his team of operatives recruit one of Hollywood's biggest movie stars to help them on an undercover mission.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, THRILLER
       </div>
       <a href="../../Hollywood/OperationFortune-2023/OperationFortune">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Babylon-2023/Babylon">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/babylon-2022.webp' alt='BABYLON - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">BABYLON - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DRAMA
       </div>
       <a href="../../Hollywood/Babylon-2023/Babylon">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Devotion-2023/Devotion">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/devotion-2023.webp' alt='DEVOTION - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DEVOTION - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A pair of U.S. Navy fighter pilots risk their lives during the Korean War and become some of the Navy's most celebrated wingmen.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-white text-center items-center">
      GENRE :ACTION, WAR
       </div>
       <a href="../../Hollywood/Devotion-2023/Devotion">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Shahmaran-2023/Shahmaran">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/shahmaran-2023.webp' alt='SHAHMARAN - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">SHAHMARAN - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> When Sahsu goes to Adana for a lecture, it's the perfect chance to face her estranged grandfather. She finds herself in the midst of a legend.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.1 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ADVENTURE, DRAMA
       </div>
       <a href="../../Hollywood/Shahmaran-2023/Shahmaran">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/JungE-2023/JungE">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/jung-e-2023.webp' alt='JUNG-E - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">JUNG-E - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
       <a href="../../Hollywood/JungE-2023/JungE">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/TheOldWay-2023/TheOldWay">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-old-way-2023.webp' alt='THE OLD WAY - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE OLD WAY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">An old gunslinger and his daughter must face the consequences of his past, when the son of a man he murdered years ago arrives to take his revenge.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, WESTERN
       </div>
       <a href="../../Hollywood/TheOldWay-2023/TheOldWay">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/VikingsValhalla-2023/VikingsValhallaP1">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/vikings-valhalla-2023.webp' alt='VIKINGS VALHALLA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VIKINGS VALHALLA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Follow-up series to 'Vikings' set 100 years later and focusing on the adventures of Leif Erikson, Freydis, Harald, King William the Conqueror.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, ADVENTURE
       </div>
       <a href="../../Hollywood/VikingsValhalla-2023/VikingsValhallaP1">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LustDaries-2023/LustDaries">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/lust-diaries-pehla-pyar-2023.webp' alt='LUST DARIES... - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LUST DARIES... - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Lust Diaries Pehla Pyar 2023 WoW Hindi Shorts Web Series.Adult and Hot Movie Watch it Now Lust Diaries Pehla Pyar - 2023 </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/LustDaries-2023/LustDaries">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Imli-2023/Imli">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/Imli-P2-2023.webp' alt='IMLI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IMLI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The story of a young girl who comes to the village to become a dancer. She has a load of dreams and wants to become a heroine in the films.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Imli-2023/Imli">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/TeekhiChutteny-2022/TeekhiChutteny">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/teekhi-chutney-part2-2022.webp' alt='TEEKHI CHUTENY PART 2 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TEEKHI CHUTENY PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Teekhi Chutney Part 2 is Hindi Romance, drama Web Series. Adult and Hot Movie Watch it Now Teekhi Chunteny Part 2 - 2023 </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/TeekhiChutteny-2022/TeekhiChutteny">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Darji-2022/Darji">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/darji-2022.webp' alt='DARJI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DARJI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> The Plot revolves around a gym trainer and all the female members in the gym. Meet the handsome guy Shaily who works as a gym instructor.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Darji-2022/Darji">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Hunters-2023/Hunters">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/hunters-2023.webp' alt='HUNTERS - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">HUNTERS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">In 1977 New York City, a troubled young Jewish man bent on revenge is taken in by a secret group of Nazi hunters fighting a war against the Nazi.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, DRAMA
       </div>
       <a href="../../Hollywood/Hunters-2023/Hunters">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/GinnyAndGeorgia-2023/GinnyAndGeorgia">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/ginny-georgia-2023.webp' alt='GINNY & GEORGIA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">GINNY & GEORGIA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Ginny Miller, an angsty fifteen-year-old, often feels more mature than her thirty-year-old mother, the irresistible and dynamic Georgia Miller.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DRAMA
       </div>
       <a href="../../Hollywood/GinnyAndGeorgia-2023/GinnyAndGeorgia">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/LastOfUs-2023/LastOfUs">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-last-of-us-2023.webp' alt='THE LAST OF US - 2023<' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE LAST OF US - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                9.4 Out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, DRAMA
       </div>
       <a href="../../Hollywood/LastOfUs-2023/LastOfUs">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
      <a href="../../Bollywood/Vaalvi-2023/Vaalvi">
   
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl" src='/vaalvi-2023.webp' alt='VAALVI 2023' width={400} height={300} loading="lazy"/></a>
      </div>
      <div className="flex-grow">
        <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VAALVI 2023</h2>
        <h3 className="leading-relaxed text-white text-base">Aniket and Avani, a couple, decide to end their lives together. A foolproof plan is made, but by Aniket and his girlfriend Devika. </h3>
      
        <p className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > IMDb RATING:    </p>
 
         <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.7 Out of 10</h3>
       
             <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :COMEDY, DARAMA
       </div>
       <a href="../../Bollywood/Vaalvi-2023/Vaalvi">
      <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
       
      </div>
    </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-indigo-500 mb-5 flex-shrink-0">
          <a href="../../Bollywood/DharaviBank-2022/DharaviBank">
    
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl" src='/dharavi-bank-2022.webp' alt='DHARAVI BANK - 2022' width={400} height={300}  loading="lazy"/>  </a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DHARAVI BANK - 2022</h2>
            <p className="leading-relaxed text-white text-base">A 30,000 Crore crime nexus is being ruled by the unattainable Thalaivan right in the heart of Mumbai, in Dharavi. JCP Jayant is on a mission.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
          
              <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.3 Out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :CRIME, DRAMA
       </div>
          
       <a href="../../Bollywood/DharaviBank-2022/DharaviBank"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-white-900 mb-5 flex-shrink-0">
          <a href="../../Hollywood/Imani-2023/Imani" >
         
 <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" src='/imani-2023.webp' alt='IMANI - 2023' width={400} height={300}  loading="lazy"/></a>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IMANI - 2023</h2>
            <p className="leading-relaxed text-white text-base">Faith has it all as a mother and wife, but a year after she believes was a car accident, discovers that she is an Army special ops lieutenant.</p>
          
         <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.1 out of 10</h3>
          
           
                  <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
          
       <a href="../../Hollywood/Imani-2023/Imani"> <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
           
          </div>
        </div>
            
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Kantara-2022/Kantara">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/kantara-2022.webp' alt='KANTARA - 2022' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">KANTARA - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">It involves culture of Kambla and Bhootha Kola. A human and nature conflict where Shiva is the rebellion who works against nature. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.4 out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :SOCIAL, DARMA
       </div>
       <a href="../../Bollywood/Kantara-2022/Kantara">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Freddy-2022/Freddy">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/freddy-2022.webp' alt='FREDDY - 2022' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">FREDDY - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">The lines between love and obsession blur in this romantic thriller packed with unpredictable twists and sharp turns. Watch Freddy Today. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.1 out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
       <a href="../../Bollywood/Freddy-2022/Freddy">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
     
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/Againsttheice/againsttheice" >
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/against-the-ice-2022.webp' alt='AGAINST THE ICE - 2022' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AGAINST THE ICE - 2022</h2>
          <h3 className="leading-relaxed text-white text-base"> When a housewife with a personality disorder is taken hostage by a terrorist on the loose and a husband accused of cheating on his wife.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.5 out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :DRAMA, MYSTERY
       </div>
       <a href="../../Hollywood/Againsttheice/againsttheice" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Bollywood/Dhokha-2022/Dhokha">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/dhokha-2022.webp' alt='DHOKHA - 2022' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DHOKHA - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">When a housewife with a personality disorder is taken hostage by a terrorist on the loose and a husband accused of cheating on his wife.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-white  flex-row text-center items-center">
      GENRE :ACTION, MYSTERY
       </div>
       <a href="../../Bollywood/Dhokha-2022/Dhokha">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/PlayDead-2023/PlayDead">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/play-dead-2022.webp' alt='PLAY DEAD - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">PLAY DEAD - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Chloe fakes her own death to break into a morgue, in order to retrieve a piece of evidence that ties her younger brother to a crime gone wrong.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.1 out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :HORROR, DRAMA
       </div>
       <a href="../../Hollywood/PlayDead-2023/PlayDead">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Hollywood/TheLastHeist-2022/TheLastHeist">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/the-last-heist-2022.webp' alt='THE LAST HEIST - 2022' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">THE LAST HEIST - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">The four thieves bounded by honor meet back at the local boozer, the place where it all began. Beneath lies a dark secret that test the loyalty.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.3 out of 10</h3>
         
         
               <div className="p-4 mx-5 py-1flex text-white font-bold flex-row text-center items-center">
      GENRE :ACTION, THRILLER
       </div>
       <a href="../../Hollywood/TheLastHeist-2022/TheLastHeist">
      <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>

         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/AnAffairToForget-2022/AnAffairToForget">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/an-affair-to-forget-2022.webp' alt='AN AFFAIR TO FORGET - 2022' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AN AFFAIR TO FORGET - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">Wife seeks the help of a young woman to find out if her husband is having an affair. when the young woman falls for the husband instead.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.3 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/AnAffairToForget-2022/AnAffairToForget">
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
  