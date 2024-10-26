type ChartDataPoint = {
	month: string; // or other relevant field names based on your data structure
	coins: number; // or the numeric type you expect
};

export type PropsType = {
	chartData: Array<ChartDataPoint>;
	dataKey: string;
	lineColor: string;
	name: string;
};
