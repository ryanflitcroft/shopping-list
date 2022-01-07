# Shopping List

## Project Objectives

```zsh
git checkout -b workOnANewBranch
```

* Essential Goals:

  * On the list page load event, fetch the list items from supabase and render them to the page. Note that list items should have a quantity and an item name.

  * Add a list item to Supabase by using form input and button.

  * When a list item is added, clear out the shopping list and render the updated list of shopping items.

  * When a user clicks a list item, it becomes 'bought'. Update this state in Supabase, clear out the shopping list, and re-fetch and redisplay the updated items.

  * When a user clicks 'delete all shopping list items', delete the items. Update this state in Supabase, clear out the shopping list, and re-fetch and redisplay the updated items.

* Stretch Goals:

  * *TBD*

### HTML SETUP

**Should Include**:

* Form section:

  * Contains 1 text input for user to enter item to add to the list, 1 number input for quantity of item to add to the list, 1 submit button to create/update list in Supabase.

```html
<section>
  <form id="list-form">
    <label for="item">Item</label>
    <input type="text" name="item" placeholder="item" required>
    <label for="quantity">Quantity</label>
    <input type="text" name="quantity" value="1" min="0" required>
    <button type="submit" form="list-form">
  </form>
</section>
```

* Item list section:

  * Contains unordered list element. When user submits list-form, list item elements containing checkbox input elements will be appended to the UL element.

```html
<section>
  <ul id="item-list">
    <!-- Elements will be created dynamically:
    <li>
      <input type="checkbox" name="${item.name}">
      <label for="${item.name}">${item.name} - ${item.quantity}</label>
    </li>
    -->
  </ul>
</section>
```

* Delete section:

  * Contains 1 button element to delete all items from item list in Supabase.

```html
<section>
  <button type="button" id="delete-button">Delete List</button>
</section>
```

### JS SETUP

1. Grab essential DOM elements:

    * `const listForm = document.querySelector('#list-form');`

    * `const itemList = document.querySelector('#item-list');`

    * `const deleteButton = document.querySelector('#delete-button');`

2. addEventListener for:

    * listForm

    * deleteButton

3. Write functions for:

    * createItem(item) : create an item in Supabase for the logged-in user.

    * deleteAllItems() : delete all items in Supabase for the logged-in user.

    * getItems() : get all items in Supabase for the logged-in user.

    * buyItem(id) : complete this item in Supabase for the logged-in user.

    * renderItem(item) : takes in an object and returns a DOM element.

    * displayShoppingListItems() : fetch items, clear out the list, and redisplay.

*note*: TDD for each pure function
