ServerEvents.recipes(event => {
    function remove_recipe(name) {
        event.remove({ output: name });
    }
    const remove_items = [
        "expatternprovider:ex_inscriber",
        "ae2:logic_processor_press",
        "ae2:calculation_processor_press",
        "ae2:engineering_processor_press",
        "ae2:silicon_press",
        "ae2:printed_logic_processor",
        "ae2:printed_calculation_processor",
        "ae2:printed_engineering_processor",
        "ae2:printed_silicon",
        "ae2:logic_processor",
        "ae2:calculation_processor",
        "ae2:engineering_processor"
    ];
    remove_items.forEach(remove_recipe);

    function press_recipe(name, color, ingredient, circuit) {
        event.recipes.gtceu.forming_press("gtceu:" + name + "_press")
            .itemInputs("progregss:unavailable_" + name + "_press",
                "8x twilightforest:" + color + "_castle_rune_brick")
            .itemOutputs("ae2:" + name + "_press")
            .EUt(120)
            .duration(1600);
        event.recipes.gtceu.inscriber("gtceu:" + name + "_print")
            .itemInputs("gtceu:" + ingredient + "_plate")
            .notConsumable("ae2:" + name + "_press")
            .itemOutputs("ae2:printed_" + name)
            .EUt(120)
            .duration(200);
        if (circuit) {
            event.recipes.gtceu.inscriber("gtceu:" + name)
                .itemInputs("ae2:printed_" + name, 'ae2:printed_silicon', '#forge:circuits/hv')
                .inputFluids(Fluid.of('gtceu:tin', 288))
                .itemOutputs("ae2:" + name)
                .EUt(120)
                .duration(240);
        }
    }
    press_recipe("logic_processor", "yellow", "gold", true);
    press_recipe("calculation_processor", "pink", "certus_quartz", true);
    press_recipe("engineering_processor", "blue", "diamond", true);
    press_recipe("silicon", "violet", "silicon", false);
})