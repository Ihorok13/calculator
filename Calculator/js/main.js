function insrt(num) {
	$('.calc-display').val($('.calc-display').val() + num);
}
function eql () {
    $('calc-display').val(eval($('.calc-display').val()));
}
function AC(){
    $('calc-display').val('');
}