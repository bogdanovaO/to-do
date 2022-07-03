 const basicStyles =   {
  colors: {
    pageMain: '#FAFAFA',
    pageAccent: '#DEEAF4',

    textMain: '#1A314B',
    textAccent: '#576C84',
    textLight: '#AFB3B8',

    main: '#3BFB65',
    accent: '',
    hoverMain: '#99C631',
    hoverAccent: '',
    red: '#F22727',
    green: '#99C631',
    grey: '#D9D9D9'

  }, 
  effects: {

  buttonShadow:`0px 0px 39px -10px rgba(255, 255, 255, 0.2) inset;`
  },
  sizes: {
    buttonWidth: 100,
    radius: 20, 
    Title1: 40, 
    Title2: 18, 
    Title3: 16, 
    Title4: 14,
    Title1ineHeight: 20 * 1.5,
    Title2ineHeight: 20 * 1.5,
    Title3ineHeight: 20 * 1.5,
    Title4ineHeight: 20 * 1.5,
  }, 
  queries: {
    desktop: '(min-width: 1200px)',
    laptop: '(min-width: 992px) and (max-width: 1199px)',
    tablete: '(min-width: 576px) and (max-width: 991px)',
    mobile: '(max-width: 575px)',
  }
}

export default basicStyles