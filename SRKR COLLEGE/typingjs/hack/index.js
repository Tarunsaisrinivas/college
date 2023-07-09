reasonbox = document.getElementById("add1");
var count=1;
var inxValue = [];
var inyValue = [];
var exValue = [];
var exyValue = [];
function adding1(){
    var realmoney = document.getElementById("money").textContent;
    var len = realmoney.length;
    var realmoney = realmoney.substring(0,len-2);
    realmoney = Number(realmoney);
    var task = document.getElementById("mon");
    var relmoney = task.value;
    relmoney = Number(relmoney);
    // var today = new Date();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // inxValue.push(time);
    // inyValue.push(relmoney);
    relmoney = relmoney+realmoney;
    document.getElementById("money").textContent=relmoney+"/-";


    let div1 = document.createElement('div');
    div1.setAttribute('id',('addin')+count);
    div1.classList.add('col-2');
    div1.classList.add('income');
    reasonbox.appendChild(div1);

    var addin = document.getElementById(('addin')+count);
    var a = document.getElementById("re");
    var res = a.value;
    var mon = task.value;
    let p1 = document.createElement('p');
    p1.classList.add("inparg");
    p1.textContent=res;
    addin.appendChild(p1);
    let p2 = document.createElement('h4');
    p2.setAttribute('id',('ratin')+count);
    p2.style.color='green';
    p2.textContent=mon+"/-";
    addin.appendChild(p2);
    
    count++;
    
    let exmon = document.getElementById("expense").textContent;
    var exlen = exmon.length;
    var exmoney = exmon.substring(0,exlen-2);
    exmoney = Number(exmoney);
    var bal = relmoney-exmoney;
    document.getElementById("bal").textContent=bal+"/-";
    a.value="";
    task.value="";
    var xValues = inxValue;
var yValues = inyValue;
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Income Graph"
    }
  }
});
}


function adding2(){
    var exmoney = document.getElementById("expense").textContent;
    var len = exmoney.length;
    var exmoney = exmoney.substring(0,len-2);
    exmoney = Number(exmoney);
    let deb = document.getElementById('mon');
    var deb1=deb.value;
    var deb12 = Number(deb1);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    exValue.push(time);
    exyValue.push(deb12);
    deb1 = exmoney+deb12;
    document.getElementById("expense").textContent=deb1+"/-";
    

    let div1 = document.createElement('div');
    div1.setAttribute('id',('addin')+count);
    div1.classList.add('col-2');
    div1.classList.add('exre');
    reasonbox.appendChild(div1);

    var addin = document.getElementById(('addin')+count);
    var a = document.getElementById("re");
    var res = a.value;
    var mon = deb.value;
    let p1 = document.createElement('p');
    p1.classList.add("exparg");
    p1.textContent=res;
    addin.appendChild(p1);
    let p2 = document.createElement('h4');
    p2.setAttribute('id',('ratin')+count);
    p2.style.color='red';
    p2.textContent=mon+"/-";
    addin.appendChild(p2);




    let inmon = document.getElementById("money").textContent;
    var inlen = inmon.length;
    var inmoney = inmon.substring(0,inlen-2);
    inmoney = Number(inmoney);
    var bal = inmoney-deb1;
    document.getElementById("bal").textContent=bal+"/-";



    a.value="";
    deb.value="";
    count++;


    var xValues1 = exValue;
var yValues1 = exyValue;
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];
new Chart("myChart1", {
    type: "pie",
    data: {
      labels: xValues1,
      datasets: [{
        backgroundColor: barColors,
        data: yValues1
      }]
    },
    options: {
      title: {
        display: true,
        text: "Expense Graph"
      }
    }
  });

}


// function calc(){
//     var sums=0;
//     var cal = document.querySelectorAll(".col-2");
//     for(var i=1;i<=cal.length;i++){
//         var rate = document.getElementById(('ratin')+i).innerHTML;
//         var len = rate.length;
//         rate = rate.substring(0,len-2);
//         sums = sums+Number(rate);
//     }
//     var realmoney = document.getElementById("money").textContent;
//     var len = realmoney.length;
//     var realmoney = realmoney.substring(0,len-2);
//     realmoney = Number(realmoney);
//     var bal = realmoney-sums;
//     document.getElementById("totex").textContent=sums+"/-"
//     document.getElementById("money").textContent=bal+"/-";
// }



