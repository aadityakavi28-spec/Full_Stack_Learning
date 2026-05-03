import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Type your URL:",
      name: "url",
    },
  ])
  .then((answers) => {
    const url = answers.url;

    // unique file name using time
    const fileName = `qr-${Date.now()}.png`;

    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(fileName));
    console.log("QR created:", fileName);

     fs.writeFile("URL.txt", url, (err) => {
          if (err) throw err;
          console.log("The file has been saved!");
        });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });