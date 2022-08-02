import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router:Router){}
  username: string = '';
  loading : boolean = false
  ngOnInit(): void { }

  onKey(event: any) { 
    this.username = event.target.value
  }
  join(){
    
   if(this.username=='') alert('Please take a username')
   else this.loading = true,  this.router.navigate(['/chat',this.username]);
  }
}
