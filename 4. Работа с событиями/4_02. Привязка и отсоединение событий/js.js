$(document).ready(function() {
    $('.abz').css('color', 'green');
    //$('.abz').hide();
}); //заработало!!!

$("document").ready(function() {
    $('p').css('border', '3px solid red');
});

$("document").ready(function() {
    $('p, li.b').css('background','#ccc');
});

$("document").ready(function() {
    $('ul + p').css('background','#ccc');// параграф после списка
});
    //СЕЛЕКТОРЫ
$("document").ready(function() {
   // $('p:first').css('background', 'yellow'); // первый параграф
   // $('p:last').css('background', 'yellow'); // последний параграф
    //$('p:even').css('background', 'yellow'); //четные параграфы
    //$('p:odd').css('background', 'yellow'); //нечетные параграфы
    //$('p:gt(1)').css('border', '3px solid blue'); //параграф больше чем 1 (отсчет идет с нуля)   
    $('p:not(p:eq(2))').css('border', '3px solid blue'); //параграф кроме второго(отсчет идет с нуля) 
});

    //ФИЛЬТРЫ АТРИБУТОВ
$("document").ready(function() {
    $('p[class]').css('border', '3px solid red'); // параграф у которого есть класс
    $('p[id=para1]').css('border', '3px solid red'); // параграф у которого id para1
    $('p[id^=para]').css('border', '3px solid blue'); // параграфы у которых id начинается с para
    $('p[id^=para][lang*=en-]').css('border', '3px solid blue'); // два атрибута
});
    //ФИЛЬТРЫ
$("document").ready(function() {
    //$("p:contains(3)").css('color','red'); // параграф где есть цифра 3
   // $("ul:has(li[class=b])").css('border','2px solid blue'); //ul который имеет li с клaссом b 
  //$("ul li:nth-child(3)").css('border','2px solid blue'); //ul  и его третий потомок
  //$("ul li:last-child").css('border','2px solid blue'); //ul  и его последний потомок
  $("ul li:nth-child(2n)").css('border','2px solid pink'); //ul  и его каждый второй потомок  
});
    //СЕЛЕКТОРЫ ФОРМ
$("document").ready(function() {
    //$("form :input").css("border", "2px solid red"); // сделать красными все инпуты
        //$("form :text").css("border", "2px solid red"); // сделать красными  инпуты text
        //$("form :text:enabled").css("border", "2px solid red"); // сделать красными  инпуты text, которые включены
        $("form :checked").css("border", "2px solid red"); // сделать красными  включенные чекбоксы НЕ работает!
}); 
    // отслеживание информации из документов
$("document").ready(function() {
    //alert("Here " + $("p").length + " <p> elements"); // считает элементы p, и алертом выводит
   // alert("Here " + $("p").size() + " <p> elements"); // считает элементы p, и алертом выводит другой функцей size()
    
    //var elems = $('li').get();
   // alert("Here " + elems.length + " <p> elements"); // считает элементы p, и алертом выводит другим способом
    
    //alert($('li').get(0)); // показывает что за объект
    
    //$("ul").find("li.b").css("border", "2px solid red"); // найти li с классом b
    
    var leftmargin = 0;
    var border = 3;
    $("p").each(function() {
        $(this).css("border", border + "px solid blue");
        $(this).css("margin-left", leftmargin); 
        border += 2;
        leftmargin += 10; // типа цикла, которы двигает влево параграфы и утолщает рамку
    });
});

$("document").ready(function() {
    $("li a[href$='.pdf']").after("<img src='images/small_pdf_icon.gif' align='absbottom' />"); //добавляет маленькую картинку к файлам pdf
});
