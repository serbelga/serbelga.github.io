import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/polymer/lib/utils/html-tag.js";
import './styles.js';
/**
 * @customElement
 * @polymer
 */

class PostsView extends PolymerElement {
  static get template() {
    return html`
    <style include="styles">
        :host {
          display: block;
          font-family: 'Montserrat', sans-serif;
        }
    </style>
    
        <div>
                    <div class="section-title">POSTS</div>
                    <div class="row">
                        <div class="card card-mini">
                            <div class="card-image">
                                <img src="../../src/img/posts/1.jpg">
                            </div>
                            <div class="card-subtitle">Integración de un módulo NodeMCU ESP8266 con una aplicación Android en Kotlin (I)</div>
                            <div class="card-actions">
                                <a target="_blank" href="https://medium.com/@serbelga/integraci%C3%B3n-de-un-m%C3%B3dulo-nodemcu-esp8266-con-una-aplicaci%C3%B3n-android-en-kotlin-i-e434294415d2"><paper-button>View</paper-button></a>
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

window.customElements.define('posts-view', PostsView);