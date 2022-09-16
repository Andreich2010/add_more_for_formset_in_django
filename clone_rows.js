$('#add_more').click(function () {
        cloneMore('tbody tr:last', 'form');
    });


function cloneMore(selector, type) {
    var newElement = $(selector).clone();
    var total = $('#id_' + type + '-TOTAL_FORMS').val();


    total++;
    $('#id_' + type + '-TOTAL_FORMS').val(total);
    $(selector).after(newElement);
    }
