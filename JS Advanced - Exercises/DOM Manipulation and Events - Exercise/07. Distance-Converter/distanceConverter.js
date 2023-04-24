function attachEventsListeners() {
  const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
  document.getElementById('convert').addEventListener('click', onClick)
  const inputSelectEl = document.getElementById('inputUnits');
  const outputSelectEl = document.getElementById('outputUnits');

  const units = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

  function onClick(e) {
    let valueInMeters = inputs[0].value * units[inputSelectEl.value];
    inputs[1].value = valueInMeters / units[outputSelectEl.value]
  }
}
