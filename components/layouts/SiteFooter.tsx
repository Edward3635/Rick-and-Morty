import Link from 'next/link'
import React from 'react'
import logo from '../../img/footerLogo.png';
import Image from 'next/image';
import git from '../../img/git.png';


export default function SiteFooter() {
	return (
		<div className="flex px-10 bg-gray-900 pt-3 pb-3">
			<div className='  pr-16 border-r border-gray-400'>
				<Link href="/" className="text-blue-500 hover:underline hover:text-blue-600">
					<Image
						src={logo}
						alt="Logo" />
				</Link>
			</div>
			<div className=' ml-16 flex items-center justify-between flex-grow'>
				<ul className='flex gap-20'>
					<Link href='/' className='text-foreground text-2xl font-bold hover:scale-110 hover:text-positive transition duration-300 ease-in-out'>Home</Link>
					<Link href='/characters'
						className='text-foreground text-2xl font-bold hover:scale-110 hover:text-positive transition duration-300 ease-in-out'>Favourites</Link>
					<Link href='/contact' className='text-foreground text-2xl font-bold hover:scale-110 hover:text-positive transition duration-300 ease-in-out'>Contact</Link>
				</ul>
				<div>
					<h4 className='text-foreground text-xl font-normal hover:scale-110 hover:text-positive mb-2 transition duration-300 ease-in-out'>Developers GitHub</h4>
					<div className='flex gap-10 justify-center'>
						<a href="https://github.com/Edward3635?tab=repositories" target='_blank'>
							<Image className='hover:cursor-pointer max-w-[23px] h-[23px]' src={git} alt="Git"></Image>
						</a>
						<a href="https://github.com/Edward3635?tab=repositories" target='_blank'>
							<Image className='hover:cursor-pointer max-w-[23px] h-[23px]' src={git} alt="Git" ></Image>
						</a>
						<a href="https://github.com/Edward3635?tab=repositories" target='_blank'><Image className='hover:cursor-pointer max-w-[23px] h-[23px]' src={git} alt="Git" ></Image>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
