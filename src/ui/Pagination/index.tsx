import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Container } from './styles';
import { NextArrow, PrevArrow } from '@/assets/svgs';
import { useReplaceQueryKey } from '@/hooks';
import { useEffect, useState } from 'react';
import { QUERY_STRINGS } from '@/constants';

type PropsType = {
	maxPage: number;
	itemsPerPageOptions?: number[];
	loading?: boolean;
};

const Pagination = (props: PropsType) => {
	const { loading = false, maxPage, itemsPerPageOptions = [10, 15, 20] } = props;

	const [searchParams] = useSearchParams();
	const location = useLocation();
	const navigate = useNavigate();
	const replaceQueryKey = useReplaceQueryKey();

	const ITEM_PER_PAGE_QUERY_KEY = QUERY_STRINGS.items_per_page;
	const PAGE_QUERY_KEY = QUERY_STRINGS.page;

	const currentPage = parseInt(searchParams.get(PAGE_QUERY_KEY) || '1');
	const currentItemPerPage = parseInt(searchParams.get(QUERY_STRINGS.items_per_page) || '10');

	const [tempPageValue, setTempPageValue] = useState(currentPage.toString());

	useEffect(() => {
		// Get the page number from the search parameters, defaulting to '1' if not found
		const pageValue = searchParams.get(PAGE_QUERY_KEY) || '1';

		// Update tempPageValue only if it differs from the current value
		if (pageValue !== tempPageValue) {
			setTempPageValue(pageValue);
		}
		// setTempPageValue(searchParams.get(PAGE_QUERY_KEY) || '1');
	}, [location.search, PAGE_QUERY_KEY, searchParams, tempPageValue]);

	useEffect(() => {
		let validPage = currentPage;
		let shouldReplaceUrl = false;

		if (Number.isNaN(currentItemPerPage) || !itemsPerPageOptions.includes(currentItemPerPage)) {
			const searchQuery = replaceQueryKey({
				newValue: itemsPerPageOptions.includes(10) ? 10 : itemsPerPageOptions[0],
				queryKey: ITEM_PER_PAGE_QUERY_KEY,
			});
			navigate(location.pathname + searchQuery, { replace: true });
		}

		if (Number.isNaN(validPage)) {
			const searchQuery = replaceQueryKey({ newValue: 1, queryKey: PAGE_QUERY_KEY });
			navigate(location.pathname + searchQuery, { replace: true });
		} else if (currentPage <= 0) {
			validPage = 1;
			shouldReplaceUrl = true;
		} else if (currentPage > maxPage && maxPage !== 0 && !loading) {
			validPage = maxPage;
			shouldReplaceUrl = true;
		}

		if (shouldReplaceUrl) {
			const searchQuery = replaceQueryKey({ newValue: validPage, queryKey: PAGE_QUERY_KEY });
			navigate(location.pathname + searchQuery, { replace: true });
		}
	}, [
		currentItemPerPage,
		itemsPerPageOptions,
		currentPage,
		maxPage,
		loading,
		replaceQueryKey,
		navigate,
		location.pathname,
		searchParams,
		ITEM_PER_PAGE_QUERY_KEY,
		PAGE_QUERY_KEY,
	]);

	return (
		<Container>
			<div className="action-container">
				<button tabIndex={-1} disabled={currentPage === 1 || loading}>
					{currentPage === 1 || loading ? (
						<span>
							<PrevArrow />
						</span>
					) : (
						<Link
							to={
								location.pathname + replaceQueryKey({ newValue: currentPage - 1, queryKey: PAGE_QUERY_KEY })
							}
						>
							<PrevArrow />
						</Link>
					)}
				</button>

				{/* <div>
					Page
					<div className="input-container">
						<input
							type="number"
							value={tempPageValue}
							min={1}
							max={maxPage || 1}
							disabled={loading}
							onChange={(event) => setTempPageValue(event.target.value || '')}
							onBlur={(event) => {
								let value = parseInt(event.target.value || '1');

								if (value <= 0) {
									value = 1;
								} else if (value > maxPage) {
									value = maxPage;
								}

								setTempPageValue(value.toString());

								if (value === currentPage) {
									return;
								}

								const searchQuery = replaceQueryKey({ newValue: value, queryKey: PAGE_QUERY_KEY });
								navigate(location.pathname + searchQuery);
							}}
						/>
						<span>{tempPageValue}</span>
					</div>
					of {maxPage}
				</div> */}
				{/* 
				<div className="page-numbers-container">
					{Array.from({ length: maxPage }, (_, index) => {
						const page = index + 1;
						return (
							<button>
								<Link
									key={page}
									to={location.pathname + replaceQueryKey({ newValue: page, queryKey: PAGE_QUERY_KEY })}
									className={page === currentPage ? 'active' : ''}
									onClick={() => setTempPageValue(page.toString())}
								>
									{page}
								</Link>
							</button>
						);
					})}
				</div> */}

				<div className="page-numbers-container">
					{Array.from({ length: maxPage }, (_, index) => {
						const page = index + 1;
						const isDesktop = window.innerWidth >= 500;

						// Desktop view: show first, last, and pages around the current page with ellipses if necessary
						if (isDesktop) {
							const isStartOrEndPage = page === 1 || page === maxPage;
							const isNearCurrentPage = page >= currentPage - 1 && page <= currentPage + 1;
							const shouldDisplayEllipsisBefore = page === 2 && currentPage > 4;
							const shouldDisplayEllipsisAfter = page === maxPage - 1 && currentPage < maxPage - 3;

							if (isStartOrEndPage || isNearCurrentPage) {
								return (
									<button key={page}>
										<Link
											to={location.pathname + replaceQueryKey({ newValue: page, queryKey: PAGE_QUERY_KEY })}
											className={page === currentPage ? 'active' : ''}
											onClick={() => setTempPageValue(page.toString())}
										>
											{page}
										</Link>
									</button>
								);
							}

							if (shouldDisplayEllipsisBefore) {
								return (
									<span key="left-ellipsis" className="ellipsis">
										...
									</span>
								);
							}

							if (shouldDisplayEllipsisAfter) {
								return (
									<span key="right-ellipsis" className="ellipsis">
										...
									</span>
								);
							}

							return null;
						}

						// Mobile view: show only the first page, last page, and current page
						const isStartOrEndPage = page === 1 || page === maxPage;
						const isCurrentPage = page === currentPage;

						if (isStartOrEndPage || isCurrentPage) {
							return (
								<button key={page}>
									<Link
										to={location.pathname + replaceQueryKey({ newValue: page, queryKey: PAGE_QUERY_KEY })}
										className={page === currentPage ? 'active' : ''}
										onClick={() => setTempPageValue(page.toString())}
									>
										{page}
									</Link>
								</button>
							);
						}

						// Show ellipsis before the current page if there are pages in between
						if (page === 2 && currentPage > 3) {
							return (
								<span key="left-ellipsis" className="ellipsis">
									...
								</span>
							);
						}

						// Show ellipsis after the current page if there are pages in between
						if (page === maxPage - 1 && currentPage < maxPage - 2) {
							return (
								<span key="right-ellipsis" className="ellipsis">
									...
								</span>
							);
						}
						// Return null for pages that are neither in the range around `currentPage`
						// nor part of the start/end groups, preventing unnecessary rendering.
						return null;
					})}
				</div>

				<button tabIndex={-1} disabled={currentPage >= maxPage || loading}>
					{currentPage >= maxPage || loading ? (
						<span>
							<NextArrow />
						</span>
					) : (
						<Link
							to={
								location.pathname + replaceQueryKey({ newValue: currentPage + 1, queryKey: PAGE_QUERY_KEY })
							}
						>
							<NextArrow />
						</Link>
					)}
				</button>
			</div>

			{/* <div>
				Show
				<div className="select-container" tabIndex={loading ? undefined : 0}>
					{currentItemPerPage}
					<InputCaretDown />

					<ul>
						{itemsPerPageOptions.map((item) => (
							<li
								key={item}
								onClick={(event) => {
									const maxPagePossibleForPreviousValue = Math.floor((maxPage * currentItemPerPage) / item);
									let searchQuery = '';

									if (currentPage > maxPagePossibleForPreviousValue) {
										searchQuery = replaceQueryKey({
											newValue: maxPagePossibleForPreviousValue,
											queryKey: PAGE_QUERY_KEY,
										});
									}

									searchQuery = replaceQueryKey({
										newValue: item,
										queryKey: ITEM_PER_PAGE_QUERY_KEY,
										searchQuery,
									});
									navigate(location.pathname + searchQuery);

									event.currentTarget.parentElement?.parentElement?.blur();
								}}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
				Items per page
			</div> */}
		</Container>
	);
};

export default Pagination;
