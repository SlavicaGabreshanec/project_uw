import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  selectedDropdownOption = '';
  selectedSimpleNumberDropDownDemoOption = 1;
  progress: number = 70;

  dropdownDemoOptions = [
    'Water',
    'Coffee',
    'Juice',
    'Whiskey',
    'Tequila'
  ]

  simpleNumberDropdownDemoOptions = [
    1, 2, 3, 4
  ]

  constructor() { }

  ngOnInit(): void {
    this.selectedDropdownOption = this.dropdownDemoOptions[0];
  }

  changeSelectedDropdownOption(newValue: string): void {
    this.selectedDropdownOption = newValue;
  }

  changeSelectedSimpleNumberDropdownDemoOption(newValue: number): void {
    this.selectedSimpleNumberDropDownDemoOption = newValue;
  }

}
