let canvas = document.getElementById("canvas");
let message = document.getElementById("message");
let btn = document.getElementById("generate-button");
let print = document.getElementById("print-button");

btn.addEventListener("click", () => {
  if (message.value !== "") {
    QRCode.toCanvas(canvas, message.value, {width: 1000}, (err) => {
      console.log(err);
    });
  }
});

print.addEventListener("click", () => {
    let link = document.createElement("a");
    link.download = "qrcode_" + Date.now();
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
    link.remove();
})