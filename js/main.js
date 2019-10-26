// entry
document.querySelector('#new-entry').addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    var entryVal = document.querySelector('#new-entry').value;
    
    if(entryVal.length != 0) {
      var todolist = document.querySelector('#todo ul');
      var todolength = todolist.getElementsByTagName('li').length;
      
      var newLi = '<li id="item-' + todolength + '">' + '<div class="item right-margin-l">' + entryVal + '</div>';
      newLi += '<a class="edit" onclick="editItem()" href="#"><i class="fas fa-pencil-alt right-margin-l"></i></a>';
      newLi += '<a class="delete" onclick="deleteItem(' + todolength + ')" href="#"><i class="far fa-minus-square right-margin-l"></i></a>';
      newLi += '<a class="finish" onclick="finish(' + todolength + ')" href="#"><i class="fas fa-check"></i></a>'
  
      todolist.innerHTML += newLi;
    }
  }
});

// finish
function finish(num) {
  var query = '#todo ul #item-' + num + ' div';
  var todoItemValue = document.querySelector(query).innerHTML;
  
  var donelist = document.querySelector('#done ul');
  var donelength = donelist.length;

  var newLi = '<li id="done-' + donelength + '">' + '<div class="item right-margin-l">' + todoItemValue + '</div>';
  
  donelist.innerHTML += newLi;

  deleteItem(num);
}

// delete
function deleteItem(num) {
  var query = '#todo ul #item-' + num;
  var item = document.querySelector(query);
  item.parentNode.removeChild(item);
}

// edit
function editItem() {
  alert('Edit list feature is not available yet');
}