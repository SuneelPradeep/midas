'use client'
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { navItems } from "../utils/utils";


const Header = () => {

  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen((pre) => !pre)
  }
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleDropdown = (title: string | null) => {
    setExpanded(expanded === title ? null : title);
  };
  return (
    <nav className='relative py-4 px-6 flex justify-between align-center'>
      <div>
        <Link href='/'><Image alt='logo' src='/midas_transparent.png' width={150}
          height={150} /></Link>
      </div>

      {/* <div className='hidden md:flex all-center gap-8  font-semibold text-2xl '>
        
         <Link href="/products">Who We Are</Link>        
          <Link href="/about-us">What We Do</Link>
          <Link href="/contact">Investors</Link>


           
      </div> */}
      <div className="hidden md:flex items-center gap-8 font-semibold">

        {navItems?.map((item) => (
          <div
            key={item.title}
            className="relative group"
          >
            {!item?.href ? <button
              className="flex items-center gap-1 text-lg hover:logo-color transition"
            >
              {item.title}

              {item?.hasChildren && <ChevronDownIcon className="w-4 h-4 transition group-hover:rotate-180" />}
            </button> :
              <Link className='text-lg hover:logo-color transition' href={item?.href || ''} > {item?.title} </Link>}

            {item?.links &&
              <div
                className="
          invisible
          opacity-0
          translate-y-2
          group-hover:visible
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all
          duration-300
          absolute
          left-0
          mt-3
          w-64
          rounded-xl
          bg-gray-100 bg-blend-saturation
          shadow-2xl
          border
          border-gray-200
          z-50
        "
              >
                {item?.links?.map((link) => (
                  <Link
                    key={link?.name + '111'}
                    href={link.href}
                    className="block px-5 py-3 hover:bg-[#27748E] hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            }
            {/* {item?.href &&<Link
            
            href={item?.href || ''}
            className="block px-5 py-3 hover:bg-[#27748E] hover:text-white transition"
          >
            {item?.title}
          </Link>} */}
          </div>
        ))}


      </div>

      <button className='md:hidden' onClick={toggleMenu}>
        {open ? <XMarkIcon className='w-8 h-8' /> : <Bars3Icon className='w-8 h-8' />}
      </button>




      {open && (
        <div className="absolute top-full left-0 w-full bg-black text-white shadow-xl md:hidden z-50">

          {navItems.map((item) => (

            <div
              key={item.title}
              className="border-b"
            >

              {!item?.href ?
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="w-full flex justify-between items-center p-4"
                >
                  {item.title}

                  {item?.hasChildren && <ChevronDownIcon
                    className={`w-5 h-5 transition ${expanded === item.title ? "rotate-180" : ""
                      }`}
                  />}
                </button> : <button className='p-4 w-full flex items-start text-left'><Link href={item?.href}>{item?.title}</Link></button>}

              {expanded === item.title && (

                <div className="bg-gray-50">

                  {item?.links && item.links?.map((link) => (

                    <Link
                      key={link?.name + '111'}
                      href={link.href}
                      onClick={() => {
                        setOpen(false);
                        setExpanded(null);
                      }}
                      className="block py-3 pl-8 hover:bg-[#27748E] hover:text-white transition"
                    >
                      {link.name}
                    </Link>

                  ))}

                </div>

              )}

            </div>

          ))}

        </div>
      )}
    </nav>
  )
}

export default Header