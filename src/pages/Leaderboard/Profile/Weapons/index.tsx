import { Table } from '@/ui';
import { Container } from './styles';
import { Sheriff, Sniper, Spectre, Vandal } from '@/assets/images';

const Weapons = () => {
	const tableData = [
		{
			rowId: 1,
			rowData: [
				<div className="player">
					<div className="w-[4rem]">
						<img src={Vandal} alt="/" />
					</div>
					<div>
						<p className="font-medium text-sm">Vandal </p>
						<span className=" text-sm">Rifle</span>
					</div>
				</div>,
				'346',

				'1234',
				'67%',
				'67%',
				'67%',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 2,
			rowData: [
				<div className="player">
					<div className="w-[4rem]">
						<img src={Sheriff} alt="/" />
					</div>
					<div>
						<p className="font-medium text-sm">Sheriff </p>
						<span className=" text-sm">Sidearm</span>
					</div>
				</div>,
				'346',

				'1234',
				'67%',
				'67%',
				'67%',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 3,
			rowData: [
				<div className="player">
					<div className="w-[4rem]">
						<img src={Sniper} alt="/" />
					</div>
					<div>
						<p className="font-medium text-sm">Sniper </p>
						<span className=" text-sm">Operator</span>
					</div>
				</div>,
				'346',

				'1234',
				'67%',
				'67%',
				'67%',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 4,
			rowData: [
				<div className="player">
					<div className="w-[4rem]">
						<img src={Spectre} alt="/" />
					</div>
					<div>
						<p className="font-medium text-sm">Spectre </p>
						<span className=" text-sm">SMGs</span>
					</div>
				</div>,
				'346',

				'1234',
				'67%',
				'67%',
				'67%',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 5,
			rowData: [
				<div className="player">
					<div className="w-[4rem]">
						<img src={Vandal} alt="/" />
					</div>
					<div>
						<p className="font-medium text-sm">Vandal </p>
						<span className=" text-sm">Rifle</span>
					</div>
				</div>,
				'346',

				'1234',
				'67%',
				'67%',
				'67%',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 5,
			rowData: [
				<div className="player">
					<div className="w-[4rem]">
						<img src={Spectre} alt="/" />
					</div>
					<div>
						<p className="font-medium text-sm">Vandal </p>
						<span className=" text-sm">Rifle</span>
					</div>
				</div>,
				'346',

				'1234',
				'67%',
				'67%',
				'67%',
			],
			onRowClick: () => console.log('clicked'),
		},
	];

	return (
		<Container>
			<Table
				maxPage={5}
				loading={false}
				columnNames={['Weapon', 'Games', 'Kils', 'Headshot%', 'Bodyshot%', 'Legshot %']}
				itemsPerPageOptions={[2, 4, 6]}
				tableData={tableData}
				tableFooter={true}
			/>
		</Container>
	);
};

export default Weapons;
