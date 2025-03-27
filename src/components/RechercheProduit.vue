<script setup lang="ts">
import { ref } from 'vue';
import type { Vetement } from '../ts/Vetement'
import { vetements } from '../ts/produits'
import { Boutique } from './Boutique.vue'

const vetementRecherche = ref('');

function recherche():Vetement[]{
    const vetementsRecherchesTab: Vetement[] = []
    vetements.value.forEach((vetement) =>{
        if(vetement.name.toLowerCase().includes(vetementRecherche.value.toLowerCase())){
            vetementsRecherchesTab.push(vetement)
        }
    })
    console.log(vetementsRecherchesTab.length)
    return vetementsRecherchesTab
}

</script>
<template>
<h1><p> SECTION RECHERCHE </p></h1>
    <div class="recherche">
        <input type="text" v-model="vetementRecherche" placeholder="Recherche"/>
        <div class="card-group">
            <div class="articles recherches" v-for="vetement in recherche()">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" v-bind:src="vetement.lienImg" v-bind:alt="vetement.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ vetement.name }}</h5>
                        <p class="card-text">{{ vetement.prix }} $</p>
                        <div v-if="idProduitDetailsMontres == vetement.id">
                            <div v-if="vetement.quantite >= 10">
                                <p class="text-success bg-dark"> Quantité restante : {{vetement.quantite}}</p>
                            </div>
                            <div v-else-if="vetement.quantite > 0">
                                <p class="text-warning bg-dark"> Quantité restante : {{vetement.quantite}}</p>
                            </div>
                            <div v-else>
                                <p class="text-danger bg-dark"> Quantité restante : {{vetement.quantite}}</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" v-bind:disabled="Boutique.verifierSiQuantiteVideSeul(vetement)">Acheter</button>
                        <button type="button" class="btn btn-info" @click="Boutique.changementProduitDetailMontre(vetement)">Détails</button>
                        <button type="button" class="btn btn-success" @click="Boutique.dupliquerProduit(vetement)">Dupliquer</button>
                        <button type="button" class="btn btn-warning" @click="Boutique.selectionProduitAModifier(vetement)">Mise à jour</button>
                            <div v-if="produitAModifier?.id == vetement.id">
                                <ModificationProduit 
                                :id-produit="produitAModifier.id" 
                                :nom-produit="produitAModifier.name"
                                :prix-produit="produitAModifier.prix"
                                :quantite-produit="produitAModifier.quantite"
                                :lien-img-produit="produitAModifier.lienImg"
                                :type-produit="produitAModifier.typeVetement"
                                @sauvegarde-modification="Boutique.sauvegardeModification(vetement)"/>
                            </div>
                        <button type="button" class="btn btn-danger" @click="Boutique.suppressionProduit(vetement)">Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>