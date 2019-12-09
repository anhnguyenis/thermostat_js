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
      thermostat.resetCurrentTemperature();
      expect(thermostat.getCurrentTemperature()).toBe(20);
    });

    });

  describe('power saving mode', function() {
      it('is on by default', function() {
        expect(thermostat.isPowerSavingMode()).toBe(true);
      });

      it('off power saving mode: maximum is', function() {
        thermostat.switchOffPowerSavingMode();
        expect(thermostat.isPowerSavingMode()).toBe (false);
      });

      it('on power saving mode: maximum is', function() {
        thermostat.switchOffPowerSavingMode();
        expect(thermostat.isPowerSavingMode()).toBe (false);
        thermostat.switchOnPowerSavingMode();
        expect(thermostat.isPowerSavingMode()).toBe (true);
      });

  });
});
