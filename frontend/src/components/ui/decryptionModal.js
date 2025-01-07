import React from 'react';
import InputField from './inputfield';

const DecryptionModal = ({ showModal, decryptionError, decryptionKey, setDecryptionKey, handleDecrypt, handleCancel }) => {
    if (!showModal) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-[#2b2b2b] bg-opacity-70 backdrop-blur-sm overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="relative p-5 shadow-lg rounded-md bg-[#021327] w-full max-w-md mx-4 border-none">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-bold text-white">Password Required to Decrypt</h3>
                    <div className="mt-2 px-7 py-3">
                        {decryptionError && (
                            <p className="text-sm text-red-500 mb-5 break-all">{decryptionError}</p>
                        )}
                        <InputField
                            type="text"
                            name="decryptionKey"
                            placeholder="Enter Password"
                            value={decryptionKey}
                            onChange={(e) => setDecryptionKey(e.target.value)}
                        />
                    </div>
                    <div className="items-center px-4 py-3">
                        <button onClick={handleDecrypt}
                            className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600">
                            Decrypt
                        </button>
                        <button onClick={handleCancel}
                            className="px-4 py-2 mt-2 bg-orange-900 hover:bg-red-950 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-red-900">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DecryptionModal;
