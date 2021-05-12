/**
 * This file allows us to determine which icons are newly added so we can add
 * metadata about them.
 */

const { promises: fs } = require('fs');
const JSON5 = require('json5');

(async () => {
  try {
    const metadataOutput = {};

    const allChromicons = await fs.readdir(
      './node_modules/@lifeomic/chromicons/src/lined'
    );

    const actualChromicons = allChromicons
      // We don't care about the index file
      .filter((f) => f !== 'index.tsx')
      // We only want the component name, not the file extension
      .map((f) => f.substring(0, f.indexOf('.tsx')));

    const metaFile = await fs.readFile('./src/util/metadata.js');
    const metaFileAsString = metaFile.toString();

    const existingMetaAsObject = metaFileAsString.substring(
      // Cut out the cruft that'll botch us converting this to a valid JSON object
      metaFileAsString.indexOf('{') + 1,
      metaFileAsString.lastIndexOf('};')
    );

    const existingMetaParsed = JSON5.parse('{' + existingMetaAsObject + '}');

    actualChromicons.forEach((i) => {
      if (existingMetaParsed[i]) {
        metadataOutput[i] = existingMetaParsed[i];
      } else {
        console.log(`✨ Icon "${i}" is new! Adding a new entry...`);

        metadataOutput[i] = {
          keywords: '',
          categories: ['ui'],
        };
      }
    });

    await fs.writeFile(
      './src/util/metadata.js',
      `export default ${JSON5.stringify(metadataOutput, null, 2)};\n`
    );
  } catch (error) {
    console.error(error);
  }
})();
