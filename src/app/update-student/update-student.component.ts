import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  studentId: number;
  student: Student = new Student();
  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.studentId = this.route.snapshot.params['studentId'];
    this.studentService.getStudentById(this.studentId).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.studentService.updateStudent(this.studentId, this.student).subscribe(data => {
      this.goToStudentList();
    },
      error => console.log(error));
  }

  goToStudentList() {
    this.router.navigate(['/students']);
  }

}
