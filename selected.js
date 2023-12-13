// selected.js

function buildSelectedPage() {
    const jsonFilePath = 'data/classes.json';
  
    fetch(jsonFilePath)
      .then(response => response.json())
      .then(jsonData => {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedIndex = parseInt(urlParams.get('index'));
        const selectedClass = jsonData[selectedIndex];
  
        // Sæt baggrundsbilledet på body
        document.body.style.backgroundImage = `url('${selectedClass.backgroundClassImage}')`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center center';
        document.body.style.backgroundSize = 'cover';
  
        const contentContainer = document.getElementById('selectedContent');
  
        const classNameHeading = document.createElement('h2');
        classNameHeading.textContent = selectedClass.className;
        contentContainer.appendChild(classNameHeading);
  
        const classTitle = document.createElement('p');
        classTitle.textContent = selectedClass.title;
        contentContainer.appendChild(classTitle);
  
        const classIcon = document.createElement('img');
        classIcon.src = selectedClass.icon;
        classIcon.alt = `${selectedClass.className} Icon`;
        classIcon.classList.add('class-icon'); // Tilføj klassen her
        contentContainer.appendChild(classIcon);


        const classInformation = document.createElement('p');
        classInformation.textContent = selectedClass.classInformation;
        contentContainer.appendChild(classInformation);
  
        const classInformationText = document.createElement('p');
        classInformationText.textContent = selectedClass.classInformationText;
        contentContainer.appendChild(classInformationText);
  
        const classDescriptionParagraph = document.createElement('p');
        classDescriptionParagraph.textContent = selectedClass.classDescription;
        contentContainer.appendChild(classDescriptionParagraph);
  
const avatarImage = document.createElement('img');
avatarImage.src = selectedClass.avatar;
avatarImage.alt = `${selectedClass.className} Avatar`;
avatarImage.classList.add('avatar-image'); // Tilføj klassen her
contentContainer.appendChild(avatarImage);
  
        // Iterate over specializations and create elements for each
        const specializationsList = document.createElement('ul');
        selectedClass.specializations.forEach(specialization => {
          const specializationItem = document.createElement('li');
          specializationItem.innerHTML = `<img src="${specialization.icon}" alt="${specialization.name} Icon"> ${specialization.name}`;
          specializationsList.appendChild(specializationItem);
        });
        contentContainer.appendChild(specializationsList);
  
        // ... continue building content based on selectedClass
      })
      .catch(error => console.error('Fejl ved indlæsning af JSON:', error));
  }
  
  buildSelectedPage();
  