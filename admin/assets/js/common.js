$.datepicker.setDefaults($.datepicker.regional['ko']); 
$( "#startDate" ).datepicker({
        dateFormat: 'yy-mm-dd',
        showMonthAfterYear: true,
        changeMonth: true,
        changeYear: true,
        showOn: "both",
        buttonImage: "",
        buttonImageOnly: false,
        yearSuffix: '.',
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        maxDate: 0,                       // 선택할수있는 최소날짜, ( 0 : 오늘 이후 날짜 선택 불가)
        onClose: function( selectedDate ) {    
            //시작일(startDate) datepicker가 닫힐때
            //종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
            $("#endDate").datepicker( "option", "minDate", selectedDate );
        }    

});
$( "#endDate" ).datepicker({
        dateFormat: 'yy-mm-dd',
        showMonthAfterYear: true,
        changeYear: false,
        changeMonth: false,
        showOn: "both",
        buttonImage: "",
        buttonImageOnly: false,
        yearSuffix: '.',
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        // maxDate: 0,                       // 선택할수있는 최대날짜, ( 0 : 오늘 이후 날짜 선택 불가)
        onClose: function( selectedDate ) {    
            // 종료일(endDate) datepicker가 닫힐때
            // 시작일(startDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 시작일로 지정
            $("#startDate").datepicker( "option", "maxDate", selectedDate );
        }    

});

// 추가, 삭제 : input
fn__inputAddRemove($("#specialField")); // 전문분야
fn__inputAddRemove($("#localArea")); // 지역
function fn__inputAddRemove(obj) {
    let $target = obj;
    let row = $target.children(".attr");
    let $add = $target.find(".inputAdd")
    let $remove = $target.find(".inputRemove");

    function addRow() {
        row.clone(true, true).appendTo($target);
    }

    function removeRow(button) {
        button.closest(".attrWrap li.attr").remove();
    }

    $target.children('.attr:first-child').find('.inputRemove').hide();
    $target.children('.attr').children("label").hide();

    $add.on('click', function () {
        addRow();  
        if($target.children(".attr").length > 1) {
            $(".inputRemove").show();
        }
    });
    $remove.on('click', function () {
        if($target.children(".attr").size() == 1) {
            $remove.hide();
        } else {
            removeRow($(this));
            
            if($target.children(".attr").size() == 1) {
                $remove.hide();
            }
            
        }
    });
}

