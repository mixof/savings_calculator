/*********************___________________ BUYING A CAR_________________________********************/
var carSlider = document.getElementById('car_buying_slider');

noUiSlider.create(carSlider, {
    start: 50000,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 200000
    },
    format: wNumb({
        decimals: 0,
        thousand: ','

    }),
    step: 500,

});

var directionField = $('#car_buying');

carSlider.noUiSlider.on('update', function (values, handle) {
    directionField.val(values[handle]);
    updateTotals();
});

directionField.on('input', function () {
if(this.value>0 && this.value<500) this.value=500;
    carSlider.noUiSlider.set(this.value);

    updateTotals();
});
/*********************___________________________________________________________********************/

/*********************___________________ Travel Leisure_________________________********************/
var travelSlider = document.getElementById('travel_leisure');

noUiSlider.create(travelSlider, {
    start: 10000,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100000
    },
    format: wNumb({
        decimals: 0,
        thousand: ','

    }),
    step: 500,

});

var travel_directionField = $('#travel_leisure_field');

travelSlider.noUiSlider.on('update', function (values, handle) {
    travel_directionField.val(values[handle]);
    updateTotals();
});

travel_directionField.on('input', function () {

    travelSlider.noUiSlider.set(this.value);
    updateTotals();
});
/*********************___________________________________________________________********************/

/*********************___________________ Service _________________________********************/
var serviceSlider = document.getElementById('service_entertainment');

noUiSlider.create(serviceSlider, {
    start: 10000,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100000
    },
    format: wNumb({
        decimals: 0,
        thousand: ','

    }),
    step: 500,

});

var service_directionField = $('#service_entertainment_field');

serviceSlider.noUiSlider.on('update', function (values, handle) {
    service_directionField.val(values[handle]);
    updateTotals();
});

service_directionField.on('input', function () {

    serviceSlider.noUiSlider.set(this.value);
    updateTotals();
});
/*********************___________________________________________________________********************/

/*********************___________________ Health_________________________********************/
var healthSlider = document.getElementById('health_wellness');

noUiSlider.create(healthSlider, {
    start: 10000,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100000
    },
    format: wNumb({
        decimals: 0,
        thousand: ','

    }),
    step: 500,

});

var health_directionField = $('#health_wellness_field');

healthSlider.noUiSlider.on('update', function (values, handle) {
    health_directionField.val(values[handle]);
    updateTotals();
});

health_directionField.on('input', function () {

    healthSlider.noUiSlider.set(this.value);
    updateTotals();
});
/*********************___________________________________________________________********************/

/*********************___________________ retail_________________________********************/
var retailSlider = document.getElementById('retail_gifts');

noUiSlider.create(retailSlider, {
    start: 10000,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100000
    },
    format: wNumb({
        decimals: 0,
        thousand: ','

    }),
    step: 500,

});

var retail_directionField = $('#retail_gifts_field');

retailSlider.noUiSlider.on('update', function (values, handle) {
    retail_directionField.val(values[handle]);
    updateTotals();
});

retail_directionField.on('input', function () {

    retailSlider.noUiSlider.set(this.value);
    updateTotals();
});
/*********************___________________________________________________________********************/

function updateTotals(){


        var sum=0;

        $( ".savings-calculator input.form-control" ).each(function( index ) {
            sum+=parseFloat($( this ).val().replace(/,/g, ''));

        });
    console.log(parseFloat('50,500',3));
        $('.savings-calculator .calc-total-spent').html("$"+numberWithCommas(sum));

        var car_total= parseFloat($('#car_buying').val().replace(/,/g, ''));
        var travel = parseFloat($('#travel_leisure_field').val().replace(/,/g, ''));
        var service = parseFloat($('#service_entertainment_field').val().replace(/,/g, ''));
        var health = parseFloat($('#health_wellness_field').val().replace(/,/g, ''));
        var retail = parseFloat($('#retail_gifts_field').val().replace(/,/g, ''));

        var total=0;

        total+=(car_total/100 * 5);
        total+=(travel/100 * 10);
        total+=(service/100 * 20);
        total+=(health/100 * 20);
        total+=(retail/100 * 15);

        total= Number((total).toFixed(1))

        total= numberWithCommas(total);

        $('.savings-calculator .calc-total-sum').html("$"+total);






}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function(){

});




