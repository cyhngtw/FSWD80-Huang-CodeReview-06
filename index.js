// (20 points) create at least 2 location objects by invoking a constructor call and save them in an 
// array (class constructors usage is mandatory, do not use JSON and parsing).
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// (10 points) add the display() function to the Location class that can display Location object 
// as an HTML string. Use Bootstrap to solve design and responsiveness issues in an easy manner.
// (10 points) use looping functionality to display the object saved in the array on the screen.
// (20 points) create the classes Restaurant and Events with their respective properties. 
// Invoke constructors, and save resulting objects in the same array used for location objects. 
// Check the rendering (or how you display it).  
// (10 points) create a display() function for the classes restaurant and event respectively. 
// display() is capable of displaying relevant information of its class as an HTML. 
// Again, use Bootstrap to solve design and responsiveness.
// (10 points) Assure that rendering of the array is done in the following manner: 
// for small screens, you see the teaser of one object (without the image) in a row. On medium screens,
//  you see two objects in a row (with image). On large screens, you see four objects in a row (with image).
var basicinfo = /** @class */ (function () {
    function basicinfo(name, address, tel) {
        this.name = name;
        this.address = address;
        this.tel = tel;
    }
    basicinfo.prototype.display = function () {
        return this.name + " <br>" + this.address + "<br>" + this.tel;
    };
    return basicinfo;
}());
// add webpage info
var webpage = /** @class */ (function (_super) {
    __extends(webpage, _super);
    function webpage(name, address, tel, page) {
        var _this = _super.call(this, name, address, tel) || this;
        _this.page = page;
        return _this;
    }
    webpage.prototype.display = function () {
        return this.name + " <br>" + this.address + "<br>" + this.tel + " <br>" + this.page + "}";
    };
    return webpage;
}(basicinfo));
// add price info
var price = /** @class */ (function (_super) {
    __extends(price, _super);
    function price(name, address, tel, page, price) {
        var _this = _super.call(this, name, address, tel, page) || this;
        _this.price = price;
        return _this;
    }
    price.prototype.display = function () {
        return this.name + " <br>" + this.address + "<br>" + this.tel + " <br>" + this.page + "<br>" + this.price;
    };
    return price;
}(webpage));
var travela = new basicinfo("National Palace Museum", "No. 221, Sec 2, Zhi Shan Rd, Shilin District, Taipei City, Taiwan", "+886 2 2881 2021");
// document.getElementById("tra1").innerHTML=travela.traveldisplay();
var travelb = new basicinfo("Taipei 101", "No. 7, Section 5, Xinyi Road, Xinyi DistrictTaipei City, Taiwan ", "+886 2 8101 7780");
// document.getElementById("tra2").innerHTML=travelb.traveldisplay();
var resta = new webpage("Quick Bite", "No. 5, Liyi Road, Xinyi DistrictTaipei City, Taiwan 110", "https://www.dintaifung.com.tw/", "+886 2 8101 7780");
var restb = new webpage("Guabao", "No. 20, Section 5, Xinyi Road, Xinyi DistrictTaipei City, Taiwan ", "https://www.dintaifung.com.tw/", "+886 2 8101 7780");
var musica = new price("Lukas Meldem", "No. 5, National Music Hall,Taipei City, Taiwan", "+886 2 8101 7780", "https://www.artsticket.com.tw/", "50 euro");
var musicb = new price("The Four Quarters", "No. 5, National Music Hall,Taipei City, Taiwan", "+886 2 8101 7780", "https://www.artsticket.com.tw/", "80 euro");
var blog = [travela, travelb, resta, restb, musica, musicb];
for (var index in blog) {
    document.getElementsByClassName("tra")[index].innerHTML += blog[index].display();
}
//last modified time
var x = document.lastModified;
document.getElementById("demo1").innerHTML = "Created:" + x;
document.getElementById("demo2").innerHTML = "Created:" + x;
document.getElementById("demo3").innerHTML = "Created:" + x;
document.getElementById("demo4").innerHTML = "Created:" + x;
document.getElementById("demo5").innerHTML = "Created:" + x;
document.getElementById("demo6").innerHTML = "Created:" + x;
//sort by asc and desc
var list = [
    { date: '12/09/2019' },
    { date: '12/10/2019' },
    { date: '03/11/2019' },
    { date: '12/11/2019' },
    { date: '12/12/2019' }
];
list.sort(function (a, b) { return (a.date > b.date) ? 1 : -1; });
