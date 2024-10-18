// import { Link } from 'react-router-dom';
// import { Container } from './styles'
// import { NextArrow, PrevArrow } from '@/assets/svgs';

// const Pagination = () => {
//   return (
//     <Container>
// 					<div className="action-container">
// 						<button tabIndex={-1} disabled={currentPage === 1 || loading}>
// 							{currentPage === 1 || loading ? (
// 								<span>
// 									<PrevArrow />
// 								</span>
// 							) : (
// 								<Link
// 									to={
// 										location.pathname +
// 										replaceQueryKey({ newValue: currentPage - 1, queryKey: PAGE_QUERY_KEY })
// 									}
// 								>
// 									<PrevArrow />
// 								</Link>
// 							)}
// 						</button>

// 						{/* <div>
// 						Page
// 						<div className="input-container">
// 							<input
// 								type="number"
// 								value={tempPageValue}
// 								min={1}
// 								max={maxPage || 1}
// 								disabled={loading}
// 								onChange={(event) => setTempPageValue(event.target.value || '')}
// 								onBlur={(event) => {
// 									let value = parseInt(event.target.value || '1');

// 									if (value <= 0) {
// 										value = 1;
// 									} else if (value > maxPage) {
// 										value = maxPage;
// 									}

// 									setTempPageValue(value.toString());

// 									if (value === currentPage) {
// 										return;
// 									}

// 									const searchQuery = replaceQueryKey({ newValue: value, queryKey: PAGE_QUERY_KEY });
// 									navigate(location.pathname + searchQuery);
// 								}}
// 							/>
// 							<span>{tempPageValue}</span>
// 						</div>
// 						of {maxPage}
// 					</div> */}

// 						<div className="page-numbers-container">
// 							{Array.from({ length: maxPage }, (_, index) => {
// 								const page = index + 1;
// 								return (
// 									<button>
// 										<Link
// 											key={page}
// 											to={location.pathname + replaceQueryKey({ newValue: page, queryKey: PAGE_QUERY_KEY })}
// 											className={page === currentPage ? 'active' : ''}
// 											onClick={() => setTempPageValue(page.toString())}
// 										>
// 											{page}
// 										</Link>
// 									</button>
// 								);
// 							})}
// 						</div>

// 						<button tabIndex={-1} disabled={currentPage >= maxPage || loading}>
// 							{currentPage >= maxPage || loading ? (
// 								<span>
// 									<NextArrow />
// 								</span>
// 							) : (
// 								<Link
// 									to={
// 										location.pathname +
// 										replaceQueryKey({ newValue: currentPage + 1, queryKey: PAGE_QUERY_KEY })
// 									}
// 								>
// 									<NextArrow />
// 								</Link>
// 							)}
// 						</button>
// 					</div>

// 					{/* <div>
// 					Show
// 					<div className="select-container" tabIndex={loading ? undefined : 0}>
// 						{currentItemPerPage}
// 						<InputCaretDown />

// 						<ul>
// 							{itemsPerPageOptions.map((item) => (
// 								<li
// 									key={item}
// 									onClick={(event) => {
// 										const maxPagePossibleForPreviousValue = Math.floor((maxPage * currentItemPerPage) / item);
// 										let searchQuery = '';

// 										if (currentPage > maxPagePossibleForPreviousValue) {
// 											searchQuery = replaceQueryKey({
// 												newValue: maxPagePossibleForPreviousValue,
// 												queryKey: PAGE_QUERY_KEY,
// 											});
// 										}

// 										searchQuery = replaceQueryKey({
// 											newValue: item,
// 											queryKey: ITEM_PER_PAGE_QUERY_KEY,
// 											searchQuery,
// 										});
// 										navigate(location.pathname + searchQuery);

// 										event.currentTarget.parentElement?.parentElement?.blur();
// 									}}
// 								>
// 									{item}
// 								</li>
// 							))}
// 						</ul>
// 					</div>
// 					Items per page
// 				</div> */}

//     </Container>
//   )
// }

// export default Pagination
