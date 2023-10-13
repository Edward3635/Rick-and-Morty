'use client'
import SiteFooter from '@/components/layouts/SiteFooter'
import SiteHeader from '@/components/layouts/SiteHeader'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCharactersStore } from '../store/store';
import { useQuery } from '@tanstack/react-query';
import CharacterCard from '@/components/common/characterCard';

async function getFavouriteCharacters(arr: number[]): Promise<ICharacter[]> {
	try {
		const res = await axios.get(`https://rickandmortyapi.com/api/character/${arr}`);
		const characters = Array.isArray(res.data) ? res.data : [res.data];
		if (characters.length === 0) return [];
		return characters;
	} catch (error) {
		throw new Error('Failed to fetch data')
	}
}

export default function Page() {
	const favouritesList = useCharactersStore(state => state.favourites);
	const [cards, setCards] = useState<ICharacter[]>([]);
	const { data, isError, isLoading } = useQuery({
		queryKey: ['favouriteCharacters'],
		queryFn: () => getFavouriteCharacters(favouritesList)
	});

	useEffect(() => { if (data) setCards(data) }, [data]);

	const handleClick = (id: number): void => setCards((prevCards) => prevCards.filter((card) => card.id !== id));
	;

	if (isLoading) return <div>Loading...</div>

	if (isError) throw new Error('Oops!');

	return (
		<div className='flex flex-col h-screen justify-between'>
			<SiteHeader />
			{cards[0]?.id &&
				<div>
					<h1 className='text-center underline text-shadow font-bold text-5xl mb-16'
						style={{ color: '#87F54E' }}>Your Favourite Cards</h1>
					<div className='grid grid-cols-4 gap-12 m-auto w-max justify-center mb-12'>
						{cards && cards.map((character) => <CharacterCard key={character.id} id={character.id} name={character.name}
							image={character.image} handler={handleClick} location={character.location}></CharacterCard>)}
					</div>
				</div>
			}
			{!cards[0]?.id &&
				<h1 className='text-center underline text-shadow font-bold text-5xl mb-16'
					style={{ color: '#87F54E' }}>You dont have favourite cards yet.</h1>}

			<SiteFooter />
		</div>
	)
}
