function manipulateDOM() {

    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.remove();
    }

    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
  
    newHeader.innerHTML = "YOUR-NAME is the champion";
  
    document.body.appendChild(newHeader);
  
    return newHeader;
  }

  const newHeader = manipulateDOM();
 
  window.newHeader = newHeader;
  