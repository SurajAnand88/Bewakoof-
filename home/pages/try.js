async function getvalue(){
    let x = document.getElementById("search-input").value;
  var data = await fetch('https://bewakoof-api.onrender.com/mens');
  var jsonData =await data.json();
let arr = [];
    jsonData.map((e)=>{
      let y = e.title.toUpperCase();
      if(y.includes(x.toUpperCase()) ){
        // console.log(true);
        arr.push(e);
        localStorage.setItem("dataparse" , arr);
      }
      console.log(e.title);
    })

  
}

let temp = JSON.parse(localStorage.getItem("dataparse"))
console.log(temp);