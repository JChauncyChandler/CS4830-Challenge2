// JavaScript source code

var stadiums;[];



function stadiumAdd() {
    $('#stadiumtable tr:last').after('<tr><td><input id="stadiumName" /></td><td><input /></td><td><input /></td><td><button type="button" class="btn btn-success btn-sm" onclick="stadiumAdd()">Add</button><button type="button" class="btn btn-primary btn-sm">Update</button><button type="button" class="btn btn-danger btn-sm" onclick="stadiumDelete()">Delete</button></td></tr>');

}

function stadiumUpdate() {


}

function stadiumDelete() {

}

function playerAdd() {
    $('#playerTable tr:last').after('<tr><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><button type="button" class="btn btn-success btn-sm"onclick="playerAdd()">Add</button><button type="button" class="btn btn-primary btn-sm" onclick="playerUpdate()">Update</button><button type="button" class="btn btn-danger btn-sm" onclick="playerDelete()">Delete</button></td></tr>');
    

   

}

function playerUpdate() {

}

function playerDelete() {

}

function teamAdd() {
    $('#teamTable tr:last').after('<tr><td><input id="cityName" /></td><td><input id="teamName" /></td><td><select name="stadiums"></select></td><td><textarea></textarea></td> <td><button type="button" class="btn btn-success btn-sm" onclick="teamAdd()">Add</button><button type="button" class="btn btn-primary btn-sm" onclick="teamUpdate()">Update</button><button type="button" class="btn btn-danger btn-sm" onclick="teamDelete()">Delete</button></td> </tr>');
}

function teamUpdate() {

}

function teamDelete() {

}
