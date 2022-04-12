  var loveAllData = JSON.parse(localStorage.getItem("Student")) || [];
function checkLove(){
    var name = document.getElementById("name").value;
    var name2 = document.getElementById("name2").value;
    var error = document.getElementById('error').value;
    console.log(name,name2);
    if(name.trim() == ''){
        alert("plz fill the text field")

        return true;
    }else if(name2.trim() == ""){
        alert("plz fill the text field");

        return true;
    }

      let da = new Date();
      let st = da.toDateString();
      var lovedata = Math.random()*100;
       lovedata = Math.floor(lovedata);

       

     let dataLove =
        {
        name: document.getElementById("name").value,
        name2: document.getElementById("name2").value,
        date:st,
        love: lovedata,
        dislike:0,
        like:0
     }
   
     loveAllData.push(dataLove);
     console.log(dataLove);
     

    
   
    
      //  document.getElementById("result").innerHTML = `${name}` + "  Love  " + `${name2}` + " = " + `${lovedata}`+"%";
       document.getElementById("lovevalue").value = name + " 💗 " + name2 + " " +  lovedata + "%";
       if(lovedata>75){
          alert("Your RelationShip very strong")
       } else if(lovedata>50 && lovedata<=75){
          alert("Nice Relationship")
       }else if(lovedata>40 && lovedata<=50){
          alert("plz convance your parter better way")
       } else if(lovedata>20 && lovedata<=40){
          alert("Plz Find New GirlFriend")
       }else {
          alert("your relationShip is very weak go fuck another girl")
       }
       document.getElementById("name").value="";
       document.getElementById("name2").value ="";
       renderOnTable()
       
}
function renderOnTable(){
   document.getElementById("table_data").innerHTML = "";
    for(var i=0; i<loveAllData.length;i++){
       document.getElementById("table_data").innerHTML +=`
          <tr>
             <td>`+(i+1)+`</td>
             <td>`+loveAllData[i].name+`</td>
             <td>`+loveAllData[i].name2+`</td>
             <td>`+loveAllData[i].love+`</td>
             <td>`+loveAllData[i].date+`</td>
            <td><i class="far fa-thumbs-down" onclick="dislike(`+i+`)"></i><div id="dis${i}"></div></td>
            <td><i class="far fa-thumbs-up" onclick="like(`+i+`)"></i><div id="like${i}"></div></td>
            <td scope="col"><i class="fas fas-btn fa-trash-alt" onclick="onDelete(`+i+`)"></i></td>
          </tr>
       `;
    } 
    localStorage.setItem("Student" , JSON.stringify(loveAllData))
    
} 


function onDelete(i){
   loveAllData.splice(i,1);
   renderOnTable()
}

function dislike(pos){
   
   loveAllData[pos].dislike++;
   document.getElementById('dis'+pos).innerHTML=loveAllData[pos].dislike;
   
}
function like(pos){
   loveAllData[pos].like++;
   document.getElementById('like'+pos).innerHTML=loveAllData[pos].like;
}


