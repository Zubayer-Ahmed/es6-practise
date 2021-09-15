class student{
    constructor(sId, sName, sAge){
        this.id = sId;
        this.name = sName;
        this.age = sAge;
        this.schoolName = "BL high school.";
        this.location = "sirajganj";
    }
}
const student1 = new student(22, "Zayan Ferdous", 2);
const student2 = new student(32, "Jihan Ferdous", 2);
const student3 = new student(42, "Zinia Ferdous", 35);
console.log(student1, student2, student3);