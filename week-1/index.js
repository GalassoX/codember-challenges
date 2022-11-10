const { readFileSync } = require('node:fs');

const keywords = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const data = readFileSync('users.txt').toString();

const formatted = data.split('\r\n\r')
    .map(d => d.replaceAll('\n', ' '))
    .map(d => d.replaceAll('\r', ' '))
    .map(d => d.trim().split(' '));


const cleaned = formatted.map(f => f.filter(a => a.split(':')[0].length > 0));
const filtered = cleaned.filter(f => Object.keys(Object.fromEntries(f.map(a => a.split(':')))).length >= keywords.length);

console.log({ count: filtered.length, last_user: filtered.at(-1) });