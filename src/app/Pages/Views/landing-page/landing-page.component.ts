import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  private breakpoint: number;
  private breakpointRowHeight: any;
  private Title: any = ['About Me', 'Projects', 'Interests'];
  private Body: any = ['Im pretty boring - but i do cool stuff',
    'Projects are dope.',
    'I have interesting interests.'
  ];
  private buttonTxt: any = ['Learn More', 'Learn More', 'Learn More', 'Learn More'];
  private image: any = ['web', 'desktop_mac', 'security', 'add_to_photos'];
  private breakpoint2: number;
  private breakpointRowHeight2: any;
  private Title2: string;
  private Body2: string;
  private buttonTxt2: string;
  private tiles: any = [
    {Title2: 'Digital Design',
      Body2: 'I love digital design',
      buttonTxt2: 'Learn More'},
    {Title2: 'Financial Analysis',
      Body2: 'I love finance',
      buttonTxt2: 'Learn More'},
    {Title2: 'Website Development',
      Body2: 'I love Web development',
      buttonTxt2: 'Learn More'},
    {Title2: 'Application Development',
      Body2: 'I love Application Development',
      buttonTxt2: 'Learn More'}
  ];

  // @ts-ignore
  resetBreakPoints(event) {
    if (event.target.innerWidth <= 767) {
      this.breakpoint = 1;
      this.breakpointRowHeight = 200;
    } else {
      this.breakpoint = 2;
      this.breakpointRowHeight = 300;
    }
    if (innerWidth <= 767) {
      this.breakpoint2 = 1;
      this.breakpointRowHeight2 = 200;
    } else {
      this.breakpoint2 = 2;
      this.breakpointRowHeight2 = 300;
    }
  }

  ngOnInit() {
    if (innerWidth <= 767) {
      this.breakpoint = 1;
      this.breakpointRowHeight = 200;
    } else {
      this.breakpoint = 2;
      this.breakpointRowHeight = 200;
    }
    if (innerWidth <= 767) {
      this.breakpoint2 = 1;
      this.breakpointRowHeight2 = 200;
    } else {
      this.breakpoint2 = 2;
      this.breakpointRowHeight2 = 300;
    }
  }

}
