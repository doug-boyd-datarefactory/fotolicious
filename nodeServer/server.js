const express = require('express');
const path = require('path');
const cors = require('cors');
const { randomInt } = require('crypto');
// const { Timestamp } = require("rxjs-compat");
const app = express(),
  randomId = require('random-id');
bodyParser = require('body-parser');
port = 3080;

// Items example data
const fotoliciousPics = {
  pics: [
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0794.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0795.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0796.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0797.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0798.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0799.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0800.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0801.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0802.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0803.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0519.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0520.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0522.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0523.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0524.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0525.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0526.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0529.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0530.JPG'
    },
    {
      fotoURL:
        'https://ato-transfer.s3.ap-southeast-2.amazonaws.com/DSCN0531.JPG'
    }
  ]
};

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../ui/build')));
app.use(cors());

app.post('/api/getFoto', (req, res) => {
  console.log('called the api here: ' + new Date());
  return res.json(fotoliciousPics.pics[randomInt(0, 19)]);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../ui/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
