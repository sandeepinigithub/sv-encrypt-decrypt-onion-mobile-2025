// import CryptoJS from 'crypto-js';
// import 'react-native-get-random-values';

// class jscrypto {
//   key = 'StghX9XV1geAqZIO5NU8OAZy5uy1gpLL'; // 32-byte key (AES-256)

//   // AES-CBC encryption
//   encryptRequest(data) {
//     // Generate a random IV (16 bytes)
//     const ivArray = new Uint8Array(16);
//     crypto.getRandomValues(ivArray); // works after polyfill import
//     const iv = CryptoJS.lib.WordArray.create(ivArray);
//     const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), CryptoJS.enc.Utf8.parse(this.key), {
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7,
//     });

//     // Combine IV + ciphertext
//     const combined = iv.concat(encrypted.ciphertext);
//     return CryptoJS.enc.Base64.stringify(combined);
//   }

//   // AES-CBC decryption
//   decryptResponse(base64Data) {
//     const rawData = CryptoJS.enc.Base64.parse(base64Data);
//     const iv = CryptoJS.lib.WordArray.create(rawData.words.slice(0, 4), 16);
//     const ciphertext = CryptoJS.lib.WordArray.create(rawData.words.slice(4), rawData.sigBytes - 16);

//     const decrypted = CryptoJS.AES.decrypt({ ciphertext }, CryptoJS.enc.Utf8.parse(this.key), {
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7,
//     });

//     const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
//     return JSON.parse(decryptedText);
//   }
// }

// export default new jscrypto();

import CryptoJS from 'crypto-js';
import 'react-native-get-random-values';

class jscrypto {
  key = 'StghX9XV1geAqZIO5NU8OAZy5uy1gpLL';

  encryptRequest(data) {
    const ivArray = new Uint8Array(16);
    crypto.getRandomValues(ivArray);

    const iv = CryptoJS.lib.WordArray.create(ivArray);
    const encrypted = CryptoJS.AES.encrypt(
      typeof data === 'string' ? data : JSON.stringify(data),
      CryptoJS.enc.Utf8.parse(this.key),
      {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    const combined = iv.concat(encrypted.ciphertext);
    const base64Payload = CryptoJS.enc.Base64.stringify(combined);
    return [base64Payload, 'application/json'];
  }

  decryptResponse(base64Data) {
    const rawData = CryptoJS.enc.Base64.parse(base64Data);
    const iv = CryptoJS.lib.WordArray.create(rawData.words.slice(0, 4), 16);
    const ciphertext = CryptoJS.lib.WordArray.create(rawData.words.slice(4), rawData.sigBytes - 16);

    const decrypted = CryptoJS.AES.decrypt({ ciphertext }, CryptoJS.enc.Utf8.parse(this.key), {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedText);
  }
}

export default new jscrypto();
