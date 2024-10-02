type TableData = {
	rowId?: string | number;
	rowData: (string | number | JSX.Element)[];
	onRowClick?: () => void;
};

export type TablePropType = {
	maxPage: number;
	itemsPerPageOptions?: number[];
	loading?: boolean;
	columnNames: (JSX.Element | string)[];
	tableData?: TableData[];
	tableNumber?: number;
	tableFooter?: boolean;
};
