GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((id, vein) => {
        if (vein.layer() == GTWorldGenLayers.STONE) {
            vein.layer("earth_stone")
                .dimensions("progregsscore:earth")
                .biomes("#minecraft:is_overworld");
        }
        else if (vein.layer() == GTWorldGenLayers.DEEPSLATE) {
            vein.layer("earth_deepslate")
                .dimensions("progregsscore:earth")
                .biomes("#minecraft:is_overworld");
        }
    });

    event.add("moon_silvergold", vein => {
        // Basic vein generation properties
        vein.weight(200) // [*] 
        vein.clusterSize(40) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        // Define where the vein can generate
        vein.layer("moon") // [*] 
        vein.dimensions("ad_astra:moon") // 
        //vein.biomes("ad_astra:lunar_wasteland") // 

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(0, 70)

        // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Silver).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
                //        .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:oak_log')).size(1, 1))
                //        .layer(l => l.weight(1).state(() => Block.getBlock('minecraft:oak_planks').defaultBlockState()).size(1, 1))
            )
        )
    })
});
