import axios from 'axios';
import {load} from 'cheerio';
import PQueue from 'p-queue';

const port = Math.abs(Number.parseInt(process.env.PORT, 10)) || 3010;
const mode = process.argv[2] || 'not-ok';
const concurrency = Math.abs(Number.parseInt(process.argv[3], 10)) || 4;

const urls = ['a', 'b'].map((url) => `http://localhost:${port}/${url}-${mode}`);

const queue = new PQueue({concurrency});

console.log(`Mode: ${mode}\nConcurrency: ${concurrency}\n`);

const fetch = async (url) => {
  const {data} = await axios.get(url);
  const $ = load(data);
  const title = $('title').text();
  const description = $('meta[name="description"]').attr('content');

  console.log({
    url,
    title,
    description,
  });
};

const add = (url) => {
  queue.add(() => fetch(url));
};

setInterval(() => {
  urls.forEach((url) => {
    add(url);
  });
}, 1000);
