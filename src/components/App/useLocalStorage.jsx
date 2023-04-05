import React from "react";

//Connect local Storage
function useLocalStorage(itemName, intialValue) {
  
    //Hooks para la App
    const [item, setItem] = React.useState(intialValue);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      try {
        //Traemos Item
        const localStorageItem = localStorage.getItem(itemName);  
        let parseItem;
        
        //Verificamos si existe //Si no existe lo creamos
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(intialValue));
          parseItem = intialValue;
        } else {
          parseItem = JSON.parse(localStorageItem);
        }

        setItem(parseItem);
      } catch(error) {
        setError(error);
      }

    }, []);
  
    //Actualizar Hook y LocalStorage
    function saveItem(newItem) {
      try {
        const stringfiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringfiedItem);
        setItem(newItem);
      }catch(error) {
        setError(error);
      }
    }

    return {
      item,
      saveItem,
      error,
    };
}

export {useLocalStorage}