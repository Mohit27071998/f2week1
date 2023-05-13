/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((student)=>{
    if(student.marks > 50){
      console.log(student);
    }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
   
  arr.forEach((student)=>{
    if(student.marks > 50){
      console.log(student);
    }
  })
    
}

function addData() {
  //Write your code here, just console.log
  let stud = {
    id:4,
    name:"susan",
    age:"20",
    marks:45
  }
  arr.push(stud);
  console.log(arr);
}


function removeFailedStudent() {
  //Write your code here, just console.log
  let res=arr.filter((student)=>{
    if(student.marks<50){
      return false;
    }else{
      return true;
    }
  })
  console.log(res);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 5, name: "wick", age: "16", marks: 78 },
    { id: 6, name: "sparrow", age: "21", marks: 95 },
    { id: 7, name: "uchiha", age: "22", marks: 34 },
  ];
  let ans = arr.concat(arr1);
  console.log(ans)
}
