import axios from 'axios';

import jscrypto from '../utils/jscrypto';

const axiosInstance = axios.create({
    baseURL: 'https://dev-backend-2025.epravaha.com/api', // replace with your actual backend
    headers: {
        'Content-Type': 'application/octet-stream',
        'isencrypted': 'true',
        'accept': 'text/plain',
    },
});

// Request interceptor — encrypt request data
axiosInstance.interceptors.request.use(async (config) => {
    const fullUrl = `${config.baseURL?.replace(/\/$/, '')}${config.url}`;
    console.log(`Hitting API: ${config.method?.toUpperCase()} ${fullUrl}`);
    if (config.data) {
        const rawData = typeof config.data === 'string' ? config.data : JSON.stringify(config.data);
        const [encryptedData, contentType] = await jscrypto.encryptRequest(rawData);

        // Log the API URL being hit
        const fullUrl = `${config.baseURL?.replace(/\/$/, '')}${config.url}`;
        console.log(`Hitting API: ${config.method?.toUpperCase()} ${fullUrl}`);
        console.log(` Encrypted Payload:`, encryptedData);
        console.log("contentType :- ", contentType)

        config.data = encryptedData;
        config.headers['Content-Type'] = 'application/octet-stream';
        config.headers['Original-Content'] = contentType || 'application/json';
        config.headers['isencrypted'] = 'true';
    }
    return config;
});

// Response interceptor — decrypt response data
axiosInstance.interceptors.response.use(
    async (response) => {
        const isEncrypted = response?.headers?.['isencrypted'] == 'True' || response?.headers?.['isencrypted'] == 'true';

        const originalContent = response?.headers?.['original-content'] || 'application/json';

        if (!isEncrypted) return response;

        try {
            const decryptedRes = await jscrypto.decryptResponse(response.data);
            console.log('\n =========== Encrypted Response: ========= \n', response?.data);
            console.log('\n =========== Decrypted Response: ========= \n', decryptedRes);
            response.data = decryptedRes
        } catch (err) {
            console.error('Decryption error:', err);
            return Promise.reject(err);
        }

        return response;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
