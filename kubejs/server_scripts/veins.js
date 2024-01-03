GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((id, vein) => {
        vein.layer("earth_layer")
            .addSpawnDimension("progregsscore:earth")
            .addSpawnBiome({ "type": "forge:any" });
    });

    event.add("manganese_vein", vein => {
        vein.clusterSize(40)
            .weight(20000)
            .layer("earth_layer")
            .density(0.7)
            .heightRange({
                height: {
                    type: "uniform",
                    min_inclusive: {
                        absolute: 45
                    },
                    max_inclusive: {
                        absolute: 256
                    }
                }
            })
            .discardChanceOnAirExposure(0)
            .addSpawnDimension("progregsscore:earth")
            .addSpawnBiome({ "type": "forge:any" })
            .generator(vein.generatorBuilder("gtceu:layer")
                .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
                    .layer(l => l.weight(3).mat(GTMaterials.Grossular).size(2, 2))
                    .layer(l => l.weight(3).mat(GTMaterials.Pyrolusite).size(2, 2))
                    .layer(l => l.weight(1).mat(GTMaterials.Pyrochlore).size(1, 3))
                    .layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 3))
                    .build()))
    });
});
