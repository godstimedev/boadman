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
		accept,
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

	const validateFileSize = (file: File) => {
		const oneMB = 1048576;
		return maxSize && file.size > oneMB * maxSize;
	};

	const validateFileDimensions = (file: File) =>
		new Promise((resolve) => {
			const img = new Image();
			img.src = URL.createObjectURL(file);
			img.onload = () => {
				const isValid = img.width >= 100 && img.height >= 100;
				URL.revokeObjectURL(img.src); // Clean up
				resolve(isValid);
			};
		});

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];

		if (selectedFile) {
			if (validateFileSize(selectedFile)) {
				notify({
					message: 'Max file size exceeded',
					status: 'error',
					variant: 'minor',
					toastOptions: { toastId: 'file_size', position: 'bottom-center' },
				});
				event.target.value = '';
				return;
			}

			const isValidDimensions = await validateFileDimensions(selectedFile);
			if (!isValidDimensions) {
				notify({
					message: 'Image must be at least 100 x 100 pixels',
					status: 'error',
					variant: 'minor',
					toastOptions: { toastId: 'file_dimensions', position: 'bottom-center' },
				});
				event.target.value = '';
				return;
			}

			onChange(null, name, {
				name: selectedFile.name,
				file: selectedFile,
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
					accept={accept}
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
