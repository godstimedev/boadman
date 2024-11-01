import { useEffect, useRef } from 'react';
import { FileGroupType } from '../types';
import { StyledFileGroup } from './styles';
import { useNotify } from '@/hooks';

const FileGroup = (props: FileGroupType) => {
	const {
		value = {
			name: '',
			file: null,
		},
		onChange,
		// helpTextOne = 'Browse From your Device',
		// helpTextTwo = '',
		children,
		name,
		// label,
		// moreInfo,
		// icon: Icon = FileDefault,
		required,
		maxSize,
		deleteFile,
		...rest
	} = props;

	const fileRef = useRef<HTMLInputElement>(null);
	const notify = useNotify();

	// Function to remove file
	const removeFile = () => {
		if (fileRef.current) fileRef.current.value = '';
		onChange(null, name, { name: '', file: null });
	};

	// Trigger file removal when `removeTrigger` changes
	useEffect(() => {
		if (deleteFile) {
			removeFile();
		}
	}, [deleteFile]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const oneMB = 1048576;
		const selectedFile = event.target.files?.[0];

		if (maxSize && selectedFile && selectedFile.size > oneMB * maxSize) {
			notify({
				message: 'Max file size exceeded',
				status: 'error',
				variant: 'minor',
				toastOptions: { toastId: 'file_size', position: 'bottom-center' },
			});
			event.target.value = '';
		} else {
			onChange(null, name, {
				name: event.target.files?.[0].name || '',
				file: event.target.files?.[0] || null,
			});
		}
	};

	return (
		<StyledFileGroup>
			<div className="file-group">
				<input
					type="file"
					name={name}
					ref={fileRef}
					onChange={handleChange}
					required={!value.name && required}
					{...rest}
				/>

				<div tabIndex={-1} onClick={() => fileRef.current?.click()}>
					{children}
				</div>

				{value.name && (
					<button className="remove" type="button" onClick={() => removeFile()}>
						X
					</button>
				)}
			</div>
		</StyledFileGroup>
	);
};
export default FileGroup;
