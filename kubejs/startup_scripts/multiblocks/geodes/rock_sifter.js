GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rock_sifter')
        .category('rock_sifter')
        .setMaxIOSize(2, 9, 1, 0)
        .setSound(GTSoundEntries.MACERATOR);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('rock_sifter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('rock_filtrator')
        .appearanceBlock(GCYMBlocks.CASING_WATERTIGHT)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()	
            .aisle("##BBB##", "##CDC##", "##CDC##", "##CDC##", "##CDC##", "##CDC##", "##BBB##") 	
            .aisle("#BDDDB#", "#DEFED#", "#DEFED#", "#DEFED#", "#DEFED#", "#DEFED#", "#BDDDB#") 	
            .aisle("BDDDDDB", "CE_G_EC", "CEGGGEC", "CEH_HEC", "CEIIIEC", "CE___EC", "BDDDDDB") 	
            .aisle("BDDJDDB", "DFGGGFD", "DFGGGFD", "DF_H_FD", "DFIIIFD", "DF_G_FD", "BDDKDDB") 	
            .aisle("BDDDDDB", "CE_G_EC", "CEGGGEC", "CEH_HEC", "CEIIIEC", "CE___EC", "BDDDDDB") 	
            .aisle("#BDDDB#", "#DEFED#", "#DEFED#", "#DEFED#", "#DEFED#", "#DEFED#", "#BDDDB#") 	
            .aisle("##BBB##", "##CDC##", "##CDC##", "##C@C##", "##CDC##", "##CDC##", "##BBB##") 	
            .where("#", Predicates.any())
            .where("_", Predicates.blocks("minecraft:air"))	
            .where("B", Predicates.blocks("gtceu:tungstensteel_firebox_casing"))	
            .where("C", Predicates.blocks("gtceu:laminated_glass"))	
            .where("D", Predicates.blocks("gtceu:watertight_casing")
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2)))	
            .where("E", Predicates.blocks("gtceu:rtm_alloy_coil_block"))	
            .where("F", Predicates.blocks("gtceu:extreme_engine_intake_casing"))
            .where("G", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))	
            .where("H", Predicates.blocks("gtceu:tungstensteel_gearbox"))	
            .where("I", Predicates.blocks("gtceu:crushing_wheels"))	
            .where("J", Predicates.abilities(PartAbility.EXPORT_ITEMS))	
            .where("K", Predicates.abilities(PartAbility.IMPORT_ITEMS))	
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/watertight_casing",
        "gtceu:block/multiblock/implosion_compressor", false);
});