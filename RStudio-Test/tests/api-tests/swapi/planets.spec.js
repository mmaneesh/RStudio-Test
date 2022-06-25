const {test, expect } = require('@playwright/test');

test.describe.parallel("Star Wars API Tests", () => {

    test("Star Wars Planets API - Valid End Point 200 Status Code", async ({request, baseURL}) => {
        const response = await request.get(`${baseURL}/planets/`);
        expect(response.status()).toBe(200);
    });

    test("Star Wars Planets API - Invalid End Point", async ({request, baseURL}) => {
        const response = await request.get(`${baseURL}/planet/`);
        expect(response.status()).toBe(404);
    });

    test("Star Wars Planets API - Get Total Planets", async ({request, baseURL}) => {
        const response = await request.get(`${baseURL}/planets/`);
        const responseBody = JSON.parse(await response.text());

        expect(response.status()).toBe(200);
        const totalCountriesCount = responseBody.count;
        expect(totalCountriesCount).toBe(60);
        expect(responseBody.results.length).toEqual(10);

    });

    test("Star Wars Planets API - Get First Planet Details", async ({request, baseURL}) => {

        const response = await request.get(`${baseURL}/planets/1/`);
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.name).toBe('Tatooine');
        expect(responseBody.population).toBe('200000');
        expect(responseBody.climate).toBe('arid');
        expect(responseBody.terrain).toBe('desert');
        expect(responseBody.residents.length).toEqual(10);
        expect(responseBody.films.length).toEqual(5);

    });

    test("Star Wars Planets API - Get Last Planet Details", async ({request, baseURL}) => {

        const response = await request.get(`${baseURL}/planets/60/`);
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.name).toBe('Umbara');
        expect(responseBody.population).toBe('unknown');
        expect(responseBody.climate).toBe('unknown');
        expect(responseBody.terrain).toBe('unknown');
        expect(responseBody.residents.length).toEqual(1);
        await expect(responseBody.films.length).toEqual(0);

    });

})