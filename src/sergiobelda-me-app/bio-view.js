import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/utils/html-tag.js';
import './styles.js'
/**
 * @customElement
 * @polymer
 */
class BioView extends PolymerElement {
    static get template() {
        return html`
    <style include="styles">
        :host {
          display: block;
          font-family: 'Montserrat', sans-serif;
        }
    </style>
    
        <div>
            <div class="section-title">BIO</div>
            <div class="section-content">
                        <div id="bio-card" class="card">
                            <div class="card-header">
                                <img src="../../src/img/profile.jpg" width="120px" class="card-header-image">
                                <div class="card-title">SERGIO BELDA</div>
                            </div>
                            <div class="card-content">
                                <div>
                                        Software Engineer by the Polytechnic University of Valencia. Currently working on an entrepreneur project for Android in the entrepreneurship space, Start.Inf, at UPV.
                                    </div>
                                <div>
                                        Passionate about software development and new technologies. Interested in the development of applications for mobile devices, design of user interfaces, web applications and IoT. Moreover, I'm attracted by the development through agile techniques, and the development of model-driven software.
                                    </div>
                                <div>
                                        I have knowledge about different programming languages as Java, C#, C, Python, Javascript, Kotlin... Also, I have some ability in many multimedia design applications as Sketch, Adobe Photoshop and Adobe Illustrator.
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    `;
    }

    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'bio-view'
            },
        };
    }
}
window.customElements.define('bio-view', BioView);