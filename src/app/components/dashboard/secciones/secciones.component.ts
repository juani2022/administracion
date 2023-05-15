import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { categoria } from 'src/app/interfaces/categoria';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent {

  ListCategorias: categoria[] = [
    {categoria: "Policiales"},
    {categoria: "Economía"},
    {categoria: "Deportes"},
    {categoria: "Salud"},
    {categoria: "Educacion"},
    {categoria: "Espetáculos"},
    {categoria: "Internacionales"},
    {categoria: "Tecnologia"},
  ];

  displayedColumns: string[] = ['categoria' , 'acciones'];
  dataSource = new MatTableDataSource(this.ListCategorias);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit():void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}