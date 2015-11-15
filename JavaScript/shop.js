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


  DonutShop=function(location,minCustHrs,maxCustHrs,avgDonutsPerCust,totalDonutsSld){
      this.location = location;
      this.minCustHrs = minCustHrs;
      this.maxCustHrs = maxCustHrs;
      this.avgDonutsPerCust = avgDonutsPerCust;
      this.donutsPerHr=[0];
      this.totalDonutsSld = 0 ;
          donutShops.push(this);
  };




 DonutShop.prototype.calculatedonutsPurchased = function(){
  for (i = 0; i < hours.length; i++) {
      var calculate = (Math.floor(Math.random() * (this.maxCustHrs-this.minCustHrs + 1 )) + this.minCustHrs) * this.avgDonutsPerCust;
      this.donutsPerHr[i] = Math.round(calculate);
      this.totalDonutsSld = this.totalDonutsSld + Math.round(calculate);
};
};



DonutShop.prototype.render = function(){
  var tr = document.createElement('tr');
  var tblLocation = document.createElement('td');
  tblLocation.innerHTML = this.location;
  tblLocation.setAttribute('id', 'test1');
  tr.appendChild(tblLocation);

  for (i=0; i < this.donutsPerHr.length; i++){
    var tblDPH = document.createElement('td');
    tblDPH.innerHTML = this.donutsPerHr[i];
    tr.appendChild(tblDPH);
  }

  var total = document.createElement('td');
  total.innerHTML = this.totalDonutsSld;
  total.setAttribute('id', 'total');
  tr.appendChild(total);

  document.getElementById('donutshops').appendChild(tr);

}

var dwtnShop = new DonutShop('Downtown',8,43,4.5);
var cHillShop = new DonutShop('Capitol Hill',4,37,2.00);
var sluShop = new DonutShop('South Lake Union',9,23,6.33);
var wdgwoodShop = new DonutShop('Wedge Wood',2,28,1.25);
var ballardShop = new DonutShop('Ballard',8,58,3.75);



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










/*

hour.forEach(function(hour){
  return (Math.floor(Math.random() * (dwtnShop.maxCustHrs-dwtnShop.minCustHrs + 1)) + dwtnShop.minCustHrs) * dwtnShop.avgDonutsPerCust;
  dwtnShop.donutsPerHr.push(hour)

});

var testDonutsSold = (Math.floor(Math.random() * (dwtnShop.maxCustHrs-dwtnShop.minCustHrs + 1)) + dwtnShop.minCustHrs) * dwtnShop.avgDonutsPerCust;

var hour = (Math.floor(Math.random() * (cHillShop.maxCustHrs-this.minCustHrs + 1 )) + cHillShop.minCustHrs) * cHillShop.avgDonutsPerCust;
*/
