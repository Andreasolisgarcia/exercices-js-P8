const $input = document.getElementById('decimalInput')

const $binaryResultElement = document.getElementById('binaryResult')


function convertToBinary() {
    let binaryEquivalence = ($input.value >>> 0).toString(2);

    $binaryResultElement.innerText = binaryEquivalence
}