<template>
  <div class="formulario">
    <h1 class="mt-5 mb-4 text-black">{{ msg }}</h1>

    <form class="row g-3 align-items-center justify-content-center">
      <div class="col-auto">
        <label for="number_calculate" class="form-label fs-2 text-black">n =</label>
      </div>
      <div class="col-1">
        <input id="number_to_calculate" v-model="number" type="text" class="form-control text-center fs-3"
               placeholder="" minlength="3" maxlength="3" @input="onlyNumber">
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-primary" @click="Serie">Calcular Serie</button>
      </div>
    </form>
  </div>

  <img alt="Vue logo" src="../assets/formula__color_negro.png" class="logo_formula img-fluid mt-4 mb-4">

  <ShowResult class="mt-4 mb-4" :serieResult="serieResult"/>

</template>

<script src="../js/SerieCalculator.js"></script>
