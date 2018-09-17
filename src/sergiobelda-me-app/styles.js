/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="styles">
      <template>
            <style>
                /* Card Design */
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
                
                /* Section */
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
                
                .row {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                
                /* Button Design */
                a paper-button {
                    color: black;
                    text-decoration: none;
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
                
                /* Footer */
                footer {
                    margin-top: 24px;
                    color: #717171;
                    height: 50px;
                    text-align: center;
                    background-color: white;
                    font-size: 14px;
                }
        </style>
      </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
