import { Legend, LegendProps, Line, LineChart, ResponsiveContainer } from 'recharts';
import { PropsType } from './types';

const LineChartUi = (props: PropsType) => {
	const { chartData, dataKey, lineColor, name } = props;

	// Define custom LegendPayload type
	type CustomLegendPayload = {
		value: string;
		color?: string;
	};

	interface CustomLegendProps extends LegendProps {
		payload?: CustomLegendPayload[];
	}

	// Custom Legend Component with types
	const CustomLegend: React.FC<CustomLegendProps> = ({ payload }) => (
		<ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '12px' }}>
			{payload?.map((entry, index) => (
				<li key={`item-${index}`} style={{ marginBottom: 4 }}>
					{entry.value} {/* Only the text */}
				</li>
			))}
		</ul>
	);

	return (
		<ResponsiveContainer width="100%" height={90}>
			<LineChart
				accessibilityLayer
				data={chartData}
				margin={{
					left: 12,
					right: 12,
				}}
			>
				<Legend content={<CustomLegend />} verticalAlign="top" height={6} />
				<Line
					dataKey={dataKey}
					name={name}
					type="natural"
					stroke={lineColor}
					strokeWidth={2}
					dot={false}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default LineChartUi;
