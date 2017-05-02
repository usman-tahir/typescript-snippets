
(function () {
	'use strict';

	function Car() {
		this.fuel = 0;
		this.distance = 0;
	}

	// Prototypal inheritance
	Car.prototype.move == function () {
		if (this.fuel < 1) {
			throw new RangeError('Your fuel tank is depleted.');
		}
		this.fuel -= 1;
		this.distance += 2;
	}

	Car.prototype.addFuel = function () {
		if (this.fuel >= 60) {
			throw new RangeError('Your fuel tank is full.');
		}
		this.fuel += 1;
	}
}());