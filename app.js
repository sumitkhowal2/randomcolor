const getColor = () => {
    //hexa code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.getElementById("color-code").innerText = randomCode;
    document.body.style.backgroundColor = randomCode;

    navigator.clipboard.writeText(randomCode);
}
// even call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
// init color
getColor();