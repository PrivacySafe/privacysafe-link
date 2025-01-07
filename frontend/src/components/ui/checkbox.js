import React from 'react';

const CheckboxWithLabel = ({ label, checked, onChange, color }) => {
    return (
        <label className="flex items-center mb-2">
            <input
                type="checkbox"
                className={`mr-2 w-5 h-5 appearance-none border-2 rounded-md ${checked ? color : 'bg-[#102136] border-[#8B97A4]'}`}
                checked={checked}
                onChange={onChange}
            />
            {label}
        </label>
    );
};

export default CheckboxWithLabel;
