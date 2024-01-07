import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.css'
})
export class SvgIconComponent {
  @HostBinding('style.-webkit-mask-image')
  private _path!: string;

  @HostBinding('style.background-color')
  private _color!: string;

  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`;
  }

  @Input()
  public set color(color: string) {
    this._color = color;
  }
}
