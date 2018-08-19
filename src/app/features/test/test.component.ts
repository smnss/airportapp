import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../utilities/http/http.service';
import { NgxSmartModalService } from '../../../../node_modules/ngx-smart-modal';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  constructor(public httpservice: HttpService,
    public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }
  getTest() {
    this.httpservice.read('posts/').subscribe(data => console.log(data));
  }
  postTest() {
    this.httpservice.create('posts/2', {
      'userId': 1,
      'id': 2,
      'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'body': 'quia et suscipit\nsuscipit recusandae consequuntur'
    }).subscribe(data => console.log(data));
  }
  putTest() {
    this.httpservice.update('posts/2',  {
      'userId': 1,
      'id': 2,
      'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'body': 'quia et suscipit\nsuscipit recusandae consequuntur'
    }).subscribe(data => console.log(data));
  }
  deletTest() {
    this.httpservice.delete('posts/2').subscribe(data => console.log(data));
  }


}
