'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CharacterCard from '@/components/common/characterCard';
import { useCharactersStore } from '../store/store';
import Pagination from '@/components/common/pagination';
import { useEffect } from 'react';


async function getCharactersData(page: number): Promise<{ info: IInfo; results: ICharacter[] }> {

	try {
		const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
		return res.data
	} catch (error) {
		throw new Error('Failed to fetch data')
	}
};

export default function Home({ searchParams }: { searchParams: { page: number } }) {

	const currentPage: number = useCharactersStore(state => state.info.currentPage);
	const updateCurrentPage = useCharactersStore(state => state.updateCurrentPage);
	const pageSize = useCharactersStore(state => state.info.pages);

	
	const { data } = useQuery({
		queryKey: ['characters', searchParams.page],
		queryFn: () => getCharactersData(currentPage)
	});
	const setCharactersData = useCharactersStore(state => state.setCharactersData);

	useEffect(() => {
		if (data) {
			setCharactersData({
				info: data.info,
				results: data.results,
			});
		}
	}, [data, setCharactersData]);


	const pages: number[] = Array.from({ length: pageSize || 1 }, (_, index) => index + 1); //fill array 1 to pagesCount

	const onPageChanged = (pageNumber: number): void => {
		if (pageNumber !== currentPage) { 
			updateCurrentPage(pageNumber)
		}
	};
	const slicedPages = (currentPage: number) => {
		const currentPageFirst = ((currentPage - 3) <= 0) ? 0 : currentPage - 3,
			currentPageLast = ((currentPage - 3) <= 0) ? 5 : currentPage + 2;
		return pages.slice(currentPageFirst, currentPageLast);
	};

	return (
		<div>
			<h1 className='text-center underline text-shadow font-bold text-5xl mb-16'
				style={{ color: '#87F54E' }}>Choose Your Favourite Card</h1>
			<div className='grid grid-cols-4 gap-12 m-auto w-max justify-center mb-12'>
				{data?.results.map((character) => <CharacterCard key={character.id} id={character.id} name={character.name}
					image={character.image} location={character.location}></CharacterCard>)}
			</div>
			<Pagination slicedPages={slicedPages} currentPage={currentPage} pageSize={pageSize} onPageChanged={onPageChanged} />
		</div >
	)
}

