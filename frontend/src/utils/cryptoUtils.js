import { secret_box as sbox, scrypt } from 'ecma-nacl';
import {
    base64StringToBytes,
    bytesToBase64String,
    bytesToHexString,
    hexStringToBytes,
    stringToUtf8Bytes,
    utf8BytesToString
} from './encodings.js';

const generateRandomKey = () => {
    const keyBytes = crypto.getRandomValues(new Uint8Array(sbox.KEY_LENGTH));
    return bytesToHexString(keyBytes);
};

const encryptText = (text, keyHex) => {
    const textBytes = stringToUtf8Bytes(text);
    const keyBytes = hexStringToBytes(keyHex);
    const nonce = crypto.getRandomValues(new Uint8Array(sbox.NONCE_LENGTH));
    const packedBytes = sbox.formatWN.pack(textBytes, nonce, keyBytes);
    return bytesToBase64String(packedBytes);
};

const decryptText = (packed, keyHex) => {
    const packedBytes = base64StringToBytes(packed);
    const keyBytes = hexStringToBytes(keyHex);
    const textBytes = sbox.formatWN.open(packedBytes, keyBytes);
    return utf8BytesToString(textBytes);
}

const deriveKeyFromPassword = async (password) => {
    const fixedSalt = hexStringToBytes('0123456789abcdef0123456789abcdef');
    const keyBytes = scrypt(
        password, fixedSalt, 17, 8, 2, sbox.KEY_LENGTH,
        p => console.log(`Key derivation progress: ${p}%`)
    );
    return bytesToHexString(keyBytes);
};

export {
    generateRandomKey,
    encryptText,
    decryptText,
    deriveKeyFromPassword,
}