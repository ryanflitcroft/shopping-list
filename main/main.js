/* eslint-disable no-console */
import { checkAuth, createItem, getItems, logout } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listForm = document.querySelector('#list-form');
const itemList = document.querySelector('#item-list');
const deleteButton = document.querySelector('#delete-button');

// console.log(listForm, itemList, deleteButton);

window.addEventListener('load', async() => {
    await displayListItems();
    // await createItem({ name: 'item', quantity: 2 });
});

logoutButton.addEventListener('click', () => {
    logout();
});

listForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    listForm.reset();
});

deleteButton.addEventListener('click', () => {

});

async function displayListItems() {
    itemList.textContent = '';
    const items = await getItems();
    // console.log(items);

    if (items.length) {
        deleteButton.classList.remove('hidden');
    }

    for (let item of items) {
        const listItem = renderItem(item);
        itemList.append(listItem);
    }
}