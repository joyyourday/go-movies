import React, { useEffect } from 'react'

const Translate = () => {


  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
}, [])

const googleTranslateElementInit = () => {

  new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages : "af,ach,ak,am,ar,az,be,bem,bg,bh,bn,br,bs,ca,chr,ckb,co,crs,cs,cy,da,de,ee,el,en,eo,es,es-419,et,eu,fa,fi, fo,fr,fy,ga,gaa,gd,gl,gn,gu,ha,haw,hi,hr,ht,hu,hy,ia, id,ig,is,it,iw,ja,jw,ka,kg,kk,km,kn,ko,kri,ku,ky,la, lg,ln,lo,loz,lt,lua,lv,mfe,mg,mi,mk,ml,mn,mo,mr,ms,mt, ne,nl,nn,no,nso,ny,nyn,oc,om,or,pa,pcm,pl,ps,pt-BR, pt-PT,qu,rm,rn,ro,ru,rw,sd,sh,si,sk,sl,sn,so,sq,sr, sr-ME,st,su,sv,sw,ta,te,tg,th,ti,tk,tl,tn,to,tr,tt, tum,tw,ug,uk,ur,uz,vi,wo,xh,yi,yo,zh-CN,zh-TW,zu", // include this for selected languages
      layout: google.translate.TranslateElement.InlineLayout.VERTICAL
  },
  'google_translate_element');

}
  return (
  
    <div class="flex items-center justify-center">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
    <p >Please Select your Language</p>
      <div  id="google_translate_element" > </div> </button>
      </div>
 
  )
}

export default Translate;