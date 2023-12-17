ServerEvents.recipes(event => {
    event.replaceInput({ mod: 'gtceu' }, '#forge:ingots/osmium', 'gtceu:osmium_ingot')
    event.replaceInput({ mod: 'gtceu' }, '#forge:storage_blocks/osmium', 'gtceu:osmium_block')
    event.replaceInput({ mod: 'gtceu' }, '#forge:nuggets/osmium', 'gtceu:osmium_nugget')
    event.replaceInput({ mod: 'gtceu' }, '#forge:dusts/osmium', 'gtceu:osmium_dust')
    event.remove({ id: 'gtceu:shaped/tiny_dust_disassembling_osmium' })
    event.remove({ id: 'gtceu:shaped/small_dust_disassembling_osmium' })
})
