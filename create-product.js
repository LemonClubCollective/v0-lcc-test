const fetch = require('node-fetch');

async function createProduct() {
    const printifyApiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6Ijg3YTQ3MzhiZmI0NzhiY2ExZDNiMWFmMGM5ZTY5YWIzYjAzOTA0ZmJlM2UxYWZjMWJjNDY4MDAwZDMxYTY2ZDc4NzAwMGRmMGY5YWUyMjQ5IiwiaWF0IjoxNzQzODcyNzQ4LjA2NzM0NCwibmJmIjoxNzQzODcyNzQ4LjA2NzM0NiwiZXhwIjoxNzc1NDA4NzQ4LjA2MTEwNywic3ViIjoiMjE4ODI2ODciLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIiwidXNlci5pbmZvIl19.AMjxZYWVfUY7vqyPEBkN-WLPpmvuAfWk6xIL-M4Biff1p5jKXfFNAcVpOOwAwIB5wLNJKWPSodegK-8ibco';
    const shopId = '21660074';
    try {
        const response = await fetch(`https://api.printify.com/v1/shops/${shopId}/products.json`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${printifyApiToken}`,
                'Content-Type': 'application/json',
                'User-Agent': 'NodeJS'
            },
            body: JSON.stringify({
                title: "Test T-Shirt",
                description: "A simple test shirt",
                blueprint_id: 5, // Gildan 5000 (common blueprint)
                print_provider_id: 1, // Default provider
                variants: [{ id: 17390, price: 1000, is_enabled: true }], // Heather Grey XS
                print_areas: [{
                    variant_ids: [17390],
                    placeholders: [{
                        position: "front",
                        images: [{
                            id: "5d15ca551163cde90d7b2203", // Replace with a real image ID from /v1/uploads.json
                            x: 0.5,
                            y: 0.5,
                            scale: 1,
                            angle: 0
                        }]
                    }]
                }]
            })
        });
        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Response:', JSON.stringify(data, null, 2));
        return data.id; // Product ID
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function publishProduct(10837716747627385867) {
    const printifyApiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6Ijg3YTQ3MzhiZmI0NzhiY2ExZDNiMWFmMGM5ZTY5YWIzYjAzOTA0ZmJlM2UxYWZjMWJjNDY4MDAwZDMxYTY2ZDc4NzAwMGRmMGY5YWUyMjQ5IiwiaWF0IjoxNzQzODcyNzQ4LjA2NzM0NCwibmJmIjoxNzQzODcyNzQ4LjA2NzM0NiwiZXhwIjoxNzc1NDA4NzQ4LjA2MTEwNywic3ViIjoiMjE4ODI2ODciLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIiwidXNlci5pbmZvIl19.AMjxZYWVfUY7vqyPEBkN-WLPpmvuAfWk6xIL-M4Biff1p5jKXfFNAcVpOOwAwIB5wLNJKWPSodegK-8ibco';
    const shopId = '21660074';
    try {
        await fetch(`https://api.printify.com/v1/shops/${shopId}/products/${productId}/publish.json`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${printifyApiToken}`,
                'Content-Type': 'application/json',
                'User-Agent': 'NodeJS'
            },
            body: JSON.stringify({ title: true, description: true, images: true, variants: true, tags: true })
        });
        const response = await fetch(`https://api.printify.com/v1/shops/${shopId}/products/${productId}/publishing_succeeded.json`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${printifyApiToken}`,
                'Content-Type': 'application/json',
                'User-Agent': 'NodeJS'
            },
            body: JSON.stringify({ external: { id: "TEST123", handle: "test-product" } })
        });
        const data = await response.json();
        console.log('Publish Status:', response.status);
        console.log('Publish Response:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Publish Error:', error.message);
    }
}

async function run() {
    const productId = await createProduct();
    if (productId) await publishProduct(productId);
}

run();