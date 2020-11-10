const fs = require('fs');
const pdf = require('html-pdf');
const html = fs.readFileSync('test.html', 'utf8');
const options = { format: 'Letter' };

pdf.create(html, options).toFile('test.pdf', (err, res) =>{
  if (err) return console.log(err);
  console.log(res);
});