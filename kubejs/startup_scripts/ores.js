GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('earth_layer')
        .target(['#minecraft:stone_ore_replaceables'])
        .addDimension('progregsscore:earth');
});
