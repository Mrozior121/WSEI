function bigestSumOfTwoElements(array) {
  if (array.length === 0) {
    // Dodatkowe wyświetlenie w konsoli
    console.log(false);

    return false;
  } 
  
  else if (array.length === 1) {
    // Dodatkowe wyświetlenie w konsoli
    console.log(array[0]);

    return array[0];
  } 
  
  else {
    let first, second;

    // Poniższy if jest tylko na potrzeby prostego sortowania a'la bubble sort w pętli for niżej, w celu wybrania dwóch największych elementów tablicy
    if (array[0] > array[1]) {
      first = array[0];
      second = array[1];
    } 
    else {
      first = array[1];
      second = array[0];
    }

    // Jeśli pętla zawiera więcej elementów niż dwa, to wyszukujemy w całej tablicy dwie największe
    for (let i = 2; i < array.length; i++) {

      if (array[i] > first) {
        second = first;
        first = array[i];
      } 

      else if (array[i] > second && array[i] != first) {
          second = array[i];
      } 
    }

    // Dodatkowe wyświetlenie w konsoli
    console.log(first + second);

    return first + second;
  }
}

bigestSumOfTwoElements([1, 2, 3, 4]);
bigestSumOfTwoElements([]);
bigestSumOfTwoElements([76]);
bigestSumOfTwoElements([23, 45, 17, 12]);
