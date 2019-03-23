import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  downloadQrCode() {
    const image = html2canvas(document.querySelector('#qrcode')).then(
      canvas => saveAs(canvas.toDataURL(), 'qrcode')
    );
  }
}
