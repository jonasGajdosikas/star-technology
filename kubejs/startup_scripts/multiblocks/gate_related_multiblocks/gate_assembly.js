
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('gate_assembly')
        .category('gate_assembly')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 3, 0)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('gate_assembly', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gate_assembly')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()	
            .aisle("###############HHHHHHHHH###############", "###############HHHHHHHHH###############", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "###############JJJJJJJJJ###############", "#######################################", "#######################################", "#######################################", "#######################################") 
            .aisle("############HHHJJJJJJJJJHHH############", "############HHHJJJLLLJJJHHH############", "#################KMMMK#################", "#################KMMMK#################", "#################KMMMK#################", "#################K#I#K#################", "#################K#I#K#################", "#################K#I#K#################", "#################KMMMK#################", "#################KMMMK#################", "#################KMMMK#################", "############JJJJJJTTTJJJJJJ############", "#######################################", "#######################################", "#######################################", "#######################################") 
            .aisle("#########HHHJJJJJJJJJJJJJJJHHH#########", "#########HHHJJJTTTLPLTTTJJJHHH#########", "############K#####MMM#####K############", "############K#####MMM#####K############", "############K#####MMM#####K############", "############K#####ILI#####K############", "############K#####ICI#####K############", "############K#####ILI#####K############", "############K#####MMM#####K############", "############K#####MMM#####K############", "############K#####MMM#####K############", "#########JJJJJJJJJTRTJJJJJJJJJ#########", "###############KKKKKKKKK###############", "#######################################", "#######################################", "#######################################") 
            .aisle("########HJJJJJJJJJJJJJJJJJJJJJH########", "########HJLLLTTJJJLLLJJJTTLLLJH########", "##########MMM####KMMMK####MMM##########", "##########MMM####KMMMK####MMM##########", "##########MMM####KMMMK####MMM##########", "###########I#####K#I#K#####I###########", "###########I#####K#I#K#####I###########", "###########I#####K#I#K#####I###########", "##########MMM####KMMMK####MMM##########", "##########MMM####KMMMK####MMM##########", "##########MMM####KMMMK####MMM##########", "########JJTTTJJJJJTTTJJJJJTTTJJ########", "############KKK####K####KKK############", "#######################################", "#######################################", "#######################################") 
            .aisle("######HHJJJJJJJJHHJJJHHJJJJJJJJHH######", "######HHJJLPLJJJHHJJJHHJJJLPLJJHH######", "#########KMMMK###########KMMMK#########", "#########KMMMK###########KMMMK#########", "#########KMMMK###########KMMMK#########", "#########KILIK###########KILIK#########", "#########KICIK###########KICIK#########", "#########KILIK###########KILIK#########", "#########KMMMK###########KMMMK#########", "#########KMMMK###########KMMMK#########", "#########KMMMK###########KMMMK#########", "######JJJJTRTJJJJJJJJJJJJJTRTJJJJ######", "##########KK#######K#######KK##########", "#######################################", "#######################################", "#######################################") 
            .aisle("#####HJJJJJJJHHH##HJH##HHHJJJJJJJH#####", "#####HJJTTLLLHHH##HJH##HHHLLLTTJJH#####", "##########MMM#############MMM##########", "##########MMM#############MMM##########", "##########MMM#############MMM##########", "###########I###############I###########", "###########I###############I###########", "###########I###############I###########", "##########MMM#############MMM##########", "##########MMM#############MMM##########", "##########MMM#############MMM##########", "#####JJJJJTTTJJJ#######JJJTTTJJJJJ#####", "########KK#KK#############KK#KK########", "###################K###################", "#######################################", "#######################################") 
            .aisle("####HJJJJJJHH#####HJH#####HHJJJJJJH####", "####HJJTJJJHH#####HJH#####HHJJJTJJH####", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "####JJJJJJJJJ#############JJJJJJJJJ####", "#######K#######################K#######", "############KK#####K#####KK############", "#######################################", "#######################################") 
            .aisle("###HJJJJJHH#######HJH#######HHJJJJJH###", "###HJJTJJHH#######HJH#######HHJJTJJH###", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "###JJJJJJJJ#################JJJJJJJJ###", "######K#########################K######", "#############K#####K#####K#############", "#######################################", "#######################################") 
            .aisle("##HJJJJJH#########HJH#########HJJJJJH##", "##HLLLJJH#########HJH#########HJJLLLH##", "###MMMK#########################KMMM###", "###MMMK#########################KMMM###", "###MMMK#########################KMMM###", "####I#K#########################K#I####", "####I#K#########################K#I####", "####I#K#########################K#I####", "###MMMK#########################KMMM###", "###MMMK#########################KMMM###", "###MMMK#########################KMMM###", "##JTTTJJJ#####################JJJTTTJ##", "#####K###########################K#####", "#############KK#########KK#############", "###################K###################", "#######################################") 	
            .aisle("##HJJJJH########HHJJJHH########HJJJJH##", "##HLPLJH########HHJJJHH########HJLPLH##", "###MMM###########################MMM###", "###MMM###########################MMM###", "###MMM###########################MMM###", "###ILI###########################ILI###", "###ICI###########################ICI###", "###IDI###########################ILI###", "###MMM###########################MMM###", "###MMM###########################MMM###", "###MMM###########################MMM###", "##JTRTJJ#######################JJTRTJ##", "####KK###########################KK####", "#######################################", "##############KK###K###KK##############", "#######################################") 
            .aisle("#HJJJJH######HHHJJJJJJJHHH######HJJJJH#", "#HJLLLH######HHHJJJXJJJHHH######HLLLJH#", "##KMMM###########################MMMK##", "##KMMM###########################MMMK##", "##KMMM###########################MMMK##", "##K#I#############################I#K##", "##K#I#############################I#K##", "##K#I#############################I#K##", "##KMMM###########################MMMK##", "##KMMM###########################MMMK##", "##KMMM###########################MMMK##", "#JJTTTJ#########################JTTTJJ#", "####KKK#########################KKK####", "#######KK#####################KK#######", "###############K###K###K###############", "#######################################") 
            .aisle("#HJJJJH####HHJJJJJJJJJJJJJHH####HJJJJH#", "#HJTJJH####HHJJJJJJXJJJJJJHH####HJJTJH#", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "#JJJJJJ#########################JJJJJJ#", "###K###############################K###", "########KKK#################KKK########", "###############KK#####KK###############", "###################K###################") 
            .aisle("#HJJJH####HJJJJJJJJJJJJJJJJJH####HJJJH#", "#HJTJH####HJJJJBBBJJJBBBJJJJH####HJTJH#", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#JJJJJ###########################JJJJJ#", "###K###############################K###", "#######################################", "##########KK###############KK##########", "################KK#K#KK################") 
            .aisle("HJJJJH###HJJJJJJJJJJJJJJJJJJJH###HJJJJH", "HJTJJH###HJJBBJJJJJGJJJJJBBJJH###HHJTJH", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "JJJJJJ###########################JJJJJJ", "##K#################################K##", "#######################################", "###########KKK###########KKK###########", "##############K##KKKKK##K##############") 
            .aisle("HJJJH####HJJJJJJJJJJJJJJJJJJJH####HJJJH", "HJTJH####HJJBJJJFFRGREEJJJBJJH####HJTJH", "#K#K###############K###############K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "JJJJJ#############################JJJJJ", "##K################K################K##", "###################K###################", "##################JJJ##################", "##############KKK#JJJ#KKK##############") 
            .aisle("HJJJH###HJJJJJJJJJJJJJJJJJJJJJH###HJJJH", "HLLLH###HJJJJJFFFCCCCCEEEJJJJJH###HLLLH", "#MMM##############KKK##############MMM#", "#MMM##############KKK##############MMM#", "#MMM###############K###############MMM#", "##I################K################I##", "##I#################################I##", "##I#################################I##", "#MMM###############################MMM#", "#MMM###############################MMM#", "#MMM###############################MMM#", "JTTTJ##############K##############JTTTJ", "##K###############KLK###############K##", "##################KLK##################", "#################JJPJJ#################", "###############K#JAAAJ#K###############") 
            .aisle("HJJJH###HJJJJJJJJJJJJJJJJJJJJJH###HJJJH", "HLPLH###HJJXXJRRCCGRGCCRRJXXJJH###HLPLH", "#MMM#############KKRKK#############MMM#", "#MMM##############KRK##############MMM#", "#MMM##############KDK##############MMM#", "#ILI##############KDK##############ILI#", "#ICI###############D###############ICI#", "#ILI###############K###############ILI#", "#MMM###############@###############MMM#", "#MMM###############K###############MMM#", "#MMM###############D###############MMM#", "JTRTJ#############KDK#############JTRTJ", "##KKK############KLPLK############KKK##", "#####KKKK########KLPLK########KKKK#####", "#########KKKK####JPPPJ####KKKK#########", "#############KKK#JAAAJ#KKK#############") 	
            .aisle("HJJJH###HJJJJJJJJJJJJJJJJJJJJJH###HJJJH", "HLLLH###HJJJJJEEECCCCCFFFJJJJJH###HLLLH", "#MMM##############KKK##############MMM#", "#MMM##############KKK##############MMM#", "#MMM###############K###############MMM#", "##I################K################I##", "##I#################################I##", "##I#################################I##", "#MMM###############################MMM#", "#MMM###############################MMM#", "#MMM###############################MMM#", "JTTTJ##############K##############JTTTJ", "##K###############KLK###############K##", "##################KLK##################", "#################JJPJJ#################", "###############K#JAAAJ#K###############") 
            .aisle("HJJJH####HJJJJJJJJJJJJJJJJJJJH####HJJJH", "HJTJH####HJJBJJJEERGRFFJJJBJJH####HJTJH", "#K#K###############K###############K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "#K#K###############################K#K#", "JJJJJ#############################JJJJJ", "##K################K################K##", "###################K###################", "##################JJJ##################", "##############KKK#JJJ#KKK##############") 
            .aisle("HJJJJH###HJJJJJJJJJJJJJJJJJJJH###HJJJJH", "HJTJJH###HJJBBJJJJJGJJJJJBBJJH###HJJTJH", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "JJJJJJ###########################JJJJJJ", "##K#################################K##", "#######################################", "###########KKK###########KKK###########", "##############K##KKKKK##K##############") 
            .aisle("#HJJJH####HJJJJJJJJJJJJJJJJJH####HJJJH#", "#HJTJH####HJJJJBBBJJJBBBJJJJH####HJTJH#", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#JJJJJ###########################JJJJJ#", "###K###############################K###", "#######################################", "##########KK###############KK##########", "################KK#K#KK################") 
            .aisle("#HJJJJH####HHJJJJJJJJJJJJJHH####HJJJJH#", "#HJTJJH####HHJJJJJJXJJJJJJHH####HJJTJH#", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "####K#############################K####", "#JJJJJJ#########################JJJJJJ#", "###K###############################K###", "########KKK#################KKK########", "###############KK#####KK###############", "###################K###################") 
            .aisle("#HJJJJH######HHHJJJJJJJHHH######HJJJJH#", "#HJLLLH######HHHJJJXJJJHHH######HLLLJH#", "##KMMM###########################MMMK##", "##KMMM###########################MMMK##", "##KMMM###########################MMMK##", "##K#I#############################I#K##", "##K#I#############################I#K##", "##K#I#############################I#K##", "##KMMM###########################MMMK##", "##KMMM###########################MMMK##", "##KMMM###########################MMMK##", "#JJTTTJ#########################JTTTJJ#", "####KKK#########################KKK####", "#######KK#####################KK#######", "###############K###K###K###############", "#######################################") 
            .aisle("##HJJJJH########HHJJJHH########HJJJJH##", "##HLPLJH########HHJJJHH########HJLPLH##", "###MMM###########################MMM###", "###MMM###########################MMM###", "###MMM###########################MMM###", "###ILI###########################ILI###", "###ICI###########################ICI###", "###ILI###########################ILI###", "###MMM###########################MMM###", "###MMM###########################MMM###", "###MMM###########################MMM###", "##JTRTJJ#######################JJTRTJ##", "####KK###########################KK####", "#######################################", "##############KK###K###KK##############", "#######################################") 
            .aisle("##HJJJJJH#########HJH#########HJJJJJH##", "##HLLLJJH#########HJH#########HJJLLLH##", "###MMMK#########################KMMM###", "###MMMK#########################KMMM###", "###MMMK#########################KMMM###", "####I#K#########################K#I####", "####I#K#########################K#I####", "####I#K#########################K#I####", "###MMMK#########################KMMM###", "###MMMK#########################KMMM###", "###MMMK#########################KMMM###", "##JTTTJJJ#####################JJJTTTJ##", "#####K###########################K#####", "#############KK#########KK#############", "###################K###################", "#######################################") 	
            .aisle("###HJJJJJHH#######HJH#######HHJJJJJH###", "###HJJTJJHH#######HJH#######HHJJTJJH###", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "#####K###########################K#####", "###JJJJJJJJ#################JJJJJJJJ###", "######K#########################K######", "#############K#####K#####K#############", "#######################################", "#######################################") 
            .aisle("####HJJJJJJHH#####HJH#####HHJJJJJJH####", "####HJJTJJJHH#####HJH#####HHJJJTJJH####", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "##########K#################K##########", "####JJJJJJJJJ#############JJJJJJJJJ####", "#######K#######################K#######", "############KK#####K#####KK############", "#######################################", "#######################################") 
            .aisle("#####HJJJJJJJHHH##HJH##HHHJJJJJJJH#####", "#####HJJTTLLLHHH##HJH##HHHLLLTTJJH#####", "##########MMM#############MMM##########", "##########MMM#############MMM##########", "##########MMM#############MMM##########", "###########I###############I###########", "###########I###############I###########", "###########I###############I###########", "##########MMM#############MMM##########", "##########MMM#############MMM##########", "##########MMM#############MMM##########", "#####JJJJJTTTJJJ#######JJJTTTJJJJJ#####", "########KK#KK#############KK#KK########", "###################K###################", "#######################################", "#######################################") 
            .aisle("######HHJJJJJJJJHHJJJHHJJJJJJJJHH######", "######HHJJLPLJJJHHJJJHHJJJLPLJJHH######", "#########KMMMK###########KMMMK#########", "#########KMMMK###########KMMMK#########", "#########KMMMK###########KMMMK#########", "#########KILIK###########KILIK#########", "#########KICIK###########KICIK#########", "#########KILIK###########KILIK#########", "#########KMMMK###########KMMMK#########", "#########KMMMK###########KMMMK#########", "#########KMMMK###########KMMMK#########", "######JJJJTRTJJJJJJJJJJJJJTRTJJJJ######", "##########KK#######K#######KK##########", "#######################################", "#######################################", "#######################################") 
            .aisle("########HJJJJJJJJJJJJJJJJJJJJJH########", "########HJLLLTTJJJLLLJJJTTLLLJH########", "##########MMM####KMMMK####MMM##########", "##########MMM####KMMMK####MMM##########", "##########MMM####KMMMK####MMM##########", "###########I#####K#I#K#####I###########", "###########I#####K#I#K#####I###########", "###########I#####K#I#K#####I###########", "##########MMM####KMMMK####MMM##########", "##########MMM####KMMMK####MMM##########", "##########MMM####KMMMK####MMM##########", "########JJTTTJJJJJTTTJJJJJTTTJJ########", "############KKK####K####KKK############", "#######################################", "#######################################", "#######################################") 
            .aisle("#########HHHJJJJJJJJJJJJJJJHHH#########", "#########HHHJJJTTTLPLTTTJJJHHH#########", "############K#####MMM#####K############", "############K#####MMM#####K############", "############K#####MMM#####K############", "############K#####ILI#####K############", "############K#####ICI#####K############", "############K#####ILI#####K############", "############K#####MMM#####K############", "############K#####MMM#####K############", "############K#####MMM#####K############", "#########JJJJJJJJJTRTJJJJJJJJJ#########", "###############KKKKKKKKK###############", "#######################################", "#######################################", "#######################################") 
            .aisle("############HHHJJJJJJJJJHHH############", "############HHHJJJLLLJJJHHH############", "#################KMMMK#################", "#################KMMMK#################", "#################KMMMK#################", "#################K#I#K#################", "#################K#I#K#################", "#################K#I#K#################", "#################KMMMK#################", "#################KMMMK#################", "#################KMMMK#################", "############JJJJJJTTTJJJJJJ############", "#######################################", "#######################################", "#######################################", "#######################################") 
            .aisle("###############HHHHHHHHH###############", "###############HHHHHHHHH###############", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "#######################################", "###############JJJJJJJJJ###############", "#######################################", "#######################################", "#######################################", "#######################################") 	
            .where("A", Predicates.blocks("kubejs:enriched_naquadah_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(3))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)))	
            .where("B", Predicates.blocks("gtceu:heat_vent"))	
            .where("C", Predicates.blocks("kubejs:ancient_runicalium_casing"))	
            .where("D", Predicates.blocks("kubejs:enriched_naquadah_machine_casing"))	
            .where("E", Predicates.blocks("kubejs:runic_pathway_casing"))	
            .where("F", Predicates.blocks("kubejs:runic_transportation_casing"))	
            .where("G", Predicates.blocks("kubejs:runic_stabilization_casing"))	
            .where("H", Predicates.blocks("start_core:enriched_naquadah_firebox_casing"))	
            .where("I", Predicates.blocks("gtceu:ancient_runicalium_frame"))	
            .where("J", Predicates.blocks("gtceu:atomic_casing"))	
            .where("K", Predicates.blocks("gtceu:void_frame"))	
            .where("L", Predicates.blocks("kubejs:enriched_naquadah_gearbox"))	
            .where("M", Predicates.blocks("kubejs:zalloy_coil_block"))	
            .where("#", Predicates.any())	
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))	
            // .where("N", Predicates.blocks("gtceu:fusion_glass"))
            .where("X", Predicates.blocks("start_core:enriched_naquadah_engine_intake_casing"))
            .where("P", Predicates.blocks("kubejs:enriched_naquadah_pipe_casing"))
            .where("T", Predicates.blocks("start_core:auxiliary_boosted_fusion_casing_mk1"))
            .where("R", Predicates.blocks("start_core:auxiliary_fusion_coil_mk1"))
            .build())
        .workableCasingRenderer("kubejs:block/casings/naquadah/casing",
        "gtceu:block/machines/assembler", false);
});