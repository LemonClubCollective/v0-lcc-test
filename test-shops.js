const fetch = require('node-fetch');

async function testShops() {
    const printifyApiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6Ijg3YTQ3MzhiZmI0NzhiY2ExZDNiMWFmMGM5ZTY5YWIzYjAzOTA0ZmJlM2UxYWZjMWJjNDY4MDAwZDMxYTY2ZDc4NzAwMGRmMGY5YWUyMjQ5IiwiaWF0IjoxNzQzODcyNzQ4LjA2NzM0NCwibmJmIjoxNzQzODcyNzQ4LjA2NzM0NiwiZXhwIjoxNzc1NDA4NzQ4LjA2MTEwNywic3ViIjoiMjE4ODI2ODciLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIiwidXNlci5pbmZvIl19.AMjxZYWVfUY7vqyPEBkN-WLPpmvuAfWk6xIL-M4Biff1p5jKXfFNAcVpOOwAwIB5wLNJKWPSodegK-8ibco';
    try {
        const response = await fetch('https://api.printify.com/v1/shops.json', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${printifyApiToken}`,
                'Content-Type': 'application/json',
                'User-Agent': 'NodeJS'
            }
        });
        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Shops:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testShops();