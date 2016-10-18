var stadiumsVar = [100];
        
function stadiumAdd(stadiumNames) {
    $('#stadiumtable tr:last').after('<tr><td><input id="stadiumName" /></td><td><input /></td><td><input /></td><td><button type="button" class="btn btn-success btn-sm" onclick="stadiumAdd(this.stadiumName)">Add</button><button type="button" class="btn btn-primary btn-sm" onclick="stadiumAdd(document.getElementById("stadiumName").value)">Update</button><button type="button" class="btn btn-danger btn-sm" onclick="$(this).closest("tr").remove();">Delete</button></td></tr>');
    
    $('stadiumsVar').add(stadiumName);
    
    var select = document.getElementById("stadiums"); 

    for(var i = 0; i < stadiumsVar.length; i++) {
        var opt = document.createElement("option");
        opt.innerHTML = stadiumsVar[i];
        opt.value = stadiumsVar[i];
        select.appendChild(opt);
    }
}
        
function stadiumUpdate(stadiumName) {
    $('stadiumsVar').add(stadiumName);
    
    var select = document.getElementById("stadiums"); 

    for(var i = 0; i < stadiumsVar.length; i++) {
        var opt = document.createElement("option");
        opt.innerHTML = stadiumsVar[i];
        opt.value = stadiumsVar[i];
        select.appendChild(opt);
    }
}

function playerAdd() {
    $('#playerTable tr:last').after('<tr><td><input /></td><td><input /></td><td><input /></td><td><input /></td><td><button type="button" class="btn btn-success btn-sm"onclick="playerAdd()">Add</button><button type="button" class="btn btn-primary btn-sm" onclick="playerUpdate()">Update</button><button type="button" class="btn btn-danger btn-sm" onclick="$(this).closest("tr").remove();">Delete</button></td></tr>');
}

function playerUpdate() {

}

function teamAdd() {
    $('#teamTable tr:last').after('<tr><td><input id="cityName" /></td><td><input id="teamName" /></td><td><select name="stadiums"></select></td><td><textarea></textarea></td> <td><button type="button" class="btn btn-success btn-sm" onclick="teamAdd()">Add</button><button type="button" class="btn btn-primary btn-sm" onclick="teamUpdate()">Update</button><button type="button" class="btn btn-danger btn-sm" onclick="$(this).closest("tr).remove();">Delete</button></td> </tr>');
}

function teamUpdate() {

}