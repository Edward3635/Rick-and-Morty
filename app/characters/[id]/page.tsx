'use client'
import SiteFooter from '@/components/layouts/SiteFooter';
import SiteHeader from '@/components/layouts/SiteHeader';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image';
import React from 'react'
import { useCharactersStore } from '@/app/store/store';
import Link from 'next/link';

async function getCharacterById(id: number): Promise<ICharacter> {
	try {
		const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
		return res.data;
	} catch (error) {
		throw new Error('Failed to fetch data')
	}
}

export default function Page({ params }: { params: { id: number } }) {
	const setFavouriteCharacter = useCharactersStore(state => state.setFavouriteCharacter);
	const removeFavouriteCharacter = useCharactersStore(state => state.removeFavouriteCharacter);
	const getFavouriteCharacter = useCharactersStore(state => state.favourites);

	const characterCountMax: number = useCharactersStore(state => state.info.count ?? 0);
	const { data: character, isError, isLoading } = useQuery({
		queryKey: ['character', params.id],
		queryFn: () => getCharacterById(params.id)
	})

	if (isLoading) return <div>Loading...</div>

	if (isError) throw new Error('Oops!');
	const addToFavourite = (): void => {
		getFavouriteCharacter.includes(character.id) ?
			removeFavouriteCharacter(character.id) : setFavouriteCharacter(character.id);

	};



	return (
		<div>
			<SiteHeader />
			<div className='max-w-[fit-content] mx-auto flex items-center'>
				<Link href={`/characters/${character.id === 1 ? 1 : character.id - 1}`}>
					<svg xmlns="http://www.w3.org/2000/svg" width="70" height="132" viewBox="0 0 70 132" fill="none">
						<path d="M65.0488 4L4.00076 68.2963L65.0488 128" stroke="#87F54E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</Link>
				<div className='my-4 mx-8 bg-red-500 pb-2 rounded-lg'>
					<div className='relative'>
						<Image
							className='mb-3 rounded-t-lg'
							src={character.image}
							width='300'
							height='400'
							alt="Avatar"
						>
						</Image>
						<div className='ml-auto mr-1 mt-1 absolute inset-0 flex items-center justify-center w-12 rounded-full h-12 bg-gray-900 hover:border-2' onClick={addToFavourite}>

							<svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 48 47" fill="none">
								<path d="M23.5185 0L28.7988 16.2381H45.886L32.0621 26.2738L37.3424 42.5119L23.5185 32.4762L9.69468 42.5119L14.9749 26.2738L1.15108 16.2381H18.2383L23.5185 0Z"
									fill={`${getFavouriteCharacter.includes(character.id) ? '#FF0000' : '#87F54E'}`} />
							</svg>
						</div>
					</div>
					<div className='pl-4 text-orange-100 max-w-[300px]'>
						<div className='font-bold text-xl '>Name: {character.name}</div>
						<div className='font-bold text-xl'>Gender: {character.gender}</div>
						<div className='font-bold text-xl'>Location: {character.location.name}</div>
						<div className=' font-bold text-xl'>Status: {character.status}</div>
						<div className=' font-bold text-xl'>Species: {character.species}</div>
						<div className=' font-bold text-xl'>Origin: {character.origin.name}</div>
					</div>
				</div>
				<Link href={`/characters/${character.id === characterCountMax ? characterCountMax : character.id + 1}`}>
					<svg xmlns="http://www.w3.org/2000/svg" width="70" height="132" viewBox="0 0 70 132" fill="none">
						<path d="M4.95117 4L65.9992 68.2963L4.95117 128" stroke="#87F54E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</Link>
			</div>
			<SiteFooter />
		</div>

	)
}
