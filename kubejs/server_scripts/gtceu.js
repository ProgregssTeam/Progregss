ServerEvents.recipes(event => {
    event.replaceInput({ mod: 'gtceu' }, '#forge:ingots/osmium', 'gtceu:osmium_ingot');
    event.replaceInput({ mod: 'gtceu' }, '#forge:storage_blocks/osmium', 'gtceu:osmium_block');
    event.replaceInput({ mod: 'gtceu' }, '#forge:nuggets/osmium', 'gtceu:osmium_nugget');
    event.replaceInput({ mod: 'gtceu' }, '#forge:dusts/osmium', 'gtceu:osmium_dust');

    event.remove({ id: 'gtceu:shapeless/dust_bronze' });
    event.recipes.createMixing('4x gtceu:bronze_ingot',
        ['3x #forge:ingots/copper', '#forge:ingots/tin']).heated();

    event.remove({ id: 'create:crafting/materials/electron_tube' });
    event.shaped(Item.of('create:electron_tube', 1), [
        ' A ',
        'BCB',
        ' B '
    ],
        {
            A: 'create:polished_rose_quartz',
            B: 'minecraft:glass',
            C: '#forge:plates/steel'
        });

    event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' });
    event.recipes.createSequencedAssembly(['gtceu:basic_electronic_circuit'],
        'gtceu:resin_printed_circuit_board', [
        event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'create:electron_tube']),
        event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:vacuum_tube']),
        event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:resistor']),
        event.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:red_alloy_single_cable'])
    ]).transitionalItem('gtceu:resin_printed_circuit_board').loops(2);

    event.recipes.gtceu.test_machine('gtceu:test')
        .itemInputs('minecraft:dirt')
        .itemOutputs('minecraft:diamond')
        .duration(100)
        .EUt(24)
        .rpm(8);

    /*    event.recipes.gtceu.test_generator('gtceu:test_gen')
            .inputFluids(Fluid.of("minecraft:water", 1000))
            .duration(100)
            .EUt(-24);*/
});
