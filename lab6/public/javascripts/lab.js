

function createAirQuality() {
    if ($('#zip').val() === ""){
        window.alert("invalid zip!");
        return;
    }
    if ($('#airQuality').val() === ""){
        window.alert("invalid airQuality!");
        return;
    }

    let txdata = {
        zip:$('#zip').val(),
        airQuality:$('#airQuality').val() 
    };
    $.ajax({
        url:'/lab/register',
        method:'POST',
        contentType: 'application/json',
        data: JSON.stringify(txdata),
        dataType: 'json'
    })
    .done(function (data, textStatus, jqXHR) {
        $('#rxData').html(JSON.stringify(data, null, 2));
    })
    .fail(function (data, textStatus, jqXHR) {
        $('#rxData').html(JSON.stringify(data, null, 2));
    });
}

function readByZip() {
    let txdata = {
        zip: $('#zip').val()
    }
    $.ajax({
        url:'/lab/status',
        method:'GET',
        contentType: 'application/json',
        data: txdata,
        dataType: 'json'
    })
    .done(function (data, textStatus, jqXHR) {
        $('#rxData').html(JSON.stringify(data, null, 2));
    })
    .fail(function (data, textStatus, jqXHR) {
        $('#rxData').html(JSON.stringify(data, null, 2));
    });
}

$(function () {
    $('#btnCreate').click(createAirQuality);
    $('#btnRead').click(readByZip);
});