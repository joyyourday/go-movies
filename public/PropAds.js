import React from 'react'
import Script from 'next/script';

const PropAds = () => {
  return (
    <div>
            <Script
        src="../public/ads.js"
        strategy="lazyOnload"
        
      />
        
      
    </div>
  )
}

export default PropAds