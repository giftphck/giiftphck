import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name: String ;
  score: Number ;

  student :any = {
    name : "Petuuuer",
    studentId : "5721602325",
    weight : 90,
    height : 175
  }
  studentlist : any = [{
    name : "Peter",
    studentId : "5721602325",
    weight : 90,
    height : 175
  },
  {
    name : "Peter",
    studentId : "5721602325",
    weight : 90,
    height : 175
  },
  {
    name : "Peter",
    studentId : "5721602325",
    weight : 90,
    height : 175
  },
  {
    name : "Peoppter",
    studentId : "5721602325",
    weight : 90,
    height : 175
  }
]


  c
  onstructor(){
    this.student.bmi = (this.student.weight/
      ((this.student.height/100)*(this.student.height/100))).toFixed(2);
      this.studentlist.map((object,index)=>{
        let obj :any = object;
        obj.bmi =(object.weight/((object.height/100)*(object.height/100))).toFixed(2);
        return obj
      })
      console.log(this.studentlist)
      
  }
}
