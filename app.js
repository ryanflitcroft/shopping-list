import { redirect, signInUser, signUpUser } from './fetch-utils.js';

const signInForm = document.querySelector('#signIn-form');
const signUpForm = document.querySelector('#signUp-form');

signInForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(signInForm);

    const email = data.get('inEmail');
    const password = data.get('inPassword');
    // console.log(email, password);

    const user = await signInUser(email, password);

    signInForm.reset();

    if (user) {
        redirect();
    } else {
        console.error(user);
    }
});

signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);

    const email = data.get('upEmail');
    const password = data.get('upPassword');
    // console.log(email, password);

    const user = await signUpUser(email, password);

    signUpForm.reset();

    if (user) {
        redirect();
    } else {
        console.error(user);
    }

});