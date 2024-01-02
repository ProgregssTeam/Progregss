GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('test_machine', "electric")
        .category('progregss')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 2, 1) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);

    /*
    event.create('test_generator')
        .category('progregss')
        .setEUIO('out')
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.DARK_CANISTER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
        */
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('test_machine', 'kinetic',
        GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("test_machine", true, true)
        .tankScalingFunction(tier => tier * 4800)
        .workableTieredHullRenderer(GTCEu.id("block/machines/test_machine"));

    /*
    event.create('test_generator', 'generator',
        GTValues.LV, GTValues.MV, GTValues.HV)
        .recipeType("test_generator", true, true)
        .tankScalingFunction(tier => tier * 4800)
    //.workableTieredHullRenderer(GTCEu.id("block/machines/test_machine"));
    */
});