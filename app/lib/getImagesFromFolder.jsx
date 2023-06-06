import fs from 'fs';
import path from 'path';

export function getImagesFromFolder(folderPath) {
  const imagesDir = path.join(process.cwd(), folderPath);
  const fileNames = fs.readdirSync(imagesDir);

  const images = fileNames.map((fileName) => ({
    src: `/images/${fileName}`,
    alt: fileName.split('.')[0], // Extract the filename without the extension as the alt text
  }));

  return images;
}
