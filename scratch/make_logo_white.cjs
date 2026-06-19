const Jimp = require('jimp');

Jimp.read('src/assets/logo-full.png')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      var red   = this.bitmap.data[idx + 0];
      var green = this.bitmap.data[idx + 1];
      var blue  = this.bitmap.data[idx + 2];
      var alpha = this.bitmap.data[idx + 3];

      if (alpha > 0) {
          var max = Math.max(red, green, blue);
          var min = Math.min(red, green, blue);
          var saturation = max === 0 ? 0 : (max - min) / max;

          // If the pixel is mostly grayscale (black, grey, white)
          if (saturation < 0.2) {
              let darkness = 255 - max; // 255 for black, 0 for white
              
              this.bitmap.data[idx + 0] = 255;
              this.bitmap.data[idx + 1] = 255;
              this.bitmap.data[idx + 2] = 255;
              // Multiply existing alpha by darkness ratio
              this.bitmap.data[idx + 3] = Math.round((alpha / 255) * darkness);
          }
      }
    });

    image.write('src/assets/logo-full-white.png');
    console.log('Done!');
  })
  .catch(err => {
    console.error(err);
  });
