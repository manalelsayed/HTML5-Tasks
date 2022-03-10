window.onload=function(){
  $("li").click(function(){
      $(this).css({
        backgroundColor: "lightgrey"
      });
      $(this).addClass("selected");
          
      })
      $("#to-list1").click(function(){
        $("li").css({
            backgroundColor: "white"
          });
          $(".selected").appendTo("#list1");
          $(".selected").removeClass("selected");


          

  })
  $("#to-list2").click(function(){
    $("li").css({
        backgroundColor: "white"
      });
      $(".selected").appendTo("#list2");
      $(".selected").removeClass("selected");
    

})
$("#enter").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        if((document.getElementById("enter").value)!=""){
        let li=document.createElement("li");
        $(li).text(document.getElementById("enter").value);
        document.getElementById("enter").value=null;

        $(li).appendTo("#list2");
        }
        else{
            alert("you must enter a value")
        }
    }
});
}
