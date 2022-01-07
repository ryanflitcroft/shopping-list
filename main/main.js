/* eslint-disable no-console */
import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listForm = document.querySelector('#list-form');
const itemList = document.querySelector('#item-list');
const deleteButton = document.querySelector('#delete-button');

console.log(listForm, itemList, deleteButton);

window.addEventListener('load', () => {

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