define(
	[
		'jquery',
		'signals',
		'fastclick',
		'tweenmax'
	],

	function(
		$,
		signals,
		fastclick,
		TweenMax
	) {

		'use strict';

		function App() {

			// Initialising FastClick
			fastclick.attach(document.body);

			var _this = this;

			// Global app elements
			_this.els = {};
			_this.els.$window = $(window);
			_this.els.$header = $('.header');
			_this.els.$navGroup = _this.els.$header.find('.navgroup');
			_this.els.$menuButton = _this.els.$header.find('.navgroup_button');
			_this.els.$overlay = $('.menu_overlay');

			// Signals
			_this.signals = {};
			_this.signals.appResized = new signals.Signal();

/////////////
//////////////// PRIVATE METHODS
///
			function _init() {
				console.log('[App] - _init(): Sizzle is at your service!');
				// Handle the app resizing
				_this.els.$window.on('resize', _onWindowResized);
				setTimeout(function() {_onWindowResized();}, 100);

				_this.els.$menuButton.on('click', _onNavGroupButtonClick);
				_this.els.$overlay.on('click', _onNavGroupButtonClick);
			};

			function _onNavGroupButtonClick(e) {
				_this.els.$navGroup.toggleClass('is-open');

				if(_this.els.$navGroup.hasClass('is-open')) {
					TweenMax.to(_this.els.$navGroup, 0.9, {y: 0, ease: Expo.easeInOut});
					TweenMax.to(_this.els.$overlay, 0.5, {opacity: 1, ease: Strong.easeOut, delay: 0.2,
						onStart: function() {
							_this.els.$overlay.css({
								'visibility': 'visible',
								'display': 'block'
							});
						}
					});
				} else {
					TweenMax.to(_this.els.$navGroup, 0.7, {y: -213, ease: Expo.easeInOut});
					TweenMax.to(_this.els.$overlay, 0.3, {opacity: 0, ease: Strong.easeOut, delay: 0.4, 
						onComplete: function() {
							_this.els.$overlay.css({
								'visibility': 'hidden',
								'display': 'none'
							});
						}
					});
				}
			}

			/**
		     * Handle the window resize event
		    */
			function _onWindowResized() {
				_this.signals.appResized.dispatch();

				_this.els.$navGroup.removeClass('is-open');
				if(window.innerWidth > 480) {
					TweenMax.set(_this.els.$navGroup, {y: 0});
				} else {
					TweenMax.set(_this.els.$navGroup, {y: -213});
				}

				_this.els.$overlay.css({
					'visibility': 'hidden',
					'display': 'none',
					'opacity': 0
				});
			};

			// Self initialising
			$(_init());
		}

		return App;
	}
);