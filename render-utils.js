export function renderItem(item) {
    const listItem = document.createElement('span');
    listItem.textContent = `${item.name} - ${item.quantity}`;
    
    if (item.purchased){
        listItem.classList.add('purchased');
    } else if (!item.purchased) {
        listItem.classList.remove('purchased');
    }

    listItem.append();

    return listItem;
}