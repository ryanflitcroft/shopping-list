/* eslint-disable no-console */
import { buyItem, checkAuth, createItem, deleteAllItems, getItems, logout, unbuyItem } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listForm = document.querySelector('#list-form');
const itemList = document.querySelector('#item-list');
const deleteButton = document.querySelector('#delete-button');

// console.log(listForm, itemList, deleteButton);

window.addEventListener('load', async() => {
    await displayListItems();
});

logoutButton.addEventListener('click', () => {
    logout();
});

listForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    
    const data = new FormData(listForm);
    const name = data.get('name');
    const quantity = data.get('quantity');

    const nameInput = document.querySelector('input');
    nameInput.focus();

    listForm.reset();

    const item = {
        name,
        quantity
    };

    // console.log(item);
    await createItem(item);
    displayListItems();
});

deleteButton.addEventListener('click', async() => {
    await deleteAllItems();
    await displayListItems();
    console.log(await getItems());
});

async function displayListItems() {
    itemList.textContent = '';
    let items = await getItems();
    // console.log(items);

    if (items.length) {
        deleteButton.classList.remove('hidden');
    } else {
        deleteButton.classList.add('hidden');
    }

    for (let item of items) {
        const listItem = renderItem(item);
        itemList.append(listItem);

        
        listItem.addEventListener('click', async() => {
            if (!item.purchased) {
                await buyItem(item.id);
            } else {
                await unbuyItem(item.id);
            }
            displayListItems();
        });   
    }   
}