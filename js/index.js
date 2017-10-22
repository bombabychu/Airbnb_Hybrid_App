var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        app.member.onCreate();
    },
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        /*var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/
        console.log('Received Event: ' + id);
    }
};
app.member = (() => {
    var onCreate = () => {
        setContentView();
        $('#arrow-box').click(e => {
            e.preventDefault();
            var id = $('#id').val();
            var pass = $('#password').val();
            console.log('입력된 id, pass : ' + id + ' , ' + pass);
            $.ajax({
                async: false,
                url: 'json/member.json',
                type: 'post',
                data: {id: id, pass: pass},
                dataType: 'json',
                success: d => {
                    alert('진입 성공');
                    $.each(d, (i, o) => {
                        /!*d=data, i=index, o=object*!/
                        if (o.id === id && o.pass === pass) {
                            checkval = true;
                            return false;
                        } else {
                            checkval = false;
                            /!*checkval을 안주면 전역 (스태틱)이 된다.*!/
                        }
                    });
                    if (checkval === true) {
                        alert('SUCCESS!! Votre adresse email est : ' + id);
                        app.list.onCreate();
                    } else {
                        alert('FAIL!!');
                        $('#id').val('');
                        $('#password').val('');
                    }
                },
                error: e => {
                    alert('ERROR!!');
                }
            });
        });
    };
    var setContentView = () => {
        $('body').empty();
        $('body').css({
            'background-color': '#009999',
            'text-shadow': '0 0px 0 #f3f3f3'
        });
        $('<div></div>').attr('id', 'wrapper').appendTo('body');
        $('#wrapper')
            .css({
                'width': '100%',
                'height': '100%',
                'padding': '5%'
            })
            .html('<header>' +
                '  <div id="back-btn">' +
                '       <span class="arrow arrow-left"></span>' +
                '           <div><span class="pw-guide">비밀번호가 생각나지 않으세요?</span></div>' +
                '  </div>' +
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
                '<div class="content-txt">' +
                '<span>이메일 주소</span><br>' +
                '<input type="text" id="id" class="id" placeholder="ID를 입력하세요"/><br>' +
                '</div>' +

                '<div class="content-txt">' +
                '<span>비밀번호</span><br>' +
                '<input type="password" id="password" class="password" placeholder="비밀번호를 입력하세요"/><br>' +
                '</div>' +
                '</div>');

        $('.content-txt').css({
            'border-bottom': '2px solid white',
            'color': 'white',
            'margin': '10px',
            'margin-top': '30px'
        });
        $('#id, #password').css({
            'border': 'none',
            'border-right': '0px',
            'border-top': '0px',
            'boder-left': '0px',
            'boder-bottom': '0px',
            'outline': 'none',
            'background': 'transparent',
            'color': 'white',
            '-webkit-box-shadow': '0 0 0 1000px white inset !important',
            'margin-top': '10px'
        });

        $('#wrapper')
            .append('<footer>' +
                '<div id="arrow-box">' +
                '<div id="arrow-box2">' +
                '<a id="arrow-a" href="#">' +
                '<span class="right"></span>' +
                '</a>' +
                '</div>' +
                '</div>' +
                '</footer>');
        $('footer').css({
            'position': 'absolute',
            'bottom': '1.5em',
            'right': '2.5em'
        });
        $('#next-circle').css({
            'position': 'fixed',
            'bottom': '1em',
            'right': '2em'
        });
    }
    return {onCreate: onCreate};
})();
app.list = (() => {
    var onCreate = () => {
        setContentView();
    };
    var setContentView = () => {
        $('body').empty();
        $('body').css({
            'background-color': '#ffffff',
            'font-family': '"나눔 고딕","Nanum Gothic","맑은 고딕","Malgun Gothic","Apple Gothic","돋움",Dotum,"Helvetica Neue",Helvetica,Arial,sans-serif !important'
        });
        $('<div></div>').attr('id', 'wrapper').appendTo('body');
        $('#wrapper')
            .html(
                '<div class="nav-bottom-ligne"></div>' +
                '<nav class="navbar">' +
                '  <ul class="navbar-ul">' +
                '    <li><a href="#">추천</a></li>' +
                '    <li><a href="#">숙소</a></li>' +
                '    <li><a href="#">트립</a></li>' +
                '  </ul>' +
                '</nav>' +
                '\n' +
                '<div id="container">' +
                '  <div id="contents">'
            );
        $('#contents').css({
            'margin-top': '33px',
            'padding': '10px'
        });
        var arr = [
            'http://78.media.tumblr.com/524f336bcedd6025a8ae58bef1a98cd6/tumblr_neevvxrk8V1qk5vl4o1_1280.jpg',
            'http://78.media.tumblr.com/52963a91e5737ee79b53352636cb0c56/tumblr_opgndvpwUN1qk5vl4o2_1280.jpg',
            'http://78.media.tumblr.com/138a55eafe051ed3ebb48967aa77bdb9/tumblr_o37ng0FdFI1qk5vl4o2_r1_1280.jpg',
            'http://cfile29.uf.tistory.com/image/17747C314C8EDA5A51D836',
            'http://yepan.net/data/file/news/thumb/600x0_90/3531380511_b4cbae22_013.jpg',
            'http://images.contentful.com/22n7d68fswlw/502brzgxXqKCUq0qcQQMiI/b00421bd4d322dd4025228a993e8f178/KIKIDELIVERYSERICE_PHOTO_03.jpg?w=1200&h=630'
        ];
        var i = 0;
        for (i = 0; i < 3; i++) {
            var content =
                '<div id="content' + i + '" class="list-content">' +
                '    <div id="img-swifer' + i + '" class="main-carousel"></div>' +
                '    <div class="content-txt">' +
                '        <span id="content-txt-info">개인실 / 침대 1개</span><br>' +
                '        <span id="content-txt-title">One room in Seoul</span><br>' +
                '        <span id="content-txt-price">￦16901 /박</span><br>' +
                '    </div>' +
                '</div>';

            //$('#img-swifer0').load("flickity.html");
            $('#contents').append(content);

            for(var j=0;j<arr.length;j++) {
                $('#img-swifer' + i + '').append('<div class="carousel-cell"><img class="list-img" src="' + arr[j] + '"></div>');
            }
            $('#img-swifer' + i + '').flickity({
                // options
                cellAlign: 'left',
                contain: true
            });
            $('.flickity-prev-next-button svg').css({
                'width':'0'
            });
            $('.flickity-prev-next-button').css({
                'width':'0',
                'background':'transparent'
            });
            $('.flickity-page-dots').css({
                'bottom':'0px'
            });
            $('.flickity-page-dots .dot').css({
                'width':'12px',
                'height':'12px',
                'opacity':'1',
                'background':'transparent',
                'border':'1px solid white',
            });
            $('.flickity-page-dots .dot.is-selected').css({
                'background':'white'
            });
        }
        $('#container').css({
            'text-align': 'center',
            'margin-top': '5px'
        });
        for (i = 0; i < 6; i++) {
            $('#content' + i + '').click(e => {
                alert('선택한 content ID : ' + i);
                //이 시점에서 디테일로 빠져야한다.
                app.detail.onCreate();
            });
        }
    };
    return {onCreate: onCreate};
})();
app.detail = (() => {
    var onCreate = () => {
        setContentView();
        $('#back-btn').click(e => {
            app.list.onCreate();
        });
        $('#res-btn').click(e => {
            app.reservation.onCreate();
        });
    };
    var setContentView = () => {
        $('body')
            .html(
                '<header>' +
                '  <div >' +
                '       <span id="back-btn" class="arrow arrow-left"></span>' +
                '  </div>' +
                '</header>'
            )
            .css({
                'background-color': '#ffffff',
                'font-family': '"나눔 고딕","Nanum Gothic","맑은 고딕","Malgun Gothic","Apple Gothic","돋움",Dotum,"Helvetica Neue",Helvetica,Arial,sans-serif !important'
            });
        $('header')
            .css({
                'position': 'fixed',
                'width': '100%',
                'padding': '5%'
            });
        $('.arrow')
            .css({
                'position': 'relative',
                'display': 'inline-block',
                'margin': '8px',
                'padding': '8px',
                'box-shadow': '1px -1px 0 0 black inset'
            });
        $('.arrow-left').css({
            'transform': 'rotate(45deg)'
        });
        $('<div></div>').attr('id', 'wrapper').appendTo('body');
        $('#wrapper')
            .html(
                '<div id="container">' +
                '<div id="contents">' +
                '</div>' +
                '</div>');
        var detailImg =
            'http://78.media.tumblr.com/524f336bcedd6025a8ae58bef1a98cd6/tumblr_neevvxrk8V1qk5vl4o1_1280.jpg';
        $('#contents').before(app.compUI.image('detail-img', detailImg));
        $('#detail-img').addClass('detail-img');
        $('#contents').append(
            '<div class="detail-title">One room in Seoul City</div>\n' +
            '<div class="detail-content" >개인실<br>호스트: <a href="#">"아이디"</a> 님</div>\n' +
            '<div class="detail-content-icon" >' +
            '<div class="hostel-icon"><span class="glyphicon glyphicon-user"></span><br>인원1명</div>\n' +
            '<div class="hostel-icon"><span class="glyphicon glyphicon-home"></span><br>원룸</div>\n' +
            '<div class="hostel-icon"><span class="glyphicon glyphicon-bed"></span><br>침대1개</div>\n' +
            '<div class="hostel-icon"><span class="glyphicon glyphicon-tint"></span><br>욕실1개</div>' +
            '</div>\n' +
            '<div class="detail-content" >숙소 소개<br>' +
            '<div style="font-size: 10px;font-weight: normal;">Room with private bathroom in an old country house, located on a sunny slope overlooking the Idro lake (on the border between Lombardia and Trentino-Alto Adige regions). The house is renewed, finished with pine wood, and with ceramic wood stoves. The room and the bathroom are located in an independent part of the house accessible through a small hallway. There is a spacious kitchen for our guests to use (shared with us). We also have a nice veranda and a very suggestive living room finished with antique wood and sculptures.' +
            '</div>' +
            '<div style="border:2px solid greenyellow;margin: 30px;height: 200px;">구글 지도가 들어갈 겁니다.</div>' +
            '<div class="detail-footer"><p>￦16901/1박</p><button id="res-btn" class="res-btn">예약 가능 여부 확인</button></div>' +
            '</div>');
    };
    return {onCreate: onCreate};
})();
app.reservation = (() => {
    var onCreate = () => {
        setContentView();
        $('#back-btn').click(e => {
            app.detail.onCreate();
        });
        $('#res-btn').click(e => {
            if( $('#start-date').text()==='') {
                alert('체크인 날짜를 선택해 주세요');
            }else if($('#end-date').text()===''){
                alert('체크아웃 날짜를 선택해 주세요');
            }else{
                app.confirm.onCreate();
            }
        });
    };
    var setContentView = () => {
        $('body')
            .html(
                '<header>' +
                '  <div  style="width: 27px">' +
                '       <span id="back-btn" class="arrow arrow-left"></span>' +
                '           <div class="header-guide"><span>삭제</span></div>' +
                '  </div>' +
                '  </header>'
            );
        $('header')
            .css({
                'position': 'fixed',
                'top': '0px',
                'width': '100%',
                'padding': '5%'
            });
        $('.arrow')
            .css({
                'position': 'relative',
                'display': 'inline-block',
                'margin': '8px',
                'padding': '8px',
                'box-shadow': '1px -1px 0 0 black inset'
            });
        $('.arrow-left').css({
            'transform': 'rotate(45deg)'
        });
        $('<div></div>').attr('id', 'wrapper').appendTo('body');
        $('#wrapper')
            .html(
                '<div id="container">' +
                '<div id="contents">' +
                '</div>' +
                '</div>');
        $('#contents')
            .append(
                '<div id="pick-date-bar">' +
                '    <div id="start-date"></div>' +
                '    <div id="end-date" ></div><br>' +
                '</div>' +
                '<div id="calendar">' +
                '    <div id="my-element" data-language="korea" class="datepicker-here"  data-multiple-dates-separator=" - "></div>' +
                '</div>' +
                '<div class="detail-footer" style="position: fixed;">' +
                '<p id="count-selected"></p>' +
                '<button id="res-btn" class="res-btn">예약 하기</button>' +
                '</div>'
            )
            .css({
                'margin-top': '15%'
            });
        var startDate = '';
        var endDate = '';
        $('#my-element').datepicker({
            minDate: new Date(),
            range: true,
            /*inline:true,*/
            onSelect: function (fd, d, picker) {
                console.log("###############################");
                console.log("fd:", fd);
                function formatDate(date) {
                    /*day요일 MM월 dd일*/
                    var week = new Array('일', '월', '화', '수', '목', '금', '토');
                    var d = new Date(date),
                        month = '' + (d.getMonth() + 1) + '월',
                        date = '' + d.getDate() + '일';
                    //year = d.getFullYear();
                    var todayArray = d.getDay();
                    var day = week[todayArray] + '요일';
                    if (month.length < 2) month = '0' + month;
                    if (date.length < 2) date = '0' + date;
                    return [month, date, day].join(' ');
                }
                startDate = formatDate(d[0]);
                endDate = formatDate(d[1]);
                $('#start-date').text(startDate);
                if (d.length == 1) {
                    $('#end-date').text("");
                } else {
                    $('#end-date').text(endDate);
                }
                if (fd== "") {
                    $('#start-date').text("");
                    $('#end-date').text("");
                }
                // 카운트 계산
                function formatDateDefault(date) {
                var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                date = '' + d.getDate();
                year = d.getFullYear();
                if (month.length < 2) month = '0' + month;
                if (date.length < 2) date = '0' + date;
                return [year, month, date].join('-');
                }
                var startString = formatDateDefault(d[0]);
                var endString = formatDateDefault(d[1]);
                //console.log('%%%%%%%%%%'+ startString +'   /////  '+endString);
                var startArray = startString.split('-');
                var endArray = endString.split('-');
/*              console.log('!!START ARRAY:  '+ startArray);
                console.log('!!END ARRAY:  '+ endArray);*/
                var start = new Date(startArray[0], Number(startArray[1])-1, startArray[2]);
                var end = new Date(endArray[0], Number(endArray[1])-1, endArray[2]);
/*              console.log('!!START :  '+ start);
                console.log('!!END :  '+ end);*/
                var btwcount = (end.getTime()-start.getTime())/1000/60/60/24;
                console.log('%%%%%btwcount%%%%%:    '+ btwcount+'  박');
                $('#count-selected').text(btwcount+'박을 선택했습니다.');
                if(isNaN(btwcount)){
                    $('#count-selected').text('');
                    alert('NaN Check! count? : '+btwcount);
                    return false;
                }else{
                    $('#count-selected').text(btwcount+'박을 선택했습니다.');
                }
            }
        });
    };
    return {onCreate: onCreate};
})();
app.confirm = (() => {
    var onCreate = () => {
        setContentView();
        $('#back-btn').click(() => {
            app.reservation.onCreate();
        });
        $('#res-btn').click(() => {
            app.pay.onCreate();
        });
    };
    var setContentView = () => {
        $('body')
            .html(
                '<header>' +
                '  <div>' +
                '       <span id="back-btn" class="arrow arrow-left"></span>' +
                '  </div>' +
                '  </header>'
            );
        $('header')
            .css({
                'position': 'fixed',
                'top': '0px',
                'width': '100%',
                'padding': '5%'
            });
        $('.arrow')
            .css({
                'position': 'relative',
                'display': 'inline-block',
                'margin': '8px',
                'padding': '8px',
                'box-shadow': '1px -1px 0 0 black inset'
            });
        $('.arrow-left').css({
            'transform': 'rotate(45deg)'
        });
        $('<div></div>').attr('id', 'wrapper').appendTo('body');
        $('#wrapper')
            .html(
                '<div id="container" style="padding: 20px;margin-top: 60px;">' +
                '</div>');
        $('#container').append('<div><h2>확인 및 결제</h2></div>\n' +
            '<div style="margin-bottom: 20px;">\n' +
            '  <h5>Seodaemun-gu의 개인실<br>\n' +
            '    10월 16일 - 10월 19일, 게스트 1명\n' +
            '  </h5>\n' +
            '</div>\n' +
            '<div style="border-bottom:1px solid grey">\n' +
            '  <img style="width:50px;" src="https://maxcdn.icons8.com/Share/icon/dotty/Finance//mastercard1600.png" alt="">\n' +
            '  Mastercard 3164 \n' +
            '</div>\n' +
            '<div>\n' +
            '  <h4 style="    margin-bottom: 22px;\n' +
            '    padding-bottom: 15px;\n' +
            '    padding-top: 15px;\n' +
            '    border-bottom: 1px solid;">￦16836 x 3박 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp￦16836 <br>\n' +
            '    서비스 수수료 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp￦6119<br>\n' +
            '    총 합계 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp￦56627<br>\n' +
            '   \n' +
            '  </h4>\n' +
            '</div>\n' +
            '\n' +
            '<div>\n' +
            '  <h6>\n' +
            '     체크인 24시간 전까지 예약을 취소하면 전액 환불됩니다. 그 이후 체크인 전에 취소하면 첫 1박 요금은 환불되지 않습니다.<br>\n' +
            '      </h6>\n' +
            '</div>\n' +
            '    \n' +
            '\n' +
            '<div>\n' +
            '  <h6>\n' +
            '    숙소 이용규칙, 환불정책, 게스트 환불 정책에 동의합니다. 서비스 수수료를 포함하여 표시된 총액을 지불하는 것이도 동의합니다.<br>\n' +
            '      </h6>\n' +
            '</div>' +
            '<button id="res-btn" class="res-btn">&nbsp; 예약 하기 · ￦56627 &nbsp;</button>');
    };
    return {onCreate: onCreate};
})();
app.pay = (() => {
    var onCreate = () => {
        setContentView();
        $('#back-btn').click(e => {
            app.confirm.onCreate();
        });
        $('#submit-btn').click(e => {
            if(app.valid.emialChecker($('#mailBuyer').val())==='yes'){
                if($('#noCard1').val()==''){
                    alert('카드 번호를 입력해주세요');
                }else if($('#noCard2').val()==''){
                    alert('카드 번호를 정확히 입력해주세요');
                }else if(app.valid.cardNumberChecker($('#noCard1').val()*1)){
                    if(app.valid.cardNumberChecker($('#noCard2').val()*1)){
                         app.approved.onCreate();
                    }else{
                        alert('카드 번호를 정확히 입력해 주세요');
                    }
                }else{
                    alert('숫자만 입력 가능');
                    $('#noCard1').val('');
                }
            }else{
                alert('이메일 주소를 확인해주세요.');
                $('#mailBuyer').val('');
            }
            e.preventDefault();
        });
    };
    var setContentView = () => {
        $('body').empty();
        $('<div></div>').attr('id', 'wrapper').appendTo('body');
        $('#wrapper')
            .html(
                '<div id="container">' +
                '</div>');
        $('#container')
            .html('<table style="width:400px; padding:0 20px 0 20px;"></table>' +
                '<table style="width:400px;margin: 20px 5px;">' +
                '    <tbody>' +
                '        <tr>' +
                '            <td style="height:5px; background:#862990;"></td>' +
                '        </tr>' +
                '    </tbody>' +
                '</table>' +
                '<!---- header text ---->' +
                '<table style="width:400px; margin-top:15px;">' +
                '    <tbody>' +
                '        <tr>' +
                '            <td style="font-size:12px; height:30px; font-weight:bold; padding:0 20px 0 20px;">' +
                '                입력하신 <font style="text-decoration: underline;">TID</font>가 유효하지 않습니다.(40자리)' +
                '            </td>' +
                '        </tr>' +
                '    </tbody>' +
                '</table>' +
                '<!---- tab ---->' +
                '<span name="tab1" code="0" style="margin-left: 10px; width: 120px;" class="tab1_on">' +
                '  이메일 + 카드번호</span>' +
                '<span name="tab1" code="3" style="width: 120px;" class="tab1_off">' +
                '  휴대폰번호 + 금액</span>' +
                '<span name="tab1" code="1" style="width: 120px;" class="tab1_off">' +
                '  구매자명 + 금액</span>' +
                '<!---- input field ---->' +
                '<table id="inpTab0" code="0" style="margin-top: 50px; margin-left: 30px; display: table;">' +
                '    <tbody>' +
                '        <tr>' +
                '            <th style="font-size:12px; text-align:left; padding-right:10px;">이메일</th>' +
                '            <td>' +
                '                <input type="text" id="mailBuyer" name="mailBuyer" value="" style="height:26px; color:#777777; padding:5px; border:1px solid #999999; width:250px;">' +
                '            </td>' +
                '        </tr>' +
                '        <tr>' +
                '            <th style="font-size:12px; text-align:left; padding-right:10px;">카드번호</th>' +
                '            <td>' +
                '                <table><tbody>' +
                '                        <tr id="haha">' +
                '                        <td><input type="text" id="noCard1" name="noCard1" value="" maxlength="4" class="max4" code="1" style="height:26px; color:#777777; padding:5px; border:1px solid #999999; width:62px;"></td>' +
                '                        <td><b>-</b></td>' +
                '                        <td><input type="text" id="noCard2" name="noCard2" value="" maxlength="4" class="max4" code="max" style="height:26px; color:#777777; padding:5px; border:1px solid #999999; width:62px;"></td>' +
                '                        <td><b>- XXXX - XXXX</b></td>' +
                '                        </tr>' +
                '                </tbody></table>' +
                '            </td>' +
                '        </tr>' +
                '    </tbody>' +
                '</table>' +
                '<!---- button ---->' +
                '<table style="width:360px; margin-top:20px;">' +
                '    <tbody><tr style="text-align:center;">' +
                '        <td height="30px">' +
                '            <span id="submit-btn" style="background:#862990; padding:7px 20px 7px 20px; font-size:12px; color:#FFFFFF; text-align:center; cursor: pointer;">확 인</span>' +
                '        </td>' +
                '    </tr>' +
                '    </tbody>' +
                '</table>' +
                '<!---- description ---->' +
                '<table style="width: 95%; margin-top:30px; padding:10px; border:1px solid #CCCCCC;margin: 40px 0px 4px 10px;">' +
                '    <tbody>' +
                '    <tr>' +
                '        <td style="font-size:12px; color:#862990; font-weight:bold; border-bottom:1px solid #CCCCCC; height:20px;">' +
                '            ※ 입력 팁! 알아두면 편리합니다.' +
                '        </td>' +
                '    </tr>' +
                '    <tr>' +
                '        <td>' +
                '        <table id="txtTab0" style="display: table;" code="0" class="displayView">' +
                '            <tbody><tr>' +
                '                <td style="font-size:12px; color:#666666; padding-top:10px;">' +
                '            <span>' +
                '              <font style="font-weight:bolder;">"이메일"</font><br>' +
                '              결제 요청 시 자동(입력) 또는 직접 입력한 이메일 정보를 정확히 입력<br>' +
                '              도메인을 포함한 전체 e-mail 주소를 입력<br>' +
                '              &gt; 가령 "abc@abc.com" 주소의 경우, "abc"만 입력하는 경우는 올바르지 않습니다.' +
                '            </span>' +
                '                </td>' +
                '            </tr>' +
                '            <tr>' +
                '                <td style="font-size:12px; color:#666666; padding-top:5px;">' +
                '              <span>' +
                '                <font style="font-weight:bolder;">"카드번호"</font><br>' +
                '                결제한 카드번호 앞 8자리를 입력' +
                '              </span>' +
                '                </td>' +
                '            </tr>' +
                '            </tbody>' +
                '        </table>' +
                '        </td>' +
                '    </tr></tbody></table>' +
                '<table style="width:400px; margin: 20px 5px;">' +
                '    <tbody><tr><td style="height:3px; background:#862990;"></td>' +
                '    </tr></tbody></table>')
            .css({
                'width': '100%',
                'margin-top': '20%'
            });
    };
    return {onCreate: onCreate};
})();
app.valid = {
    emialChecker : x => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return regExp.test(x)? "yes" : "no";
    },
    cardNumberChecker : x=> {
        return typeof x === 'number' && isFinite(x);
    }
};
app.approved = (() => {
    var onCreate = () => {
        setContentView();
        $('#res-btn').click(e=>{
            app.list.onCreate();
        });
    };
    var setContentView = () => {
        $('body').empty();
        $('body').css({
            'background-color': '#009999',
            'text-shadow': '0 0px 0 #f3f3f3',
            'text-align':'left'
        });
        $('<div></div>').attr('id', 'wrapper').appendTo('body');
        $
        $('#wrapper')
            .css({
                'width': '100%',
                'height': '100%',
                'padding': '5%'
            })
            .html('<header style="text-align:left;color:white;">\n' +
                '  <div style="min-width: 300px;">\n' +
                '<h3 class="type-it">주연님, 안녕하세요!</h3>\n' +
                '  <p style="font-size: 25px;text-align: left;">\n' +
                '       새로운 숙소에서 편안한<br>\n' +
                '       시간 보내시길 바랍니다.<br>\n' +
                '       주소: 117-5 YeonHui-dong\n' +
                '  </p>' +
                ' <div class="detail-footer" style="width: 100%;\n' +
                '    height: 70px;\n' +
                '    background-color: white;\n' +
                '    bottom: 0px;\n' +
                '    position: fixed;\n' +
                '    left: 0px;"><p style="font-size: 9px;color: #ff4f54">※예약확인은 웹사이트에서 확인바랍니다.</p><button id="res-btn" class="res-btn">리스트로 이동</button></div>' +
                '</header>'
            );
        $('.type-it').typeIt({
            content : ' 주연님, 안녕하세요!',
            loop: true,
            loopDelay: 5000
        });
    };
    return {onCreate: onCreate};
})();
app.cookie = {
    setCoockie: (k, v) => {
        document.cookie = k + "=" + v;
    },
    getCookie: k => {
        var x = k + "=";
        var i = 0;
        var arr = document.cookie.split(';');
        for (i = 0; i < arr.length; i++) {
            var j = arr[i];
            while (j.charAt(0) == '') {
                j = j.substring(1, j.length)
            }
            if (j.indexOf(x) == 0) {
                return j.substring(x.length, j.length);
            }
            return null;
        }
    },
    removeCookie: k => {
    }
};
app.compUI = {
    br: () => {
        return $('<br/>');
    },
    div: x => {
        return $('<div/>', {id: x});
    },
    h1: x => {
        return $('<h1/>', {id: x});
    },
    span: x => {
        return $('<span/>', {id: x});
    },
    iTxt: x => {
        return $('<input/>', {id: x, type: 'text'});
    },
    aBtn: x => {
        return $('<a/>', {href: '#', role: 'button', id: x});
    },
    iBtn: x => {
        return $('<input/>', {id: x, type: 'button'});
    },
    image: (x, y) => {
        return $('<img/>', {id: x, src: y});
    },
    input: (x, y) => {
        return $('<input/>', {id: x, type: y});
    },
    btn: x => {
        return $('<button>', {id: x});
    },
    nav: x => {
        return $('<nav/>', {id: x});
    },
    ul: x => {
        return $('<ul/>', {id: x});
    },
    li: () => {
        return $('<li/>');
    },
    a: () => {
        return $('<a/>', {href: '#'});
    }
};
$(function () {
    app.initialize();
});
app.initialize();