import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  studentId: number;
  student: Student
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];
    this.student = new Student();
    this.studentService.getStudentById(this.studentId).subscribe(data => {
      this.student = data;
    });

  }

}
