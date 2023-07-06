import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = "http://localhost:8080/api/v1/students";
  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseURL);
  }

  createStudent(student: Student): Observable<object> {
    return this.httpClient.post(this.baseURL, student);
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(this.baseURL + '/' + studentId)
  }

  updateStudent(studentId: number, student: Student): Observable<object> {
    return this.httpClient.put(this.baseURL + '/' + studentId, student);
  }

  deleteStudent(studentId: number): Observable<object> {
    return this.httpClient.delete(this.baseURL + '/' + studentId);
  }


}
