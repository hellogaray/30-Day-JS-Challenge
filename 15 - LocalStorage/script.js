// Select form and list elements
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

// Load stored items or initialize an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

// Function to add a new item
function addItem(event) {
    event.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = { text, done: false };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

// Function to toggle item completion status
function toggleDone(event) {
    if (!event.target.matches('input')) return;
    const index = event.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

// Function to update the list display
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
            <label for="item${i}">${plate.text}</label>
        </li>
    `).join('');
}

// Event listeners
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

// Initialize list display
populateList(items, itemsList);