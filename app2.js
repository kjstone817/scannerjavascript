const btn = document.querySelector('.btn');

function readscan(){
   console.log("pressed");
}

function listening() {
   navigator.bluetooth.requestDevice({
      filters: [
         {name: ["ScanAvengerHID"]}
       ]
    })
    .then(function(device) {
      console.log('Name: ' + device.name);
      const header = document.getElementById("updateme");
      header.textContent = device.name + " Paired!";
    })
   //  .then(device => {
   //    console.log('Connecting to GATT Server...');
   //    return device.gatt.connect();
   //  })
    .catch(error => {
      console.log('Argh! ' + error);
    });
}
 btn.addEventListener('click', listening, false);

// Initialize with options
onScan.attachTo(document, {
   suffixKeyCodes: [13], // enter-key expected at the end of a scan
   reactToPaste: true, // Compatibility to built-in scanners in paste-mode (as opposed to keyboard-mode)
   onScan: function(sCode, iQty) { // Alternative to document.addEventListener('scan')
       console.log(sCode); 
       const barcode = document.getElementById("codefound");
       barcode.textContent = sCode;
   }
});

