function init () {
    const buttonUnshift = document.querySelector("#button-1");
    const buttonPop = document.querySelector("#button-2");
    const buttonPushClone = document.querySelector("#button-3");

    const shoppingList = document.querySelector("#shopping-list");

    buttonUnshift.addEventListener("click", function() {
      let newItem = document.createElement("li");

      shoppingList.insertBefore(newItem, shoppingList.firstChild);

      newItem.innerText = "chleb";
    });

    buttonPop.addEventListener("click", () => {
      let lastItem = document.querySelector('#shopping-list > li:last-child');

      if (lastItem !== null) {
        lastItem.parentNode.removeChild(lastItem);
      }
    })

    buttonPushClone.addEventListener("click", function () {
        let getSecondListItem = document.querySelector('#shopping-list > li:nth-child(2)');
        let newElement = document.createElement('li');

        if (getSecondListItem !== null) {
            newElement.innerText = getSecondListItem.innerText;

            shoppingList.appendChild(newElement);
        }
    })
}

document.addEventListener('DOMContentLoaded', init);