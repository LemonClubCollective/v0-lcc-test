const fetch = require('node-fetch');

async function confirmPublish() {
    const printifyApiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6Ijg3YTQ3MzhiZmI0NzhiY2ExZDNiMWFmMGM5ZTY5YWIzYjAzOTA0ZmJlM2UxYWZjMWJjNDY4MDAwZDMxYTY2ZDc4NzAwMGRmMGY5YWUyMjQ5IiwiaWF0IjoxNzQzODcyNzQ4LjA2NzM0NCwibmJmIjoxNzQzODcyNzQ4LjA2NzM0NiwiZXhwIjoxNzc1NDA4NzQ4LjA2MTEwNywic3ViIjoiMjE4ODI2ODciLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIiwidXNlci5pbmZvIl19.AMjxZYWVfUY7vqyPEBkN-WLPpmvuAfWk6xIL-M4Biff1p5jKXfFNAcVpOOwAwIB5wLNJKWPSodegK-8ibco'; // Your latest token
    const shopId = '21660074';
    const productId = '18846744024090902796'; // Replace with ID from Step 1
    try {
        const response = await fetch(`https://api.printify.com/v1/shops/${shopId}/products/${productId}/publishing_succeeded.json`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${printifyApiToken}`,
                'Content-Type': 'application/json',
                'User-Agent': 'NodeJS'
            },
            body: JSON.stringify({
                external: {
                    id: "TEST123",
                    handle: "test-product"
                }
            })
        });
        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Response:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

confirmPublish();