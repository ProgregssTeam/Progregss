StartupEvents.registry('item', event => {
    function create_unavailable_processor_press(name) {
        event.create("progregss:unavailable_" + name)
            .translationKey("item.progregss.unavailable_" + name)
            .texture("progregss:item/unavailable_" + name);
    }

    ["logic_processor_press",
        "calculation_processor_press",
        "engineering_processor_press",
        "silicon_press"].forEach(create_unavailable_processor_press);
});