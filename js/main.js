function runApp() {

    let power = document.getElementById("power").value;
    let wavelength = 650; // fixed or you can add slider
    let time = 10;

    let result = runSimulation(power, wavelength, time);

    // Show results
    document.getElementById("results").innerHTML =
        `Absorption: ${result.absorption.toFixed(2)} mW <br>
         Reflection: ${result.reflection.toFixed(2)} mW <br>
         Scattering: ${result.scattering.toFixed(2)} mW <br>
         Temperature: ${result.temperature.toFixed(2)} °C`;

    // Move laser based on penetration
    laser.position.x = -5 + result.intensity[5] * 0.05;
}
