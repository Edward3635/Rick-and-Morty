import { create } from 'zustand';


interface ICharacterState {
	info: {
		count: number | null
		next: string | null
		pages: number | null
		prev: string | null
		currentPage: number;
	},
	results: ICharacter[],
	favourites: number[],
	updateCurrentPage: (page: number) => void;
	setCharactersData: (data: { info: IInfo, results: ICharacter[] }) => void;
	setFavouriteCharacter: (id: number) => void;
	removeFavouriteCharacter: (id: number) => void;
};


export const useCharactersStore = create<ICharacterState>((set) => ({
	info: {
		count: null,
		next: null,
		pages: null,
		prev: null,
		currentPage: 1
	},
	results: [],
	favourites: [],
	updateCurrentPage: (currentPage) => set((state) => ({ info: { ...state.info, currentPage } })),
	setCharactersData: (data) =>
		set((state) => ({
			info: {
				...state.info,
				count: data.info.count,
				next: data.info.next,
				pages: data.info.pages,
				prev: data.info.prev,
			},
			results: data.results,
		})),
	setFavouriteCharacter: (id) => {
		set((state) => ({
			favourites: [...state.favourites, id]
		}))
	},
	removeFavouriteCharacter: (id) => {
		set((state) => ({
			favourites: state.favourites.filter(favId => favId !== id)
		}))
	}

}));
