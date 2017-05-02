
(function () {
	'use strict';

	class Car() {
		constructor (fuel) {
			this.fuel = 0;
			this.distance = 0;
		}

		move () {
			if (this.fuel < 1) {
				throw new RangeError('Your fuel tank is depleted.');
			}
			this.fuel -= 1;
			this.distance += 2;
		}

		addFuel () {
			if (this.fuel >= 60) {
				throw new RangeError('Your fuel tank is full.');
			}
			this.fuel += 1;
		}
	}
}());