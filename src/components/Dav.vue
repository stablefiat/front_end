<template>
  <div class="dapp-nav">
    <router-link :to="{ name: 'vested' }" class="button button-dapp-menu" v-if="$store.state.settings.whitelistPretao == true"> Vested </router-link>
    <router-link :to="{ name: 'stake' }" class="button button-dapp-menu"> Staking </router-link>
    <router-link :to="{ name: 'lpstake' }" class="button button-dapp-menu">
      LP Staking
    </router-link>
    <router-link :to="{ name: 'bond' }" class="button button-dapp-menu"> Bonding </router-link>
    <router-link :to="{ name: 'dashboard' }" class="button button-dapp-menu">
      Dashboard
    </router-link>
  </div>
</template>

<script>
export default {};
</script>
