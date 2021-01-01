(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html {\n  --mdc-typography-button-font-family: \"Roboto Condensed\", sans-serif;\n  --mdc-typography-headline4-font-family: \"Roboto Condensed\", sans-serif;\n  --mdc-typography-headline4-font-weight: 400;\n  --mdc-typography-headline4-font-size: 2.125rem;\n  --mdc-typography-headline4-line-height: 2.5rem;\n  --mdc-typography-headline5-font-family: \"Montserrat\", sans-serif;\n  --mdc-typography-headline5-font-weight: 500;\n  --mdc-typography-headline5-font-size: 1.5rem;\n  --mdc-typography-headline5-line-height: 2rem;\n  --mdc-typography-headline6-font-family: \"Montserrat\", sans-serif;\n  --mdc-typography-headline6-font-weight: 500;\n  --mdc-typography-headline6-font-size: 1.25rem;\n  --mdc-typography-subtitle1-font-family: \"Montserrat\", sans-serif;\n  --mdc-typography-subtitle1-font-weight: 500;\n  --mdc-typography-subtitle1-font-size: 0.875rem;\n  --mdc-typography-body1-font-family: \"Montserrat\", sans-serif;\n  --mdc-typography-body1-font-weight: 400;\n  --mdc-typography-body1-font-size: 1rem;\n  --mdc-typography-body1-line-height: 1.5rem;\n  --mdc-shape-small-component-radius: 8px;\n  --mdc-shape-medium-component-radius: 12px;\n  --mdc-shape-large-component-radius: 0px;\n\n  --dark-surface-00: #121212;\n  --dark-surface-01: #1D1D1D;\n}\n\n.theme-light {\n  --primary: var(--dark-surface-00);\n  --on-primary: white;\n  --secondary: white;\n  --on-secondary: var(--dark-surface-00);\n  --surface: white;\n  --on-surface: #424242;\n  --on-surface-medium: rgba(0, 0, 0, 0.6);\n  --outline: #eee;\n  --top-app-bar-color: white;\n  --selector: #044fff;\n  background: white;\n\n  --blue-linkedin: #2979ff;\n  --blue-twitter: #42a5f5;\n  --green-medium: #26a69a;\n  --gray-github: #455a64;\n}\n\n.theme-dark {\n  --primary: white;\n  --on-primary: var(--dark-surface-00);\n  --secondary: var(--dark-surface-00);\n  --on-secondary: white;\n  --surface: var(--dark-surface-00);\n  --on-surface: white;\n  --on-surface-medium: rgba(255, 255, 255, 0.6);\n  --outline: #7a7a7a;\n  --top-app-bar-color: var(--dark-surface-01);\n  --selector: #78b2ff;\n  background: var(--dark-surface-00);\n\n  --blue-linkedin: #85adff;\n  --blue-twitter: #2AA3EF;\n  --green-medium: #4db6ac;\n  --gray-github: #d6d6d6;\n}\n\nbody {\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: initial;\n}\n\n.content {\n  min-height: 100vh;\n  flex-direction: column;\n  display: flex;\n  margin: 24px;\n  align-items: center;\n}\n\nmwc-drawer {\n  --mdc-theme-surface: var(--surface);\n}\n\nmwc-list-item {\n  --mdc-theme-primary: var(--selector);\n  --mdc-list-vertical-padding: 0px;\n  --mdc-list-side-padding: 30px;\n  --mdc-typography-subtitle1-letter-spacing: 0.1px;\n  --mdc-list-side-padding: 12px;\n  --mdc-theme-text-primary-on-background: var(--on-surface);\n  border-radius: var(--mdc-shape-small-component-radius);\n  margin: 4px;\n  overflow: hidden;\n}\n\nmwc-top-app-bar-fixed {\n  --mdc-theme-primary: var(--top-app-bar-color);\n  --mdc-theme-on-primary: var(--on-secondary);\n}\n\nmwc-tab-bar {\n  --mdc-theme-primary: var(--primary);\n  --mdc-tab-color-default: gray;\n  --mdc-tab-text-label-color-default: gray;\n  --mdc-tab-stacked-height: 64px;\n}\n\nmwc-tab {\n  --mdc-typography-button-letter-spacing: 0.1px;\n}\n\n@media (max-width: 720px) {\n  .top-app-bar-tab-bar {\n    visibility: hidden;\n  }\n}\n\n@media (min-width: 720px) {\n  .top-app-bar-menu-icon-button {\n    display: none;\n  }\n}\n\nmwc-button {\n  --mdc-theme-primary: var(--primary);\n  --mdc-button-outline-color: var(--outline);\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.medium-icon-button {\n  color: var(--green-medium);\n}\n\n.linkedin-icon-button {\n  color: var(--blue-linkedin);\n}\n\n.twitter-icon-button {\n  color: var(--blue-twitter);\n}\n\n.github-icon-button {\n  color: var(--gray-github);\n}\n\n.toggle-theme-icon-button {\n  color: var(--primary);\n}\n\nh4 {\n  font-family: var(--mdc-typography-headline4-font-family);\n  font-weight: var(--mdc-typography-headline4-font-weight);\n  font-size: var(--mdc-typography-headline4-font-size);\n  line-height: var(--mdc-typography-headline4-line-height);\n  color: var(--on-surface);\n  margin: 0px;\n}\n\nh5 {\n  font-family: var(--mdc-typography-headline5-font-family);\n  font-weight: var(--mdc-typography-headline5-font-weight);\n  font-size: var(--mdc-typography-headline5-font-size);\n  line-height: var(--mdc-typography-headline5-line-height);\n  color: var(--on-surface);\n  margin: 0px;\n}\n\nh6 {\n  font-family: var(--mdc-typography-headline6-font-family);\n  font-weight: var(--mdc-typography-headline6-font-weight);\n  font-size: var(--mdc-typography-headline6-font-size);\n  color: var(--on-surface);\n  margin: 0px;\n}\n\n.body1 {\n  font-family: var(--mdc-typography-body1-font-family);\n  font-weight: var(--mdc-typography-body1-font-weight);\n  font-size: var(--mdc-typography-body1-font-size);\n  line-height: var(--mdc-typography-body1-line-height);\n  color: var(--on-surface-medium);\n}\n\n.horizontal-list {\n  display: flex;\n  overflow-x: scroll;\n}\n\n.card {\n  border-radius: var(--mdc-shape-medium-component-radius);\n  background-color: var(--surface);\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-color: var(--outline);\n  border-style: solid;\n}\n\n.card_actions {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 52px;\n  padding: 8px;\n}\n\n.post-card {\n  margin: 24px;\n  width: 70%;\n  max-width: 640px;\n  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\n}\n\n.post-card img {\n  border-radius: 12px 12px 0px 0px;\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.post-card-title {\n  margin: 8px;\n}\n\n.project-card {\n  margin: 24px;\n  width: 70%;\n  max-width: 720px;\n  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\n}\n\n.project-description {\n  margin-bottom: 16px;\n}\n\n.project-img {\n  border: 1px solid var(--outline);\n  border-radius: var(--mdc-shape-small-component-radius);\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-left: 24px;\n  margin-top: 24px;\n}\n\n.project-details {\n  margin: 24px;\n}\n\n.project-info {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: 719px) {\n  .project-info {\n    flex-direction: column;\n  }\n}\n\n.project-info-add {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n@media (max-width: 719px) {\n  .project-info-add {\n    margin-top: 24px;\n    margin-left: 0;\n  }\n}\n\n.about-content {\n  justify-content: start;\n  margin: 24px;\n}\n\n.about-img {\n  margin-bottom: 24px;\n  border-radius: var(--mdc-shape-small-component-radius);\n}\n\n.bio-section {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 719px) {\n  .bio-section {\n    width: 55%;\n  }\n}\n\n.design-card {\n  margin: 24px;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.design-card:last-child {\n  position: relative;\n}\n\n.design-card:last-child::after {\n  position: absolute;\n  content: '';\n  right: -24px;\n  width: 24px;\n  height: 100%;\n}\n\n.design-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.design-details {\n  margin: 24px;\n}\n\n.design-img {\n  border: 1px solid var(--outline);\n  border-radius: var(--mdc-shape-small-component-radius);\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: 24px 24px 0 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHNEQUFzRDtFQUN0RCxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICAtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIC0tbWRjLXR5cG9ncmFwaHktaGVhZGxpbmU0LWZvbnQtZmFtaWx5OiBcIlJvYm90byBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTQtZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTQtZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTQtbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTUtZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAtLW1kYy10eXBvZ3JhcGh5LWhlYWRsaW5lNS1mb250LXdlaWdodDogNTAwO1xuICAtLW1kYy10eXBvZ3JhcGh5LWhlYWRsaW5lNS1mb250LXNpemU6IDEuNXJlbTtcbiAgLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTUtbGluZS1oZWlnaHQ6IDJyZW07XG4gIC0tbWRjLXR5cG9ncmFwaHktaGVhZGxpbmU2LWZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTYtZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTYtZm9udC1zaXplOiAxLjI1cmVtO1xuICAtLW1kYy10eXBvZ3JhcGh5LXN1YnRpdGxlMS1mb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIC0tbWRjLXR5cG9ncmFwaHktc3VidGl0bGUxLWZvbnQtd2VpZ2h0OiA1MDA7XG4gIC0tbWRjLXR5cG9ncmFwaHktc3VidGl0bGUxLWZvbnQtc2l6ZTogMC44NzVyZW07XG4gIC0tbWRjLXR5cG9ncmFwaHktYm9keTEtZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAtLW1kYy10eXBvZ3JhcGh5LWJvZHkxLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tbWRjLXR5cG9ncmFwaHktYm9keTEtZm9udC1zaXplOiAxcmVtO1xuICAtLW1kYy10eXBvZ3JhcGh5LWJvZHkxLWxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIC0tbWRjLXNoYXBlLXNtYWxsLWNvbXBvbmVudC1yYWRpdXM6IDhweDtcbiAgLS1tZGMtc2hhcGUtbWVkaXVtLWNvbXBvbmVudC1yYWRpdXM6IDEycHg7XG4gIC0tbWRjLXNoYXBlLWxhcmdlLWNvbXBvbmVudC1yYWRpdXM6IDBweDtcblxuICAtLWRhcmstc3VyZmFjZS0wMDogIzEyMTIxMjtcbiAgLS1kYXJrLXN1cmZhY2UtMDE6ICMxRDFEMUQ7XG59XG5cbi50aGVtZS1saWdodCB7XG4gIC0tcHJpbWFyeTogdmFyKC0tZGFyay1zdXJmYWNlLTAwKTtcbiAgLS1vbi1wcmltYXJ5OiB3aGl0ZTtcbiAgLS1zZWNvbmRhcnk6IHdoaXRlO1xuICAtLW9uLXNlY29uZGFyeTogdmFyKC0tZGFyay1zdXJmYWNlLTAwKTtcbiAgLS1zdXJmYWNlOiB3aGl0ZTtcbiAgLS1vbi1zdXJmYWNlOiAjNDI0MjQyO1xuICAtLW9uLXN1cmZhY2UtbWVkaXVtOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIC0tb3V0bGluZTogI2VlZTtcbiAgLS10b3AtYXBwLWJhci1jb2xvcjogd2hpdGU7XG4gIC0tc2VsZWN0b3I6ICMwNDRmZmY7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gIC0tYmx1ZS1saW5rZWRpbjogIzI5NzlmZjtcbiAgLS1ibHVlLXR3aXR0ZXI6ICM0MmE1ZjU7XG4gIC0tZ3JlZW4tbWVkaXVtOiAjMjZhNjlhO1xuICAtLWdyYXktZ2l0aHViOiAjNDU1YTY0O1xufVxuXG4udGhlbWUtZGFyayB7XG4gIC0tcHJpbWFyeTogd2hpdGU7XG4gIC0tb24tcHJpbWFyeTogdmFyKC0tZGFyay1zdXJmYWNlLTAwKTtcbiAgLS1zZWNvbmRhcnk6IHZhcigtLWRhcmstc3VyZmFjZS0wMCk7XG4gIC0tb24tc2Vjb25kYXJ5OiB3aGl0ZTtcbiAgLS1zdXJmYWNlOiB2YXIoLS1kYXJrLXN1cmZhY2UtMDApO1xuICAtLW9uLXN1cmZhY2U6IHdoaXRlO1xuICAtLW9uLXN1cmZhY2UtbWVkaXVtOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIC0tb3V0bGluZTogIzdhN2E3YTtcbiAgLS10b3AtYXBwLWJhci1jb2xvcjogdmFyKC0tZGFyay1zdXJmYWNlLTAxKTtcbiAgLS1zZWxlY3RvcjogIzc4YjJmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1zdXJmYWNlLTAwKTtcblxuICAtLWJsdWUtbGlua2VkaW46ICM4NWFkZmY7XG4gIC0tYmx1ZS10d2l0dGVyOiAjMkFBM0VGO1xuICAtLWdyZWVuLW1lZGl1bTogIzRkYjZhYztcbiAgLS1ncmF5LWdpdGh1YjogI2Q2ZDZkNjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaXRpYWw7XG59XG5cbi5jb250ZW50IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubXdjLWRyYXdlciB7XG4gIC0tbWRjLXRoZW1lLXN1cmZhY2U6IHZhcigtLXN1cmZhY2UpO1xufVxuXG5td2MtbGlzdC1pdGVtIHtcbiAgLS1tZGMtdGhlbWUtcHJpbWFyeTogdmFyKC0tc2VsZWN0b3IpO1xuICAtLW1kYy1saXN0LXZlcnRpY2FsLXBhZGRpbmc6IDBweDtcbiAgLS1tZGMtbGlzdC1zaWRlLXBhZGRpbmc6IDMwcHg7XG4gIC0tbWRjLXR5cG9ncmFwaHktc3VidGl0bGUxLWxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgLS1tZGMtbGlzdC1zaWRlLXBhZGRpbmc6IDEycHg7XG4gIC0tbWRjLXRoZW1lLXRleHQtcHJpbWFyeS1vbi1iYWNrZ3JvdW5kOiB2YXIoLS1vbi1zdXJmYWNlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWRjLXNoYXBlLXNtYWxsLWNvbXBvbmVudC1yYWRpdXMpO1xuICBtYXJnaW46IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxubXdjLXRvcC1hcHAtYmFyLWZpeGVkIHtcbiAgLS1tZGMtdGhlbWUtcHJpbWFyeTogdmFyKC0tdG9wLWFwcC1iYXItY29sb3IpO1xuICAtLW1kYy10aGVtZS1vbi1wcmltYXJ5OiB2YXIoLS1vbi1zZWNvbmRhcnkpO1xufVxuXG5td2MtdGFiLWJhciB7XG4gIC0tbWRjLXRoZW1lLXByaW1hcnk6IHZhcigtLXByaW1hcnkpO1xuICAtLW1kYy10YWItY29sb3ItZGVmYXVsdDogZ3JheTtcbiAgLS1tZGMtdGFiLXRleHQtbGFiZWwtY29sb3ItZGVmYXVsdDogZ3JheTtcbiAgLS1tZGMtdGFiLXN0YWNrZWQtaGVpZ2h0OiA2NHB4O1xufVxuXG5td2MtdGFiIHtcbiAgLS1tZGMtdHlwb2dyYXBoeS1idXR0b24tbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnRvcC1hcHAtYmFyLXRhYi1iYXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLnRvcC1hcHAtYmFyLW1lbnUtaWNvbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxubXdjLWJ1dHRvbiB7XG4gIC0tbWRjLXRoZW1lLXByaW1hcnk6IHZhcigtLXByaW1hcnkpO1xuICAtLW1kYy1idXR0b24tb3V0bGluZS1jb2xvcjogdmFyKC0tb3V0bGluZSk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ubWVkaXVtLWljb24tYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWdyZWVuLW1lZGl1bSk7XG59XG5cbi5saW5rZWRpbi1pY29uLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlLWxpbmtlZGluKTtcbn1cblxuLnR3aXR0ZXItaWNvbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0tYmx1ZS10d2l0dGVyKTtcbn1cblxuLmdpdGh1Yi1pY29uLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LWdpdGh1Yik7XG59XG5cbi50b2dnbGUtdGhlbWUtaWNvbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWhlYWRsaW5lNC1mb250LWZhbWlseSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTQtZm9udC13ZWlnaHQpO1xuICBmb250LXNpemU6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWhlYWRsaW5lNC1mb250LXNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbWRjLXR5cG9ncmFwaHktaGVhZGxpbmU0LWxpbmUtaGVpZ2h0KTtcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xuICBtYXJnaW46IDBweDtcbn1cblxuaDUge1xuICBmb250LWZhbWlseTogdmFyKC0tbWRjLXR5cG9ncmFwaHktaGVhZGxpbmU1LWZvbnQtZmFtaWx5KTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWhlYWRsaW5lNS1mb250LXdlaWdodCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tbWRjLXR5cG9ncmFwaHktaGVhZGxpbmU1LWZvbnQtc2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTUtbGluZS1oZWlnaHQpO1xuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZSk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5oNiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTYtZm9udC1mYW1pbHkpO1xuICBmb250LXdlaWdodDogdmFyKC0tbWRjLXR5cG9ncmFwaHktaGVhZGxpbmU2LWZvbnQtd2VpZ2h0KTtcbiAgZm9udC1zaXplOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1oZWFkbGluZTYtZm9udC1zaXplKTtcbiAgY29sb3I6IHZhcigtLW9uLXN1cmZhY2UpO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJvZHkxIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJvZHkxLWZvbnQtZmFtaWx5KTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJvZHkxLWZvbnQtd2VpZ2h0KTtcbiAgZm9udC1zaXplOiB2YXIoLS1tZGMtdHlwb2dyYXBoeS1ib2R5MS1mb250LXNpemUpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbWRjLXR5cG9ncmFwaHktYm9keTEtbGluZS1oZWlnaHQpO1xuICBjb2xvcjogdmFyKC0tb24tc3VyZmFjZS1tZWRpdW0pO1xufVxuXG4uaG9yaXpvbnRhbC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1kYy1zaGFwZS1tZWRpdW0tY29tcG9uZW50LXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1vdXRsaW5lKTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmNhcmRfYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IDUycHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnBvc3QtY2FyZCB7XG4gIG1hcmdpbjogMjRweDtcbiAgd2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59XG5cbi5wb3N0LWNhcmQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDBweCAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wb3N0LWNhcmQtdGl0bGUge1xuICBtYXJnaW46IDhweDtcbn1cblxuLnByb2plY3QtY2FyZCB7XG4gIG1hcmdpbjogMjRweDtcbiAgd2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnByb2plY3QtaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb3V0bGluZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1kYy1zaGFwZS1zbWFsbC1jb21wb25lbnQtcmFkaXVzKTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMge1xuICBtYXJnaW46IDI0cHg7XG59XG5cbi5wcm9qZWN0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzE5cHgpIHtcbiAgLnByb2plY3QtaW5mbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4ucHJvamVjdC1pbmZvLWFkZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcxOXB4KSB7XG4gIC5wcm9qZWN0LWluZm8tYWRkIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgbWFyZ2luOiAyNHB4O1xufVxuXG4uYWJvdXQtaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWRjLXNoYXBlLXNtYWxsLWNvbXBvbmVudC1yYWRpdXMpO1xufVxuXG4uYmlvLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzE5cHgpIHtcbiAgLmJpby1zZWN0aW9uIHtcbiAgICB3aWR0aDogNTUlO1xuICB9XG59XG5cbi5kZXNpZ24tY2FyZCB7XG4gIG1hcmdpbjogMjRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG59XG5cbi5kZXNpZ24tY2FyZDpsYXN0LWNoaWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGVzaWduLWNhcmQ6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcnO1xuICByaWdodDogLTI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kZXNpZ24taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kZXNpZ24tZGV0YWlscyB7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuLmRlc2lnbi1pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vdXRsaW5lKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWRjLXNoYXBlLXNtYWxsLWNvbXBvbmVudC1yYWRpdXMpO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW46IDI0cHggMjRweCAwIDI0cHg7XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sergiobelda/WebstormProjects/serbelga-website/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map