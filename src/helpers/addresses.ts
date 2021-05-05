import { ethers } from 'ethers';
import provider from '@/helpers/provider';

const addresses = {
  97: {
    // PRETAO_SALES: '0xbC9072B1c6A1120810Ccb9b2917C64a3740F06C5',
    DAI_ADDRESS: '0xA8E0f600624739d34F7569971dE7F1fCb0F9c5B6', //ok
    OHM_ADDRESS: '0x21E2eD9a5a1120add5c5b99f60914C190bD1d9d4', //ok
    STAKING_ADDRESS: '0x578204cC792a8bd9fF97EeF9044730da1054C455', //ok
    SOHM_ADDRESS: '0xB11e637877C394709941eD77b1a1c2389118768f', //ok
    PRESALE_ADDRESS: '0xFCbbE7B90cd11Ab679bceD471e084135d7Ba0b16', //ok
    LPSTAKING_ADDRESS: '0xF529F90209d549f296105D050D1cfE6040d60F4C', //ok
    LP_ADDRESS: '0x21fd08ecd999801710F9f251a832f3Aec97E087D', //ok
    BOND_ADDRESS: '0x8FD556564bABA47308f2170f2d893Aa3E2E14399', //ok
    BONDINGCALC_ADDRESS: '0xb8e1E6A5B6ba384EfA681e2D4282d52997fe1F7E', //ok
    DISTRIBUTOR_ADDRESS: '0x7F970cd42cdc84E0EdFAbD0C51A1d8c73409B710', //ok
    SOHM_INDEX_ADDRESS: '0x745120412F4397300e9F459a50a430C66281fb0E', //ok
    VAULT_ADDRESS: '0x26559BdA3c4012C47C10Ba0e1D0e46405D94adE8', //ok
  },
  56: {
    PRETAO_SALES: '0xbC9072B1c6A1120810Ccb9b2917C64a3740F06C5',
    PTAO_ADDRESS: '0x06f41963911cef3e1819a2c605c3661267a5d6f5',
    DAI_ADDRESS: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    PRESALE_ADDRESS: '0x4c6846C1B074852aBd18e2E6Cf0A2bC62AcEd5E7',
    BONDINGCALC_ADDRESS: '0x10151C93204a24463732Ba2391f8996313f9acaF', //ok
    BOND_ADDRESS: '0x8E4BE6ec6bA8C76c7Dc6c80Bb4858aC5BBcED3f4', //ok
    OHM_ADDRESS: '0x7065DdA3f8Ec5F6C155648BdeE4420c0525D93C6', //ok
    VAULT_ADDRESS: '0x7f07D3D8415F7eA3B37ba5CC9EF43a0B4bc030dB', //ok
    SOHM_ADDRESS: '0xE12d3c8675a88fEDCf61946089079323342982bB', //ok
    STAKING_ADDRESS: '0x09744e01D70728786ACCFe7076c525fb41d3B08D', //ok
    LPSTAKING_ADDRESS: '0xC98f066c7232C4A0b2B2885052B7fdc4438D8eF0', //ok
    DISTRIBUTOR_ADDRESS: '0xc8bbc6cA4b99032B126414c2A088Dc38d8743420', //ok
    SOHM_INDEX_ADDRESS: '0xcc77159E0C7ca174672a84794Dfed8AA2E52c072', //ok
    LP_ADDRESS: '0x529De98dA7ba32e4de6F478EbA2387ad75561ec0', //ok
    REWARD_POOL_ADDRESS: '0x08b3545337EfDe91c7d3767EE3A549ba197628d7', //ok
  }
};

export default addresses;

// LP
// "RewardPool" at 0x00335ac05B2fb159E7F32F7CE0F034652c445093

// "TAOPrincipleDepository" at 0x8FD556564bABA47308f2170f2d893Aa3E2E14399

// MISC
// Factory Address: 0x6725F303b657a9451d8BA641348b6761A6CC7a17