import { Component, OnInit } from '@angular/core';
import * as Scrollmagic from 'scrollmagic'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'angular-portfolio';
  centerW;
  maxwidth;
  myInnerHeight;
  myInnerWidth;
  ngOnInit(){
  this.centerW = window.innerWidth /2 -10;
 this.maxwidth = window.innerWidth /3;
  this.myInnerHeight = window.innerHeight;
  this.myInnerWidth = window.innerWidth-20;
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

  var scene3 = new Scrollmagic.Scene({
    triggerElement: '.div2'
  })
  .setClassToggle('.div2' ,'show')
  .addTo(controller)

  var scene4 = new Scrollmagic.Scene({
    triggerElement: '.div3'
  })
  .setClassToggle('.div3' ,'show')
  .addTo(controller)
  }
  resize(){
   
console.log('resize');

let h = window.innerHeight;
let w = window.innerWidth -20;
let maxW =  this.maxwidth = window.innerWidth /3;

document.getElementById('main').style.width = w+'px';
document.getElementById('img1').style.height = h+'px';
document.getElementById('img1').style.width = w+'px';
document.getElementById('div1').style.height = h+'px';
document.getElementById('div1').style.width = w+'px';
document.getElementById('div2').style.height = h+'px';
document.getElementById('div2').style.width = w+'px';
document.getElementById('div3').style.height = h+'px';
document.getElementById('div3').style.width = w+'px';
document.getElementById('imgs').style.left = this.centerW+'px';
document.getElementById('menucard1').style.width = maxW+'px';
document.getElementById('menucard2').style.width = maxW+'px';
document.getElementById('menucard3').style.width = maxW+'px';
this.ngOnInit();
  }
  scroll = ()=>{
    let ele = document.getElementById('fdiv')
    console.log('legaö')
    console.log(ele)
    ele.scrollIntoView({block: "start"})
  }
}
