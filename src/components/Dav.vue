<template>
  <div class="dapp-nav">
    <router-link
      :to="{ name: 'vested' }"
      class="button button-dapp-menu"
      v-if="
        1 == 0 &&
        $store.state.settings.exerciseMaxAllowedClaim > 0 &&
        $store.state.settings.pretaoBalance > 0
      "
    >
      Exercise pTao
    </router-link>
    <router-link :to="{ name: 'stake' }" class="button button-dapp-menu"> Staking </router-link>
    <router-link :to="{ name: 'lpstake' }" class="button button-dapp-menu">
      LP Staking
    </router-link>
    <router-link :to="{ name: 'bond' }" class="button button-dapp-menu"> Bonding </router-link>
    <router-link :to="{ name: 'dashboard' }" class="button button-dapp-menu">
      Dashboard
    </router-link>

    <a class="button button-dapp-menu" target="_blank" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x7065dda3f8ec5f6c155648bdee4420c0525d93c6">Buy TAO</a>
  </div>
</template>

<script>
export default {};
</script>
