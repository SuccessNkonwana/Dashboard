import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  item = {
    key: '',
    name: '',
    address: '',
    phone: '',
    email: '',
}
  constructor(private route: ActivatedRoute, private service: DataService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)

      this.item.key = params.key
      console.log(this.item.key),

      this.item.name = params.name
      console.log(this.item.name),

      this.item.address = params.address
      console.log(this.item.address),

      this.item.phone = params.phone
      console.log(this.item.phone),

      this.item.email = params.email
      console.log(this.item.email)
    })
  }

  onUpdate(item){
    this.service.update(item, item.key);
    alert("Item updated");
    this.router.navigateByUrl('home')
  }
  goHome(){
    this.router.navigateByUrl('/home');
  }
}
