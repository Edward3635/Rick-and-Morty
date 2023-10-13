interface IPaginationProps {
	slicedPages: (currentPage: number) => number[];
	currentPage: number;
	pageSize: number | null;
	onPageChanged: (id: number) => void;
}