const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');


function addItem (e) {
    e.preventDefault();

    const newItem = itemInput.value;
    // form validation
    if(newItem === '' ) {
        alert('Please add an item')
        return; // to stop running if unput field is empty
    };

    //create list item

    const li = document.createElement('li');
    li.textContent = newItem;

    const button = newButton("remove-item btn-link text-red");
    
    //append button to li

    li.appendChild(button);
    itemList.appendChild(li);

    checkUi();
    itemInput.value;
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

// remove item function

function removeItem (e) {
    if(e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    }
    checkUi();
}

// clear function

function clearItems(e) {
    while(itemList.firstChild) {
        itemList.firstChild.remove();
    };
    checkUi();
}


function checkUi () {
    const list = itemList.querySelectorAll('li');
    if(list.length === 0) {
        filter.style.display = "none";
        clearBtn.style.display = "none";
    } else {
        filter.style.display = "block";
        clearBtn.style.display = "block";
    
    }

    // it could also be done like below using childElementCount
    
    // if (itemList.childElementCount === 0) {
    //     filter.style.display = "none";
    //     clearBtn.style.display = "none";
    // } else {
    //     filter.style.display = "block";
    //     clearBtn.style.display = "block";
    // }
} 
//Event Listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

checkUi();
