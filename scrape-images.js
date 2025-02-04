// Simple script to fetch images from wiejska11.pl
const https = require('https');
const fs = require('fs');
const path = require('path');

// Lista URL-i do obrazów
const imageUrls = [
  // Grand Salon images
  {
    url: 'https://static.wixstatic.com/media/ab84b0_bc28efeb96af4d5f84f25834e9a83519~mv2_d_2400_1602_s_2.jpg',
    name: 'grand_salon_1',
    section: 'grand_salon'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_2ae22a050c464ee3a50cf3a66c999588~mv2_d_2400_1602_s_2.jpg',
    name: 'grand_salon_2',
    section: 'grand_salon'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_0f83aba30e9847219fac9fefe843ccaf~mv2_d_2400_3596_s_4_2.jpg',
    name: 'grand_salon_3',
    section: 'grand_salon'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_1020660a1eeb442b8e191274b44de2a2~mv2_d_2400_1602_s_2.jpg',
    name: 'grand_salon_4',
    section: 'grand_salon'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_749a070fc24f43e7bad1048a7e8c171b~mv2_d_2400_3596_s_4_2.jpg',
    name: 'grand_salon_5',
    section: 'grand_salon'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_b81bbce323624899b8bef14ad8d68781~mv2_d_2400_1602_s_2.jpg',
    name: 'grand_salon_6',
    section: 'grand_salon'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_c8fc7f6be0ad400a97ee90c90fd6758c~mv2_d_2400_1602_s_2.jpg',
    name: 'grand_salon_7',
    section: 'grand_salon'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_a732cf0bb6bb47a0b017045abb87f9fc~mv2_d_1500_1406_s_2.jpg',
    name: 'grand_salon_8',
    section: 'grand_salon'
  },
  
  // Dining Room images
  {
    url: 'https://static.wixstatic.com/media/ab84b0_b65cb22f1aa544b696a8a5984bdbabe4~mv2_d_2400_1602_s_2.jpg',
    name: 'dining_room_1',
    section: 'dining_room'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_006b1c89bcda405c944d86a9fc92b1a5~mv2_d_2400_1602_s_2.jpg',
    name: 'dining_room_2',
    section: 'dining_room'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_7c6a4b87062d46c6b6ccaf58c7a54d32~mv2.jpg',
    name: 'dining_room_3',
    section: 'dining_room'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_8ef646b92df148a08316371d6c0a9db4~mv2_d_5184_3456_s_4_2.jpg',
    name: 'dining_room_4',
    section: 'dining_room'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_c2383979b18b44cda8db71a63ce941c8~mv2_d_2400_3596_s_4_2.jpg',
    name: 'dining_room_5',
    section: 'dining_room'
  },
  
  // Gabinet images
  {
    url: 'https://static.wixstatic.com/media/ab84b0_8780e143c02645d485ab649103ef2a60~mv2_d_2400_1602_s_2.jpg',
    name: 'gabinet_1',
    section: 'gabinet'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_65c84d4e2c02462b80a306e4e04ba049~mv2_d_2400_1602_s_2.jpg',
    name: 'gabinet_2',
    section: 'gabinet'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_83c62dbbc312461e99ec9f2cb96315b3~mv2_d_2400_1602_s_2.jpg',
    name: 'gabinet_3',
    section: 'gabinet'
  },
  
  // Main Hall images
  {
    url: 'https://static.wixstatic.com/media/ab84b0_be279189c9b74c7bb8b11582e48eab46~mv2_d_2400_3180_s_4_2.jpg',
    name: 'main_hall_1',
    section: 'main_hall'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_d06f3c81fb69463e97a91a0325acbff0~mv2_d_2400_3596_s_4_2.jpg',
    name: 'main_hall_2',
    section: 'main_hall'
  },
  
  // Kitchen images
  {
    url: 'https://static.wixstatic.com/media/ab84b0_f4661895faa94898aa4230e97f326042~mv2_d_5184_3456_s_4_2.jpg',
    name: 'kitchen_1',
    section: 'kitchen'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_360757055f5948dc9ec177e37bf67c58~mv2_d_2400_1602_s_2.jpg',
    name: 'kitchen_2',
    section: 'kitchen'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_c21b5dcaee374e8fa95804f5ef1b6a40~mv2_d_2400_1602_s_2.jpg',
    name: 'kitchen_3',
    section: 'kitchen'
  },
  
  // Small Salon images
  {
    url: 'https://static.wixstatic.com/media/ab84b0_0b4bb55ea27f4f88897018ad4cdab56a~mv2_d_5184_3456_s_4_2.jpg',
    name: 'small_salon_1',
    section: 'small_salon'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_d742425c13fa4d32bcc781e02609c9eb~mv2_d_5184_3456_s_4_2.jpg',
    name: 'small_salon_2',
    section: 'small_salon'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_d5c0b0b8ddf54969870660f721e8bd70~mv2_d_5184_3456_s_4_2.jpg',
    name: 'small_salon_3',
    section: 'small_salon'
  },
  
  // Bathrooms images
  {
    url: 'https://static.wixstatic.com/media/ab84b0_6103cf65b5a04672a8c079c4f30e9a35~mv2_d_2400_1602_s_2.jpg',
    name: 'bathroom_1',
    section: 'bathrooms'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_30214fa42ab54bedb7522eb2162eff31~mv2_d_5184_3456_s_4_2.jpg',
    name: 'bathroom_2',
    section: 'bathrooms'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_023f6db3f47e49fbba5f8051dac19bee~mv2_d_2400_1602_s_2.jpg',
    name: 'bathroom_3',
    section: 'bathrooms'
  },
  
  // Bedrooms images
  {
    url: 'https://static.wixstatic.com/media/ab84b0_9bec6fa192494d75a7e86a9263aa4a09~mv2_d_2400_1602_s_2.jpg',
    name: 'bedroom_1',
    section: 'bedrooms'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_d06f3c81fb69463e97a91a0325acbff0~mv2_d_2400_3596_s_4_2.jpg',
    name: 'bedroom_2',
    section: 'bedrooms'
  },
  
  // Walk-in Closet images
  {
    url: 'https://static.wixstatic.com/media/ab84b0_11a541e33bea4807b218ec6a283f7c53~mv2_d_2400_3596_s_4_2.jpg',
    name: 'closet_1',
    section: 'closets'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_d06f3c81fb69463e97a91a0325acbff0~mv2_d_2400_3596_s_4_2.jpg',
    name: 'closet_2',
    section: 'closets'
  },
  
  // Garage images
  {
    url: 'https://static.wixstatic.com/media/ab84b0_6c2e77c732964c23bcd18e3c580ec5ca~mv2_d_5184_3456_s_4_2.jpg',
    name: 'garage_1',
    section: 'garage'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_eeccb90bfa13422f951e667d1b03ca93~mv2_d_4032_3024_s_4_2.jpg',
    name: 'garage_2',
    section: 'garage'
  },
  {
    url: 'https://static.wixstatic.com/media/ab84b0_604a2ba6fd91418e99a1771a7e7b9fb9~mv2_d_4032_3024_s_4_2.jpg',
    name: 'garage_3',
    section: 'garage'
  }
];

// Create rooms directory if it doesn't exist
const roomsDir = path.join('public', 'rooms');
if (!fs.existsSync(roomsDir)) {
  fs.mkdirSync(roomsDir, { recursive: true });
}

// Funkcja do pobierania pojedynczego obrazu
function downloadImage(imageData) {
  const fileName = `${imageData.name}.jpeg`;
  const filePath = path.join(roomsDir, fileName);
  
  https.get(imageData.url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      console.log(`Downloaded: ${fileName} for section ${imageData.section}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${imageData.url}: ${err.message}`);
  });
}

// Pobierz wszystkie obrazy
imageUrls.forEach((imageData) => {
  downloadImage(imageData);
}); 