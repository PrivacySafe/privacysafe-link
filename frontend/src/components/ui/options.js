import React from 'react';
import CheckboxWithLabel from './checkbox';
import InputField from './inputfield';

const OptionsSection = ({ options, inputs, handleCheckboxChange, handleInputChange }) => {
    return (
        <div className="flex flex-col items-start mb-6">
            <CheckboxWithLabel
                label="Custom Expiration (in Seconds)"
                checked={options.customExpiration}
                onChange={() => handleCheckboxChange('customExpiration')}
                color="bg-orange-600 border-orange-600"
            />
            {options.customExpiration && (
                <InputField
                    type="number"
                    name="expirationTime"
                    placeholder="Number of Seconds"
                    value={inputs.expirationTime}
                    onChange={handleInputChange}
                    min="30"
                    max="604800"
                    defaultValue=""
                />
            )}

            <CheckboxWithLabel
                label="Custom Views Limit"
                checked={options.customViewsLimit}
                onChange={() => handleCheckboxChange('customViewsLimit')}
                color="bg-orange-600 border-orange-600"
            />
            {options.customViewsLimit && (
                <InputField
                    type="number"
                    name="viewsLimit"
                    placeholder="Views Limit"
                    value={inputs.viewsLimit}
                    onChange={handleInputChange}
                    min="1"
                    max="1000"
                    defaultValue=""
                />
            )}
        </div>
    );
};

export default OptionsSection;
