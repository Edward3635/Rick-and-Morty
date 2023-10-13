import { useCharactersStore } from '@/app/store/store';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type CharacterProps = {
	id: number;
	name: string;
	image: string;
	location: ICharacterOriginOrLocation;
	handler?: (id: number) => void; //?
};


export default function CharacterCard({ id, name, image, location, handler }: CharacterProps) {
	const setFavouriteCharacter = useCharactersStore(state => state.setFavouriteCharacter);
	const removeFavouriteCharacter = useCharactersStore(state => state.removeFavouriteCharacter);
	const getFavouriteCharacter = useCharactersStore(state => state.favourites);

	const addRemoveFavourite = (e: React.MouseEvent<HTMLDivElement>): void => {
		e.preventDefault();
		if (handler) handler(id);
		getFavouriteCharacter.includes(id) ?
			removeFavouriteCharacter(id) : setFavouriteCharacter(id);

	};


	return (
		<div key={id}
			className=' max-w-[200px] rounded-lg border-b-8 border-t-8 border-black  hover:border-red-600 transition duration-300 ease-in-out hover:scale-105'
			style={{ backgroundColor: "#87F54E" }}>
			<Link href={`/characters/${id}`}>
				<div className='relative'>
					<Image
						className='rounded-t mb-3'
						src={image}
						width='300'
						height='400'
						alt="Avatar"
					/>
					<div className='ml-auto mr-1 mt-1 absolute inset-0 flex items-center justify-center w-12 rounded-full h-12 bg-gray-900 hover:border-2'
						onClick={(e) => addRemoveFavourite(e)}>

						<svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 48 47" fill="none">
							<path d="M23.5185 0L28.7988 16.2381H45.886L32.0621 26.2738L37.3424 42.5119L23.5185 32.4762L9.69468 42.5119L14.9749 26.2738L1.15108 16.2381H18.2383L23.5185 0Z"
								fill={`${getFavouriteCharacter.includes(id) ? '#FF0000' : '#87F54E'}`} />
						</svg>
					</div>
				</div>
				<div className='pl-4'>
					<div className='text-gray-700 text-lg font-bold'>Name:</div>
					<div className='text-gray-700 text-lg'>{name}</div>
					<div className='text-gray-700 font-bold text-lg'>Planet:</div>
					<div className='text-gray-700 mb-4'>{location.name}</div>
				</div>
			</Link>
		</div>
	)
}
