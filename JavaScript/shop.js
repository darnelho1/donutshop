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


DonutShop=function(location,minCustHrs,maxCustHrs,avgDonutsPerCust,totalDonutsSld,donutsPerHr){
    this.location = location;
    this.minCustHrs = minCustHrs;
    this.maxCustHrs = maxCustHrs;
    this.avgDonutsPerCust = avgDonutsPerCust;
    this.totalDonutsSld = '';
    this.donutsPerHr=[];
        donutShops.push(this);
};

var dwtnShop = new DonutShop('Downtown',8,43,4.5);
var cHillShop = new DonutShop('Capitol Hill',4,37,2.00);
var sluShop = new DonutShop('South Lake Union',9,23,6.33);
var wdgwoodShop = new DonutShop('Wedge Wood',2,28,1.25);
var ballardShop = new DonutShop('Ballard',8,58,3.75);



var test =[];



 DonutShop.prototype.calculatedonutsPurchased = function(){
  return hours.forEach(function(hour){
      var calculate = (Math.floor(Math.random() * (this.maxCustHrs-this.minCustHrs + 1 )) + this.minCustHrs) * this.avgDonutsPerCust;
      test = calculate;
});
};

hour.forEach(function(hour){
  return (Math.floor(Math.random() * (dwtnShop.maxCustHrs-dwtnShop.minCustHrs + 1)) + dwtnShop.minCustHrs) * dwtnShop.avgDonutsPerCust;
  dwtnShop.donutsPerHr.push(hour)

});

var testDonutsSold = (Math.floor(Math.random() * (dwtnShop.maxCustHrs-dwtnShop.minCustHrs + 1)) + dwtnShop.minCustHrs) * dwtnShop.avgDonutsPerCust;

var hour = (Math.floor(Math.random() * (cHillShop.maxCustHrs-this.minCustHrs + 1 )) + cHillShop.minCustHrs) * cHillShop.avgDonutsPerCust;
