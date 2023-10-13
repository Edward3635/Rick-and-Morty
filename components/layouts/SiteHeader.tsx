import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../img/Logo.png'

export default function SiteHeader() {
	return (
		<div className="px-10 flex justify-between items-center h-[80px] mt-3 mb-12 ">
			<Link href="/" className="text-blue-500 hover:underline hover:text-blue-600">
				<Image
					src={logo}
					alt="Logo" />
			</Link>
			<ul className='flex gap-20'>
				<Link href='/' className='text-foreground text-2xl font-bold hover:scale-110 hover:text-positive'>Home</Link>
				<Link href='/characters' className='text-foreground text-2xl font-bold hover:scale-110 hover:text-positive'>Favourites</Link>
				<Link href='/contact' className='text-foreground text-2xl font-bold hover:scale-110 hover:text-positive'>Contact</Link>
			</ul>

		</div>
	)
}
