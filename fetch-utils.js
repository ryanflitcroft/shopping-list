const SUPABASE_URL = 'https://obnfgrkcemubousdwptz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTUxNTg4MCwiZXhwIjoxOTU3MDkxODgwfQ.UbJaYhr0lyOSqJoVDvtjCznvEZF7ay5KN1iEQw6d2rA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirect() {
    if (await getUser()) {
        location.replace('./main');
    }
}

export async function signUpUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getItems() {
    const response = await client
        .from('list')
        .select()
        .order('id', { ascending: false });

    return checkError(response);
}

export async function createItem(item) {
    const response = await client
        .from('list')
        .insert(item);

    return checkError(response);
}

export async function buyItem(id) {
    const response = await client
        .from('list')
        .update({ purchased: true })
        .match({ id });
        
    return checkError(response);
}

export async function unbuyItem(id) {
    const response = await client
        .from('list')
        .update({ purchased: false })
        .match({ id });
        
    return checkError(response);
}

export async function deleteAllItems() {
    const response = await client
        .from('list')
        .delete();

    return checkError(response);
}