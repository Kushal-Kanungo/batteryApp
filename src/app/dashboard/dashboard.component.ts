import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  data!: any;
  chartOptions: any;
  ngOnInit() {
    this.data = {
      labels: ['Charged', 'Empty'],
      datasets: [
        {
          data: [80, 20],
          backgroundColor: ['#66BB6A', '#FFA726'],
          hoverBackgroundColor: ['#64B5F6', '#FFB74D'],
        },
      ],
    };
  }
}
