import Head from 'next/head'
import '@styles/styles.module.css'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Translate from '@components/Translate';
import ShareThis from '@components/ShareThis';

const adult = () => {
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
        <title>Watch Free Movie™ Adult | Watch Movies and TV-Series Online Free</title>
      
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
  <link rel="canonical" href="https://watchfreemovie.netlify.app/Adult/" />
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
        <a href="../../Adult/MohanChabhiwalaP1-2023/MohanChabhiwalaP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/mohan-chabhiwala-p1-2023.webp' alt='MOHAN CHABHIWALA P1 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">MOHAN CHABHIWALA P1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Mohan Chabhiwala is Ullu Web Series The plot revolves around a man who is a street vendor. He gets attracted to multiple women and tries his luck.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/MohanChabhiwalaP1-2023/MohanChabhiwalaP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>

      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Nasha-2023/Nasha">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/nasha-2023.webp' alt='NASHA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">NASHA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Nasha is an Indian web series that explores adult romance and love through a compelling storyline, bold cinematography, sensuality, and taboo relationships.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Nasha-2023/Nasha">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>

      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/JungleCottage-2023/JungleCottage">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/jungle-cottage-2023.webp' alt='JUNGLE COTTAGE - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">JUNGLE COTTAGE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Jungle Cottage is a Wow Originals web series. Hindi Hot Web Series, Free Hindi Hot Web Series, Hot Hindi Sex Video, Hot Hindi Web Series, Porn Web Series.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/JungleCottage-2023/JungleCottage">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/GandiIBaatS7-2023/GandiIBaatS7">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/gandii-baat-s7-2023.webp' alt='GANDII BAAT S7 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">GANDII BAAT S7 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A lady stripper and a gigolo promised each other that their work can't break them apart. But when lust and temptation come into the picture.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/GandiIBaatS7-2023/GandiIBaatS7">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LoveGuruS2-P2-2023/LoveGuruS2P2">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/love-guru-s2-p2-2023.webp' alt='LOVE GURU S2 (PART 2) - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LOVE GURU S2 (PART 2) - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A lady stripper and a gigolo promised each other that their work can't break them apart. But when lust and temptation come into the picture.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/LoveGuruS2-P2-2023/LoveGuruS2P2">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/KhidkiP1-2023/KhidkiP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/khidki-p1-2023.webp' alt='KHIDKI PART 1 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">KHIDKI PART 1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The story of the Khidki Part 1 web series revolves around the life of a young girl who enjoys living her life to the fullest. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/KhidkiP1-2023/KhidkiP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Lagaslas-2023/Lagaslas">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/lagaslas-2023.webp' alt='LAGASLAS - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LAGASLAS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A young man named Edmar falls madly in love with Karisma, a barrio lass. Will he still love her if he finds out Karisma's deepest darkest secret?</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Lagaslas-2023/Lagaslas">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Veronica-2023/Veronica">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/veronica-2030.webp' alt='Veronica - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">Veronica - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Built for pleasure, Veronica 2030 is a love android from the future - but there's a problem with the programming...</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                3.7 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Veronica-2023/Veronica">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Suki-2023/Suki">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/suki-2023.webp' alt='SUKI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">SUKI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A lady stripper and a gigolo promised each other that their work can't break them apart. But when lust and temptation come into the picture.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Suki-2023/Suki">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/EroticaManila-2023/EroticaManila">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/erotica-manila-2023.webp' alt='EROTICA MANILA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">EROTICA MANILA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A man enters an adult film theatre, a writer gets a naughty massage, a porn star satisfies an intern, and a couple kill a man while making love.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/EroticaManila-2023/EroticaManila">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/MissBriganaza-2023/MissBriganaza">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/miss-briganaza-2023.webp' alt='WATCHMAN - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">MISS BRIGANAZA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Miss Briganaza (2023) is Hot Adult WoW Web series.Miss Briganaza (2023) stream on digital streaming platforms Wow. Hot Adult web Series on Wow.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/MissBriganaza-2023/MissBriganaza">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Watchman-2023/WatchmanP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/watchman-part1-2023.webp' alt='WATCHMAN - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">WATCHMAN SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> The plot revolves around new adventures and fantasies of flat security. Things take a new turn as events unfold around them.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Watchman-2023/WatchmanP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LaQuerida-2023/LaQuerida">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/la-querida-2023.webp' alt='LA QUERIDA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LA QUERIDA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A young couple's romance is cut short when the man learns that his woman is married. Hot Adult web Series on Viva Max.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/LaQuerida-2023/LaQuerida">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LadyDoctor-2023/LadyDoctor">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/lady-doctor-2023.webp' alt='LADY DOCTOR - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LADY DOCTOR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> The plot revolves around a female doctor. She gives special treatment to all her patients. Hot Adult web Series on Pime Shot.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/LadyDoctor-2023/LadyDoctor">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Kaand-2023/KaandP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/kaand-2023.webp' alt='KAAD - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">KAAND SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Kaand web series very soon going to stream on digital streaming platforms Dreams Films app. Hot Adult web Series on Dreams Films.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Kaand-2023/KaandP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Ishqiya-2023/Ishqiya">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/ishqiya-2023.webp' alt='ISHQIYA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">ISHQIYA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Ishqiya 2023 Raven Movies Hindi Sex Web Series Raven Movies app is providing erotic content for the youth audience of India. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Ishqiya-2023/Ishqiya">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/FarebiYarr-2023/FarebiYarrP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/farebi-yaar-part-1-2023.webp' alt='FAREBI YARR - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">FAREBI YARR SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> ULLU Originals Farebi Yaar Wife runs away with husband's best friend in this erotic web series Hot Adult web Series on ULLU Originals.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/FarebiYarr-2023/FarebiYarrP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Babuji-2023/BabujiP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/babuJi-2023.webp' alt='BABUJI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">BABUJI SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A man has two sons and their two wives. One day, babu ji gets hurt and becomes sick. And unable to see anything.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Babuji-2023/BabujiP1">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Pamasahe-2023/Pamasahe">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/pamasahe-2022.webp' alt='PAMASAHE - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">PAMASAHE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A penniless mother, with her infant child, takes on a journey by land and sea to find her husband in Manila. But this trip won't be free for she has to use her.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/Pamasahe-2023/Pamasahe">
     <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/ILoveyou-2023/ILoveyou">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl "  src='/i-love-you-P2-2023.webp' alt='I LOVE YOU PART 2 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">I LOVE YOU PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The plot revolves around the youngster roaming around the find his true love. He mts another lady and it inches close to his fantasy.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/ILoveyou-2023/ILoveyou">
      <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>

         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/PlanB-2023/PlanB">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/plan-b-2023.webp' alt='PLAN B 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">PLAN B 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Things take a turn when the woman is seen seducing another man, and the duo are seen mixing something into Kamini’s drink. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/PlanB-2023/PlanB">
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
          <h3 className="leading-relaxed text-white text-base">The story of a young girl who comes to the village to become a dancer. She has a bucket load of ambitions and dreams and wants to become a heroine in the films.</h3>
        
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
          <h3 className="leading-relaxed text-white text-base"> The Plot revolves around a gym trainer and all the female members in the gym. We meet the handsome guy Shaily who works as a gym instructor in gym.</h3>
        
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
        <a href="../../Adult/AnAffairToForget-2022/AnAffairToForget">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/an-affair-to-forget-2022.webp' alt='AN AFFAIR TO FORGET - 2022' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AN AFFAIR TO FORGET - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">Wife seeks the help of a young woman to find out if her husband is having an affair. The plot thickens when the young woman falls for the husband instead.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.3 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/AnAffairToForget-2022/AnAffairToForget">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>
         
        </div>
      </div>
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
                7.5 Out of 10</h3>
         
         
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
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600  font-bold text-center items-center">
      GENRE :ADULT, HOT +18
       </div>
       <a href="../../Adult/VirginBahus-2023/VirginBahus">
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">Watch Now</button></a>

         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/WalkManP1-2022/WalkManP1">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/walkman1-2022.webp' alt='WALKMAN PART 1 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WALKMAN PART 1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A newlywed Roshini is disheartened when her dreams and aspirations are left short lived, both on and off bed. In a twist of fate tales.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center font-bold text-yellow-400 mb-5 flex-shrink-0" > IMDb RATING:</h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 Out of 10</h3>
         
         
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
                7.5 Out of 10</h3>
         
         
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
                7.5 Out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
      GENRE :ADULT, HOT +18 
       </div>
       <a href="../../Adult/WalkManP3-2022/WalkManP3">
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
      <a href="../Adult/adult" tabindex="-1" >Home</a></button>
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
export default adult;