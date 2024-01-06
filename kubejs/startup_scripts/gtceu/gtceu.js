GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('inscriber', "electric")
        .category('progregss')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('inscriber', 'simple',
        GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("inscriber", true, true)
        //.tankScalingFunction(tier => tier * 4800)
        .workableTieredHullRenderer(GTCEu.id("block/machines/test_machine"));
});