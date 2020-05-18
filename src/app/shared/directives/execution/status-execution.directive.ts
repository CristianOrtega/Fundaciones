import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStatusExecution]'
})
export class StatusExecutionDirective {

  private STATUS_LIST = {
    ABORTED: 'Cancelada',
    ERROR: 'Terminada con errores',
    EXECUTING: 'Ejecutándose',
    FAILED: 'Fallida',
    FINISHED: 'Terminada',
    PENDING: 'Pendiente',
    WARNING: 'Terminada con advertencias'
  };

  constructor(private el: ElementRef) { 
    debugger;
  }

}
