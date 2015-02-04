﻿/* enable strict mode */
"use strict";


function deleteTable() {
    $(document).ready(function () {
        $("#table2").remove();  //deletes table if it exists
        $("#message").empty();  //clears message div text

    });
}
var showContent,
    getContent,
    redipsInit;

function enableDrag() {
    deleteTable();                                              //calls delete function
    var size = document.getElementById("floorsize");
    var floorsize = size.options[size.selectedIndex].value;     //gets floorsize from selected drop down menu
    var table = document.createElement('TABLE');                //create floorplan table
    table.id = 'table2';                                        //assigns table2 as ID for table
    var cgroup = document.createElement('COLGROUP');
    var tablebod = document.createElement('TBODY');
    cgroup.width = '100';
    table.appendChild(tablebod);
    if (floorsize == "Pick restaurant size") {                  //checks if size has been selected
        alert("Pick a value from the dropdown list");           //alert to inform user a choice must be made
    }
    else {
        alert("JS create plan enabled")
        var width,                          //creation of height X width variables
            height,
            tabHeight,
            tabWidth;
        if (floorsize == "small") {         //small floorplan size
            width = 5;
            height = 5;

        }
        else if (floorsize == "medium") {   //medium
            width = 10;
            height = 10;
        }
        else if (floorsize == "large") {    //large
            width = 20;
            height = 20;
        }
        else {                              //X-Large (Too big IMO, will try to reduce size of boxes or something)
            width = 35;
            height = 35;
        }
        tabHeight = document.getElementById("height");
        tabHeight.value = height;                       //sets table height input field to height chosen by user
        tabWidth = document.getElementById("width");
        tabWidth.value = width;                         //sets table width input field to height chosen by user

        for (var i = 0; i < width; i++) {               //creation of rows and columns,uses for loops to loop through based on specified size
            var tr = document.createElement('TR');
            tablebod.appendChild(tr);

            for (var j = 0; j < height; j++) {
                var td = document.createElement('TD');
                td.id = 'td' + i + j;
                td.width = '100';
                td.height = '50';
                tr.appendChild(td);
            }
        }
        right.appendChild(table);
        REDIPS.drag.initTables();
    }

}

// get content (DIV elements in TD)
getContent = function (id) {
    var td = document.getElementById(id),
		content = '',
		cn, i;
    // TD can contain many DIV elements
    for (i = 0; i < td.childNodes.length; i++) {
        // set reference to the child node
        cn = td.childNodes[i];
        // childNode should be DIV with containing "drag" class name
        if (cn.nodeName === 'DIV' && cn.className.indexOf('drag') > -1) { // and yes, it should be uppercase
            // append DIV id to the result string
            content += cn.id + '_';
        }
    }
    // cut last '_' from string
    content = content.substring(0, content.length - 1);
    // return result
    return content;
};


function saveLayout() {
    $("#message").empty(); //clears the message div text
    var table = document.getElementById("table2");
    var message = document.getElementById("message");
    var counter = 0;
    for (var i = 0; i < table.rows.length; i++) {           //iterate through rows
        var row = table.rows[i];                            //rows would be accessed using the "row" variable assigned in the for loop 
        for (var j = 0, col; col = row.cells[j]; j++) {     //iterates through coloumns
            var tdContent = getContent('td' + i + j);       //gets the type of object(s) within the current td
            if (tdContent != "") {                          //checks if td is empty
                counter++;                                  //counter for numObjects
                var str = tdContent;
                counter = counter + (str.split('_').length - 1);    //counts how many times underscore appears (which separates objects if 2 or more are in 1 td)
            }
            //sets message div text to include any objects added to the table
            message.innerHTML = message.innerHTML + '<br />' + j + "," + i + " " + tdContent;
        }
    }
    var tabobj = document.getElementById("numObjects");
    tabobj.value = counter;
}