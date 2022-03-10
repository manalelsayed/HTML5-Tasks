$("#text").css({border: "1px solid black",
backgroundColor: "yellow"
});

$.ajax({
    url: "instructors.json",
    method: "get",
    success: function (data) {
      console.log("TEst");
      console.log(data);
      bindDataTable(data);
    },
    error: function (errorMessag) {
      console.log(errorMessag);
    },
  });
function AjaxCustomfunction(ObjectOfReauest) {
    let xReq = new XMLHttpRequest();
    xReq.onload = function () {
      if (xReq.readyState == "4") {
        
        ObjectOfReauest.success(JSON.parse(xReq.responseText)); //send data as Array for BindData
      }
    }
    xReq.open(ObjectOfReauest.method, ObjectOfReauest.url);
    xReq.onerror = function (error) {
    console.log("Error Message", error);
  };
  xReq.send();
};
let requestObjectdata = {
         url: "https://jsonplaceholder.typicode.com/users/1/posts",
         method: "get",
         success: bindData,
       };
       AjaxCustomfunction(requestObjectdata);


function bindData(_Data) {
    _Data.forEach((element) => {
      let div = document.createElement("div");
      $(div).text(element.body);
      $(div).css({
        backgroundColor: "lightpink",
        color: "black",
        margin:"5px",
        border: "1px solid black",
        font: "large"
      });
      $("#text").append(div);
      
    });
    $("body").append(document.createElement("hr"));
  }
  

  function bindDataTable(_Data) {
    _Data.forEach((element) => {
        let tr = document.createElement("tr");
        let td1=document.createElement("td");
        $(td1).text(element.firstName);
        let td2=document.createElement("td");
        $(td2).text(element.lastName);
        let td3=document.createElement("td");
        $(td3).text(element.salary);
      
        $(tr).append(td1,td2,td3);
        $("tbody").append(tr);
        
      });
      $("td").css({
        backgroundColor: "lightpink",
        color: "black",
        margin:"5px",
        border: "1px solid black",
        font: "large"
      });
  }

