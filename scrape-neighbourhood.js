const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://static.wixstatic.com/media/ab84b0_158b20ca2cac4b9a98c58ab75fc88ca7~mv2.jpg',
    name: 'lazienki.jpg'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_dcfbd4a3bcdc419e8436ebd5f8f88d94~mv2.jpg',
    name: 'powisle.jpg'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_bf2d4b2876a84884b94749437a59449e~mv2.jpg',
    name: 'ujazdowski.jpg'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_854e5f78f3f64b0986de2c750b9c4e5b~mv2.jpg',
    name: 'french.jpg'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_c5104167cc4041fa9f0e236565bdcb4c~mv2.jpg',
    name: 'swiss.jpg'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_ae5a89aff84b45b88065e2dead1188a2~mv2_d_1920_1385_s_2.jpg',
    name: 'canadian.jpg'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_bfd6179cc14e431281c084cfca7e5c64~mv2.jpg',
    name: 'sejm.jpg'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_6dea0bbeafa14a6ea8138d615251e7de~mv2.jpg',
    name: 'desa.jpg'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_3f8e80df1f094395adc66c3b11df06db~mv2_d_3877_1695_s_2.jpg',
    name: 'trzech.jpg'
  }
];

// Create neighbourhood directory if it doesn't exist
const neighbourhoodDir = path.join('public', 'neighbourhood');
if (!fs.existsSync(neighbourhoodDir)) {
  fs.mkdirSync(neighbourhoodDir, { recursive: true });
}

// Function to download a single image
function downloadImage(imageData) {
  const filePath = path.join(neighbourhoodDir, imageData.name);
  
  https.get(imageData.url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      console.log(`Downloaded: ${imageData.name}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${imageData.url}: ${err.message}`);
  });
}

// Download all images
images.forEach((imageData) => {
  downloadImage(imageData);
}); 