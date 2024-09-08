type TableData = { rowId?: string | number; rowData: (string | number | JSX.Element)[]; onRowClick?: () => void };

export type TablePropType = {
	maxPage: number;
	itemsPerPageOptions?: number[];
	loading?: boolean;
	columnNames: string[];
	tableData?: TableData[];
	tableNumber?: number;
};
