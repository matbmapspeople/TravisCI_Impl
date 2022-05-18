import { 
  Component, 
  Input, 
  OnInit, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit, DoCheck, AfterContentChecked, AfterViewChecked, AfterViewInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('contructor called')
   }

 ngOnChanges(changes: SimpleChanges): void {
   console.log('works');
   console.log(changes)
 }

  ngOnInit(): void {
    console.log('ngOnInit called')
  };
  
  ngDoCheck(): void {
    console.log('ngDoCheck called')
  };
  ngAfterContentInit(): void {
    console.log('ngAfterInit called')
  };
  ngAfterContentChecked(): void {
    console.log('ngaftercontentchecked called')
  }

  ngAfterViewChecked(): void {
    console.log('afterviewchecked')
  }
  ngAfterViewInit(): void {
    console.log('afterviewinit')
  }

}
