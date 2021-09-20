function attachEventsListeners() {
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
    const inputDistance = document.getElementById('inputDistance');
    const outputDistance = document.getElementById('outputDistance');

    const inMeters = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      yrd: 0.9144,
      ft: 0.3048,
      in: 0.0254,
    };

    document.getElementById('convert').addEventListener('click', () => {
      outputDistance.value = inputDistance.value * inMeters[inputUnits.value] / inMeters[outputUnits.value];
    });
  }