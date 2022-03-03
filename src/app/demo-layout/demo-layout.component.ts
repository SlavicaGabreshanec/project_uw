import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-demo-layout',
  templateUrl: './demo-layout.component.html',
  styleUrls: ['./demo-layout.component.css'],
})
export class DemoLayoutComponent implements OnInit {
  constructor() {}
  public disabledButtonDemoText: String = "";

  public isSideComponentVisible: Boolean = false;

  ngOnInit(): void {}

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Backquote')
      this.isSideComponentVisible = !this.isSideComponentVisible;
  }
}
