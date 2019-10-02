import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  private breakpoint: number;
  private breakpointRowHeight: any;
  private Title: any = ['Web & App Development', 'Design', 'Security', 'Customization'];
  private Body: any = ['We only build websites for the outdoor industry, delivering you with a product that is ' +
  'geared to convert more customers.',
    'We build beautiful custom websites that are tailored for the outdoor industry. ' +
    'This will eliminate a lot of the design work, saving you time and money',
    'Our websites have guaranteed security. Your data and website will be safe under our framework.',
    'Although we do most of the heavy lifting for you, we have created and ' +
    'easy to use interface that allows you to edit and customize your site.'
  ];
  private buttonTxt: any = ['Learn More', 'Learn More', 'Learn More', 'Learn More'];
  private image: any = ['web', 'desktop_mac', 'security', 'add_to_photos'];

  @HostListener('window:resize', ['$event'])
  resetBreakPoints(event) {
    if (event.target.innerWidth <= 767) {
      this.breakpoint = 1;
      this.breakpointRowHeight = 200;
    } else {
      this.breakpoint = 2;
      this.breakpointRowHeight = 300;
    }
  }

  ngOnInit() {
    if (innerWidth <= 767) {
      this.breakpoint = 1;
      this.breakpointRowHeight = 200;
    } else {
      this.breakpoint = 2;
      this.breakpointRowHeight = 300;
    }
  }

}
