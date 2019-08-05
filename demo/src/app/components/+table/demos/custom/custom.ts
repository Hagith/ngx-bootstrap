import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'demo-table-custom',
  templateUrl: './custom.html'
})
export class DemoTableCustomComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    { item: 'Beach ball', cost: 4 },
    { item: 'Towel', cost: 5 },
    { item: 'Frisbee', cost: 2 },
    { item: 'Sunscreen', cost: 4 },
    { item: 'Cooler', cost: 25 },
    { item: 'Swim suit', cost: 15 }
  ];
  total: number;

  ngOnInit(): void {
    this.total = this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
