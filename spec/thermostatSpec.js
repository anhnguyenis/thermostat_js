'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    it('starts at 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases with up', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases with down', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('has a minimum of 10 degrees', function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('resets temperature to 20 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.resetCurrentTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

  });

  describe('power saving mode', function() {
    it('is on by default', function() {
      expect(thermostat.isPowerSavingMode()).toBe(true);
    });

    it('can be switched off', function() {
      thermostat.switchOffPowerSavingMode();
      expect(thermostat.isPowerSavingMode()).toBe (false);
    });

    it('can be switched on', function() {
      thermostat.switchOffPowerSavingMode();
      expect(thermostat.isPowerSavingMode()).toBe (false);
      thermostat.switchOnPowerSavingMode();
      expect(thermostat.isPowerSavingMode()).toBe (true);
    });

    it('when switched on has a max temperature of 25 degrees', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('when switched off has a max temperature of 32 degrees', function(){
      thermostat.switchOffPowerSavingMode();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('usage levels', function() {
    it('below 18 degrees is considered low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('between 18 and 25 degrees is considered medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('any other temperature is considered high-usage', function(){
      thermostat.powerSavingMode = false;
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

  });
});
