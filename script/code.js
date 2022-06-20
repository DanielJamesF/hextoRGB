const btnDisplay = document.querySelector('#convert');

function slice(hexcode, start, end) {
    return hexcode.slice(start, end);
}

btnDisplay.addEventListener('click', () => {

    let hexcode = document.querySelector('#hex').value;

    let redcode = slice(hexcode, 1, 3);
    let greencode = slice(hexcode, 3, 5);
    let bluecode = slice(hexcode, 5, 7);

    document.querySelector('#rgbR').innerHTML = parseInt(redcode, 16)
    document.querySelector('#rgbG').innerHTML = parseInt(greencode, 16)
    document.querySelector('#rgbB').innerHTML = parseInt(bluecode, 16)
    document.querySelector('#RGBCode').innerHTML = 'rgb(' + parseInt(redcode, 16) + ', ' + parseInt(greencode, 16) + ', ' + parseInt(bluecode, 16) + ')'

    let clrpane = document.querySelector('#color');
    let value = 'rgb(' + parseInt(redcode, 16) + ', ' + parseInt(greencode, 16) + ', ' + parseInt(bluecode, 16) + ')';
    clrpane.style = `background-color: ${value}`;

})