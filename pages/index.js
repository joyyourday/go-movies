import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import HeroBanner from '../components/HeroBanner';

const scrollSearch = myKey => {
  window.scrollTo(0, 0);
  frontMatter.handleSearch(myKey)
};



const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;

const HeroBannerContainer = styled.div`
  width: 100%;
  height: 500px;
`;

const HeroBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

const Header = styled.h1`

  font-size: 48px;
  text-align: center;
  color: white;
`;

const Text = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  text-align: center;
  color: white;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  font-size: 24px;
  padding: 16px 32px;
  border-radius: 8px;
  border: none; 
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 130%;
//opacity: 0.25;
  transform: translate(-50%, -50%);
`;



const schemaData   = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"CollectionPage",
      "@id":"https://gomovies.netlify.app/",
      "url":"https://gomovies.netlify.app/",
      "name":"Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free",
      "isPartOf":{
        "@id":"https://gomovies.netlify.app/#website"
      },
      "about":{
        "@id":"https://gomovies.netlify.app/#organization"
      },
      "description":"Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free",
      "breadcrumb":{
        "@id":"https://gomovies.netlify.app/#breadcrumb"
      },
      "inLanguage":"en-US"
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://gomovies.netlify.app/#breadcrumb",
      "itemListElement":[
        {
          "@type":"ListItem",
          "position":1,
          "name":"Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free"
        }
      ]
    },
    {
      "@type":"WebSite",
      "@id":"https://gomovies.netlify.app/#website",
      "url":"https://gomovies.netlify.app/",
      "name":"Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free",
      "description":"Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free",
      "publisher":{
        "@id":"https://gomovies.netlify.app/#organization"
      },
      "potentialAction":[
        {
          "@type":"SearchAction",
          "target":{
            "@type":"EntryPoint",
            "urlTemplate":"https://gomovies.netlify.app/?s={search_term_string}"
          },
          "query-input":"required name=search_term_string"
        }
      ],
      "inLanguage":"en-US"
    },
    {
      "@type":"Organization",
      "@id":"https://gomovies.netlify.app/#organization",
      "name":"Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free",
      "url":"https://gomovies.netlify.app/",
      "logo":{
        "@type":"ImageObject",
        "inLanguage":"en-US",
        "@id":"https://gomovies.netlify.app/#/schema/logo/image/",
        "url":"https://gomovies.netlify.app/logo.png",
        "contentUrl":"https://gomovies.netlify.app/logo.png",
        "width":834,
        "height":135,
        "caption":"Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free"
      },
      "image":{
        "@id":"https://gomovies.netlify.app/#/schema/logo/image/"
      }
    }
  ]
};

const LandingPage = () => {


  return (
    <>
     <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
     <Head>
        <title>Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free</title>
        <meta name="robots" content="index, follow" />  
        <meta name="revisit-after" content="1 days" />
        <meta name="facebook-domain-verification" content="13auzwhblf4oo4jn5vl6gcmebugsqb" />
        <meta property="fb:app_id" content="602176271414602" />
        <meta name='dailymotion-domain-verification' content='dmv6sg06w9r5eji88' />
        <meta name="monetag" content="076afbb772da1a62ef6f43756dfa5f65"></meta>
      <meta name="google-site-verification" content="4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0" />
        <meta name="description" content="Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free" />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="keywords" content="Go Movies,streaming,latest movies,online tv,latest free movies,watch latest movies online" />
      <meta property="og:locale" content="en_US" />   
      <meta property=" Content-Security-Policy: frame-ancestors 'self' gomovies.netlify.app *.gomovies.netlify.app;" />
      <meta property="og:site_name" content="Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free " />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free " />
      <meta property="og:description" content="Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free " />
      <meta property="og:url" content="https://gomovies.netlify.app/" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image" content="https://gomovies.netlify.app/og_image.jpg" />
      <meta property="og:image:secure_url" content="https://gomovies.netlify.app/og_image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free " />
      <meta name="twitter:description" content=" Go Movies™ - Watch Movies, TV-Series & Sports Live Online Free " />
      <meta name="twitter:image" content="https://gomovies.netlify.app/og_image.jpg" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />

      <link rel="alternate" hrefLang="en-us" 	href="https://gomovies.netlify.app/"/>
  <link rel="alternate" hrefLang="en-gb" 	href="https://gomovies.netlify.app/"/>
  <link rel="alternate" hrefLang="en-ca" 	href="https://gomovies.netlify.app/"/>
  <link rel="alternate" hrefLang="en-au" 	href="https://gomovies.netlify.app/"/>
  <link rel="alternate" hrefLang="en-se" 	href="https://gomovies.netlify.app/"/>
  <link rel="alternate" hrefLang="en-fr" 	href="https://gomovies.netlify.app/"/>
  <link rel="alternate" hrefLang="en-dk" 	href="https://gomovies.netlify.app/"/>
  <link rel="alternate" hrefLang="en-no" 	href="https://gomovies.netlify.app/"/>
  <link rel="alternate" hrefLang="x-default" 	href="https://gomovies.netlify.app/"/>
  
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest"></link>
  <link rel="canonical" href="https://gomovies.netlify.app/" />

      </Head>
   
    
      <HeroBannerContainer>
  <HeroBanner
    src="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610087/og_image_okmgde.jpg"
    alt="Hero banner"
    loading="lazy"
    width={1920}
    height={1080}
    quality={80}
  />
</HeroBannerContainer>
<PageContainer>
        <Header style={{textShadow: "5px 5px 2px #000" }}>Welcome to Go Movies™ </Header>
        <Text style={{textShadow: "5px 5px 2px #000" }}>Watch Movies TV-Series & Sports Live Online Free </Text>
        <Link href="/page">
          <Button>Enter free movie websites without sign up</Button>
        </Link> 
        <VideoBackground autoPlay muted loop>
          <source src="https://ik.imagekit.io/lwkyvy5lo/trailer.mp4?updatedAt=1683813651866" type="video/mp4" />
        </VideoBackground>
      </PageContainer>
    </>
  );
};

export default LandingPage;
