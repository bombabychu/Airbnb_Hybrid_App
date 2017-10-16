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
    };
    var setContentView=()=> {
        $('body').empty();
        $('body').css({
            'background-color': '#009999',
            'text-shadow':' 0 0px 0 #f3f3f3',
            'font-family': '"나눔 고딕","Nanum Gothic","맑은 고딕","Malgun Gothic","Apple Gothic","돋움",Dotum,"Helvetica Neue",Helvetica,Arial,sans-serif !important'
        });
        $('<div></div>').attr('id', 'wrapper').appendTo('body');
        $('#wrapper')
            .css({
                'width': '100%',
                'height': '100%',
                'padding': '5%'
            })
            .html('<header>' +
                '   <div id="back-btn">' +
                '       <span class="arrow arrow-left"></span>' +
                '           <div><span class="pw-guide">비밀번호가 생각나지 않으세요?</span></div>'+
                '   </div>' +
                '   </header>'
            );
        $('header')
            .css({
                'position': 'relative',
                'width': '100%'
            });
        $('.pw-guide')
            .css({
                'position': 'absolute',
                'top': '8px',
                'right': '8px',
                'color': 'white',
                'font-size': '0.5em'
            });
        $('.arrow').css({
        'position': 'relative',
        'display': 'inline-block',
        'margin': '8px',
        //set size
        'padding': '8px',
        //set tickness
        'box-shadow': '1px -1px 0 0 white inset'
        });
        $('.arrow-left').css({
            'transform': 'rotate(45deg)',
            'left': '@margin'
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
                    '<div style="border-bottom: 2px solid white;color: white;">'+
                    '<span>이메일 주소</span><br>'+
                    '<input type="text" id="id" class="id" placeholder="ID를 입력하세요"/><br>'+
                    '</div>'+

                    '<div style="border-bottom: 2px solid white;color: white;">'+
                    '<span>비밀번호</span><br>'+
                    '<input type="password" id="password" class="password" placeholder="비밀번호를 입력하세요"/>'+
                    '</div>'+
                    '</div>');
        $('#id, #password').css({
            'border':'none',
            'border-right':'0px',
            'border-top':'0px',
            'boder-left':'0px',
            'boder-bottom':'0px',
            'outline': 'none',
            'background':'transparent',
            'color':'white',
            '-webkit-box-shadow':'0 0 0 1000px white inset !important'
        });
        $('input:-webkit-autofill',
            'input:-webkit-autofill:hover',
            'input:-webkit-autofill:active',
            'input:-webkit-autofill:focus').css( {
            'background-color': '#FFFFFF !important',
            'color': '#555 !important',
            '-webkit-box-shadow': '0 0 0 1000px white inset !important',
            '-webkit-text-fill-color': '#555555 !important'});
    }
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