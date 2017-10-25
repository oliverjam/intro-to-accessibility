const fs = require('fs');
const marked = require('marked');
const { promisify } = require('util');
const template = require('./template');

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
});

const markdownToHtml = async filePath => {
  try {
    const markdown = await read(`${__dirname}/${filePath}`, {
      encoding: 'utf8',
    });
    const content = marked(markdown);
    const sectioned = content.replace(
      /<hr>/g,
      '</section><section class="slide">'
    );
    const page = template({ content: sectioned });
    write('dist/index.html', page);
    return page;
  } catch (err) {
    console.error(err);
  }
};

markdownToHtml(process.argv[2]);
