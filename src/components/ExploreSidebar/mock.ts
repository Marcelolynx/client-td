export default [
  {
    title: 'Valores:',
    name: 'price',
    type: 'checkbox',
    fields: [
      {
        label: 'Valores até R$50,00',
        name: 'under-50'
      },
      {
        label: 'Valores até R$100,00',
        name: 'under-100'
      },
      {
        label: 'Valores até $150',
        name: 'under-150'
      },
      {
        label: 'Valores até $200',
        name: 'under-200'
      },
      {
        label: 'Grátis',
        name: 'free'
      },
      {
        label: 'Com Desconto',
        name: 'discounted'
      }
    ]
  },
  {
    title: 'Ordenar por:',
    name: 'sort_by',
    type: 'radio',
    fields: [
      {
        label: 'Do maior valor',
        name: 'high-to-low'
      },
      {
        label: 'Do menor valor',
        name: 'low-to-high'
      }
    ]
  },
  {
    title: 'Atendimento',
    name: 'system',
    type: 'checkbox',
    fields: [
      {
        label: 'Presencial',
        name: 'presencial'
      },
      {
        label: 'On-line',
        name: 'on-line'
      }
    ]
  },
  {
    title: 'Terapias',
    name: 'genre',
    type: 'checkbox',
    fields: [
      {
        label: 'Reflexoterapia',
        name: 'action'
      },
      {
        label: 'Iridologia',
        name: 'adventure'
      },
      {
        label: 'Aculputura',
        name: 'fps'
      },
      {
        label: 'Quiropraxia',
        name: 'mmorpg'
      },
      {
        label: 'Biorressonância',
        name: 'rpg'
      },
      {
        label: 'Aromoterapia',
        name: 'indie'
      },
      {
        label: 'Biodança',
        name: 'shooters'
      },
      {
        label: 'DO-IN',
        name: 'simulation'
      }
    ]
  }
]
