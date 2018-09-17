import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/utils/html-tag.js';
import './styles.js'
/**
 * @customElement
 * @polymer
 */
class UiView extends PolymerElement {
    static get template() {
        return html`
    <style include="styles">
        :host {
          display: block;
          font-family: 'Montserrat', sans-serif;
        }
    </style>
    
        <div>
                    <div class="section-title">UI</div>
                    <div class="row">
                        <div class="card card-mini">
                            <div class="card-image">
                                <img src="../../src/img/google_play_music_design/thumbnail.jpg">
                            </div>
                            <div class="card-subtitle">Google Play Music Material Design Concept</div>
                            <div class="card-actions">
                                <a target="_blank" href="https://www.behance.net/gallery/64444291/Google-Play-Music-Material-Design-Concept"><paper-button>View</paper-button></a>
                            </div>
                        </div>
                    </div>
                    </div>
    
    `;
    }

    static get properties() {
        return {
        };
    }
}
window.customElements.define('ui-view', UiView);