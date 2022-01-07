export function renderItem(item) {
    const listItem = document.createElement('li');
    const itemCheckbox = document.createElement('input');
    const itemLabel = document.createElement('label');
    itemCheckbox.setAttribute('type', 'checkbox');
    itemCheckbox.setAttribute('name', `${item.name}`);
    itemLabel.setAttribute('for', `${item.name}`);
    
    itemLabel.textContent = `${item.name}`;

    itemCheckbox.append(itemCheckbox, itemLabel);
    listItem.append(itemCheckbox);

    return listItem;
}