// --- 1. ADATOK ÉS TÉMA INICIALIZÁLÁS (WIKIPÉDIA KÉPEKKEL) ---

const defaultData = {
    "Gyomnövény felismerés (Vizsga)": [
        // --- T1 CSOPORT ---
        { frontText: "Tyúkhúr (T1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Stellaria_media.jpg?width=400", backText: "Stellaria media (T1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Stellaria_media.jpg?width=400" },
        { frontText: "Pásztortáska (T1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Capsella_bursa-pastoris.jpg?width=400", backText: "Capsella bursa-pastoris (T1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Capsella_bursa-pastoris.jpg?width=400" },
        { frontText: "Pirosló árvacsalán (T1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamium_purpureum.jpg?width=400", backText: "Lamium purpureum (T1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamium_purpureum.jpg?width=400" },
        { frontText: "Közönséges aggófű (T1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Senecio_vulgaris.jpg?width=400", backText: "Senecio vulgaris (T1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Senecio_vulgaris.jpg?width=400" },
        { frontText: "Repkény veronika (T1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Veronica_hederifolia.jpg?width=400", backText: "Veronica hederifolia (T1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Veronica_hederifolia.jpg?width=400" },
        { frontText: "Egynyári perje (T1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Poa_annua.jpg?width=400", backText: "Poa annua (T1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Poa_annua.jpg?width=400" },

        // --- T2 CSOPORT ---
        { frontText: "Pipacs (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Papaver_rhoeas.jpg?width=400", backText: "Papaver rhoeas (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Papaver_rhoeas.jpg?width=400" },
        { frontText: "Kék búzavirág (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Centaurea_cyanus.jpg?width=400", backText: "Centaurea cyanus (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Centaurea_cyanus.jpg?width=400" },
        { frontText: "Mezei szarkaláb (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Consolida_regalis.jpg?width=400", backText: "Consolida regalis (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Consolida_regalis.jpg?width=400" },
        { frontText: "Vetési hérics (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Adonis_aestivalis.jpg?width=400", backText: "Adonis aestivalis (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Adonis_aestivalis.jpg?width=400" },
        { frontText: "Ragadós galaj (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Galium_aparine.jpg?width=400", backText: "Galium aparine (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Galium_aparine.jpg?width=400" },
        { frontText: "Ebszékfű (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Matricaria_inodora.jpg?width=400", backText: "Matricaria inodora (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Matricaria_inodora.jpg?width=400" },
        { frontText: "Szöszös pipitér (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Anthemis_austriaca.jpg?width=400", backText: "Anthemis austriaca (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Anthemis_austriaca.jpg?width=400" },
        { frontText: "Mezei árvácska (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Viola_arvensis.jpg?width=400", backText: "Viola arvensis (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Viola_arvensis.jpg?width=400" },
        { frontText: "Sebforrasztó zsombor (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Sisymbrium_sophia.jpg?width=400", backText: "Sisymbrium sophia (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Sisymbrium_sophia.jpg?width=400" },
        { frontText: "Szöszös bükköny (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Vicia_villosa.jpg?width=400", backText: "Vicia villosa (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Vicia_villosa.jpg?width=400" },
        { frontText: "Bürök gémorr (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Erodium_cicutarium.jpg?width=400", backText: "Erodium cicutarium (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Erodium_cicutarium.jpg?width=400" },
        { frontText: "Nagy széltippan (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Apera_spica-venti.jpg?width=400", backText: "Apera spica-venti (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Apera_spica-venti.jpg?width=400" },
        { frontText: "Meddő rozsnok (T2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Bromus_sterilis.jpg?width=400", backText: "Bromus sterilis (T2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Bromus_sterilis.jpg?width=400" },

        // --- T3 CSOPORT ---
        { frontText: "Vadrepce (T3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Sinapis_arvensis.jpg?width=400", backText: "Sinapis arvensis (T3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Sinapis_arvensis.jpg?width=400" },
        { frontText: "Repcsény retek (T3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Raphanus_raphanistrum.jpg?width=400", backText: "Raphanus raphanistrum (T3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Raphanus_raphanistrum.jpg?width=400" },
        { frontText: "Hélazab (T3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Avena_fatua.jpg?width=400", backText: "Avena fatua (T3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Avena_fatua.jpg?width=400" },

        // --- T4 CSOPORT ---
        { frontText: "Parlagfű (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Ambrosia_artemisiifolia.jpg?width=400", backText: "Ambrosia artemisiifolia (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Ambrosia_artemisiifolia.jpg?width=400" },
        { frontText: "Fehér libatop (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Chenopodium_album.jpg?width=400", backText: "Chenopodium album (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Chenopodium_album.jpg?width=400" },
        { frontText: "Pokolvar libatop (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Chenopodium_hybridum.jpg?width=400", backText: "Chenopodium hybridum (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Chenopodium_hybridum.jpg?width=400" },
        { frontText: "Tatár laboda (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Atriplex_tatarica.jpg?width=400", backText: "Atriplex tatarica (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Atriplex_tatarica.jpg?width=400" },
        { frontText: "Szőrös disznóparéj (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Amaranthus_retroflexus.jpg?width=400", backText: "Amaranthus retroflexus (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Amaranthus_retroflexus.jpg?width=400" },
        { frontText: "Lapulevelű keserűfű (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Polygonum_lapathifolium.jpg?width=400", backText: "Polygonum lapathifolium (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Polygonum_lapathifolium.jpg?width=400" },
        { frontText: "Madárkeserűfű (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Polygonum_aviculare.jpg?width=400", backText: "Polygonum aviculare (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Polygonum_aviculare.jpg?width=400" },
        { frontText: "Szúrós csorbóka (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Sonchus_asper.jpg?width=400", backText: "Sonchus asper (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Sonchus_asper.jpg?width=400" },
        { frontText: "Kanadai betyárkóró (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Erigeron_canadensis.jpg?width=400", backText: "Erigeron canadensis (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Erigeron_canadensis.jpg?width=400" },
        { frontText: "Bojtorján szerbtövis (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Xanthium_strumarium.jpg?width=400", backText: "Xanthium strumarium (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Xanthium_strumarium.jpg?width=400" },
        { frontText: "Csattanó maszlag (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Datura_stramonium.jpg?width=400", backText: "Datura stramonium (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Datura_stramonium.jpg?width=400" },
        { frontText: "Kicsiny gombvirág (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Galinsoga_parviflora.jpg?width=400", backText: "Galinsoga parviflora (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Galinsoga_parviflora.jpg?width=400" },
        { frontText: "Selyemmályva (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Abutilon_theophrasti.jpg?width=400", backText: "Abutilon theophrasti (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Abutilon_theophrasti.jpg?width=400" },
        { frontText: "Varjúmák (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Hibiscus_trionum.jpg?width=400", backText: "Hibiscus trionum (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Hibiscus_trionum.jpg?width=400" },
        { frontText: "Szuláklevelű keserűfű (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Bilderdykia_convolvulus.jpg?width=400", backText: "Bilderdykia convolvulus (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Bilderdykia_convolvulus.jpg?width=400" },
        { frontText: "Fekete csucsor (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Solanum_nigrum.jpg?width=400", backText: "Solanum nigrum (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Solanum_nigrum.jpg?width=400" },
        { frontText: "Napraforgó kutyatej (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Euphorbia_helioscopia.jpg?width=400", backText: "Euphorbia helioscopia (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Euphorbia_helioscopia.jpg?width=400" },
        { frontText: "Vadkender (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Cannabis_sativa.jpg?width=400", backText: "Cannabis sativa (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Cannabis_sativa.jpg?width=400" },
        { frontText: "Tarlóvirág (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Stachys_annua.jpg?width=400", backText: "Stachys annua (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Stachys_annua.jpg?width=400" },
        { frontText: "Kövér porcsin (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Portulaca_oleracea.jpg?width=400", backText: "Portulaca oleracea (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Portulaca_oleracea.jpg?width=400" },
        { frontText: "Aranka fajok (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Cuscuta.jpg?width=400", backText: "Cuscuta spp. (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Cuscuta.jpg?width=400" },
        { frontText: "Napraforgó szádor (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Orobanche_cumana.jpg?width=400", backText: "Orobanche cumana (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Orobanche_cumana.jpg?width=400" },
        { frontText: "Kakaslábfű (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Echinochloa_crus-galli.jpg?width=400", backText: "Echinochloa crus-galli (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Echinochloa_crus-galli.jpg?width=400" },
        { frontText: "Fakó muhar (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Setaria_pumila.jpg?width=400", backText: "Setaria pumila (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Setaria_pumila.jpg?width=400" },
        { frontText: "Zöld muhar (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Setaria_viridis.jpg?width=400", backText: "Setaria viridis (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Setaria_viridis.jpg?width=400" },
        { frontText: "Pirók ujjasmuhar (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Digitaria_sanguinalis.jpg?width=400", backText: "Digitaria sanguinalis (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Digitaria_sanguinalis.jpg?width=400" },
        { frontText: "Vadköles (T4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Panicum_miliaceum.jpg?width=400", backText: "Panicum miliaceum (T4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Panicum_miliaceum.jpg?width=400" },

        // --- HT, H1, H2, H3, H4, H5 CSOPORTOK ---
        { frontText: "Nagy bojtorján (HT)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Arctium_lappa.jpg?width=400", backText: "Arctium lappa (HT)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Arctium_lappa.jpg?width=400" },
        { frontText: "Útszéli bogáncs (HT)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Carduus_acanthoides.jpg?width=400", backText: "Carduus acanthoides (HT)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Carduus_acanthoides.jpg?width=400" },
        { frontText: "Foltos bürök (HT)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Conium_maculatum.jpg?width=400", backText: "Conium maculatum (HT)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Conium_maculatum.jpg?width=400" },
        { frontText: "Vadmurok (HT)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Daucus_carota.jpg?width=400", backText: "Daucus carota (HT)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Daucus_carota.jpg?width=400" },
        { frontText: "Terjőke kígyószisz (HT)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Echium_vulgare.jpg?width=400", backText: "Echium vulgare (HT)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Echium_vulgare.jpg?width=400" },
        
        { frontText: "Angolperje (H1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Lolium_perenne.jpg?width=400", backText: "Lolium perenne (H1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Lolium_perenne.jpg?width=400" },
        
        { frontText: "Kerek repkény (H2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Glechoma_hederacea.jpg?width=400", backText: "Glechoma hederacea (H2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Glechoma_hederacea.jpg?width=400" },
        { frontText: "Kúszó boglárka (H2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Ranunculus_repens.jpg?width=400", backText: "Ranunculus repens (H2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Ranunculus_repens.jpg?width=400" },
        
        { frontText: "Vadrezeda (H3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Reseda_lutea.jpg?width=400", backText: "Reseda lutea (H3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Reseda_lutea.jpg?width=400" },
        { frontText: "Pongyola pitypang (H3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Taraxacum_officinale.jpg?width=400", backText: "Taraxacum officinale (H3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Taraxacum_officinale.jpg?width=400" },
        { frontText: "Mezei katáng (H3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Cichorium_intybus.jpg?width=400", backText: "Cichorium intybus (H3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Cichorium_intybus.jpg?width=400" },
        
        { frontText: "Fehér mécsvirág (H4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Melandrium_album.jpg?width=400", backText: "Melandrium album (H4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Melandrium_album.jpg?width=400" },
        { frontText: "Mezei iringó (H4)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Eryngium_campestre.jpg?width=400", backText: "Eryngium campestre (H4)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Eryngium_campestre.jpg?width=400" },
        
        { frontText: "Lándzsás útifű (H5)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Plantago_lanceolata.jpg?width=400", backText: "Plantago lanceolata (H5)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Plantago_lanceolata.jpg?width=400" },
        { frontText: "Széleslevelű útifű (H5)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Plantago_major.jpg?width=400", backText: "Plantago major (H5)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Plantago_major.jpg?width=400" },
        { frontText: "Fekete üröm (H5)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Artemisia_vulgaris.jpg?width=400", backText: "Artemisia vulgaris (H5)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Artemisia_vulgaris.jpg?width=400" },

        // --- G1, G2, G3 CSOPORTOK ---
        { frontText: "Nagy csalán (G1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Urtica_dioica.jpg?width=400", backText: "Urtica dioica (G1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Urtica_dioica.jpg?width=400" },
        { frontText: "Mezei zsurló (G1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Equisetum_arvense.jpg?width=400", backText: "Equisetum arvense (G1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Equisetum_arvense.jpg?width=400" },
        { frontText: "Nád (G1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Phragmites_australis.jpg?width=400", backText: "Phragmites communis (G1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Phragmites_australis.jpg?width=400" },
        { frontText: "Fenyércirok (G1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Sorghum_halepense.jpg?width=400", backText: "Sorghum halepense (G1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Sorghum_halepense.jpg?width=400" },
        { frontText: "Sövényszulák (G1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Calystegia_sepium.jpg?width=400", backText: "Calystegia sepium (G1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Calystegia_sepium.jpg?width=400" },
        { frontText: "Közönséges cickafark (G1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Achillea_millefolium.jpg?width=400", backText: "Achillea millefolium (G1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Achillea_millefolium.jpg?width=400" },
        { frontText: "Tarackbúza (G1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Agropyron_repens.jpg?width=400", backText: "Agropyron repens (G1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Agropyron_repens.jpg?width=400" },
        { frontText: "Csillagpázsit (G1)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Cynodon_dactylon.jpg?width=400", backText: "Cynodon dactylon (G1)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Cynodon_dactylon.jpg?width=400" },
        
        { frontText: "Mogyorós lednek (G2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Lathyrus_tuberosus.jpg?width=400", backText: "Lathyrus tuberosus (G2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Lathyrus_tuberosus.jpg?width=400" },
        { frontText: "Vízi menta (G2)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Mentha_aquatica.jpg?width=400", backText: "Mentha aquatica (G2)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Mentha_aquatica.jpg?width=400" },
        
        { frontText: "Apró szulák (G3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Convolvulus_arvensis.jpg?width=400", backText: "Convolvulus arvensis (G3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Convolvulus_arvensis.jpg?width=400" },
        { frontText: "Mezei acat (G3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Cirsium_arvense.jpg?width=400", backText: "Cirsium arvense (G3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Cirsium_arvense.jpg?width=400" },
        { frontText: "Hamvas szeder (G3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Rubus_caesius.jpg?width=400", backText: "Rubus caesius (G3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Rubus_caesius.jpg?width=400" },
        { frontText: "Útszéli zsázsa (G3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Lepidium_draba.jpg?width=400", backText: "Lepidium draba (G3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Lepidium_draba.jpg?width=400" },
        { frontText: "Szíriai selyemkóró (G3)", frontImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Asclepias_syriaca.jpg?width=400", backText: "Asclepias syriaca (G3)", backImg: "https://commons.wikimedia.org/wiki/Special:FilePath/Asclepias_syriaca.jpg?width=400" }
    ]
};

// --- NAGYON FONTOS SOR: Ezzel kényszerítjük ki, hogy a fix kódot használja ---
let appData;
    try {
        // Megpróbáljuk betölteni a memóriát. Ha hibás, elkapjuk a hibát, és nem omlik össze az oldal!
        appData = JSON.parse(localStorage.getItem('myFlashcardsData'));
    } catch (e) {
        appData = null; 
    }

    // Ha üres a memória, vagy hiányzik belőle a vizsgalista, kényszerítjük a jó adatokat!
    if (!appData || typeof appData !== 'object' || !appData["Gyomnövény felismerés (Vizsga)"]) {
        appData = defaultData;
        localStorage.setItem('myFlashcardsData', JSON.stringify(appData));
    }

let currentCategory = Object.keys(appData)[0];
let currentIndex = 0;
let currentMode = 'flashcard';
let editingIndex = null;
let gameCards = []; 

const gameArea = document.getElementById('game-area');
const categorySelect = document.getElementById('category-select');

if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('theme-icon').classList.replace('fa-moon', 'fa-sun');
}

// --- 2. FŐ FUNKCIÓK ---
initCategories();
startMode('flashcard', document.querySelector('.tab.active'));

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

function initCategories() {
    categorySelect.innerHTML = '';
    Object.keys(appData).forEach(catName => {
        const option = document.createElement('option');
        option.value = catName;
        option.textContent = catName;
        if (catName === currentCategory) option.selected = true;
        categorySelect.appendChild(option);
    });
}

function changeCategory() {
    currentCategory = categorySelect.value;
    currentIndex = 0;
    startMode(currentMode, document.querySelector('.tab.active'));
}

function addNewCategory() {
    const newCat = prompt("Új mappa neve:");
    if (newCat && !appData[newCat]) {
        appData[newCat] = [];
        saveData();
        initCategories();
        categorySelect.value = newCat;
        changeCategory();
        toggleEditor();
    }
}

// --- 3. JÁTÉKMOTOR (Rendezéssel) ---

function toggleShuffle() {
    startMode(currentMode, document.querySelector('.tab.active'));
}

function startMode(mode, btnElement) {
    currentMode = mode;
    currentIndex = 0;
    if(btnElement) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        btnElement.classList.add('active');
    }

    const originalCards = appData[currentCategory] || [];
    gameCards = [...originalCards];

    const isShuffled = document.getElementById('shuffle-toggle').checked;
    const abcLabel = document.getElementById('label-abc');
    const shuffleLabel = document.getElementById('label-shuffle');

    if (isShuffled) {
        gameCards.sort(() => Math.random() - 0.5);
        abcLabel.style.color = "var(--text-muted)";
        shuffleLabel.style.color = "var(--text)";
    } else {
        gameCards.sort((a, b) => a.frontText.localeCompare(b.frontText, 'hu'));
        abcLabel.style.color = "var(--text)";
        shuffleLabel.style.color = "var(--text-muted)";
    }

    renderGame();
}

function renderGame() {
    updateProgress(gameCards.length);

    if (gameCards.length === 0) {
        gameArea.innerHTML = `<div style="padding:40px; color:var(--text-muted);"><i class="fas fa-folder-open" style="font-size:3rem; margin-bottom:15px;"></i><h3>Üres mappa</h3><p>Használd a Szerkesztés gombot!</p></div>`;
        return;
    }
    if (currentIndex >= gameCards.length) {
        gameArea.innerHTML = `<div style="padding:40px;"><h2 style="color:var(--primary);">Vége! 🎉</h2><button class="btn-primary" onclick="startMode('${currentMode}')">Újra</button></div>`;
        return;
    }

    if (currentMode === 'flashcard') loadFlashcard(gameCards[currentIndex]);
    else if (currentMode === 'choice') loadQuiz(gameCards[currentIndex], gameCards);
    else if (currentMode === 'typing') loadTyping(gameCards[currentIndex]);
}

function updateProgress(total) {
    const bar = document.getElementById('progress-bar');
    const txt = document.getElementById('progress-text');
    let displayIdx = (currentIndex >= total) ? total : currentIndex + 1;
    if(total === 0) displayIdx = 0;
    txt.innerText = `${displayIdx} / ${total}`;
    bar.style.width = total > 0 ? `${(displayIdx / total) * 100}%` : '0%';
}

function nextCard() {
    if (currentIndex < gameCards.length) { currentIndex++; renderGame(); }
}
function prevCard() {
    if (currentIndex > 0) { currentIndex--; renderGame(); }
}

// --- 4. HTML GENERÁLÓK ---
function loadFlashcard(card) {
    gameArea.innerHTML = `
        <div class="scene"><div class="card" onclick="this.classList.toggle('is-flipped')">
            <div class="card-face">${card.frontImg ? `<img src="${card.frontImg}">` : ''}<h3>${card.frontText}</h3><p style="margin-top:auto; font-size:0.8rem; color:var(--text-muted);">(Kattints)</p></div>
            <div class="card-face card-face--back">${card.backImg ? `<img src="${card.backImg}">` : ''}<h3>${card.backText}</h3></div>
        </div></div>
        <div style="margin-top:20px; display:flex; justify-content:center; gap:20px;">
            <button class="btn-icon" onclick="prevCard()"><i class="fas fa-arrow-left fa-lg"></i></button>
            <button class="btn-icon" onclick="nextCard()"><i class="fas fa-arrow-right fa-lg"></i></button>
        </div>`;
}

function loadQuiz(card, allCards) {
    let opts = [card.backText];
    while (opts.length < 4 && allCards.length >= 4) {
        let rnd = allCards[Math.floor(Math.random()*allCards.length)].backText;
        if (!opts.includes(rnd)) opts.push(rnd);
    }
    opts.sort(() => Math.random() - 0.5);
    let btns = opts.map(o => `<button class="quiz-btn" onclick="checkAnswer(this, '${o.replace(/'/g,"\\'")}', '${card.backText.replace(/'/g,"\\'")}')">${o}</button>`).join('');
    
    gameArea.innerHTML = `<div class="quiz-container">${card.frontImg?`<img src="${card.frontImg}" style="max-height:150px; display:block; margin:0 auto;">`:''}
        <h3 style="text-align:center;">${card.frontText}</h3><div class="quiz-options">${btns}</div><div id="feedback" style="margin-top:15px; text-align:center; font-weight:bold; min-height:24px;"></div><button id="next-btn" class="btn-primary full-width" onclick="nextCard()" style="display:none;">Tovább</button></div>`;
}

function checkAnswer(btn, sel, corr) {
    const fb = document.getElementById('feedback');
    if (sel === corr) {
        btn.style.borderColor = "#28a745"; btn.style.backgroundColor = "rgba(40,167,69,0.1)";
        fb.innerHTML = "<span style='color:#28a745'>Helyes!</span>"; document.getElementById('next-btn').style.display = "block";
    } else {
        btn.style.borderColor = "#dc3545"; btn.style.backgroundColor = "rgba(220,53,69,0.1)";
        fb.innerHTML = "<span style='color:#dc3545'>Nem jó!</span>";
    }
}

function loadTyping(card) {
    gameArea.innerHTML = `<div class="quiz-container" style="text-align:center;">${card.frontImg?`<img src="${card.frontImg}" style="max-height:150px;">`:''}
        <h3>${card.frontText}</h3><input type="text" id="type-input" placeholder="Válasz..." style="width:80%; margin:15px 0; padding:10px;"><button class="btn-primary" onclick="checkType('${card.backText.replace(/'/g,"\\'")}')">Ellenőrzés</button>
        <div id="feedback" style="margin-top:15px; font-weight:bold;"></div><button id="next-btn" class="btn-primary" onclick="nextCard()" style="display:none; margin:10px auto;">Tovább</button></div>`;
}
function checkType(corr) {
    const inp = document.getElementById('type-input');
    const fb = document.getElementById('feedback');
    if (inp.value.trim().toLowerCase() === corr.toLowerCase()) {
        fb.innerHTML = "<span style='color:#28a745'>Helyes!</span>"; document.getElementById('next-btn').style.display="block";
    } else { fb.innerHTML = `<span style='color:#dc3545'>Helyes válasz: ${corr}</span>`; document.getElementById('next-btn').style.display="block"; }
}

// --- 5. SZERKESZTŐ FUNKCIÓK ---

function toggleEditor() {
    const ol = document.getElementById('editor-overlay');
    ol.classList.toggle('hidden');
    if(!ol.classList.contains('hidden')) { 
        document.getElementById('current-cat-name').textContent = currentCategory; 
        cancelEdit(); 
        renderList(); 
    } else {
        renderGame();
    }
}

function renderList() {
    const list = document.getElementById('card-list'); list.innerHTML = '';
    const cards = appData[currentCategory] || [];
    if (cards.length === 0) { list.innerHTML = `<p style="color:var(--text-muted); text-align:center;">Még nincsenek kártyák ebben a mappában.</p>`; return; }

    cards.forEach((c, i) => {
        const imgHtml = c.frontImg ? `<img src="${c.frontImg}">` : `<div style="width:60px; height:60px; background:#eee; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#ccc; flex-shrink:0;"><i class="fas fa-image"></i></div>`;
        list.innerHTML += `<div class="card-list-item"><div class="card-info">${imgHtml}<div class="card-texts"><span>${c.frontText}</span><small>${c.backText}</small></div></div><div class="list-actions"><button class="btn-icon" onclick="editCard(${i})" title="Szerkesztés" style="color:var(--primary)"><i class="fas fa-pencil-alt"></i></button><button class="btn-icon" onclick="delCard(${i})" title="Törlés" style="color:#dc3545"><i class="fas fa-trash-alt"></i></button></div></div>`;
    });
}

function editCard(index) {
    const card = appData[currentCategory][index];
    editingIndex = index;
    document.getElementById('new-front-text').value = card.frontText;
    document.getElementById('new-back-text').value = card.backText;
    document.getElementById('new-front-img-data').value = card.frontImg;
    document.getElementById('new-back-img-data').value = card.backImg;
    if(card.frontImg) { const p = document.getElementById('preview-front'); p.src = card.frontImg; p.style.display = 'block'; }
    if(card.backImg) { const p = document.getElementById('preview-back'); p.src = card.backImg; p.style.display = 'block'; }
    document.getElementById('save-card-btn').textContent = "Módosítás mentése";
    document.getElementById('save-card-btn').style.backgroundColor = "#ff9800";
    document.getElementById('cancel-edit-btn').style.display = "block";
    document.querySelector('.editor-modal').scrollTop = 0; 
}

function cancelEdit() {
    editingIndex = null;
    clearInputs();
    document.getElementById('save-card-btn').textContent = "Hozzáadás a listához";
    document.getElementById('save-card-btn').style.backgroundColor = "";
    document.getElementById('cancel-edit-btn').style.display = "none";
}

function saveNewCard() {
    const fT = document.getElementById('new-front-text').value;
    const bT = document.getElementById('new-back-text').value;
    const fI = document.getElementById('new-front-img-data').value || document.getElementById('new-front-url').value;
    const bI = document.getElementById('new-back-img-data').value || document.getElementById('new-back-url').value;
    if(!fT && !fI) return alert("Kártya elejére (kérdés) kell valami!");
    if(!bT && !bI) return alert("Kártya hátuljára (válasz) kell valami!");
    const newCardData = {frontText:fT, frontImg:fI, backText:bT, backImg:bI};
    if (editingIndex !== null) { appData[currentCategory][editingIndex] = newCardData; alert("Kártya módosítva!"); cancelEdit(); }
    else { appData[currentCategory].push(newCardData); clearInputs(); }
    saveData(); renderList();
}

function clearInputs() {
    document.getElementById('new-front-text').value=''; document.getElementById('new-front-url').value='';
    document.getElementById('new-front-img-data').value=''; document.getElementById('preview-front').style.display='none'; document.getElementById('preview-front').src='';
    document.getElementById('new-back-text').value=''; document.getElementById('new-back-url').value='';
    document.getElementById('new-back-img-data').value=''; document.getElementById('preview-back').style.display='none'; document.getElementById('preview-back').src='';
}

function delCard(i) { 
    if(confirm("Biztosan törlöd ezt a kártyát?")) { 
        appData[currentCategory].splice(i,1); 
        if(editingIndex === i) cancelEdit();
        saveData(); renderList(); 
    } 
}
function saveData() { localStorage.setItem('myFlashcardsData', JSON.stringify(appData)); }

function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData));
    const dlAnchorElem = document.createElement('a'); dlAnchorElem.setAttribute("href", dataStr); dlAnchorElem.setAttribute("download", "tanulo_adatok.json"); dlAnchorElem.click();
}
function importData(input) {
    const file = input.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try { const res = JSON.parse(e.target.result); if(confirm("Ez felülírja a jelenlegi kártyáidat! Mehet?")) { appData = res; saveData(); initCategories(); changeCategory(); renderList(); alert("Sikeres betöltés!"); } } catch(err) { alert("Hiba a fájlban!"); }
    };
    reader.readAsText(file); input.value = '';
}
function processImage(input, hiddenInputId, previewId) {
    const file = input.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas'); const ctx = canvas.getContext('2d');
            const maxWidth = 600; let width = img.width; let height = img.height;
            if (width > maxWidth) { height *= maxWidth / width; width = maxWidth; }
            canvas.width = width; canvas.height = height; ctx.drawImage(img, 0, 0, width, height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
            document.getElementById(hiddenInputId).value = dataUrl;
            const preview = document.getElementById(previewId); preview.src = dataUrl; preview.style.display = "block";
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}