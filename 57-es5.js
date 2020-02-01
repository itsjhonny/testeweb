function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js ***!
    \*********************************************************************/

  /*! exports provided: ion_searchbar */

  /***/
  function node_modulesIonicCoreDistEsmIonSearchbarMdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_searchbar", function () {
      return Searchbar;
    });
    /* harmony import */


    var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-ca0488fc.js */
    "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
    /* harmony import */


    var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers-46f4a262.js */
    "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
    /* harmony import */


    var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./index-3476b023.js */
    "./node_modules/@ionic/core/dist/esm/index-3476b023.js");

    var Searchbar =
    /*#__PURE__*/
    function () {
      function Searchbar(hostRef) {
        var _this = this;

        _classCallCheck(this, Searchbar);

        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.isCancelVisible = false;
        this.shouldAlignLeft = true;
        this.focused = false;
        this.noAnimate = true;
        /**
         * If `true`, enable searchbar animation.
         */

        this.animated = false;
        /**
         * Set the input's autocomplete property.
         */

        this.autocomplete = 'off';
        /**
         * Set the input's autocorrect property.
         */

        this.autocorrect = 'off';
        /**
         * Set the cancel button icon. Only applies to `md` mode.
         */

        this.cancelButtonIcon = 'md-arrow-back';
        /**
         * Set the the cancel button text. Only applies to `ios` mode.
         */

        this.cancelButtonText = 'Cancel';
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */

        this.debounce = 250;
        /**
         * If `true`, the user cannot interact with the input.
         */

        this.disabled = false;
        /**
         * A hint to the browser for which keyboard to display.
         * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
         * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */

        this.inputmode = 'search';
        /**
         * Set the input's placeholder.
         * `placeholder` can accept either plaintext or HTML as a string.
         * To display characters normally reserved for HTML, they
         * must be escaped. For example `<Ionic>` would become
         * `&lt;Ionic&gt;`
         *
         * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
         */

        this.placeholder = 'Search';
        /**
         * The icon to use as the search icon.
         */

        this.searchIcon = 'search';
        /**
         * Sets the behavior for the cancel button. Defaults to `"never"`.
         * Setting to `"focus"` shows the cancel button on focus.
         * Setting to `"never"` hides the cancel button.
         * Setting to `"always"` shows the cancel button regardless
         * of focus state.
         */

        this.showCancelButton = 'never';
        /**
         * If `true`, enable spellcheck on the input.
         */

        this.spellcheck = false;
        /**
         * Set the type of the input.
         */

        this.type = 'search';
        /**
         * the value of the searchbar.
         */

        this.value = '';
        /**
         * Clears the input field and triggers the control change.
         */

        this.onClearInput = function (ev) {
          _this.ionClear.emit();

          if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
          } // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
          // wait for 4 frames


          setTimeout(function () {
            var value = _this.getValue();

            if (value !== '') {
              _this.value = '';

              _this.ionInput.emit();
            }
          }, 16 * 4);
        };
        /**
         * Clears the input field and tells the input to blur since
         * the clearInput function doesn't want the input to blur
         * then calls the custom cancel function if the user passed one in.
         */


        this.onCancelSearchbar = function (ev) {
          if (ev) {
            ev.preventDefault();
            ev.stopPropagation();
          }

          _this.ionCancel.emit();

          _this.onClearInput();

          if (_this.nativeInput) {
            _this.nativeInput.blur();
          }
        };
        /**
         * Update the Searchbar input value when the input changes
         */


        this.onInput = function (ev) {
          var input = ev.target;

          if (input) {
            _this.value = input.value;
          }

          _this.ionInput.emit(ev);
        };
        /**
         * Sets the Searchbar to not focused and checks if it should align left
         * based on whether there is a value in the searchbar or not.
         */


        this.onBlur = function () {
          _this.focused = false;

          _this.ionBlur.emit();

          _this.positionElements();
        };
        /**
         * Sets the Searchbar to focused and active on input focus.
         */


        this.onFocus = function () {
          _this.focused = true;

          _this.ionFocus.emit();

          _this.positionElements();
        };

        this.ionInput = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionInput", 7);
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionCancel = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionCancel", 7);
        this.ionClear = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionClear", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
      }

      _createClass(Searchbar, [{
        key: "debounceChanged",
        value: function debounceChanged() {
          this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.ionChange, this.debounce);
        }
      }, {
        key: "valueChanged",
        value: function valueChanged() {
          var inputEl = this.nativeInput;
          var value = this.getValue();

          if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
          }

          this.ionChange.emit({
            value: value
          });
        }
      }, {
        key: "showCancelButtonChanged",
        value: function showCancelButtonChanged() {
          var _this2 = this;

          requestAnimationFrame(function () {
            _this2.positionElements();

            _this2.el.forceUpdate();
          });
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          this.emitStyle();
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          var _this3 = this;

          if (this.showCancelButton === 'false' || this.showCancelButton === false) {
            console.warn('The boolean values of showCancelButton are deprecated. Please use "never" instead of "false".');
          }

          if (this.showCancelButton === '' || this.showCancelButton === 'true' || this.showCancelButton === true) {
            console.warn('The boolean values of showCancelButton are deprecated. Please use "focus" instead of "true".');
          }

          this.positionElements();
          this.debounceChanged();
          setTimeout(function () {
            _this3.noAnimate = false;
          }, 300);
        }
      }, {
        key: "emitStyle",
        value: function emitStyle() {
          this.ionStyle.emit({
            'searchbar': true
          });
        }
        /**
         * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
         * `input.focus()`.
         */

      }, {
        key: "setFocus",
        value: function () {
          var _setFocus = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.nativeInput) {
                      this.nativeInput.focus();
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function setFocus() {
            return _setFocus.apply(this, arguments);
          }

          return setFocus;
        }()
        /**
         * Returns the native `<input>` element used under the hood.
         */

      }, {
        key: "getInputElement",
        value: function getInputElement() {
          return Promise.resolve(this.nativeInput);
        }
        /**
         * Positions the input search icon, placeholder, and the cancel button
         * based on the input value and if it is focused. (ios only)
         */

      }, {
        key: "positionElements",
        value: function positionElements() {
          var value = this.getValue();
          var prevAlignLeft = this.shouldAlignLeft;
          var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var shouldAlignLeft = !this.animated || value.trim() !== '' || !!this.focused;
          this.shouldAlignLeft = shouldAlignLeft;

          if (mode !== 'ios') {
            return;
          }

          if (prevAlignLeft !== shouldAlignLeft) {
            this.positionPlaceholder();
          }

          if (this.animated) {
            this.positionCancelButton();
          }
        }
        /**
         * Positions the input placeholder
         */

      }, {
        key: "positionPlaceholder",
        value: function positionPlaceholder() {
          var inputEl = this.nativeInput;

          if (!inputEl) {
            return;
          }

          var isRTL = document.dir === 'rtl';
          var iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');

          if (this.shouldAlignLeft) {
            inputEl.removeAttribute('style');
            iconEl.removeAttribute('style');
          } else {
            // Create a dummy span to get the placeholder width
            var doc = document;
            var tempSpan = doc.createElement('span');
            tempSpan.innerHTML = Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_4__["s"])(this.placeholder) || '';
            doc.body.appendChild(tempSpan); // Get the width of the span then remove it

            var textWidth = tempSpan.offsetWidth;
            tempSpan.remove(); // Calculate the input padding

            var inputLeft = 'calc(50% - ' + textWidth / 2 + 'px)'; // Calculate the icon margin

            var iconLeft = 'calc(50% - ' + (textWidth / 2 + 30) + 'px)'; // Set the input padding start and icon margin start

            if (isRTL) {
              inputEl.style.paddingRight = inputLeft;
              iconEl.style.marginRight = iconLeft;
            } else {
              inputEl.style.paddingLeft = inputLeft;
              iconEl.style.marginLeft = iconLeft;
            }
          }
        }
        /**
         * Show the iOS Cancel button on focus, hide it offscreen otherwise
         */

      }, {
        key: "positionCancelButton",
        value: function positionCancelButton() {
          var isRTL = document.dir === 'rtl';
          var cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
          var shouldShowCancel = this.shouldShowCancelButton();

          if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
            var cancelStyle = cancelButton.style;
            this.isCancelVisible = shouldShowCancel;

            if (shouldShowCancel) {
              if (isRTL) {
                cancelStyle.marginLeft = '0';
              } else {
                cancelStyle.marginRight = '0';
              }
            } else {
              var offset = cancelButton.offsetWidth;

              if (offset > 0) {
                if (isRTL) {
                  cancelStyle.marginLeft = -offset + 'px';
                } else {
                  cancelStyle.marginRight = -offset + 'px';
                }
              }
            }
          }
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return this.value || '';
        }
      }, {
        key: "hasValue",
        value: function hasValue() {
          return this.getValue() !== '';
        }
        /**
         * Determines whether or not the cancel button should be visible onscreen.
         * Cancel button should be shown if one of two conditions applies:
         * 1. `showCancelButton` is set to `always`.
         * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
         */

      }, {
        key: "shouldShowCancelButton",
        value: function shouldShowCancelButton() {
          if (isCancelButtonSetToNever(this.showCancelButton) || isCancelButtonSetToFocus(this.showCancelButton) && !this.focused) {
            return false;
          }

          return true;
        }
      }, {
        key: "render",
        value: function render() {
          var _Object$assign,
              _this4 = this;

          var animated = this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true);

          var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var clearIcon = this.clearIcon || (mode === 'ios' ? 'ios-close-circle' : 'md-close');
          var searchIcon = this.searchIcon;
          var cancelButton = !isCancelButtonSetToNever(this.showCancelButton) && Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            "aria-label": "cancel",
            type: "button",
            tabIndex: mode === 'ios' && !this.shouldShowCancelButton() ? -1 : undefined,
            onMouseDown: this.onCancelSearchbar,
            onTouchStart: this.onCancelSearchbar,
            class: "searchbar-cancel-button"
          }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, mode === 'md' ? Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            "aria-hidden": "true",
            mode: mode,
            icon: this.cancelButtonIcon,
            lazy: false
          }) : this.cancelButtonText));
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "search",
            "aria-disabled": this.disabled ? 'true' : null,
            class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'searchbar-animated', animated), _defineProperty(_Object$assign, 'searchbar-disabled', this.disabled), _defineProperty(_Object$assign, 'searchbar-no-animate', animated && this.noAnimate), _defineProperty(_Object$assign, 'searchbar-has-value', this.hasValue()), _defineProperty(_Object$assign, 'searchbar-left-aligned', this.shouldAlignLeft), _defineProperty(_Object$assign, 'searchbar-has-focus', this.focused), _defineProperty(_Object$assign, 'searchbar-should-show-cancel', this.shouldShowCancelButton()), _Object$assign))
          }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "searchbar-input-container"
          }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            "aria-label": "search text",
            disabled: this.disabled,
            ref: function ref(el) {
              return _this4.nativeInput = el;
            },
            class: "searchbar-input",
            inputMode: this.inputmode,
            onInput: this.onInput,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            placeholder: this.placeholder,
            type: this.type,
            value: this.getValue(),
            autoComplete: this.autocomplete,
            autoCorrect: this.autocorrect,
            spellCheck: this.spellcheck
          }), mode === 'md' && cancelButton, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            mode: mode,
            icon: searchIcon,
            lazy: false,
            class: "searchbar-search-icon"
          }), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            "aria-label": "reset",
            type: "button",
            "no-blur": true,
            class: "searchbar-clear-button",
            onMouseDown: this.onClearInput,
            onTouchStart: this.onClearInput
          }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            "aria-hidden": "true",
            mode: mode,
            icon: clearIcon,
            lazy: false,
            class: "searchbar-clear-icon"
          }))), mode === 'ios' && cancelButton);
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "debounce": ["debounceChanged"],
            "value": ["valueChanged"],
            "showCancelButton": ["showCancelButtonChanged"]
          };
        }
      }, {
        key: "style",
        get: function get() {
          return ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-clear, .searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md > div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-md-h{--clear-button-color:initial;--cancel-button-color:var(--ion-color-step-900,#1a1a1a);--color:var(--ion-color-step-850,#262626);--icon-color:var(--ion-color-step-600,#666);--background:var(--ion-background-color,#fff);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.activated.sc-ion-searchbar-md, .searchbar-search-icon.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}.searchbar-clear-button.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:7px;padding-right:7px;padding-top:3px;padding-bottom:3px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px}}";
        }
      }]);

      return Searchbar;
    }();
    /**
     * Check if the cancel button should never be shown.
     *
     * TODO: Remove this when the `true` and `false`
     * options are removed.
     */


    var isCancelButtonSetToNever = function isCancelButtonSetToNever(showCancelButton) {
      return showCancelButton === 'never' || showCancelButton === 'false' || showCancelButton === false;
    };
    /**
     * Check if the cancel button should be shown on focus.
     *
     * TODO: Remove this when the `true` and `false`
     * options are removed.
     */


    var isCancelButtonSetToFocus = function isCancelButtonSetToFocus(showCancelButton) {
      return showCancelButton === 'focus' || showCancelButton === 'true' || showCancelButton === true || showCancelButton === '';
    };
    /***/

  }
}]);
//# sourceMappingURL=57-es5.js.map