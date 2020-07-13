import { Component, OnInit } from '@angular/core';
import * as Scrollmagic from 'scrollmagic'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'angular-portfolio';
  maxwidth = window.innerWidth /3;
  myInnerHeight = window.innerHeight;
  myInnerWidth = window.innerWidth;
  ngOnInit(){
  window.addEventListener('resize',this.resize);
  var controller = new Scrollmagic.Controller();
  var scene = new Scrollmagic.Scene({
    triggerElement: '.main'
  })
  .setClassToggle('.main' ,'show')
  .addTo(controller)

  var scene2 = new Scrollmagic.Scene({
    triggerElement: '.div1'
  })
  .setClassToggle('.div1' ,'show')
  .addTo(controller)
  }
  resize(){
console.log('resize');
let h = window.innerHeight;
let w = window.innerWidth;
document.getElementById('img1').style.height = h+'px';
document.getElementById('img1').style.width = w+'px';
document.getElementById('div1').style.height = h+'px';
document.getElementById('div1').style.width = w+'px';
document.getElementById('div2').style.height = h+'px';
document.getElementById('div2').style.width = w+'px';
document.getElementById('div3').style.height = h+'px';
document.getElementById('div3').style.width = w+'px';
  }
}
