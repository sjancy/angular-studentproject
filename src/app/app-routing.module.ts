import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'create-student', component: CreateStudentComponent },
  { path: 'detail-student/:studentId', component: DetailStudentComponent },
  { path: 'update-student/:studentId', component: UpdateStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
