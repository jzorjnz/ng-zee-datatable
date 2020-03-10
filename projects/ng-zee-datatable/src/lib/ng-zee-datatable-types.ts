import { Pipe } from '@angular/core';

export interface NgZeeDataTableColumn {
  displayName: string;
  value: string;
  type: 'string' | 'number' | 'button' | 'customValue';
  pipe?: Pipe;
  pipeArgs?: string[];
  action?: 'index' | 'element';
  image?: string;
  icon?: string;
  color?: string;
  customValue?: any;
}
