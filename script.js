
$('#line1').hide()
$('#line2').hide()
$('#line3').hide()
$('#line4').hide()
$('#line5').hide()
$('#line6').hide()
$('#line7').hide()
$('#line8').hide()
$('#line9').hide()
$('#line10').hide()
$('#line11').hide()
$('#line12').hide()
$('#line13').hide()
$('#line14').hide()
$('#line15').hide()
$('#line16').hide()
$('#line17').hide()
$('#line18').hide()
$('#line19').hide()
$('#line20').hide()
$('#line21').hide()
$('#line22').hide()
$('#line23').hide()
$('#line24').hide()
$('#line25').hide()
$('#line26').hide()
$('#line27').hide()
$('#line28').hide()
$('#line29').hide()

$('#text1').hide()
$('#text2').hide()
$('#text3').hide()
$('#text4').hide()
$('#text5').hide()
$('#text6').hide()
$('#text7').hide()
$('#text8').hide()


$('#teamType1').hide()
$('#teamType2').hide()
$('#teamType3').hide()
$('#teamType4').hide()
$('#teamType5').hide()
$('#teamType6').hide()
$('#teamType7').hide()
$('#teamType8').hide()
$('#teamType9').hide()
$('#teamType10').hide()

   


$("input[type=checkbox]").change(function () {
   if ($('#tickbox1').is(':checked') && $('#tickbox2').is(':checked')) {
      $('#text1').show()
      $('#line1').show()
      $('#teamType1').show()
      $(".center").css({"backgroundColor":'blue', "color": "white"})    
   

      $('#teamType2').hide()
      $('#teamType3').hide()
      $('#teamType4').hide()
      $('#teamType5').hide()
      $('#teamType6').hide()
      $('#teamType7').hide()
      $('#teamType8').hide()
      $('#teamType9').hide()
      $('#teamType10').hide()

      $('#text2').hide()
      $('#text3').hide()
      $('#text4').hide()
      $('#text5').hide()
      $('#text6').hide()
      $('#text7').hide()
      $('#text8').hide()

   }
   else {
      $('#line1').hide()
      $('#teamType1').hide()
      $('#text1').hide()
   }
});


$("input[type=checkbox]").change(function () {
   if ($('#tickbox2').is(':checked') && $('#tickbox3').is(':checked')) {
      $("#line9").show()
      $('#text2').show()
      $('#teamType2').show()
      $(".center").css({"backgroundColor":'orange', "color": "white"});   

      $('#teamType1').hide()
      $('#teamType3').hide()
      $('#teamType4').hide()
      $('#teamType5').hide()
      $('#teamType6').hide()
      $('#teamType7').hide()
      $('#teamType8').hide()
      $('#teamType9').hide()
      $('#teamType10').hide()

      $('#text1').hide()
      $('#text3').hide()
      $('#text4').hide()
      $('#text5').hide()
      $('#text6').hide()
      $('#text7').hide()
      $('#text8').hide()

   }
   else {
      $('#line9').hide()
      $('#text2').hide()
      $('#teamType2').hide()
   }
});

$("input[type=checkbox]").change(function () {
   if ($('#tickbox1').is(':checked') && $('#tickbox3').is(':checked')) {
      $("#line3").show()
      $('#text3').show()
      $('#teamType3').show()
      $(".center").css({"backgroundColor":'orange', "color": "white"});   

      $('#teamType1').hide()
      $('#teamType2').hide()
      $('#teamType4').hide()
      $('#teamType5').hide()
      $('#teamType6').hide()
      $('#teamType7').hide()
      $('#teamType8').hide()
      $('#teamType9').hide()
      $('#teamType10').hide()

      $('#text2').hide()
      $('#text1').hide()
      $('#text4').hide()
      $('#text5').hide()
      $('#text6').hide()
      $('#text7').hide()
      $('#text8').hide()
   }
   else {
      $('#line3').hide()
      $('#text3').hide()      
      $('#teamType3').hide()
   }
});


$("input[type=checkbox]").change(function () {
   if ($('#tickbox1').is(':checked') && $('#tickbox4').is(':checked')) {
      $("#line4").show()
      $('#text4').show()
      $('#teamType4').show()
      $(".center").css({"backgroundColor":'orange', "color": "white"});   

      $('#teamType1').hide()
      $('#teamType2').hide()
      $('#teamType3').hide()
      $('#teamType5').hide()      
      $('#teamType6').hide()
      $('#teamType7').hide()
      $('#teamType8').hide()
      $('#teamType9').hide()
      $('#teamType10').hide()

      $('#text2').hide()
      $('#text3').hide()
      $('#text1').hide()
      $('#text5').hide()
      $('#text6').hide()
      $('#text7').hide()
      $('#text8').hide()
   }
   else {
      $('#line4').hide()
      $('#text4').hide()      
      $('#teamType4').hide()
   }
});

$("input[type=checkbox]").change(function () {
   if ($('#tickbox3').is(':checked') && $('#tickbox4').is(':checked')) {
      $("#line15").show()
      $('#text5').show()
      $('#teamType5').show()
      $(".center").css({"backgroundColor":'orange', "color": "white"});   

      $('#teamType1').hide()
      $('#teamType2').hide()
      $('#teamType3').hide()
      $('#teamType4').hide()      
      $('#teamType6').hide()
      $('#teamType7').hide()
      $('#teamType8').hide()
      $('#teamType9').hide()
      $('#teamType10').hide()

      $('#text2').hide()
      $('#text3').hide()
      $('#text4').hide()
      $('#text1').hide()
      $('#text6').hide()
      $('#text7').hide()
      $('#text8').hide()
   }
   else {
      $('#line15').hide()
      $('#text5').hide()      
      $('#teamType5').hide()
   }
});

$("input[type=checkbox]").change(function () {
   if ($('#tickbox2').is(':checked') && $('#tickbox4').is(':checked')) {
      $("#line10").show()
      $('#text6').show()
      $('#teamType6').show()
      $(".center").css({"backgroundColor":'orange', "color": "white"});   

      $('#teamType1').hide()
      $('#teamType2').hide()
      $('#teamType3').hide()
      $('#teamType4').hide()      
      $('#teamType5').hide()
      $('#teamType7').hide()
      $('#teamType8').hide()
      $('#teamType9').hide()
      $('#teamType10').hide()

      $('#text2').hide()
      $('#text3').hide()
      $('#text4').hide()
      $('#text5').hide()
      $('#text1').hide()
      $('#text7').hide()
      $('#text8').hide()
   }
   else {
      $('#line10').hide()
      $('#text6').hide()      
      $('#teamType6').hide()
   }
});






$("input[type=checkbox]").change(function () {
   if ($('#tickbox1').is(':checked') && $('#tickbox2').is(':checked') && $('#tickbox3').is(':checked')) {
      $('#text7').show()
      $('#teamType7').show()
      $(".center").css({"backgroundColor":'grey', "color": "white"});   

      $('#teamType1').hide()
      $('#teamType2').hide()
      $('#teamType3').hide()
      $('#teamType4').hide()
      $('#teamType5').hide()
      $('#teamType6').hide()
      $('#teamType8').hide()
      $('#teamType9').hide()
      $('#teamType10').hide()

      $('#text2').hide()
      $('#text3').hide()
      $('#text4').hide()
      $('#text5').hide()
      $('#text6').hide()
      $('#text1').hide()
      $('#text8').hide()
   }
   else {
      //$(".center").css({"background":'transparent'});   
      $('#text7').hide()   
      $('#teamType7').hide()  
   }
});


$("input[type=checkbox]").change(function () {
   if ($('#tickbox1').is(':checked') && $('#tickbox3').is(':checked') && $('#tickbox4').is(':checked')) {
      $('#text9').show()
      $('#teamType10').show()
      $(".center").css({"backgroundColor":'grey', "color": "white"});   

      $('#teamType1').hide()
      $('#teamType2').hide()
      $('#teamType3').hide()
      $('#teamType4').hide()
      $('#teamType5').hide()
      $('#teamType6').hide()
      $('#teamType7').hide()
      $('#teamType8').hide()
      $('#teamType9').hide()

      $('#text1').hide()
      $('#text2').hide()
      $('#text3').hide()
      $('#text4').hide()
      $('#text5').hide()
      $('#text6').hide()
      $('#text1').hide()
      $('#text8').hide()
   }
   else {
      //$(".center").css({"background":'transparent'});   
      $('#text9').hide()   
      $('#teamType10').hide()  
   }
});


$("input[type=checkbox]").change(function () {
   if ($('#tickbox1').is(':checked') && $('#tickbox2').is(':checked') && $('#tickbox3').is(':checked') && $('#tickbox4').is(':checked')) {
      $('#text8').show()
      $('#teamType8').show()
      $(".center").css({"backgroundColor":'violet', "color": "white"});   

      $('#teamType1').hide()
      $('#teamType2').hide()
      $('#teamType3').hide()
      $('#teamType4').hide()
      $('#teamType5').hide()
      $('#teamType6').hide()
      $('#teamType7').hide()
      $('#teamType9').hide()
      $('#teamType10').hide()

      $('#text2').hide()
      $('#text3').hide()
      $('#text4').hide()
      $('#text5').hide()
      $('#text6').hide()
      $('#text7').hide()
      $('#text1').hide()
   }
   else {
      //$(".center").css({"background":'transparent'});   
      $('#text8').hide() 
      $('#teamType8').hide()  
   }
});


$("input[type=checkbox]").change(function () {
   if ($('#tickbox1').is(':checked') && $('#tickbox3').is(':checked') && $('#tickbox4').is(':checked')) {
      $('#text8').show()
      $('#teamType9').show()
      $(".center").css({"backgroundColor":'violet', "color": "white"});   

      $('#teamType1').hide()
      $('#teamType2').hide()
      $('#teamType3').hide()
      $('#teamType4').hide()
      $('#teamType5').hide()
      $('#teamType6').hide()
      $('#teamType7').hide()
      $('#teamType8').hide()
      $('#teamType10').hide()


      $('#text2').hide()
      $('#text3').hide()
      $('#text4').hide()
      $('#text5').hide()
      $('#text6').hide()
      $('#text7').hide()
      $('#text1').hide()
   }
   else {
      //$(".center").css({"background":'transparent'});   
      $('#text8').hide()   
      $('#teamType9').hide()
   }
});
