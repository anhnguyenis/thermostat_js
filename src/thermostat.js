'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MEDIUM_TEMPERATURE = 18;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingMode = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchOffPowerSavingMode = function() {
  return this.powerSavingMode = false;
};

Thermostat.prototype.switchOnPowerSavingMode = function() {
  return this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingMode() === false) {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAX_TEMP_PSM_ON;
};

Thermostat.prototype.resetCurrentTemperature = function() {
  return this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_TEMPERATURE) {
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_TEMPERATURE && this.temperature <= this.MAX_TEMP_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
};
