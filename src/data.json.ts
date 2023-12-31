export default {
  infuraId: 'adc596bf88b648e2a8902bc9093930c5',
  networks: [  
    {
      chainId: 97,
      explorerTxUrl: 'https://testnet.bscscan.com/tx/',
      explorerAddressUrl: 'https://testnet.bscscan.com/address/'
    },    
    {
      chainId: 43113,
      explorerTxUrl: 'https://testnet.snowtrace.io/tx/',
      explorerAddressUrl: 'https://testnet.snowtrace.io/address/'
    }    
  ],
  defaultBuilderData: {
    defaultChainId: 43113,
    campaigns: [
      {
        chainId: 97,
        campaignId: 1,
        campaignName: 'Claim OSWAP',
        campaignDesc: 'Thank you for supporting OpenSwap as an early stage backer',
        dripAddress: '0xFc28280774317326229aCC97C830ad77348fa1eF'
      },
      {
        chainId: 56,
        campaignId: 1,
        campaignName: 'Backer Claim',
        campaignDesc: 'Thank you for supporting OpenSwap as an early stage backer.',
        dripAddress: '0x0E1F5ae02eEEB1259f1DDb21D5091Ec22c2588eC'
      }
    ],
    networks: [
      {
        chainId: 43113
      },
      {
        chainId: 97
      }
    ],
    wallets: [
      {
        name: 'metamask'
      }
    ]
  }
}