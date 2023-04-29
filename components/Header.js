
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
<div>

<header className="text-blue-600 body-font ">
      <div className=" container mx-auto  flex flex-wrap p-5 font-bold flex-col md:flex-row items-center shadow-md">
        <a className="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0">
          <Image src='/logo.png' alt='Logo' width={400} height={60} />

          <span className="ml-3 text-xl"></span>

        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l text-2xl space-x-3 md:border-gray-400	flex flex-wrap items-center  justify-center">
        <Link href="/" className="mr-5 hover:text-gray-900  md:text-lg ">
        <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
       Home</button></Link>
          <Link href="../../Hollywood/hollywood" className="mr-5 hover:text-gray-900  md:text-lg ">
          <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            Hollywood</button></Link>
          <Link href="../../Bollywood/bollywood" className="mr-5 hover:text-gray-900  md:text-lg ">
          <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            Bollywood</button></Link>
          <Link href="../../Adult/adult" className="mr-5 hover:text-gray-900  md:text-lg ">
          <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            Adult </button></Link>
        
        </nav>

      </div>
    </header>
    </div>


  )
}
