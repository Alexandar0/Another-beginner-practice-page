function initiate()
{
   var saveButton = document.getElementById('save');
   var retrieveButton = document.getElementById('retrieve');
   var deleteButton = document.getElementById('delete');
   
   
   saveButton.addEventListener('click', saveItem);
   retrieveButton.addEventListener('click', retrieveItem);
   deleteButton.addEventListener('click', deleteItem);  
}

function saveItem()

{
	var key = document.getElementById('key').value;
	var value = document.getElementById('value').value;
	localStorage[key] = value;

}

function retrieveItem()

{
	var data = document.getElementById('data');
	var key = document.getElementById('key').value;
	var value = localStorage[key];
	data.innerHTML = '<div>' + key + ': ' + value + '</div>';

}

function deleteItem()
{
	if (confirm('Delete?'))
	{
		var key = document.getElementById('key').value;
		localStorage.removeItem(key);
		data.innerHTML = '<div>Deleted.</div>';
	}	
}		

addEventListener("load", initiate);