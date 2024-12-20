import { Table } from '@/ui';
import { Container } from './styles';
import { Agent1, Avatar11, Avatar2, Avatar4, Avatar6, Avatar7 } from '@/assets/images';

const Agents = () => {
	const tableData = [
		{
			rowId: 1,
			rowData: [
				<div className="player">
					<img src={Agent1} alt="/" className="w-4 h-4" />
					<div>
						<p className="font-medium text-sm">Sage </p>
						<span className=" text-sm">2314 matches</span>
					</div>
				</div>,
				'1234 hrs',

				'67%',
				'1.13.2',
				'180.4',
				'180.4',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 2,
			rowData: [
				<div className="player">
					<img src={Avatar2} alt="/" className="w-4 h-4" />
					<div>
						<p className="font-medium text-sm">Jett </p>
						<span className=" text-sm">2314 matches</span>
					</div>
				</div>,
				'1234 hrs',

				'67%',
				'1.13.2',
				'180.4',
				'180.4',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 3,
			rowData: [
				<div className="player">
					<img src={Avatar11} alt="/" className="w-4 h-4" />
					<div>
						<p className="font-medium text-sm">Sova </p>
						<span className=" text-sm">1814 matches</span>
					</div>
				</div>,
				'474 hrs',

				'73%',
				'1.05.4',
				'146.8',
				'146.8',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 4,
			rowData: [
				<div className="player">
					<img src={Avatar4} alt="/" className="w-4 h-4" />
					<div>
						<p className="font-medium text-sm">Renya </p>
						<span className=" text-sm">814 matches</span>
					</div>
				</div>,
				'234 hrs',

				'58%',
				'2.33.3',
				'127.2',
				'127.2',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 5,
			rowData: [
				<div className="player">
					<img src={Avatar7} alt="/" className="w-4 h-4" />
					<div>
						<p className="font-medium text-sm">Skye </p>
						<span className=" text-sm">814 matches</span>
					</div>
				</div>,
				'234 hrs',

				'58%',
				'2.33.3',
				'127.2',
				'127.2',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 6,
			rowData: [
				<div className="player">
					<img src={Avatar6} alt="/" className="w-4 h-4" />
					<div>
						<p className="font-medium text-sm">Raze </p>
						<span className=" text-sm">814 matches</span>
					</div>
				</div>,
				'234 hrs',

				'58%',
				'2.33.3',
				'127.2',
				'127.2',
			],
			onRowClick: () => console.log('clicked'),
		},
	];

	return (
		<Container>
			<Table
				maxPage={3}
				loading={false}
				columnNames={['Agent', 'Time played', 'Win%', 'KDA', 'ADR', 'ACS']}
				itemsPerPageOptions={[2, 4, 6]}
				tableData={tableData}
				tableFooter={true}
			/>
		</Container>
	);
};

export default Agents;
