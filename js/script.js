const extractText = () =>{
    const fileInput = document.getElementById('imageInput');
    const outputDiv = document.getElementById('output');
    const imagesFile = fileInput.files[0];

    if (!imagesFile) {
        outputDiv.innerText = 'Please select an Image';
        return;      
    }
    Tesseract.recognize(
        imagesFile,
        'eng'
        // 'ben'
    ).then(({ data }) => {
        outputDiv.innerText = data.text;
    }).catch((error) => {
        console.error('Error', error);
        outputDiv.innerText = 'Error';
    });
    

}