import React from 'react';

interface RadioProps {
    id: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({ id, name, value, checked, onChange }) => {
    return (
        <div className="flex items-center">
            <input 
                id={id}
                name={name}
                type="radio"
                value={value}
                checked={checked}
                onChange={onChange}
                className="  appearance-none block p-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-2 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            <label htmlFor={id} className="ml-2 text-sm font-medium text-black dark:text-black">{value}</label>
        </div>
    );
};

export default Radio;
