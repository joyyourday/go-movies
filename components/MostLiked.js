import { useState, useEffect } from "react";
import Head from "next/head";

function MostLiked() {
  const [showAd, setShowAd] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 1000); // Display ad after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      {showAd && !isClosed && (
        // Add your ad component here
        <>
           <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>


  <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
   
    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          
        <h2 className="text-blue-500 text-xl py-5  title-font mb-3 font-bold ">
Most Watch Movies & Tv Series.</h2>

<div
  id="carouselDarkVariant"
  className="carousel slide carousel-fade carousel-dark relative"
  data-bs-ride="carousel"
>
 
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
     <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="3"
      aria-label="Slide 1"
    ></button>
     <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="4"
      aria-label="Slide 1"
    ></button>

  </div>


  <div className="carousel-inner relative w-full cursor-pointer overflow-hidden">

<div className="carousel-item active relative float-left w-full">

  <img
    src="/pathan-2023.webp"
    className="block w-full"
    alt="Pathaan - 2023"
    layout="Responsive"
  />
 
</div>

<div className="carousel-item relative float-left w-full">

  <img
    src="/the-last-of-us-2023.webp"
    className="block w-full"
    alt="The Last of Us - 2023"
  />

</div>


<div className="carousel-item relative float-left w-full">

  <img
    src="/pamasahe-2022.webp"
    className="block w-full"
    alt="Pamasahe - 2022"
  />
  
</div>

<div className="carousel-item relative float-left w-full">

  <img
    src="/hunters-2023.webp"
    className="block w-full"
    alt="Hunters - 2023"
  />
  
</div>

<div className="carousel-item relative float-left w-full">

  <img
    src="/the-last-heist-2022.webp"
    className="block w-full"
    alt="The Last Heist - 2022"
  />
 
</div>
</div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:flex flex flex-col items-center justify-center sm:flex-row-reverse sm:px-6">
      {remainingTime > 0 && (
        <div>
          Ad will be skippable in {remainingTime} seconds...
        </div>
      )}
       {remainingTime <= 0 && (

      <button onClick={handleClose} type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-bold text-gray-700 shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Skip Ad</button>
       )}
      </div>
    </div>
  </div>
</div>
</div>
          
        </>
      )}
    </div>
  );
}

export default MostLiked;