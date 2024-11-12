import { useEffect, useRef } from 'react';
import { StyledModal } from './styles';
import { ModalClose } from '@/assets/svgs';
import { ModalProps } from './Modal.types';

const Modal = (props: ModalProps) => {
	const { children, isModalOpen, setIsModalOpen } = props;

	const modalRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				setIsModalOpen(false);
			}
		};

		if (isModalOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isModalOpen, setIsModalOpen]);

	return (
		<StyledModal $isOpen={isModalOpen ? true : false}>
			<div ref={modalRef} className="modal-con">
				<button type="button" className="close-btn" onClick={() => setIsModalOpen(false)}>
					{' '}
					<ModalClose />{' '}
				</button>
				{children}
			</div>
		</StyledModal>
	);
};

export default Modal;
