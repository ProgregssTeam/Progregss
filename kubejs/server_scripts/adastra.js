ServerEvents.recipes(event => {
    event.remove({ output: 'ad_astra:compressor' })
    event.remove({ output: 'ad_astra:fuel_refinery' })
    event.remove({ output: 'ad_astra:cryo_freezer' })

})