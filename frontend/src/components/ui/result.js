import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const ResultComponent = ({ noteLink, privateKey, customPassword, onBack }) => {
    const copiedLink = false;
    const copiedPass = false;
    const copiedLinkPass = false;
    
    const copyLinkToClipboard = () => {
        const textToCopy = customPassword ? noteLink : `${noteLink}`;
        navigator.clipboard.writeText(textToCopy)
        //const copiedLink = true;
        //setTimeout(() => copiedLink(false), 1500); // Reset after 1.5 seconds
    };
    
    const copyPassToClipboard = () => {
        const textToCopy = customPassword ? noteLink : `${privateKey}`;
        navigator.clipboard.writeText(textToCopy)
        //const copiedPass = true;
        //setTimeout(() => copiedPass(false), 1500); // Reset after 1.5 seconds
    };

    const copyLinkPassToClipboard = () => {
        const textToCopy = customPassword ? noteLink : `${noteLink}#${privateKey}`;
        navigator.clipboard.writeText(textToCopy)
        //const copiedLinkPass = true;
        //setTimeout(() => copiedLinkPass(false), 1500); // Reset after 1.5 seconds
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#021327] text-white">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Your Encrypted Note</h2>
                <div className="mb-4">
                    <label className="block mb-2" style={{color: '#FB521F'}}>PrivacySafe Link</label>
                    <input
                        type="text"
                        value={noteLink}
                        readOnly
                        className="w-full px-4 py-2 bg-[#323232] rounded-lg"
                        title={noteLink}
                    />
                    <button
                        className="w-full py-2 hover:text-cyan-300 active:animate-bounce active:text-cyan-200 flex items-center justify-center"
                        onClick={copyLinkToClipboard}
                    >
                        <FontAwesomeIcon icon={faLink} className="mr-2" />
                        {copiedLink ? "Copied!" : 'Copy Link'}
                    </button>
                </div>
                {!customPassword && (
                    <div className="mb-4">
                        <label className="block mb-2" style={{color: '#FB521F'}}>Password (Private Key)</label>
                        <input
                            type="text"
                            value={privateKey}
                            readOnly
                            className="w-full px-4 py-2 bg-[#323232] rounded-lg"
                            title={privateKey}
                        />
                        <button
                            className="w-full py-2 hover:text-cyan-300 active:animate-bounce active:text-cyan-200 flex items-center justify-center"
                            onClick={copyPassToClipboard}
                        >
                            <FontAwesomeIcon icon={faKey} className="mr-2" />
                            {copiedPass ? "Copied!" : 'Copy Password'}
                    </button>
                    </div>
                )}
  
                <button
                    className="w-full py-2 mt-8 bg-orange-600 hover:bg-green-500 active:animate-bounce rounded-lg flex items-center justify-center"
                    onClick={copyLinkPassToClipboard}
                >
                    <FontAwesomeIcon icon={faCopy} className="mr-2" />
                    {copiedLinkPass ? "Copied!" : 'Copy Link + Password'}
                </button>
                <button
                    className="w-full py-2 mt-4 bg-blue-900 hover:bg-blue-950 rounded-lg"
                    onClick={onBack}
                >
                    <FontAwesomeIcon icon={faLink} className="mr-2" />
                    New Link
                </button>
            </div>
        </div>
    );
};

export default ResultComponent;
