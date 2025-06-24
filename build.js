
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function convertMdFolderToJson(folder, output) {
  const contentPath = path.join(__dirname, folder);
  const files = fs.readdirSync(contentPath);
  const entries = files.map(filename => {
    const file = fs.readFileSync(path.join(contentPath, filename), 'utf-8');
    const { data } = matter(file);
    return data;
  });
  fs.writeFileSync(path.join(__dirname, output), JSON.stringify(entries, null, 2));
}

convertMdFolderToJson('content/services', 'services.json');
convertMdFolderToJson('content/team', 'team.json');
convertMdFolderToJson('content/portfolio', 'portfolio.json');
