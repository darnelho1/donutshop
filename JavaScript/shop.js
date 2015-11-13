var donutShops = [];

DonutShop=function(location,minCustHrs,maxCustHrs,avgDonutsPerCust){
    this.location = location;
    this.minCustHrs = minCustHrs;
    this.maxCustHrs = maxCustHrs;
    this.avgDonutsPerCust = avgDonutsPerCust;
        donutShops.push(this);
}

var dwtnShop = new DonutShop('Downtown',8,43,4.5);
var cHillShop = new DonutShop('Capitol Hill',4,37,2.00);
var sluShop = new DonutShop('South Lake Union',9,23,6.33);
var wdgwoodShop = new DonutShop('Wedge Wood',2,28,1.25);
var ballardShop = new DonutShop('Ballard',8,58,3.75);


