var donutShops = [];
var hours = ['7:00am',
             '8:00am',
             '9:00am',
             '10:00am',
             '11:00am',
             '12:00pm',
             '1:00pm',
             '2:00pm',
             '3:00pm',
             '4:00pm',
             '5:00pm',
             '6:00pm'];


/////////////Donut Shop Object Constructor/////////
  DonutShop=function(location,minCustHrs,maxCustHrs,avgDonutsPerCust,totalDonutsSld){
      this.location = location;
      this.minCustHrs = minCustHrs;
      this.maxCustHrs = maxCustHrs;
      this.avgDonutsPerCust = avgDonutsPerCust;
      this.donutsPerHr=[0];
      this.totalDonutsSld = 0 ;
          donutShops.push(this);
  };



///////Method for calculating donuts purchased/////////
 DonutShop.prototype.calculatedonutsPurchased = function(){
  for (i = 0; i < hours.length; i++) {
      var calculate = (Math.floor(Math.random() * (this.maxCustHrs-this.minCustHrs + 1 )) + this.minCustHrs) * this.avgDonutsPerCust;
      this.donutsPerHr[i] = Math.round(calculate);
      this.totalDonutsSld = this.totalDonutsSld + Math.round(calculate);

};
};



//////////Method for rending the table in HTML////////////

DonutShop.prototype.render = function(){
  var tr = document.createElement('tr');
  var tblLocation = document.createElement('td');
  tblLocation.innerHTML = this.location;
  tblLocation.setAttribute('id', 'location');
  tr.appendChild(tblLocation);

  for (i=0; i < this.donutsPerHr.length; i++){
    var tblDPH = document.createElement('td');
    tblDPH.setAttribute('id','DPH')
    tblDPH.innerHTML = this.donutsPerHr[i];
    tr.appendChild(tblDPH);
  }

  var total = document.createElement('td');
  total.innerHTML = this.totalDonutsSld;
  total.setAttribute('class', 'total');
  tr.appendChild(total);

  document.getElementById('tablebody').appendChild(tr);

}


//////////Donut shop objects/////////////

var dwtnShop = new DonutShop('Downtown',8,43,4.5);
var cHillShop = new DonutShop('Capitol Hill',4,37,2.00);
var sluShop = new DonutShop('South Lake Union',9,23,6.33);
var wdgwoodShop = new DonutShop('Wedge Wood',2,28,1.25);
var ballardShop = new DonutShop('Ballard',8,58,3.75);



////////////Running methods against the donut shop objects////////

dwtnShop.calculatedonutsPurchased();
dwtnShop.render();

cHillShop.calculatedonutsPurchased();
cHillShop.render();

sluShop.calculatedonutsPurchased();
sluShop.render();

wdgwoodShop.calculatedonutsPurchased();
wdgwoodShop.render();

ballardShop.calculatedonutsPurchased();
ballardShop.render();



/////////////Function to create new donut shop objects based on user input///////



var newShop = function(){
    var newShopLoc, newShopMinCust, newShopMaxCust, newShopAvgDonutsPerCust;
    var found = false; //Flag for found existing donut shops
    newShopLoc = document.getElementById('locationName').value;
    newShopMinCust = parseInt(document.getElementById('minCust').value);
    newShopMaxCust = parseInt(document.getElementById('maxCust').value);
    newShopAvgDonutsPerCust = Number(document.getElementById('avgDonutsPerCust').value);

     ///////Loop to find existing donut shop objects in donut shop array////
    for (i=0; i < donutShops.length; i++){
      if (document.getElementById('locationName').value.toUpperCase() === donutShops[i].location.toUpperCase()){
          var dsTblLoc= i+1;// var for handling location of donut shop in table
          document.getElementById('donutshops').deleteRow(dsTblLoc);
          var knownShop=donutShops[i];
          //console.log(knownShop);
          knownShop.maxCustHrs=parseInt(document.getElementById('maxCust').value);
          knownShop.minCustHrs=parseInt(document.getElementById('minCust').value);
          knownShop.avgDonutsPerCust=parseInt(document.getElementById('avgDonutsPerCust').value);
          //console.log(knownShop);
          knownShop.calculatedonutsPurchased();
          //console.log(knownShop);
          knownShop.render();
          //console.log(donutShops);
          found = true; //sets flag to true if donut shop is found
        }
      }

      //////will run if no existing donut shop is found in array////
      while(found!=true){
          var userShop = new DonutShop(newShopLoc,newShopMinCust,newShopMaxCust,newShopAvgDonutsPerCust);
          donutShops.push(userShop);
          userShop.calculatedonutsPurchased();
          userShop.render();
          //console.log(donutShops);
          found=true;



    }
  }

    /////Event listener for for User input/////////

document.getElementById('newShopButton').addEventListener('click',newShop);


/////////Easter Egg that Displays Homer eating when you mouse over the total donuts sold for each shop//////
var homers= document.getElementsByClassName('total');

for (i=0; i < donutShops.length; i++){
  homers[i].onmouseover = function(){
    document.getElementById('homerPic').src = 'images/homer.gif';
  }
  homers[i].onmouseout = function(){
    document.getElementById('homerPic').src ='http://unlimiteddonuts.com/wp-content/uploads/2015/02/homer-simpson.jpg';
  }
};

var dsloc = donutShops.map(function(loc){
    return loc.location;
});

var locData = donutShops.map(function(locData){
  return locData.donutsPerHr;
})

console.log(dsloc)

