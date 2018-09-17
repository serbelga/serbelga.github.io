import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/polymer/lib/utils/html-tag.js";
import './bio-view.js';
import './work-view.js';
import './posts-view.js';
import './ui-view.js';
import './styles.js';
import './social-icons.js';
import "../../node_modules/@polymer/polymer/lib/utils/html-tag.js";
import "../../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "../../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "../../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js";
import "../../node_modules/@polymer/app-layout/app-layout.js";
import "../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import "../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";
import "../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../node_modules/@polymer/iron-media-query/iron-media-query.js";
import "../../node_modules/@polymer/iron-selector/iron-selector.js";
import "../../node_modules/@polymer/iron-pages/iron-pages.js";
import "../../node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js";
import "../../node_modules/@polymer/paper-button/paper-button.js";
import "../../node_modules/@polymer/paper-card/paper-card.js";
import "../../node_modules/@polymer/paper-fab/paper-fab.js";
import "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../../node_modules/@polymer/paper-item/paper-item.js";
import "../../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../../node_modules/@polymer/paper-styles/paper-styles.js";
import "../../node_modules/@polymer/paper-tabs/paper-tab.js";
import "../../node_modules/@polymer/paper-tabs/paper-tabs.js";
/**
 * @customElement
 * @polymer
 */

class SergiobeldaMeApp extends PolymerElement {
  static get template() {
    return html`
    <style include="styles">
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
    
        @media (max-width: 600px) {
            [main-title] {
                font-size: 12px;
            }
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
        
        .card-subtitle {
            font-size: 18px;
            font-family: "Roboto Condensed", "Roboto", sans-serif;
            margin-left: 16px;
            margin-right: 16px;
            margin-top: 8px;
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
        
        paper-icon-button:first-child {
            margin-right: 4px;
        }
        
        paper-icon-button:last-child {
            margin-left: 4px;
        }
        
        paper-icon-button {
            margin-right: 4px;
            margin-left: 4px;
        }
        
        paper-icon-button.blue {
          color: var(--paper-blue-400);
          border: 2px solid var(--paper-blue-400);
          --paper-icon-button-ink-color: var(--paper-blue-600);
        }
        paper-icon-button.blue:hover {
          background-color: var(--paper-blue-400);
          color: white;
        }
        paper-icon-button.teal {
          color: var(--paper-teal-400);
          border: 2px solid var(--paper-teal-400);
          --paper-icon-button-ink-color: var(--paper-teal-600);
        }
        paper-icon-button.teal:hover {
          background-color: var(--paper-teal-400);
          color: white;
        }
        paper-icon-button.blue-grey {
          color: var(--paper-blue-grey-400);
          border: 2px solid var(--paper-blue-grey-400);
          --paper-icon-button-ink-color: var(--paper-blue-grey-600);
        }
        paper-icon-button.blue-grey:hover {
          background-color: var(--paper-blue-grey-400);
          color: white;
        }
        paper-icon-button.grey {
          color: var(--paper-grey-700);
          border: 2px solid var(--paper-grey-700);
          --paper-icon-button-ink-color: var(--paper-grey-900);
        }
        paper-icon-button.grey:hover {
          background-color: var(--paper-grey-700);
          color: white;
        }
        paper-icon-button.blue-a400 {
          color: var(--paper-blue-a400);
          border: 2px solid var(--paper-blue-a400);
          --paper-icon-button-ink-color: var(--paper-blue-a700);
        }
        paper-icon-button.blue-a400:hover {
          background-color: var(--paper-blue-a400);
          color: white;
        }
        paper-icon-button.indigo {
          color: var(--paper-indigo-400);
          border: 2px solid var(--paper-indigo-400);
          --paper-icon-button-ink-color: var(--paper-indigo-600);
        }
        paper-icon-button.indigo:hover {
          background-color: var(--paper-indigo-400);
          color: white;
        }
        
        footer {
            margin-top: 24px;
            color: #717171;
        }
        
        app-drawer-layout:not([narrow]) [drawer-toggle] {
      display: none;
    }
    </style>
        <app-location route="{{route}}"></app-location>
        <app-route
                route="{{route}}"
                pattern="/:page"
                data="{{data}}"
                tail="{{subroute}}">
        <!-- App-DrawerLayout -->
        <app-drawer-layout id="drawerLayout" force-narrow>
        <!-- App-Drawer -->
            <app-drawer id="drawer" swipe-open slot="drawer">
                <!-- App-Drawer Content -->
                <app-toolbar>
                        <paper-icon-button id="toggle" icon="arrow-back"
                                           on-click="toggle" ></paper-icon-button>
                        <div style="display: flex; justify-content: flex-end; width: 80%;">
                            <img src="../../src/img/logo.svg" width="48px">
                        </div>
                </app-toolbar>
                <iron-selector selected="[[routeData.page]]" attr-for-selected="name" class="drawer-list"
                                   role="navigation">
                        <ul role="navigation" class="nav">
            <li><a href="#speed">Bio</a></li>
            <li><a href="#modern">Work</a></li>
            <li><a href="#standard">Posts</a></li>
            <li><a href="#create">UI/UX</a></li>
          </ul>
                    </iron-selector>
            </app-drawer>
            <app-header-layout id="scrollingRegion">
        <app-header 
            effects="waterfall resize-snapped-title fade-background"
            effects-config='{"resize-snapped-title": {"startsAt": 0.8, "duration": "100ms"}, "fade-background": {"startsAt": 0.8, "endsAt": 0.9}}'
            condenses fixed>
            <app-toolbar >
                <paper-icon-button id="toggle" icon="menu" on-click="toggle" hidden$="{{wideLayout}}"></paper-icon-button>
                <div condensed-title style="width: 48px; height: 48px;" hidden$="{{!wideLayout}}">
                    <img src="../../src/img/logo.svg" width="48px">
                </div>
                <!--<div condensed-title>SERGIO BELDA</div>-->
            </app-toolbar>
            <app-toolbar class="middle">
            </app-toolbar>
            <div main-title >
                <div>HELLO</div>
                <div>I'M SERGIO BELDA</div>
                <div>SOFTWARE ENGINEER - UI DESIGNER</div>
            </div>
            <div hidden$="{{!wideLayout}}">
                <app-toolbar scroll-target="scrollingRegion" threshold="64">
                    <paper-tabs selected="[[page]]" attr-for-selected="name" role="navigation">
                        <paper-tab name="bio">
                            BIO
                        </paper-tab>
                        <paper-tab name="work">
                            WORK
                        </paper-tab>
                        <paper-tab name="posts">
                            POSTS
                        </paper-tab>
                        <paper-tab name="ui">
                            UI/UX
                        </paper-tab>
                    </paper-tabs>
                </app-toolbar>
            </div>
        </app-header>
        <iron-pages selected="[[page]]" attr-for-selected="page" style="padding-top: 260px;">
            <bio-view page="bio"></bio-view>
            <work-view page="work"></work-view>
            <posts-view page="posts"></posts-view>
            <ui-view page="ui"></ui-view>
        </iron-pages>
        
            
            <section id="contact" >
                <div>
                    <div class="section-title">CONTACT</div>
                    <div id="contact-row" class="row">
                        <a target="_blank" href="https://www.behance.net/sdagal8081d5">
                            <paper-icon-button class="grey" icon="social:behance"></paper-icon-button>
                        </a>
                        <a target="_blank" href="https://github.com/serbelga">
                            <paper-icon-button class="blue-grey" icon="social:github"></paper-icon-button>
                        </a>
                        <a target="_blank" href="https://medium.com/@serbelga">
                            <paper-icon-button class="teal" icon="social:medium"></paper-icon-button>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/sergio-belda-galbis/">
                            <paper-icon-button class="blue-a400" icon="social:linkedin"></paper-icon-button>
                        </a>
                        <!--
                        <a target="_blank" href="https://www.behance.net/sdagal8081d5">
                            <paper-icon-button class="indigo" icon="social:facebook"></paper-icon-button>
                        </a>
                        -->
                        <a target="_blank" href="https://twitter.com/SergioBeldaG">
                            <paper-icon-button class="blue" icon="social:twitter"></paper-icon-button>
                        </a>
                    </div>
                    </div>
            </section>
            <footer>
                Designed by Sergio Belda using Web Components
            </footer>
            </app-header-layout>
            
        </app-drawer-layout>
    
    <iron-media-query query="min-width: 600px" query-matches="{{wideLayout}}"></iron-media-query>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'new_website_polymer-app'
      },
      wideLayout: {
        type: Boolean,
        value: false,
        observer: 'onLayoutChange'
      },
      page: {
        type: String,
        value: 'bio'
      }
    };
  }

  scroll() {
    this.$.ui.scrollIntoView();
  }

  toggle(e) {
    var drawerLayout = this.$.drawerLayout;
    /*
    if (drawerLayout.forceNarrow || !drawerLayout.narrow) {
        drawerLayout.forceNarrow = !drawerLayout.forceNarrow;
    } else {
        drawerLayout.drawer.toggle();
    }*/

    drawerLayout.drawer.toggle();
  }

}

window.customElements.define('sergiobelda-me-app', SergiobeldaMeApp);