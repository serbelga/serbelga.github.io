import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/polymer/lib/utils/html-tag.js';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-layout.js'
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/iron-selector/iron-selector';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-fab/paper-fab.js'
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-styles/paper-styles.js'
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-tabs/paper-tabs.js'

/**
 * @customElement
 * @polymer
 */
class SergiobeldaMeApp extends PolymerElement {
    static get template() {
        return html`
    <style>
        :host {
          display: block;
          font-family: 'Montserrat', sans-serif;
        }
        
        app-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            color: #fff;
            z-index: 1000;
            background-color: #717171;
            --app-header-background-front-layer: {
              background: url("../../src/img/header.jpg") no-repeat center;
              background-size: auto;
            };
        }

        app-header paper-icon-button {
            --paper-icon-button-ink-color: white;
        }
    
        app-toolbar.middle {
            height: 120px;
        }

        app-toolbar.bottom {
            height: 92px;
        }
        
        footer {
                height: 50px;
                line-height: 50px;
                text-align: center;
                background-color: white;
                font-size: 14px;
      }
      
        paper-tabs {
            margin-right: 20%;
            margin-left: 20%;
            --paper-tab-ink: #fff;
            --paper-tabs-selection-bar-color: #fff;
        }
      
        paper-tab[link] a {
            /* These mixins (from iron-flex-layout) center the link text. */
            @apply --layout-horizontal;
            @apply --layout-center-center;
            color: #fff;
            text-decoration: none;
            font-family: "Roboto Condensed", "Roboto", serif;
            font-size: 16px;
        }
        a paper-button {
            color: black;
            text-decoration: none;
        }
        
        [threshold-triggered] {
            position: fixed;
            top: 50px;
            left: 100px;
            right: 100px;
            z-index: 1;
        }
          
          
        [main-title] {
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 40px;
            font-size: 36px;
            margin: 0 0 24px;
        }
    
        [condensed-title] {
            font-weight: lighter;
            margin-left: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    
        [condensed-title] i {
            font-weight: 100;
            font-style: normal;
        }
    
        @media (max-width: 639px) {
            [main-title] {
                left: 85px;
            }
        }
        
        .section-title {
            margin: 48px 16px 16px;
            font-family: "Roboto Condensed", "Roboto", sans-serif;
            font-size: 36px;
            text-align: center;
        }
     
        .section-content {
            justify-content: center;
            display: flex;
        }
     
        .card {
            max-width: 800px;
                border: 1px solid #cccccc;
            padding: 0px 0px 16px;
            margin: 8px;
        }
        
        .card-top {
        
        }
        
        .card-mini {
            max-width: 250px;
        }
     
        .card-header {
            margin-top: 16px;
            display: flex;
            align-items: center;
            margin-bottom: 24px;
        }
     
        .card-title {
            font-size: 32px;
            font-family: "Roboto Condensed", "Roboto", sans-serif;
            font-weight: bold;
            margin-left: 24px;
        }
        
        .card-header-image {
            border-radius: 100px;
            margin-left: 16px;
        }
        
        .card-image {
            width: 250px;
            height: 200px;
            overflow: hidden;
        }
        
        .card-image img {
            width: 250px;
            height: auto;
        }
        
        .card-content {
            margin-top: 8px;
            color: #232f34;
            overflow: hidden;
            padding-right: 16px;
            padding-left: 16px;
        }
        
        .card-actions {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-top: 16px;
            margin-right: 8px;
        }
     
        .row {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        paper-fab.facebook {
            --paper-fab-background: var(--paper-blue-200);
        }
        
        paper-fab.twitter {
            --paper-fab-background: var(--paper-blue-a400);
        }
        
        paper-fab.github {
            --paper-fab-background: var(--paper-blue-grey-200);
        }
        
        paper-button {
            font-family: "Roboto Condensed", "Noto", sans-serif;
            font-size: 18px;
            font-weight: bold;
            border-radius: 0px;
            border: 2px solid black;
            height: 32px;
            padding: 8px 16px;
        }
    </style>

    <app-header 
    effects="waterfall resize-snapped-title fade-background"
    effects-config='{"resize-snapped-title": {"startsAt": 0.8, "duration": "100ms"}, "fade-background": {"startsAt": 0.8, "endsAt": 0.9}}'
    condenses fixed>
        <app-toolbar sticky>
            <!--<paper-icon-button icon="icons:menu"></paper-icon-button>-->
            <div condensed-title style="width: 48px; height: 48px;">
                <img src="../../src/img/logo.svg" width="48px">
            </div>
            <!--<div condensed-title>SERGIO BELDA</div>-->
        </app-toolbar>
        <app-toolbar class="middle">
        </app-toolbar>
        <div main-title>
            <div>HELLO</div>
            <div style="font-size: 48px;">I'M SERGIO BELDA</div>
            <div style="font-size: 18px;">SOFTWARE ENGINEER - UI DESIGNER</div>
        </div>
        <app-box scroll-target="scrollingRegion" threshold="64">
           <paper-tabs selected="0" autoselect>
            <paper-tab link>
                <a href="#bio" class="link" tabindex="-1">BIO</a>
            </paper-tab>
            <paper-tab link>
                <a href="#work" class="link" tabindex="-1">WORK</a>
            </paper-tab>
            <paper-tab link>
                <a href="#posts" class="link" tabindex="-1">POSTS</a>
            </paper-tab>
            <paper-tab link>
                <a href="#ui" class="link" tabindex="-1">UI/UX</a>
            </paper-tab>
            <paper-tab link>
                <a href="#contact" class="link" tabindex="-1">CONTACT</a>
            </paper-tab>
        </paper-tabs>
        </app-box>
    </app-header>
    <section id="bio" style="padding-top: 220px">
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
        
        
        
    </section>
    <section id="work">
        <div class="section-title">WORK</div>
        <div class="row">
            <div class="card card-mini">
                <div class="card-image">
                    <img src="../../src/img/work/pymapp.svg">
                </div>
                <div class="card-content">
                    <div>
                        PymApp - Frontend Developer & UI Designer
                    </div>
                </div>
                <div class="card-actions">
                    <paper-button><a target="_blank" href="https://www.behance.net/gallery/64444291/Google-Play-Music-Material-Design-Concept"></a>View</paper-button>
                </div>
            </div>
        </div>
    </section>
    <section id="posts">
        <div class="section-title">POSTS</div>
        <div class="row">
            <div class="card card-mini">
                <div class="card-image">
                    <img src="../../src/img/posts/1.jpg">
                </div>
                <div class="card-content">
                    <div>
                        Integración de un módulo NodeMCU ESP8266 con una aplicación Android en Kotlin (I)
                    </div>
                </div>
                <div class="card-actions">
                    <a target="_blank" href="https://medium.com/@serbelga/integraci%C3%B3n-de-un-m%C3%B3dulo-nodemcu-esp8266-con-una-aplicaci%C3%B3n-android-en-kotlin-i-e434294415d2"><paper-button>View</paper-button></a>
                </div>
            </div>
        </div>
    </section>
    <section id="ui">
        <div class="section-title">UI</div>
        <div class="row">
            <div class="card card-mini">
                <div class="card-image">
                    <img src="../../src/img/google_play_music_design/thumbnail.jpg">
                </div>
                <div class="card-content">
                    <div>
                    Google Play Music Material Design Concept
                    </div>
                </div>
                <div class="card-actions">
                    <a target="_blank" href="https://www.behance.net/gallery/64444291/Google-Play-Music-Material-Design-Concept"><paper-button>View</paper-button></a>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" >
        <div class="section-title">CONTACT</div>
        <div id="contact-row" class="row">
            
            <paper-fab icon="web:facebook" mini label="a" class="facebook" elevation="0">
           </paper-fab>
           <paper-fab icon="web:facebook" mini label="a" class="github">
           </paper-fab>
           <paper-fab icon="web:facebook" mini label="a" class="twitter">
           </paper-fab>
           <paper-fab icon="web:facebook" mini label="a" class="medium">
           </paper-fab>
            <paper-fab icon="web:facebook" mini label="a" class="linkedin">
           </paper-fab>
           <paper-fab icon="web:facebook" mini label="a" class="behance">
           </paper-fab>
        </div>
    </section>
    <footer>
      Designed by Sergio Belda using Web Components
    </footer>
    `;
    }

    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'new_website_polymer-app'
            }
        };
    }
}
window.customElements.define('sergiobelda-me-app', SergiobeldaMeApp);