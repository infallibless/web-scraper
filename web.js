const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const cfg = JSON.parse(fs.readFileSync('settings.json', 'utf-8'));

async function scrapewebsite(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const results = {
            titles: [],
            subtitles: [],
            links: []
        };

        $('h1').each((index, element) => {
            const title = $(element).text().trim();
            if (title) { results.titles.push(title);
            }
        });
        $('h2').each((index, element) => {
            const subtitle = $(element).text().trim();
            if (subtitle) {results.subtitles.push(subtitle);
            }
        });

        $('a').each((index, element) => {
            const link = $(element).attr('href');
            if (link && link.startsWith('http')) { results.links.push(link);
            }
        });

        if (cfg.saveHtml) 
            { savehtmlsrc(data, cfg.logfolder, url);
        }
        saveresults(results, 'json');

    } catch (e4) {
        console.error(e4);
    }
}

function savehtmlsrc(html, output, url) {
    const htmlsc = new URL(url).hostname.replace(/\W+/g, '_');
    const file = path.join(output, `${htmlsc}.html`);

    if (!fs.existsSync(output)){
        fs.mkdirSync(output, { recursive: true });
    }

    fs.writeFileSync(file, html, 'utf-8');
    console.log(`html src saved -> ${file}`);
}

function saveresults(data, format) {
    const file = path.join(__dirname, `scraped.${format}`);

    if (format === 'json') {
        fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
        console.log('data successfully saved -> scraped.json');
    } else if (format === 'csv') {
        const csv = convert(data);
        fs.writeFileSync(file, csv, 'utf-8');
        console.log('data successfully saved -> scraped.csv');
    }
}

function convert(data) {
    const titles = data.titles.map(title => `"${title}"`).join(',') + '\n';
    const subtitles = data.subtitles.map(subtitle => `"${subtitle}"`).join(',') + '\n';
    const links = data.links.map(link => `"${link}"`).join(',') + '\n';
    return `Titles\n${titles}Subtitles\n${subtitles}Links\n${links}`;
}

scrapewebsite(cfg.url);
