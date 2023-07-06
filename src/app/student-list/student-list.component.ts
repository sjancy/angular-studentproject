import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student'
import { StudentService } from '../student.service'
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }
  private getStudents() {
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    })
  }

  updateStudent(studentId: number) {
    this.router.navigate(['update-student', studentId])
  }

  viewStudent(studentId: number) {
    this.router.navigate(['detail-student', studentId])
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId).subscribe(data => {
      console.log(data);
      this.getStudents();
    })
  }

}
