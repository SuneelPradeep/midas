'use client'
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {

  const [open, setOpen] = useState(false)
  const toggleMenu = ()=>{
    setOpen((pre)=> !pre)
  }
  return (
    <nav className='relative py-4 px-6 flex justify-between align-center'>
      <div>
      <Link href='/'><Image alt='logo' src='/midas_transparent.png' width={150}
      height={150}/></Link>
      </div>

      <div className='hidden md:flex all-center gap-8  font-semibold text-2xl '>
        
         <Link href="/products">Products</Link>        
          <Link href="/about-us">About Us</Link>
          <Link href="/contact">Contact</Link>
           
      </div>

      <button className='md:hidden' onClick={toggleMenu}>
        {open ? <XMarkIcon className='w-8 h-8' /> : <Bars3Icon className='w-8 h-8' />}
      </button>

      {open && (
        <div className='absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50'>
          <div className='flex flex-col items-center py-6 gap-6 text-lg'>
             <Link href="/products" onClick={toggleMenu}>Products</Link>
          <Link href="/about-us" onClick={toggleMenu}>About Us</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
          </div>
      )}
    </nav>
  )
}

export default Header