const fileInput = fileupload.getElementById('fileInput');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const fileName = file.name;

  console.log(fileName); // Outputs the name of the uploaded file
});