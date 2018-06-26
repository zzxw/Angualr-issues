import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tope-bar',
  templateUrl: './tope-bar.component.html',
  styleUrls: ['./tope-bar.component.css']
})
export class TopeBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
window.onload = function(){
  changeMenu();
  const list = document.getElementById('top-bar').getElementsByTagName('a');
  for (let i = 0; i < list.length; i++) {
    myAddEvent(list[i], 'click', changeMenu);
  }
};
function changeMenu() {
  const list = document.getElementById('top-bar').getElementsByTagName('a');
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item.href === document.location.href) {
      (item.parentNode as any).classList.add('active');
    } else {
      (item.parentNode as any).classList.remove('active');
    }
  }
}
function myAddEvent(obj, event, func) {
  if (obj.attachEvent) {
    obj.attachEvent('on' + event, func);
  }else {
    obj.addEventListener(event, func, false);
  }
}

