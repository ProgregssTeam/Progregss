GTCEuServerEvents.oreVeins(event => {
    event.add('rutile_moon_ad', vein => {
        vein.clusterSize(18)
        vein.weight(80)
        vein.layer('ad')
        vein.density(0.4)
        vein.addSpawnDimension('ad_astra:moon')
        vein.heightRange({
            height: {
                type: 'uniform',
                min_inclusive: {
                    absolute: -15
                },
                max_inclusive: {
                    absolute: 20
                }
            }
        })
        vein.discardChanceOnAirExposure(0)
        vein.generator(vein.generatorBuilder('gtceu:layer')
            .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
                .layer(l => l.weight(3).mat(GTMaterials.Rutile).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Titanium).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 2))
                .build()))
    });
})
