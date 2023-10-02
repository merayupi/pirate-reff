import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { generateUsername } from 'unique-username-generator';
import rl from 'readline-sync';

const getEmailRandom = () => new Promise((resolve, reject) => {
    fetch(`https://generator.email/`, {
        method: "get",
        headers: {
            accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3",
            "accept-encoding": "gzip, deflate, br"
        }
    })
        .then(res => res.text())
        .then(text => {
            const $ = cheerio.load(text);
            const result = [];
            $('.e7m.tt-suggestions').find('div > p').each(function (index, element) {
                result.push($(element).text());
            });
            resolve(result);
        })
        .catch(err => reject(err));
});


const doRegist = (reff,email) => new Promise((resolve, reject) => {
    fetch(`https://getlaunchlist.com/s/Hdh76v?ref=${reff}`, {
        method: "POST",
        headers: {
            'authority': 'getlaunchlist.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'en-US,en;q=0.9,id;q=0.8',
            'cache-control': 'max-age=0',
            //'cookie': 'cf_clearance=ZDTzqmi.pbbrChguX7wPhUcVbXbLS_jHf.G0CTTF2gA-1690890672-0-1-389a8f21.debab3b0.6f9bd0c1-0.2.1690890672; XSRF-TOKEN=eyJpdiI6InJySzQyclhYWVNSSytuTjNHbFhDZ3c9PSIsInZhbHVlIjoibURSWEZWU0V1Z0VaOXJJMFF2aDhFOWUwTHREVm5zOTY4ZmlTcnMwNWxSejNwNXRnM3NWQXlFMW5UMjhjeWQwejZEanFNcEUwMlFVSUNrVkRPQ0dMU1ArdE94bEY2QVNvWG9kUE9UUVI2anVsUm44MHlmNmwrVnhKY01rT0NtNVMiLCJtYWMiOiJlNDY5ZTRhMjNiYmI5NDRkN2MxNWI2MGQwY2ZkYzY1Mzg3ZjUzYTYyZTlmYjE4MmM4OWNhMDI3ZTE1Y2IyMTBjIiwidGFnIjoiIn0%3D; launchlist_session=eyJpdiI6InZBVmZjeVQwM2xKcjJhL1VNVFFZOGc9PSIsInZhbHVlIjoic0I4WFFZaVNrU3BIZVJmU0Y3Q1lXR1I1RW9rL09ZQjBNOUtYcDEwMGJ6ekR0UC9OSGlWQWZVcS90WVJEakhGYllhQ2JJZ1VRQXlONkU4aklOd291allESWdtYS8wUjlGRk5EcVZBQnVCT0ZLLzcvMFVmaUh5U2NadSs4QmVKZ0YiLCJtYWMiOiI5YmI4ZGQ0MTNjZjA3OGE0NjVhY2FkMDk4NTQwMTNkYTE2MDgzYzhjNzZiNTFkMjQ2OTczYjg1ZDM1MGY1MjFlIiwidGFnIjoiIn0%3D; TgLzmUSlpGN8iMQ8Y576xQD5XOWsFvBfrko87xad=eyJpdiI6ImpYVDdLMmNLZjY3cHlGeDQ5Y2tjSGc9PSIsInZhbHVlIjoicDVrSWJFNG1SWG44Ky9Db2F4WFM0d1FSVmgraXpKcEpoalBLVmE2VWxmQzFOaWM0RXY0Z3FhNXNMejBYSC9CMGZ1dmJ2V1BFMTFoWmJWMVBjbE4yc0lOVnVpdDBJY1lHb1B1M3hoOTM3cllGb2w0M1B4TGE5aDkrZE5lVUFCdjFUMEFoMWQwdzN4M3loL0owekkwUnkyRWNtc2o5ZVBXVzJJa1VTUzFlcklPWWxvUHFCYXc5M3hOWENIYnlwaC9aQ2kzdmRLZlFOTXhDdXQ4WkJ3eWpuWkRvRG5QSjRHUGdwREl2SXU5Qnh2UitzNDdUaVBQcFBqK2IzTzdZeU1teVlIaERCT3JXZXVxY05OVXJYdXdlOTZTVXBITGVudk4ydVpqU3E2Mk1kSW5NcnNUbFd6a1VTYW8xcVFzaDRRU2NmZHFzcEg5QzNyWDdCMkMxSGZaM2k5ajYzWGZLZEUvbTRyZzhUY0c3RWdsVWF1eXJDSGFYbnFyUERJZWY5TUdPdlVxa29FOFdFbzdDOWV6K2swalRLcVVOM1N4UFI3WkpjWk80eFp1bGQwdz0iLCJtYWMiOiJjOGMzOWZhOTVkZjQ4YjdlZTMwNTNhNDgwNWVmZDVkOTQ5MWM5YTRhMTJmZjYwZDViMDQ2NDYzMGM0ZmNhMDNjIiwidGFnIjoiIn0%3D',
            'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
            'content-type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        },
        body: JSON.stringify({
            "email": email
        })
    })
        .then(res =>  res)
        .then(res => resolve(res))
        .catch(err => reject(err))
});


const viewPage = (url) => new Promise((resolve, reject) => {
    fetch(url, {
        headers: {
            'authority': 'getlaunchlist.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'en-US,en;q=0.9,id;q=0.8',
            'cache-control': 'max-age=0',
            'cookie': 'cf_clearance=ZDTzqmi.pbbrChguX7wPhUcVbXbLS_jHf.G0CTTF2gA-1690890672-0-1-389a8f21.debab3b0.6f9bd0c1-0.2.1690890672; XSRF-TOKEN=eyJpdiI6InJySzQyclhYWVNSSytuTjNHbFhDZ3c9PSIsInZhbHVlIjoibURSWEZWU0V1Z0VaOXJJMFF2aDhFOWUwTHREVm5zOTY4ZmlTcnMwNWxSejNwNXRnM3NWQXlFMW5UMjhjeWQwejZEanFNcEUwMlFVSUNrVkRPQ0dMU1ArdE94bEY2QVNvWG9kUE9UUVI2anVsUm44MHlmNmwrVnhKY01rT0NtNVMiLCJtYWMiOiJlNDY5ZTRhMjNiYmI5NDRkN2MxNWI2MGQwY2ZkYzY1Mzg3ZjUzYTYyZTlmYjE4MmM4OWNhMDI3ZTE1Y2IyMTBjIiwidGFnIjoiIn0%3D; launchlist_session=eyJpdiI6InZBVmZjeVQwM2xKcjJhL1VNVFFZOGc9PSIsInZhbHVlIjoic0I4WFFZaVNrU3BIZVJmU0Y3Q1lXR1I1RW9rL09ZQjBNOUtYcDEwMGJ6ekR0UC9OSGlWQWZVcS90WVJEakhGYllhQ2JJZ1VRQXlONkU4aklOd291allESWdtYS8wUjlGRk5EcVZBQnVCT0ZLLzcvMFVmaUh5U2NadSs4QmVKZ0YiLCJtYWMiOiI5YmI4ZGQ0MTNjZjA3OGE0NjVhY2FkMDk4NTQwMTNkYTE2MDgzYzhjNzZiNTFkMjQ2OTczYjg1ZDM1MGY1MjFlIiwidGFnIjoiIn0%3D; TgLzmUSlpGN8iMQ8Y576xQD5XOWsFvBfrko87xad=eyJpdiI6ImpYVDdLMmNLZjY3cHlGeDQ5Y2tjSGc9PSIsInZhbHVlIjoicDVrSWJFNG1SWG44Ky9Db2F4WFM0d1FSVmgraXpKcEpoalBLVmE2VWxmQzFOaWM0RXY0Z3FhNXNMejBYSC9CMGZ1dmJ2V1BFMTFoWmJWMVBjbE4yc0lOVnVpdDBJY1lHb1B1M3hoOTM3cllGb2w0M1B4TGE5aDkrZE5lVUFCdjFUMEFoMWQwdzN4M3loL0owekkwUnkyRWNtc2o5ZVBXVzJJa1VTUzFlcklPWWxvUHFCYXc5M3hOWENIYnlwaC9aQ2kzdmRLZlFOTXhDdXQ4WkJ3eWpuWkRvRG5QSjRHUGdwREl2SXU5Qnh2UitzNDdUaVBQcFBqK2IzTzdZeU1teVlIaERCT3JXZXVxY05OVXJYdXdlOTZTVXBITGVudk4ydVpqU3E2Mk1kSW5NcnNUbFd6a1VTYW8xcVFzaDRRU2NmZHFzcEg5QzNyWDdCMkMxSGZaM2k5ajYzWGZLZEUvbTRyZzhUY0c3RWdsVWF1eXJDSGFYbnFyUERJZWY5TUdPdlVxa29FOFdFbzdDOWV6K2swalRLcVVOM1N4UFI3WkpjWk80eFp1bGQwdz0iLCJtYWMiOiJjOGMzOWZhOTVkZjQ4YjdlZTMwNTNhNDgwNWVmZDVkOTQ5MWM5YTRhMTJmZjYwZDViMDQ2NDYzMGM0ZmNhMDNjIiwidGFnIjoiIn0%3D',
            'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        }
    })
        .then(res =>  res.text())
        .then(res => resolve(res))
        .catch(err => reject(err))
});

const main = async (codeReff) => {
    while(true){
        const username = await generateUsername("", 0, 8);
        const domainList = await getEmailRandom();
        const domain = domainList[Math.floor(Math.random() * domainList.length)];
        
        const email = `${username}@${domain}`;
        console.log(`registering ${email}`)
        const regist = await doRegist(codeReff,email)
        await viewPage(regist.url)
        console.log("sukses")
    }

    
}

(async ()=>{
    //https://piratenation.game/play/?ref=B0EfBm
    const linkReff = rl.question("enter link reff: ")
    const filter = linkReff.split("=")
    const codeReff = filter[1]

        Promise.all([
             main(codeReff),
             main(codeReff),
             main(codeReff),
             main(codeReff),
             main(codeReff),
             main(codeReff),
        ])
    
})()
