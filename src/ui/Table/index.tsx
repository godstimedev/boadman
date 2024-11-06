import { useEffect, useState } from 'react';
import { StyledTable as Container } from './styles';
// import { InputCaretDown } from '../../assets/svgs';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { QUERY_STRINGS } from '../../constants';
import { useReplaceQueryKey } from '../../hooks';
import { TablePropType } from './Table.types';
import { NextArrow, PrevArrow } from '@/assets/svgs';

const Table = (props: TablePropType) => {
	const {
		maxPage,
		itemsPerPageOptions = [10, 15, 20],
		loading = false,
		columnNames,
		tableData,
		tableNumber = 1,
		tableFooter = true,
	} = props;

	const location = useLocation();
	const navigate = useNavigate();
	const replaceQueryKey = useReplaceQueryKey();

	const [searchParams] = useSearchParams();

	const ITEM_PER_PAGE_QUERY_KEY =
		tableNumber === 1
			? QUERY_STRINGS.items_per_page
			: `${QUERY_STRINGS.items_per_page}_${tableNumber}`;
	const PAGE_QUERY_KEY =
		tableNumber === 1 ? QUERY_STRINGS.page : `${QUERY_STRINGS.page}_${tableNumber}`;

	const currentPage = parseInt(searchParams.get(PAGE_QUERY_KEY) || '1');
	const currentItemPerPage = parseInt(
		searchParams.get(
			tableNumber === 1
				? QUERY_STRINGS.items_per_page
				: `${QUERY_STRINGS.items_per_page}_${tableNumber}`
		) || '10'
	);

	const [tempPageValue, setTempPageValue] = useState(currentPage.toString());

	useEffect(() => {
		// Get the page number from the search parameters, defaulting to '1' if not found
		const pageValue = searchParams.get(PAGE_QUERY_KEY) || '1';

		// Update tempPageValue only if it differs from the current value
		if (pageValue !== tempPageValue) {
			setTempPageValue(pageValue);
		}
		// setTempPageValue(searchParams.get(PAGE_QUERY_KEY) || '1');
	}, [location.search, PAGE_QUERY_KEY, searchParams]);

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
			{loading ? (
				<div className="loading-container">
					<div>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			) : null}

			<div className="table-container">
				<table>
					<thead>
						<tr>
							{columnNames.map((name, index) => (
								<th key={typeof name == 'string' ? name : name.key || index}>{name}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{tableData?.map(({ rowId, rowData, onRowClick }, rowIndex) => (
							<tr
								key={rowId || rowIndex}
								onClick={() => onRowClick && onRowClick()}
								style={{ cursor: onRowClick ? 'pointer' : 'initial' }}
							>
								{rowData.map((el, elIndex) => (
									<td key={elIndex}>{el}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{tableFooter && (
				<div className="table-footer">
					<div className="action-container">
						<button tabIndex={-1} disabled={currentPage === 1 || loading}>
							{currentPage === 1 || loading ? (
								<span>
									<PrevArrow />
								</span>
							) : (
								<Link
									to={
										location.pathname +
										replaceQueryKey({ newValue: currentPage - 1, queryKey: PAGE_QUERY_KEY })
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
						</div>

						<button tabIndex={-1} disabled={currentPage >= maxPage || loading}>
							{currentPage >= maxPage || loading ? (
								<span>
									<NextArrow />
								</span>
							) : (
								<Link
									to={
										location.pathname +
										replaceQueryKey({ newValue: currentPage + 1, queryKey: PAGE_QUERY_KEY })
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
				</div>
			)}
		</Container>
	);
};

export default Table;
