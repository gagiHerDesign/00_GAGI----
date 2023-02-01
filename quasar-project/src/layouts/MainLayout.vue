<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="transparent text-primary">

        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm"></q-btn>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>Quasar Framework</q-toolbar-title>

          <q-btn flat round dense icon="whatshot"></q-btn>
        </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
