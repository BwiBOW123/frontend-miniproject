"use client"
import React, { ChangeEvent } from 'react';

interface Props {
    onFileChange?: (file: File | null) => void;
}

const UploadFile: React.FC<Props> = ({ onFileChange }) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (onFileChange) {
                onFileChange(file);
            }
        }
    };

    return (
        <div className="p-4 bg-black">
            <label
                htmlFor="file-upload"
                className="w-64 flex flex-col items-center px-4 py-3 bg-gray-800 text-white rounded-lg shadow-lg tracking-wide uppercase border border-gray-700 cursor-pointer hover:bg-gray-700 hover:text-gray-300"
            >
                <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M9 10v8H5l3-4-3-4h4V2h2v8zm3-8h4l-3 4 3 4h-4v8H9V0h3z"
                    />
                </svg>
                <span className="mt-2 text-base leading-normal">
                    Select a file
                </span>
                <input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
};

export default UploadFile;
