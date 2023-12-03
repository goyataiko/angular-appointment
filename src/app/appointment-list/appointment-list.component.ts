import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
   selector: 'app-appointment-list',
   templateUrl: './appointment-list.component.html',
   styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent {
   newAppointmentTitle: string = "";
   newAppointmentDate: Date = new Date;

   appointments: Appointment[] = []

   addAppointment() {
      //스페이스를 모두 뺸것의 길이가 0이 아님,      날짜가 존재함
      if (this.newAppointmentTitle.trim().length && this.newAppointmentDate != null) {
         let newAppointment: Appointment = {
            id: Date.now(),
            title: this.newAppointmentTitle,
            date: this.newAppointmentDate
         }
         this.appointments.push(newAppointment)
         this.newAppointmentTitle = "";
         this.newAppointmentDate = new Date();

         //local에 저장하기, stringify하여 저장
         localStorage.setItem("appointments", JSON.stringify(this.appointments))
      }
   }

   deleteAppointment(index: number) {
      this.appointments.splice(index, 1);
      //local에 저장하기, stringify하여 저장
      localStorage.setItem("appointments", JSON.stringify(this.appointments))
   }
}
