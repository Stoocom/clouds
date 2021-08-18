import { Component, Output } from '@angular/core';

// export interface Theme {
//   title: string;
// }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  //isOpenedEditWindow: boolean = false;

  themes2 = [
    {title: "Программа", names: 'Все'},
    {title: "Период", names: 'Июнь 2019'},
    {title: "Статус", names: 'Все'},
  ];
  content = [
    {data: "23 дек, 9:00", name: 'Страхование с заботой о клиенте', members: 12, progress: 95},
    {data: "14 ноя, 9:30", name: 'Главные правила продаж', members: 10, progress: 91},
    {data: "19 окт, 14:30", name: 'Первичное обучение КС', members: 8, progress: 86},
    {data: "10 окт, 16:00", name: 'Вторичное обучение КС', members: 18, progress: 82},
    {data: "5 окт, 15:00", name: 'Вклады: теория и практика', members: 6, progress: 79},
    {data: "27 сен, 11:00", name: 'Очное обучение менеджеров', members: 20, progress: 73},
  ];

}
