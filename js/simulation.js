function getLayerProperties() {
    return [
        { name: "Skin", mu: 0.02, thickness: 2 },
        { name: "Fat", mu: 0.01, thickness: 3 },
        { name: "Muscle", mu: 0.03, thickness: 5 }
    ];
}

function runSimulation(power, wavelength, time) {

    let layers = getLayerProperties();

    let depth = [];
    let intensity = [];

    let currentDepth = 0;
    let I = power;

    layers.forEach(layer => {

        let mu = layer.mu * (1000 / wavelength);

        for (let z = 0; z < layer.thickness; z += 0.2) {
            I = power * Math.exp(-mu * currentDepth);

            depth.push(currentDepth);
            intensity.push(I);

            currentDepth += 0.2;
        }
    });

    // Optical effects
    let absorption = power * 0.6;
    let reflection = power * 0.2;
    let scattering = power * 0.2;

    // Thermal effect
    let temperature = power * time * 0.08;

    return {
        depth,
        intensity,
        absorption,
        reflection,
        scattering,
        temperature
    };
}