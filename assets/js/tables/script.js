/*
Author: 	Denisa Mihut

*/
/******************************************************************************/
/******************************************************************************/

var buttons =
    '<button type="button" class="btn btn-primary editBtn mr-1" data-toggle="modal" data-target="#editModal"><i class="fas fa-pen"></i> Edit</a> ' +
    '<button type="button" class="btn btn-danger deleteBtn"><i class="far fa-trash-alt"></i> Delete</button> '
var dataSet = [
    ["Architect", "Entry level Architect needed", "Comsa Builders", buttons],
    ["Bartender", "Great Job opportunity", "Steam Bar", buttons],
    ["Bartender", "Need a new bartender", "Z Club", buttons],
    ["Designer", "Junior designer", "Avalanche", buttons],
    ["Developer", "Laravel PHP developer", "N-Comp", buttons],
    ["Developer", "Senior needed", "XYZ", buttons],
    ["Developer", "Full stack dev wanted", "Company", buttons],
    ["Developer", "HTML CSS developer", "New Comp", buttons],
    ["Illustrator", "We need an illustrator", "Avalanche", buttons],
    ["Sales Supervisor", "Job opportunity", "N-Comp", buttons],
    ["Architect", "Entry level Architect needed", "Comsa Builders", buttons],
    ["Bartender", "Great Job opportunity", "Steam Bar", buttons],
    ["Bartender", "Need a new bartender", "Z Club", buttons],
    ["Designer", "Junior designer", "Avalanche", buttons],
    ["Developer", "Laravel PHP developer", "N-Comp", buttons],
    ["Developer", "Senior needed", "XYZ", buttons],
    ["Developer", "Full stack dev wanted", "Company", buttons],
    ["Developer", "HTML CSS developer", "New Comp", buttons],
    ["Illustrator", "We need an illustrator", "Avalanche", buttons],
    ["Sales Supervisor", "Job opportunity", "N-Comp", buttons],
    ["Architect", "Entry level Architect needed", "Comsa Builders", buttons],
    ["Bartender", "Great Job opportunity", "Steam Bar", buttons],
    ["Bartender", "Need a new bartender", "Z Club", buttons],
    ["Designer", "Junior designer", "Avalanche", buttons],
    ["Developer", "Laravel PHP developer", "N-Comp", buttons],
    ["Developer", "Senior needed", "XYZ", buttons],
    ["Developer", "Full stack dev wanted", "Company", buttons],
    ["Developer", "HTML CSS developer", "New Comp", buttons],
    ["Illustrator", "We need an illustrator", "Avalanche", buttons],
    ["Sales Supervisor", "Job opportunity", "N-Comp", buttons],
    ["Architect", "Entry level Architect needed", "Comsa Builders", buttons],
    ["Bartender", "Great Job opportunity", "Steam Bar", buttons],
    ["Bartender", "Need a new bartender", "Z Club", buttons],
    ["Designer", "Junior designer", "Avalanche", buttons],
    ["Developer", "Laravel PHP developer", "N-Comp", buttons],
    ["Developer", "Senior needed", "XYZ", buttons],
    ["Developer", "Full stack dev wanted", "Company", buttons],
    ["Developer", "HTML CSS developer", "New Comp", buttons],
    ["Illustrator", "We need an illustrator", "Avalanche", buttons],
    ["Sales Supervisor", "Job opportunity", "N-Comp", buttons],
    ["Architect", "Entry level Architect needed", "Comsa Builders", buttons],
    ["Bartender", "Great Job opportunity", "Steam Bar", buttons],
    ["Bartender", "Need a new bartender", "Z Club", buttons],
    ["Designer", "Junior designer", "Avalanche", buttons],
    ["Developer", "Laravel PHP developer", "N-Comp", buttons],
    ["Developer", "Senior needed", "XYZ", buttons],
    ["Developer", "Full stack dev wanted", "Company", buttons],
    ["Developer", "HTML CSS developer", "New Comp", buttons],
    ["Illustrator", "We need an illustrator", "Avalanche", buttons],
    ["Sales Supervisor", "Job opportunity", "N-Comp", buttons]

];

$(document).ready(function () {
    $('#jobList').DataTable({
        data: dataSet,
        columns: [
            { title: "Title" },
            { title: "Company Name" },
            { title: "Description" },
            { title: "Actions" },

        ]
    });
});

/*********************pagination+search*******************************/

$(document).ready(function () {
    var eventFired = function (type) {
        var n = $('#jobInfo')[0];
        n.innerHTML += '<div>' + type + ' event - ' + new Date().getTime() + '</div>';
        n.scrollTop = n.scrollHeight;
    }

    $('#jobList').DataTable();
});


/*****************************loading*********************************************/

var body = document.getElementsByTagName('body')[0];
var removeLoading = function () {

    setTimeout(function () {
        body.className = body.className.replace(/loading/, '');
    }, 2000);
};
removeLoading();

/*************************add+from  show+hide******************************************/

const cancel = document.getElementById("cancelBtn");
const form = document.getElementById("jobInput");
const btn = document.getElementById("toggle");
btn.onclick = function () {
    if (form.style.display !== "block") {
        form.style.display = "block";
        btn.style.display = "none"
    } else {
        form.style.display = "none";
        btn.style.display = "none"
    }
};
cancel.onclick = function () {
    if (form.style.display !== "none") {
        form.style.display = "none";
        btn.style.display = "block";
    }
};

/*****************************table data manipulation***********************************/

$(function () {

    var table = $('#jobList').DataTable();

    /*****************************save row*********************************************/
    $('#saveBtn').on('click', function () {
        var title = $('#jobTitle').val();
        var name = $('#compName').val();
        var description = $('#description').val();

        if (title != "" && name != "" && description != "") {
            $('#jobList tbody').append('<tr class="child"><td>' + title + '</td><td>' + name + '</td><td>' + description + '</td><td>' + buttons + '</td >');
        }
    });
    /*****************************remove row******************************************/

    $(document).on('click', '.deleteBtn', function () {

        if (confirm('Are you sure to delete this record?')) {
            $(this).parent().parent().remove();
        }
    });
    /*****************************edit and save  row********************************************/
    $('#jobList').on('click', '.editBtn', function () {
        $("#editModal").modal('show');
        var rowElement = $(this).closest("tr");
        var rowIndex = table.row(rowElement).index();
        document.getElementById('jobTitleEdit').value = dataSet[rowIndex][0];
        document.getElementById('compNameEdit').value = dataSet[rowIndex][1];
        document.getElementById('descriptionEdit').value = dataSet[rowIndex][2];
        $('#saveBtnModal').on('click', function () {
            dataSet[rowIndex][0] = document.getElementById('jobTitleEdit').value;
            dataSet[rowIndex][1] = document.getElementById('compNameEdit').value;
            dataSet[rowIndex][2] = document.getElementById('descriptionEdit').value;
            table.clear().draw();
            table.rows.add(dataSet);
            table.columns.adjust().draw();
            $("#editModal").modal('hide');
        });
        console.log(rowIndex);
    })


    /*****************************cancel edit operation*******************************************/

    $(' #cancelBtnModal').on('click', function () {
        $("#editModal").hide();
    });


})
