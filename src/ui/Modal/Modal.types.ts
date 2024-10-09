export type StyledModalProps = {
	$isOpen: boolean;
};

export type ModalProps = {
	children: React.ReactNode;
	isModalOpen: boolean;
	setIsModalOpen: (value: boolean) => void;
};
