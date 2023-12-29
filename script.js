const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem (e) {
    e.preventDefault();

    const newItem = itemInput.value;
    // form validation
    if(newItem === '' ) {
        alert('Please add an item')
    };

    //create list item

    const li = document.createElement('li');
    li.textContent = newItem;

    const button = newButton("remove-item btn-link text-red");
    
    //append button to li

    li.appendChild(button);
    itemList.appendChild(li);

    newItem = '';
}

//button for list item

function newButton (classes) {
    const button = document.createElement('button');
    button.classList = classes;
    //icon inside button

    const icon = newIcon("fa-solid fa-xmark");

    button.appendChild(icon);
    return button;
}

// icon for button and list item

function newIcon (classes) {
    const icon = document.createElement('i');
    icon.classList = classes;
    return icon;
}

//Event Listener
itemForm.addEventListener('submit', addItem);