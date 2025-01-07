import React, { useState } from 'react';
import { generateAESKey, aesEncrypt, deriveKeyFromPassword } from '../utils/cryptoUtils';
import { createNote } from '../api/api';
import { prettifyError } from '../utils/helper';
import { ReactComponent as LogoSVG } from '../logo.svg';
import ErrorModal from '../components/ui/errorModal';
import TextArea from '../components/ui/textArea';
import OptionsSection from '../components/ui/options';
import ResultComponent from '../components/ui/result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Host = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;

function Index() {
    const [text, setText] = useState('');
    const [key, setKey] = useState('');
    const [error, setError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [options, setOptions] = useState({
        customExpiration: false,
        customViewsLimit: false,
        customPassword: false
    });
    const [inputs, setInputs] = useState({
        expirationTime: '30',
        viewsLimit: '2',
        customPassword: ''
    });
    const [isEncrypted, setIsEncrypted] = useState(false);
    const [noteLink, setNoteLink] = useState('');

    const raiseError = (messages) => {
        setError(true);
        setErrorMessages(messages);
    };

    const handleSecure = async () => {
        if (!text) {
            raiseError("Please Write A Note to Encrypt");
            return;
        }

        if (options.customExpiration && (!inputs.expirationTime || inputs.expirationTime < 30)) {
            raiseError("Time Must Be At Least 30 Seconds");
            return;
        }

        if (options.customExpiration && (inputs.expirationTime > 604800)) {
            raiseError("Time Must Be Less Than 7 Days (604800 Seconds)");
            return;
        }

        if (options.customViewsLimit && (!inputs.viewsLimit || inputs.viewsLimit < 1)) {
            raiseError("View Limit Must Be At Least 1");
            return;
        }

        if (options.customViewsLimit && (inputs.viewsLimit > 1000)) {
            raiseError("View Limit Must Be Less Than 1000");
            return;
        }

        if (options.customPassword && (!inputs.customPassword)) {
            raiseError("Password Cannot Be Empty.");
            return;
        }

        const encKey = options.customPassword ? await deriveKeyFromPassword(inputs.customPassword) : await generateAESKey();
        setKey(encKey);

        const data = await aesEncrypt(text, encKey);
        if (!data) {
            raiseError("Encryption Failed");
            return;
        }

        const payload = {
            data: data,
            views: options.customViewsLimit ? parseInt(inputs.viewsLimit, 10) : 1,
            expiration: options.customExpiration ? parseInt(inputs.expirationTime, 10) : 0,
            customPassword: options.customPassword
        };

        try {
            const noteId = await createNote(payload);
            setNoteLink(`${Host}/note/${noteId}`);
            setIsEncrypted(true);
            setOptions({
                customExpiration: false,
                customViewsLimit: false,
                customPassword: false
            });
            setInputs({
                expirationTime: '30',
                viewsLimit: '2',
                customPassword: ''
            });
        } catch (error) {
            raiseError(prettifyError(error));
        }
    };

    const handleCheckboxChange = (option) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            [option]: !prevOptions[option]
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const handleBack = () => {
        setIsEncrypted(false);
        setText('');
        setKey('');
        setNoteLink('');
        setOptions({
            customExpiration: false,
            customViewsLimit: false,
            customPassword: false
        });
        setInputs({
            expirationTime: '30',
            viewsLimit: '2',
            customPassword: ''
        });
    };

    if (isEncrypted) {
        return (
            <ResultComponent
                noteLink={noteLink}
                privateKey={key}
                customPassword={options.customPassword}
                onBack={handleBack}
            />
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#021327] text-white">
            <header className="flex flex-col items-center">
                <div className="flex items-center mb-6">
                    <LogoSVG className="w-48 h-48" />
                </div>
                <p className="text-sm text-center mb-4 max-w-md px-4">
                    <strong>This Secret &amp; Secure Note Will Disappear After 1 View!</strong>
                </p>
                <TextArea
                    placeholder="Write Your Note"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    rows={6}
                    readOnly={false}
                />
                <OptionsSection
                    options={options}
                    inputs={inputs}
                    handleCheckboxChange={handleCheckboxChange}
                    handleInputChange={handleInputChange}
                />
                <button className="w-32 py-2 bg-blue-600 hover:bg-green-500 rounded-lg flex items-center justify-center" onClick={handleSecure}>
                    <FontAwesomeIcon icon={faLock} className="mr-2" />
                    Create Link
                </button>
                <ErrorModal showError={error} message={errorMessages} onClose={() => setError(false)} />
            </header>
        </div>
    );
}

export default Index;
