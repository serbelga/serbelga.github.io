import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/polymer/lib/utils/html-tag.js";
import './styles.js';
/**
 * @customElement
 * @polymer
 */

class WorkView extends PolymerElement {
  static get template() {
    return html`
    <style include="styles">
        :host {
          display: block;
          font-family: 'Montserrat', sans-serif;
        }
    </style>
    
        <div>
            <div class="section-title">WORK</div>
            <div class="row">
                            <div class="card card-mini">
                                <div class="card-image">
                                    <img src="../../src/img/work/pymapp.svg">
                                </div>
                                <div class="card-subtitle">PymApp - Frontend Developer & UI Designer</div>
                                <div class="card-actions">
                                    <paper-button><a target="_blank" href="https://www.behance.net/gallery/64444291/Google-Play-Music-Material-Design-Concept"></a>View</paper-button>
                                </div>
                            </div>
                        </div>
        </div>
    
    `;
  }

  static get properties() {
    return {};
  }

}

window.customElements.define('work-view', WorkView);