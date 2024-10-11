//For a Backend in Node.js (e.g., for generating QR codes dynamically):
//Install a QR Code Library: You can use a package like qrcode in Node.js for generating QR codes.
//npm install qrcode
//step 2.
//Generate the QR Code: In your backend, you can create an API endpoint that generates a QR code based on a given string or URL.
const QRCode = require('qrcode');

// Express route example to generate QR code
app.get('/generate-qr', (req, res) => {
  const textToEncode = req.query.text || 'Default Text';

  QRCode.toDataURL(textToEncode, (err, url) => {
    if (err) {
      res.status(500).send('Error generating QR code');
    } else {
      res.send(`<img src="${url}" />`);
    }
  });
});
//This will generate a QR code from a string and send the QR code as a base64 image in the response.


//For a Frontend in React (e.g., for displaying QR codes dynamically):
//Install a QR Code Library for React: You can use qrcode.react to easily generate QR codes in React.


//npm install qrcode.react
//2.Add QR Code Component: In your React component, you can use this library to generate and display QR codes.
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('Enter text here');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <QRCode value={text} />
    </div>
  );
};

export default QRCodeGenerator;

