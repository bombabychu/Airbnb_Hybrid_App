$('body').empty();
$('<div></div>').attr('id', 'wrapper').appendTo('body');
$('#wrapper')
    .html('<div style="width: 100%;">'
        +'<div style="margin-top: 50px;">'
        +'<div style="width: 65%;float: left;background-color: white">'
        +'<h1> 테스트 테스트 제발</h1>');
var arr = ['img/logo.png', 'img/logo.png'];
var table = '<table style="margin: 0 auto;">';
$.each(arr, (i, j) => {
    table += '<tr>';
    $.each(arr, (d, c) => {
        table +=
            '<td style="width: 10%;"><br>'
            +'<span><img src="'+arr[i]+'" style="width: 100px; height: 100px;" alt="" />'
            +'₩66,555 White Breeze Pool 1BD</br>'
            +'아파트 전체·침대2개</br></span>'
            +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
            +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
            +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
            +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
            +'<span class="glyphicon glyphicon-star" style="color: #006666"></span>'
            +'</td>'
    });
});
table += '</tr></table></div></div></div>';
$('#wrapper').append(table);