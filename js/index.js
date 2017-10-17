var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        app.member.onCreate();
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        /*var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/
        console.log('Received Event: ' + id);
    }
};
app.member=(()=>{
    var onCreate=()=>{
        setContentView();
        $('#arrow-box').click(e=>{
            e.preventDefault();
            var id= $('#id').val();
            var pass= $('#password').val();
            console.log('입력된 id, pass : '+id+' , '+pass);
            $.ajax({
                async : false,
                url : 'json/member.json',
                type : 'post',
                data : {id:id,pass:pass},
                dataType:'json',
                success : d=>{
                    alert('진입 성공');
                    $.each(d,(i,o)=>{   /!*d=data, i=index, o=object*!/
                        if(o.id === id && o.pass === pass){
                            checkval = true;
                            return false;
                        }else{
                            checkval = false; /!*checkval을 안주면 전역 (스태틱)이 된다.*!/
                        }
                    });
                    if(checkval === true){
                        alert('SUCCESS!! Votre adresse email est : '+id);
                        app.list.onCreate();
                    }else{
                        alert('FAIL!!');
                        $('#id').val('');
                        $('#password').val('');
                    }
                },
                error : e=>{
                    alert('ERROR!!');
                }
            });
        });
    };
    var setContentView=()=> {
        $('body').empty();
        $('body').css({
        'background-color': '#009999',
        'text-shadow': '0 0px 0 #f3f3f3',
        'font-family': '"나눔 고딕","Nanum Gothic","맑은 고딕","Malgun Gothic","Apple Gothic","돋움",Dotum,"Helvetica Neue",Helvetica,Arial,sans-serif !important'
        });
        $('<div></div>').attr('id', 'wrapper').appendTo('body');
        $('#wrapper')
            .css({
                'width': '100%',
                'height': '100%',
                'padding': '5%'
            })
            .html('<header>'+
                '  <div id="back-btn">'+
                '       <span class="arrow arrow-left"></span>'+
                '           <div><span class="pw-guide">비밀번호가 생각나지 않으세요?</span></div>'+
                '  </div>'+
                '  </header>'
            );
        $('header')
            .css({
                'position': 'relative',
                'width': '100%'
            });
        $('.pw-guide')
            .css({
                'position': 'absolute',
                'top': '10px',
                'right': '8px',
                'color': 'white',
                'font-size': '0.8em'
            });
        $('.arrow')
            .css({
                'position': 'relative',
                'display': 'inline-block',
                'margin': '8px',
                'padding': '8px',
                'box-shadow': '1px -1px 0 0 white inset'
            });
        $('.arrow-left').css({
            'transform': 'rotate(45deg)'
        });
        $('#wrapper')
            .append('<div id="container">' +
                '</div>');
        $('#container')
            .css({
                'font-size': '2.5em',
                'color': 'white',
                'padding': '5px',
                'margin-top': '20px'
            })
            .html('<p>로그인</p>');
        $('#wrapper')
            .append('<div id="content">' +
                '<div class="content-txt">'+
                '<span>이메일 주소</span><br>'+
                '<input type="text" id="id" class="id" placeholder="ID를 입력하세요"/><br>'+
                '</div>'+

                '<div class="content-txt">'+
                '<span>비밀번호</span><br>'+
                '<input type="password" id="password" class="password" placeholder="비밀번호를 입력하세요"/><br>'+
                '</div>'+
                '</div>');

        $('.content-txt').css({
            'border-bottom': '2px solid white',
            'color': 'white',
            'margin': '10px',
            'margin-top': '30px'
        });
        $('#id, #password').css({
            'border':'none',
            'border-right':'0px',
            'border-top':'0px',
            'boder-left':'0px',
            'boder-bottom':'0px',
            'outline': 'none',
            'background':'transparent',
            'color':'white',
            '-webkit-box-shadow':'0 0 0 1000px white inset !important',
            'margin-top': '10px'
        });
        $('input:-webkit-autofill',
            'input:-webkit-autofill:hover',
            'input:-webkit-autofill:active',
            'input:-webkit-autofill:focus').css( {
            'background-color': '#FFFFFF !important',
            'color': '#555 !important',
            '-webkit-box-shadow': '0 0 0 1000px white inset !important',
            '-webkit-text-fill-color': '#555555 !important'});

        $('#wrapper')
            .append('<footer>' +
                        '<div id="arrow-box">'+
                            '<div id="arrow-box2">'+
                                '<a id="arrow-a" href="#">'+
                                    '<span class="right"></span>'+
                                '</a>'+
                            '</div>'+
                        '</div>'+
                    '</footer>');
        $('footer').css({
            'position':'absolute',
            'bottom':'1.5em',
            'right':'2.5em'
        });
        $('#next-circle').css({
            'position': 'fixed',
            'bottom': '1em',
            'right': '2em'
        });
    }
    return {onCreate:onCreate};
})();
app.list=(()=>{
    var onCreate=()=>{
        setContentView();
    };
    var setContentView=()=>{
        $('body').empty();
        $('body').css({
            'background-color': '#ffffff',
            'font-family': '"나눔 고딕","Nanum Gothic","맑은 고딕","Malgun Gothic","Apple Gothic","돋움",Dotum,"Helvetica Neue",Helvetica,Arial,sans-serif !important'
        });
        $('<div></div>').attr('id', 'wrapper').appendTo('body');
        $('#wrapper')
            .html('<nav id="main-menu">\n' +
                '     <ul class="nav-bar">\n' +
                '          <li class="nav-button-home">\n' +
                '            <a href="#"><span class="underbar">추천</span></a></li>\n' +
                '          <li class="nav-button-services">\n' +
                '            <a href="#"><span class="underbar">숙소</span></a></li>\n' +
                '          <li class="nav-button-products">\n' +
                '            <a href="#"><span class="underbar">트립</span></a></li>\n' +
                '</nav>');

        $('#wrapper')
            .append(
                '<div id="container">' +
                '  <div id="content">' +
                '    <img src="http://images.contentful.com/22n7d68fswlw/502brzgxXqKCUq0qcQQMiI/b00421bd4d322dd4025228a993e8f178/KIKIDELIVERYSERICE_PHOTO_03.jpg?w=1200&h=630">' +
                '    <div id="content-txt">' +
                '        <span id="content-txt-info">개인실 / 침대 1개</span><br>' +
                '        <span id="content-txt-title">고먐미와 함께 해요</span><br>' +
                '        <span id="content-txt-price">￦16901 /박</span><br>' +
                '    </div>' +
                '  </div>' +
                '</div>');
        $('img').css({
            'width': '100%',
            'max-width':'100%',
            'vertical-align':'middle'
        });
        $('#container').css({
            'text-align': 'center',
            'margin-top': '5px',
            //'border': '1px solid red'
        });
        $('#content').css({
            //'border': '1px solid blue',
            'width': '90%',
           /* 'height': '225px',*/
            'margin': '0 auto'
        });
    };
    return {onCreate:onCreate};
})();
app.cookie={
    setCookie : (k,v) =>{
        document.cookie = k + "=" +v;
    },
    getCookie : k=>{
        var x = k + "=";
        var i = 0;
        var arr = document.cookie.split(';');
        for(i=0;i<arr.length;i++){
            var j = arr[i];
            while(j.charAt(0)==''){
                j = j.substring(1,j.length)
            }
            if(j.indexOf(x)==0){
                return j.substring(x.length,j.length);
            }
            return null;
        }
    },
    removeCookie : k=>{

    }
};
app.compUI={
    br    :()=>{return $('<br/>');},
    div   : x=>{return $('<div/>',{id:x});},
    h1    : x=>{return $('<h1/>',{id:x});},
    span  : x=>{return $('<span/>',{id:x});},
    iTxt  : x=>{return $('<input/>',{id:x,type:'text'});},
    aBtn  : x=>{return $('<a/>',{href:'#', role: 'button', id:x});},
    iBtn  : x=>{return $('<input/>',{id:x,type:'button'});},
    image : (x,y)=>{return $('<img/>',{id:x,src:y});},
    input : (x,y)=>{return $('<input/>',{id:x,type:y});},
    btn : x=>{return $('<button>',{id:x});},
    nav: x=>{return $('<nav/>',{id: x});},
    ul : x=>{return $('<ul/>',{id:x});},
    li : ()=>{return $('<li/>');},
    a : ()=>{return $('<a/>',{href:'#'});}
};
$(function(){
    app.initialize();
});
app.initialize();