const input = document.querySelector('input');

input.addEventListener('change', (event) => {
  const reader = new FileReader();
  
  reader.onload = (event) => {
    const text = reader.result;
    console.log(text);
  };
  
  reader.readAsText(input.files[0]);
});
