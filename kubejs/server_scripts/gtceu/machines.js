ServerEvents.recipes(event => {
    const voltage_to_cable = {
        "lv": "tin",
        "mv": "copper",
        "hv": "gold",
        "ev": "aluminium",
        "iv": "platinum",
        "luv": "niobium_titanium",
        "zpm": "vanadium_gallium",
        "uv": "yttrium_barium_cuprate"
    }
    function create_recipe_voltage(voltage) {
        event.shaped(
            "gtceu:" + voltage + "_inscriber",
            ["AXA", "BYC", "DED"],
            {
                A: "gtceu:" + voltage + "_electric_piston",
                X: "ae2:inscriber",
                B: "gtceu:" + voltage + "_robot_arm",
                Y: "gtceu:" + voltage + "_machine_hull",
                C: "gtceu:" + voltage + "_conveyor_module",
                D: "#forge:circuits/" + voltage,
                E: "gtceu:" + voltage_to_cable[voltage] + "_single_cable"
            }
        );
    }
    const voltages = [
        "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv"
    ];
    voltages.forEach(create_recipe_voltage);
});