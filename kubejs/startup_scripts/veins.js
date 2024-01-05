GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    e.create('moon', 'ore')
        .stateSupplier(() => Block.getBlock('ad_astra:moon_stone').defaultBlockState()) // 
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty);
})

GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('earth_stone')
        .targets('#minecraft:stone_ore_replaceables')
        .dimensions('progregsscore:earth');
    event.create('earth_deepslate')
        .targets('#minecraft:deepslate_ore_replaceables')
        .dimensions('progregsscore:earth');
    event.create('moon')
        .targets('ad_astra:moon_stone')
        .dimensions('ad_astra:moon');
});
