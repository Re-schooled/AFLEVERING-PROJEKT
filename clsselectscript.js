// selectscript.js

// Simulér hentning af JSON-data (erstatt denne del med din faktiske JSON-hentning)
const jsonFilePath = 'data/classes.json';

// Hent JSON-data ved hjælp af Fetch API
fetch(jsonFilePath)
  .then(response => response.json())
  .then(jsonData => {
    // Iterer gennem alle klasser i JSON-dataene
    jsonData.forEach((classData, index) => {
      // Hent stien til selectImage fra den aktuelle klasse
      const selectImage = classData.selectImage;

      // Opret et billedobjekt
      const imageElement = document.createElement('img');
      imageElement.src = selectImage;
      imageElement.alt = `Selected Class Image ${index + 1}`;

      const container = document.getElementById('classSelectContainer');
      const linkElement = document.createElement('a');
      
      linkElement.href = `selected.html?index=${index}`;
      linkElement.innerHTML = `<img src="${selectImage}" alt="Selected Class Image ${index + 1}"> ${classData.className}`;
      
      container.appendChild(linkElement);

    });
  })
  .catch(error => console.error('Fejl ved indlæsning af JSON:', error));