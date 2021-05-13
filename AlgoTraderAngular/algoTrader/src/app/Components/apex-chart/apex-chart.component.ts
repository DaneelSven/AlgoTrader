import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js'
import { demoDataOptions } from './apexChartsOptions'



const GET_COINS = gql`
query {
  getCoins {
    name
  }
}  
`

@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss']
})
export class ApexChartComponent implements OnInit {

  private getSubscription: Subscription



  constructor(private apollo: Apollo) { }

  async ngOnInit(): Promise<void> {
    this.getCoinData()

    let chart_dom = document.getElementById("chart")

    const options = await this.setOptions()
    var chart = new ApexCharts(chart_dom, options)
    chart.render()
  }

  setOptions() {
    var options = demoDataOptions

    return options
  }

  async getCoinData() {
    this.getSubscription = await this.apollo.watchQuery<any>({
      query: GET_COINS
    }).valueChanges.subscribe(({ data }) => {
      console.log("this is the data", data.getCoins);

    })

  }
}
