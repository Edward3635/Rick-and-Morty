import React from 'react'
import { ButtonLink } from '../ui/button-link';

export default function Pagination({ slicedPages, currentPage, pageSize, onPageChanged }: IPaginationProps) {
	return (
		<div className='flex gap-1 justify-center mb-12'>

			<ButtonLink href={`/?page=${1}`} variant="danger" className='bg-green-500' size="large" disabled={currentPage === 1}
				onClick={() => onPageChanged(1)}>&lt;&lt;</ButtonLink>

			<ButtonLink href={`/?page=${currentPage - 1}`} variant="danger" className='bg-green-500' size="large"
				onClick={() => onPageChanged(currentPage - 1)} disabled={currentPage === 1}>Prev</ButtonLink>

			{slicedPages(currentPage).map((page: number) => (
				<ButtonLink key={page} href={`/?page=${page}`} variant="danger" disabled={page === currentPage}
					className={` bg-green-500 ${page === currentPage ? 'border-2 border-white' : ''}`} size="large"
					onClick={() => onPageChanged(page)}>{page}
				</ButtonLink>
			))}

			<ButtonLink href={`/?page=${currentPage + 1}`} variant="danger" className='bg-green-500' size="large"
				onClick={() => onPageChanged(currentPage + 1)} disabled={currentPage === 42}>Next</ButtonLink>

			<ButtonLink href={`/?page=${pageSize}`} variant="danger" className='bg-green-500' size="large"
				disabled={currentPage === 42}
				onClick={() => { if (pageSize !== null) { onPageChanged(pageSize) } }}>&gt;&gt;
			</ButtonLink>

		</div>

	)
}
