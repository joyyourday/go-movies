import Link from "next/link";
import Rating from "pages/Rating";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@styles/video-player.module.css";
import Max from "pages/Max";
import ShareButtons from "@components/ShareButtons";
import Script from "next/script";

function EastNewYorkP16({ movie }) {
  if (!movie) {
    return <div className="text-3xl text-red-600 text-center">Loading...</div>;
  }
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  const scrollSearch = (myKey) => {
    window.scrollTo(0, 0);
    frontMatter.handleSearch(myKey);
  };
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }
  const ldJsonData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TVSeries",
    name: movie.name,
    description: movie.synopsis,
    image: movie.poster,
    genre: movie.genre,
    datePublished: movie.yearRelease,
    director: movie.director,
    actor: movie.starring,
    url: movie.link,

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: movie.rating,
      bestRating: 10,
      worstRating: 0,
      ratingCount: 1,
    },
    episode: [
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 1",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP1",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 2",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP2",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 3",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP3",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 4",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP4",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 5",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP5",
      },

      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 6",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP6",
      },
      ,
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 7",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP7",
      },
      ,
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 8",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP8",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 9",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP9",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 10",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP10",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 11",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP11",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 12",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP12",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 13",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP13",
      },

      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 14",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP14",
      },
      ,
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 15",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP15",
      },
      ,
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 16",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP16",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 17",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP17",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 18",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP18",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 19",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP19",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 20",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP20",
      },
      {
        "@type": "TVEpisode",
        name: "EastNewYork S01 Episode 21",
        url: "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP21",
      },
    ],
    author: [
      {
        "@type": "Person",
        name: "DrTrailer",
        url: "https://gomovies.netlify.app/DrTrailer.png",
      },
    ],

    publisher: {
      "@type": "Organization",
      name: "Go Movies",
      logo: {
        "@type": "ImageObject",
        url: "https://gomovies.netlify.app/og_image.jpg",
      },
    },
    potentialAction: {
      "@type": "WatchAction",
      name: "East New York  S01 (2023)",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP1",
      },
    },
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Action Platform",
      value: ["Desktop Web Platform", "iOS Platform", "Android Platform"],
    },
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJsonData }}
      />
      <Head>
        <title>
          Watch East New York S01 (2023) Full Movie Online Free | Go Movies™
        </title>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Go Movies,east new york tv show,east new york 2023,index of east new york tv series,east new york cast,east new york reboot,east new york trailer,east new york release date,east new york episodes,east new york streaming,east new york watch online,east new york tv series download,east new york tv series free download,east new york tv series online,east new york tv series watch online,east new york tv series season 1,east new york tV series full episodes"
        />
        <meta property="og:locale" content="en_US" />

        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta
          property="og:site_name"
          content="Go Movies™ | Watch Movies, TV-Series & Sports Live Online Free"
        />
        <meta property="og:type" content="movie" />

        <meta
          property="og:title"
          content="Watch East New York S01 (2023) | Go Movies™"
        />
        <meta
          property="og:url"
          content="https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP1"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1684371110/East_New_York_S01-2023_vhlydu.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://gomovies.netlify.app/"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Watch East New York S01 (2023) | Go Movies™"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1684371110/East_New_York_S01-2023_vhlydu.webp"
        />
        <meta
          name="description"
          content="Watch EastNewYork S01 Full Movie Online on Go Movies™, You can also download East New York S01 (2023)
 in full HD quality to watch later offline."
        />

        <link
          rel="canonical"
          href="https://gomovies.netlify.app/Hollywood/EastNewYorkS01-2023/EastNewYorkP1"
        />
      </Head>
      <Script src="../../propler/ads.js" defer />
      <div className="bg-gray-600 shadow ">
        <h1
          className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center"
          style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
        >
          {movie.title} - EPISODE 19
        </h1>
        <div className={styles["iframe-container"]}>
          <iframe
            className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 "
            src={movie["movie.watchP19"]}
            width="100%"
            height="500px"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="mb-9 text-bg  text-black-500 text-red-600 text-center xl:px-4 ">
          *Note: Pls Select the in the Player to Change your Language of your
          Choice and Setting to Change the Quality of Video.
        </h3>
        <ShareButtons
          url="https://gomovies.netlify.app"
          title="Watch Movies, TV-Series & Sports Live Online Free"
          image="https://gomovies.netlify.app/og_image.jpg"
        />

        <div className="grid grid-cols-1 mx-20 sm:grid-cols-2  x:grid-cols-3 gap-4">
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP1">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 1
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP2">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 2
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP3">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 3
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP4">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 4
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP5">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 5
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP6">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 6
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP7">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 7
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP8">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 8
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP9">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 9
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP10">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 10
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP11">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 11
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP12">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 12
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP13">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 13
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP14">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 14
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP15">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 15
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP16">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 16
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP17">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 17
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP18">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 18
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP19">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 19
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP20">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 20
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/EastNewYorkS01-2023/EastNewYorkP21">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                Episode 21
              </button>
            </Link>
          </div>
        </div>
        <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
          <a href="../EastNewYorkS01-2023/ENYSR19">
            <h2> Watch {movie.name} Server 2</h2>
          </a>
        </button>
        <Rating />
        <a
          href={movie.link}
          className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 "
          target="_blank"
        >
          IMDb Rating: {movie.rating}
        </a>

        <ul
          className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-white"
          style={{ textShadow: "0px 0px 2px #000" }}
        >
          <li>Starring: {movie.starring.join(", ")}</li>
          <li>Year of release: {movie.yearRelease}</li>
          <li>Director: {movie.director}</li>
          <li>Country of origin: {movie.country}</li>
          <li>Genre: {movie.genre}</li>
          <h2>Synopsis :</h2>
          <h2
            className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-text-white"
            style={{ textShadow: "0px 0px 2px #000" }}
          >
            {movie.synopsis}
          </h2>
        </ul>

        <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">
          <button
            className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 "
            onClick={togglePopup}
          >
            <h2>Watch Offical Trailer</h2>
          </button>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup ">
              <button className="close-button" onClick={togglePopup}>
                <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                  {" "}
                  Close
                </h2>
              </button>
              <h2 className="text-2xl font-bold">
                Offical Trailer {movie.name}{" "}
              </h2>
              <video
                src={movie["movie.trailer"]}
                autoPlay
                controls
                loop
                width="840"
                height="360"
              />
            </div>
          </div>
        )}

        <style jsx>{`
          .popup-overlay {
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .popup {
            width: 800px;
            background-color: gray;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            animation: slide-down 0.5s ease;
          }

          @keyframes slide-down {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}</style>
        <img
          src={movie.banner}
          alt={`Banner for ${movie.title}`}
          loading="lazy"
          className=" rounded-3xl  mx-auto my-10 "
        />
        <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">
          <h3 className="text-3xl font-bold leading-normal mt-0 mb-2 text-blue-600">
            Link 1 {movie.name}
          </h3>
          <a href={movie.down1link19} target="_blank">
            <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
              Download Episode 19
            </button>
          </a>

          <Max />

          <Link href="../../HollywoodAds">
            <buton className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
              Back To Hollywood Section
            </buton>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://gomovies.netlify.app/movies.json");

  const data = await res.json();
  const selectedMovie = data.find((movie) => movie.id === "INDEX31");
  return {
    props: {
      movie: selectedMovie,
    },
  };
}

export default EastNewYorkP16;
