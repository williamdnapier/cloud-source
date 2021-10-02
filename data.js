/*
In the package.json file there is a scripts section which will run a RESTful web service with this data.
"json": "json-server data.js -p 3500 -m authMiddleware.js" <-- this line loads the data.js into json-server on port 3500.
It also loads our authMiddleware.js file which will be used to authenticate jwt tokens.
 */

const data = [
    {
        id: 1,
        name: 'B1s',
        category: 'Bs-series',
        description: 'B1s, 1 Core, 1 GiB RAM, 4 GiB Temporary Storage',
        price: 0.14
    },
    {
        id: 2,
        name: 'B1ms',
        category: 'Bs-series',
        description: 'B1ms 1 Core, 2 GiB RAM, 4 GiB Temporary Storage',
        price: 0.27
    },
    {
        id: 3,
        name: 'A1 v2',
        category: 'Av2 Standard',
        description: '1 Core, 2 GiB RAM, 10 GiB Temporary Storage',
        price: 0.36
    },
    {
        id: 4,
        name: 'A2 v2',
        category: 'Av2 Standard',
        description: '2 Core, 4 GiB RAM, 20 GiB Temporary Storage',
        price: 0.76
    },
    {
        id: 5,
        name: 'A2m v2',
        category: 'Av2 Standard',
        description: '2 Core, 16 GiB RAM, 20 GiB Temporary Storage',
        price: 0.99
    },
    {
        id: 6,
        name: 'D2a v4',
        category: 'Da v4-series',
        description: '2 vCPU, 8 GiB RAM, 50 GiB Temporary Storage',
        price: 0.96
    },
    {
        id: 7,
        name: 'D4a v4',
        category: 'Da v4-series',
        description: '4 vCPU, 16 GiB RAM, 100 GiB Temporary Storage',
        price: 1.92
    },
    {
        id: 8,
        name: 'D8a v4',
        category: 'Da v4-series',
        description: '8 vCPU, 32 GiB RAM, 200 GiB Temporary Storage',
        price: 3.84
    },
    {
        id: 9,
        name: 'D16a v4',
        category: 'Da v4-series',
        description: '16 vCPU, 64 GiB RAM, 200 GiB Temporary Storage',
        price: 7.68
    }];

module.exports = function () {
    return {
        products: data,
        categories: [...new Set(data.map(p => p.category))].sort(),
        orders: []
    }
}