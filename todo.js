// To Do JavaScript
// Michael McClure


window.onload = function() {
	var form = 	document.getElementById('item_form'),
			list = 	document.getElementById('item_list'),
			focus = document.getElementById('new_item');

// Focus On New Item Field
	focus.focus();


// Click Events
	form.onsubmit = function(event) {
		event.preventDefault();
		var deleteButton= document.createElement('button'),
				deleteNode 	= document.createTextNode('X'),
				newItem 		= document.createElement('li'),
				newItemNode = document.createTextNode(this.item.value);

		// Manipulate Nodes
		deleteButton.appendChild(deleteNode);
		list.appendChild(newItem);
		newItem.appendChild(deleteButton);
		newItem.appendChild(newItemNode);

		// Delete Buttons
		deleteButton.onclick = function() {
			newItem.remove();
			focus.focus();
		}
		// Clear text field
		focus.value = "";
		focus.focus();
	}
}
