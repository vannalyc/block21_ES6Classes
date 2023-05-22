// define constructor function called Car: make, model, and year
class Car {
    constructor (make, model, year) {
        this.make = make; 
        this. model = model; 
        this.year = year; 
    }
//Add a method called getDescription to the Car prototype
getDescription (){
    console.log ("Make:", this.make, "Model:", this.model, "Year:", this.year);
}
}
//Define the ElectricCar function as a subclass to Car 
//include additional property called range to represent range of the electric car in miles
class ElectricCar extends Car{
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range; 
    }
getDescriptionElectric () {
    console.log ("Range:", this.range);
    }
}
//ElectricCar prototype override the getDescription method of the Car prototype with a new implementation that includes infor about the range of the elcetric car. 
//create an instance of Electric Car with the make "Tesla", model "Model S", Year 2019,range 300,
const Tesla = new ElectricCar ("Tesla", "Model S", 2019, "300 miles");

Tesla.getDescriptionElectric ();

//The getDescription method is called on the instance. The output will be a string containing the make, model, year, and range of the electric car

Tesla.getDescription ();
