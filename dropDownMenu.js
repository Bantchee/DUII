const dropDownMenu = () => {
    // menu type div
    const state = {
        ddMenu: null,
        button: null,
        itemContainer: null,
        items: [],
    };

    // In > Out: String, Object, String, String
    // In > Out: child, parent, class, id
    const createElement = (elementType, parent, classes = null, id = null) => {
        const element = document.createElement(elementType);
        parent.appendChild(element);
        if (classes !== null) {
        if (Array.isArray(classes)) {
            for (let i = 0; i < classes.length; i++) {
            element.classList.add(classes[i]);
            }
        } else {
            element.classList.add(classes);
        }
        }
        if (id !== null) {
            element.setAttribute("id", id);
        }
        return element;
    };

    const createDropDownMenu = (btnText, itemsText = [], parent) => {
        state.ddMenu = createElement('div', parent, 'drop-down-menu');
        createButton(btnText, state.ddMenu);
        createItems(itemsText, state.ddMenu);

        bindButton();
    };

    const removeDropDownMenu = () => {
        document.body.removeChild(state.ddMenu);
    }

    const createButton = (text, parent) => {
        state.button = createElement('button', parent);
        state.button.textContent = text;
    };
    
    // list of Item Names
    const createItems = (strArr, containerParent) => {
        state.itemContainer = createElement('div', containerParent, 'item-container');
        state.items = strArr.map((text, index) => createItem(text, index, state.itemContainer));
    };
    
    const createItem = (text, index, parent) => {
        const item = createElement('div', parent, `item-${index}`);
        item.textContent = text;
        return item;
    }

    const bindButton = () => {
        state.button.addEventListener('click', () => {
            state.itemContainer.classList.toggle('hide');
        });
    };

    return Object.assign(
        {state},
        {createDropDownMenu},
        {removeDropDownMenu},
    );
}