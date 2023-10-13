interface ICharacter {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: ICharacterOriginOrLocation;
	location: ICharacterOriginOrLocation;
	image: string;
	episode: string[];
	url: string;
	created: string;

};
interface ICharacterOriginOrLocation {
	name: string;
	url: string;
};
