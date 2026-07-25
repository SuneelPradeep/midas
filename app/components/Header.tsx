import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className=' py-4 flex justify-between align-center'>
      <div>
      <Link href='/'><Image alt='logo' src='/midas_transparent.png' width={150}
      height={150}/></Link>
      </div>

      <div className=' flex align-center justify-center gap-6  text-bold text-lg my-4 ml-4 me-10'>
        
         <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about-us">About Us</Link>
           
      </div>
    </nav>
  )
}

export default Header