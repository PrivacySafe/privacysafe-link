function bytesToHexString(bytes) {
    if (typeof bytes.toHex === 'function') {
        return bytes.toHex();
    } else {
        return [...bytes].map(n => n.toString(16).padStart(2, '0')).join('');
    }
}

function hexStringToBytes(hexStr) {
    if (typeof Uint8Array.fromHex === 'function') {
        return Uint8Array.fromHex(hexStr);
    } else {
        if ((hexStr.length % 2) > 0) {
            throw new Error('Bad hex string');
        }
        const bytes = new Uint8Array(hexStr.length/2);
        for (let i=0; i<hexStr.length; i+=2) {
            const num = parseInt(hexStr.substring(i, i+2), 16);
            if (isNaN(num)) {
                throw new Error('Bad hex string');
            }
            bytes[i/2] = num;
        }
        return bytes;
    }
}

function bytesToBase64String(bytes) {
    if (typeof bytes.toBase64 === 'function') {
        return bytes.toBase64();
    } else {
        const binString = Array.from(
            bytes,
            (byte) => String.fromCodePoint(byte)
        ).join("");
        return btoa(binString);
    }
}

function base64StringToBytes(base64Str) {
    if (typeof Uint8Array.fromBase64 === 'function') {
        return Uint8Array.fromBase64(base64Str);
    } else {
        const binString = atob(base64Str);
        return Uint8Array.from(binString, (m) => m.codePointAt(0));
    }
}

function stringToUtf8Bytes(text) {
    const encoder = new TextEncoder();
    return encoder.encode(text);
}

function utf8BytesToString(bytes) {
    const decoder = new TextDecoder();
    return decoder.decode(bytes);
}

export {
    bytesToHexString,
    hexStringToBytes,
    bytesToBase64String,
    base64StringToBytes,
    stringToUtf8Bytes,
    utf8BytesToString
}