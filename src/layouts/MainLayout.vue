<template>
  <q-layout>
    <q-header class="bg-teal">
      <q-toolbar>
        <q-toolbar-title>EV Charge Map </q-toolbar-title>
        <q-btn flat dense icon="login" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-tabs class="text-light bg-teal">
        <q-route-tab name="/map" icon="explore" label="Maps" />
        <q-route-tab to="/route" icon="directions" label="Journey" />
        <q-route-tab to="/auth" icon="login" label="Auth" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>

</script>
