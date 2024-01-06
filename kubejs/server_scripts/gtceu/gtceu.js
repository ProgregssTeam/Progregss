ServerEvents.recipes(event => {
    function set_to_gt_metal(metal, vanilla) {
        if (!vanilla) {
            event.replaceInput({}, "#forge:ingots/" + metal, "gtceu:" + metal + "_ingot");
            event.replaceInput({}, "#forge:storage_blocks/" + metal, "gtceu:" + metal + "_block");
            event.replaceInput({}, "#forge:nuggets/" + metal, "gtceu:" + metal + "_nugget");
            event.remove({ output: "mekanism:ingot_" + metal })
            event.remove({ output: "mekanism:block_" + metal })
            event.remove({ output: "mekanism:nugget_" + metal })
        }
        event.replaceInput({}, "#forge:dusts/" + metal, "gtceu:" + metal + "_dust");
        event.replaceInput({}, "mekanism:dust_" + metal, "gtceu:" + metal + "_dust");
        event.remove({ output: "mekanism:dust_" + metal })

        event.replaceInput({}, "#forge:plates/" + metal, "gtceu:" + metal + "_plate");
    }
    const vanilla_metals = [
        "copper"
    ];
    const no_vanilla_metals = [
        "tin",
        "osmium"
    ];
    vanilla_metals.forEach(metal => set_to_gt_metal(metal, true));
    no_vanilla_metals.forEach(metal => set_to_gt_metal(metal, false));

    event.remove({ id: 'gtceu:shapeless/dust_bronze' });
    event.recipes.createMixing('4x gtceu:bronze_ingot',
        ['3x #forge:ingots/copper', '#forge:ingots/tin']).heated();

    event.remove({ id: 'create:crafting/materials/electron_tube' });
    event.shaped(
        "create:electron_tube",
        [" A ", "BCB", " B "],
        {
            A: 'create:polished_rose_quartz',
            B: 'minecraft:glass',
            C: '#forge:plates/steel'
        }
    );

    event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' });
    event.recipes.createSequencedAssembly(['gtceu:basic_electronic_circuit'],
        'gtceu:resin_printed_circuit_board', [
        event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'create:electron_tube']),
        event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:vacuum_tube']),
        event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:resistor']),
        event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:red_alloy_single_cable'])
    ]).transitionalItem('gtceu:resin_printed_circuit_board').loops(2);
});
