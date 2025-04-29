import React from 'react';
import QRCode from 'qrcode.react';

function QRCodeDisplay({ address }) {
  return (
    <div className="text-center">
      <QRCode value={address} size={180} />
      <p className="mt-2 break-all">{address}</p>
    </div>
  );
}

export default QRCodeDisplay;
