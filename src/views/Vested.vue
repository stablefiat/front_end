<template>
  <div>
    <div id="dapp" class="dapp">
      <Navbar />
      <div class="wrapper">
        <div class="dapp-center-modal">
          <div class="dapp-modal-wrapper" v-if="$store.state.settings.initializedPretao == true">
            <div class="swap-input-column">
              <div class="balance-row">
                <p>Balance</p>
                <p class="balance-data">{{ $store.state.settings.balance }}</p>
                <p>BUSD</p>
              </div>

              <div class="swap-input-row">
                <div class="swap-input-container">
                  <input
                    @change="updateQuote"
                    v-model="value"
                    placeholder="0.0"
                    class="swap-input"
                    type="text"
                  />
                </div>

                <div class="cur-max-box">
                  <img src="~/@/assets/binance-usd-busd-logo.svg" alt="" />
                  <div class="max-button" @click="maxAlloc">100%</div>
                </div>
              </div>

              <div class="swap-arrow">
                <b-icon icon="arrow-down" style="width: 25px; height: 25px"></b-icon>
              </div>

              <div class="swap-ourput-row">
                <div class="swap-output-container">
                  <input
                    v-model="$store.state.settings.amount"
                    placeholder="0.0"
                    class="swap-output"
                    type="text"
                  />
                </div>
              </div>

              <span v-if="$store.state.settings.initializedPretao == true" style="margin-top: 30px">
                <div v-if="hasAllowance" class="swap-button-container">
                  <div class="swap-button" @click="sendBusd">SWAP</div>
                </div>
                <div v-else class="swap-button-container">
                  <div class="swap-button" @click="seekApproval">Approve</div>
                </div>
              </span>

              <div class="balance-row">
                <p>Balance</p>
                <p class="balance-data">{{ $store.state.settings.pretaoBalance }}</p>
                <p>pTAO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { shorten } from '@/helpers/utils.ts';
import { ethers } from 'ethers';

export default {
  async mounted() {
    this.$store.state.settings.menuOpened = false;
  },
  data() {
    return {
      value: '',
      modalLoginOpen: false,
      modalMakepotionOpen: false,
    };
  },
  computed: {
    ...mapState(['settings']),
    isValid() {
      return parseFloat(this.value);
    },
    maxStrike() {
      const exchangeRate = this.settings.exchangeRates[this.form.asset];
      return exchangeRate && exchangeRate.usd ? exchangeRate.usd : 1e9;
    },
    hasAllowance() {
      if (parseFloat(this.value)) {
        this.updateQuote();
        return (
          parseInt(this.$store.state.settings.allowancePretao) >=
          parseInt(ethers.utils.parseEther(this.value))
        );
      }
      return false;
    },
    address() {
      if (this.$store.state.settings.address) return this.settings.address;
      return null;
    },
    disconnect() {
      if (this.$store.state.settings.address) return this.$store.state.address.initial;
      return null;
    },
  },
  methods: {
    ...mapActions(['buyPretao', 'getApprovalPretao', 'calculatePreTaoSaleQuote']),
    shorten,
    async seekApproval() {
      await this.getApprovalPretao(this.value);
    },
    async claim() {
      await this.claimPresale();
    },
    async sendBusd() {
      await this.buyPretao(this.value);
    },
    async updateQuote() {
      await this.calculatePreTaoSaleQuote(this.value);
    },
    async maxAlloc() {
      const settings = this.$store.state.settings;
      // await this.getMaxPurchase();
      console.log(settings.balance);
      console.log(settings.allotment);

      this.value =
        parseFloat(settings.balance) >= parseFloat(settings.allotment)
          ? settings.allotment
          : settings.balance;
      await this.updateQuote();
    },
  },
};
</script>
<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>

<!--




<template>
  <div class="block">
    <h1 class="mb-4 main-title">OLYMPUS</h1>
    <p class="mb-4"><b class="warn">This is a private presale. The price of each pOLY is 0.01 DAI.</b>  If you have not been invited, your transaction will fail and waste your transaction fee!</p>    
    <p class="mb-2">
      Dai Balance: <span class="hasEffect" @click="maxStake">{{ Math.floor($store.state.settings.balance * 100) / 100 }}</span>
    </p>

    <form @submit.prevent="handleSubmit" class="form">
      <div class="mb-0">
    
        <input
          v-if = "settings.authorized && settings.address && settings.allowanceTx<1"
          type="number"
          class="input mb-4"
          placeholder="Quantity"
          step="0.000000000000000001"
          v-model="form.quantity"
        />
        <div class="d-flex"></div>
      </div>
      <button
        v-if="settings.authorized && settings.address && settings.allowanceTx<1"
        :disabled="!isValid"
        type="submit"
        class="button button-primary mb-2"
      >
        Enter Presale
      </button>
      <a v-if="!settings.address" class="button button-primary mb-2" @click="modalLoginOpen = true">Connect wallet</a>
      <p v-if="!settings.authorized && settings.address"><b class="warn">Your account is not on the Pre-sale list. You cannot participate in this sale.</b></p>
    </form>
    <p v-if="settings.allowanceTx===1">Please wait. Waiting for {{$store.state.settings.confirmations}} confirmations</p>
    <p v-if="settings.saleTx===1"><b>Transaction submitted. Waiting for {{$store.state.settings.confirmations}} confirmations...</b></p>
    <p v-if="settings.saleTx===2"><b>Token Purchase Complete!</b></p>
    <ModalLogin :open="modalLoginOpen" @close="modalLoginOpen = false" />
    <ModalMakepotion
      v-if="isValid"
      :open="modalMakepotionOpen"
      :form="form"
      @close="modalMakepotionOpen = false"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        quantity: ''
      },
      modalLoginOpen: false,
      modalMakepotionOpen: false
    };
  },
  computed: {
    ...mapState(['settings']),
    isValid() {
      return parseFloat(this.form.quantity);
    },
    maxStrike() {
      const exchangeRate = this.settings.exchangeRates[this.form.asset];
      return exchangeRate && exchangeRate.usd ? exchangeRate.usd : 1e9;
    }
  },
  methods: {
    ...mapActions(['SendDai']),
    handleSubmit() {
      this.SendDai({
        //address: '0xb72027693a5B717B9e28Ea5E12eC59b67c944Df7',
        value: this.form.quantity
      });
    },
    maxStake() {
      this.form.quantity = this.$store.state.settings.balance;
    }
  }
};
</script>
<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>
-->
