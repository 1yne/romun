export function fitText() {
	const addEvent = function (el: HTMLElement, type: unknown, fn: unknown) {
		if (el.addEventListener) el.addEventListener(type, fn, false);
		else el.attachEvent('on' + type, fn);
	};

	const extend = function (obj: unknown, ext: unknown) {
		for (const key in ext) if (ext.hasOwnProperty(key)) obj[key] = ext[key];
		return obj;
	};

	window.fitText = function (el: unknown, kompressor: unknown, options: unknown) {
		const settings = extend(
			{
				minFontSize: -1 / 0,
				maxFontSize: 1 / 0
			},
			options
		);

		const fit = function (el: unknown) {
			const compressor = kompressor || 1;

			const resizer = function () {
				el.style.fontSize =
					Math.max(
						Math.min(el.clientWidth / (compressor * 10), parseFloat(settings.maxFontSize)),
						parseFloat(settings.minFontSize)
					) + 'px';
			};

			// Call once to set.
			resizer();

			// Bind events
			// If you have any js library which support Events, replace this part
			// and remove addEvent function (or use original jQuery version)
			addEvent(window, 'resize', resizer);
			addEvent(window, 'orientationchange', resizer);
		};

		if (el.length) for (let i = 0; i < el.length; i++) fit(el[i]);
		else fit(el);

		// return set of elements
		return el;
	};
}
