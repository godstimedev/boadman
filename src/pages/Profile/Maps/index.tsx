import { Table } from '@/ui';
import { Container } from './styles';
import { MapAscent, MapBreeze, MapDrift, MapLotus, MapSplit, MapSunset } from '@/assets/images';

const Maps = () => {
	const tableData = [
		{
			rowId: 1,
			rowData: [
				<div className="player ">
					<img src={MapAscent} alt="/" className="" />
					<div>
						<p className="font-medium text-sm ">Ascent </p>
					</div>
				</div>,
				'346',
				'45',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 2,
			rowData: [
				<div className="player ">
					<img src={MapBreeze} alt="/" className="" />
					<div>
						<p className="font-medium text-sm ">Breeze </p>
					</div>
				</div>,
				'346',
				'45',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 3,
			rowData: [
				<div className="player ">
					<img src={MapSunset} alt="/" className="" />
					<div>
						<p className="font-medium text-sm ">Sunset </p>
					</div>
				</div>,
				'346',
				'45',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 4,
			rowData: [
				<div className="player ">
					<img src={MapSplit} alt="/" className="" />
					<div>
						<p className="font-medium text-sm ">Split </p>
					</div>
				</div>,
				'346',
				'45',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 5,
			rowData: [
				<div className="player ">
					<img src={MapDrift} alt="/" className="" />
					<div>
						<p className="font-medium text-sm ">Drift </p>
					</div>
				</div>,
				'346',
				'45',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 6,
			rowData: [
				<div className="player ">
					<img src={MapLotus} alt="/" className="" />
					<div>
						<p className="font-medium text-sm ">Lotus </p>
					</div>
				</div>,
				'346',
				'45',
			],
			onRowClick: () => console.log('clicked'),
		},
	];

	return (
		<Container>
			<Table
				maxPage={3}
				loading={false}
				columnNames={['Maps', 'Wins', 'Loses']}
				itemsPerPageOptions={[2, 4, 6]}
				tableData={tableData}
				tableFooter={true}
			/>
		</Container>
	);
};

export default Maps;
