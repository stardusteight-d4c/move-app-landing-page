export const navbarStyles = {
  handleWrapper: (isBlurOn: boolean) => {
    return {
      'blur-effect-nav shadow-black/80 shadow-sm': isBlurOn,
      'fixed z-[1000] inset-x-0 top-0': true,
    }
  },
  container: `max-w-7xl flex items-center justify-between p-4 md:py-8 md:px-4 xl:px-0 xl:mx-auto`,
  centerContent: `hidden md:flex items-center gap-x-20`,
  handleItem: (order: string) => {
    return `${order} effect-underline relative flex items-center gap-x-[10px] cursor-pointer`
  },
  itemTxt: `uppercase font-bold !leading-[1.2]`,
  signInBtn: `button-default-nav text-sm md:text-base whitespace-nowrap uppercase font-bold hover:text-[#121316] hover:bg-white hover:scale-105 active:scale-100 transition-all duration-300 ease-in`,
}

export const heroStyles = {
  wrapper: `w-screen min-h-screen py-28 2xl:py-0 h-screen relative`,
  background: `bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop inset-0 absolute bg-100% xl:bg-cover w-screen min-h-screen py-28 2xl:py-0 h-screen`,
  container: `max-w-7xl mx-4 md:mx-10 md:mt-8 xl:mx-auto md:my-auto h-full flex flex-col md:justify-around`,
  contentContainer: `max-w-[500px] md:w-[500px] h-fit`,
  updatedSpan: `updated-span-hero text-sm md:text-base cursor-pointer gax-x-[4px] md:gap-x-[8px] whitespace-nowrap mb-4 2xl:mb-[30px]`,
  arrowRightAnimation: `arrow-right-animation w-[16px] h-[16px]`,
  headingOne: `font-extrabold text-4xl sm:text-5xl md:text-6xl !leading-[1.2] mb-4 2xl:mb-[30px]`,
  paragraph: `text-lg !leading-[1.2] mb-[30px]`,
  buttonsContainer: `flex flex-col md:flex-row md:items-center gap-5`,
  buttonGradient: `button-gradient-hero active:scale-100 transition-all duration-300 hover:scale-105 text-black font-semibold`,
  buttonBlur: `button-blur-hero active:scale-100 transition-all duration-300 hover:scale-105 text-white font-semibold`,
  handleButtonIcon: (color: string = 'text-[#000000]') => {
    return `${color} mr-4`
  },
}

export const companiesStyles = {
  wrapper: `top-inset-shadow bg-[#121316] relative py-[100px] w-screen`,
  container: `max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center`,
  headingContainer: `w-[350px] px-4 md:px-0 md:w-[500px] text-center`,
  heading2: `font-bold text-2xl mb-[30px]`,
  headingParagraph: `font-medium !leading-6 mb-[30px]`,
  logoCompaniesContainer: `grid grid-cols-2 gap-8 md:flex items-center gap-x-[80px] mmd:gap-x-[120px]`,
  logoCompany: `logo-company shadow-drop flex col-span-1`,
  divider: `h-0 border-t w-1/2 my-[30px] border-t-[#FFFFFF20]`,
  heading3: `font-bold text-[22px] mb-[30px]`,
  cardsWrapper: `grid grid-cols-1 mdd:grid-cols-3 gap-y-8 mdd:gap-[10px] mx-4 mmd:mx-0 mmd:gap-x-[30px]`,
  cardContainer: `shadow-drop col-span-1 flex flex-col gap-y-[10px] w-[250px] items-center justify-center bg-[#00000066] rounded-[25px] py-[30px] px-[20px]`,
  heading4: `font-bold`,
  cardTxt: `text-center text-sm font-medium text-white/70`,
}

export const jumpstartStyles = {
  wrapper: `bottom-inset-shadow bg-[#121316] py-[100px] w-screen`,
  container: `max-w-7xl justify-center flex flex-col-reverse md:flex-row px-4 gap-x-[50px] mx-auto`,
  firstSectionContainer: `hidden llg:flex flex-col items-center gap-y-[50px]`,
  handleDefaultCard: (backgroundImage: string) => {
    return `${backgroundImage} card-animate-jumpstart card-default-jumpstart shadow-drop`
  },
  defaultCardContent: `card-info-jumpstart mt-[100%]`,
  secondSectionContainer: `flex flex-col items-center gap-y-[50px]`,
  cardSmallJumpstart: {
    wrapper: `card-animate-jumpstart card-small-jumpstart shadow-drop`,
    heading2: `flex items-center font-bold text-[22px] gap-x-[10px] mb-[20px]`,
    paragraph: `font-medium text-sm w-[260px] mb-[20px]`,
    cardInfo: `card-info-jumpstart items-center`,
  },
  cardInfo: `card-animate-jumpstart card-info-jumpstart shadow-drop max-w-[300px] items-center`,
  thirdSection: {
    wrapper: `max-w-[400px] md:w-[400px] mx-auto md:mx-0 text-center flex flex-col gap-y-[31px]`,
    rocketIcon: `w-[60px] h-[60px] mx-auto text-[#BB66CC]`,
    heading2: `font-extrabold text-4xl md:text-[50px] !leading-[1.2]`,
    paragraph: `text-lg !leading-[1.2]`,
    learnMoreButton: `button-learn-more-jumpstart mx-auto uppercase text-black font-semibold flex items-center gap-x-4`,
    divider: `h-0 border-t w-1/2 my-[30px] border-t-[#FFFFFF20] mx-auto`,
    darkCard: `shadow-drop max-w-[300px] mx-auto md:max-w-none mb-20 md:mb-0 col-span-1 flex flex-col gap-y-[10px] w-full items-center justify-center bg-[#00000066] rounded-[25px] py-[30px] px-[20px]`,
    heading4: `font-bold`,
    text: `text-center text-sm font-medium text-white/70`,
  },
}

export const whyUseStyles = {
  wrapper: `bg-wallpaper-2 relative z-10 bg-cover py-[100px] w-screen`,
  container: `max-w-7xl px-4 mx-auto flex flex-col md:flex-row items-center justify-center gap-x-[50px] llg:gap-x-[18px] xl:gap-x-[50px]`,
  firstSection: {
    container: `card-animate-why-use w-full max-w-[400px] flex flex-col items-center gap-y-[31px] text-center`,
    targetIcon: `w-[60px] h-[60px] text-[#30ADFF] mx-auto`,
    heading2: `font-extrabold text-4xl md:text-[50px] !leading-[1.2]`,
    paragraph: `text-lg !leading-[1.2]`,
    donwloadBtn: `download-button-why-use text-black font-semibold uppercase gap-x-4 active:scale-100 transition-all duration-300 hover:scale-105`,
    divider: `h-0 border-t w-1/2 my-[30px] border-t-[#FFFFFF20] mx-auto`,
    darkCard: `shadow-drop max-w-[300px] mx-auto md:max-w-none mb-20 md:mb-0 col-span-1 flex flex-col gap-y-[10px] w-full items-center justify-center bg-[#00000066] rounded-[25px] py-[30px] px-[20px]`,
    heading4: `font-bold`,
    text: `text-center text-sm font-medium text-white/70`,
  },
  secondSection: {
    container: `flex flex-col items-center gap-y-[50px]`,
    cardWorkout: `card-animate-why-use card-workout-why-use`,
    heading: `text-[22px] font-bold`,
    spanWorkout: `font-medium tracking-wider text-lg`,
    paragraphWorkout: `text-[22px] font-bold`,
    blurCard: `card-glassmorphism-why-use`,
    spansContainer: `flex items-center gap-x-[10px]`,
    span: `span-glassmorphism-why-use cursor-default uppercase font-semibold`,
    text: `font-medium`,
  },
  thirdSection: {
    container: `card-animate-why-use white-card-why-use hidden llg:flex`,
    heading3: `text-[22px] font-bold flex items-center gap-x-[10px]`,
    span: `font-semibold`,
    paragraph: `font-medium mx-[20px]`,
    imageContainer: `image-container-why-use`,
    womanAvatar: `round-user-why-use bg-woman bottom-2 left-3 z-10`,
    menAvatar: `round-user-why-use bg-men bottom-2 left-12 z-0`,
  },
}

export const getTheAppStyles = {
  wrapper: `top-inset-shadow bg-[#121316] py-[100px] w-screen`,
  container: `flex flex-col-reverse lg:flex-row items-center justify-center px-4 gap-y-20 lg:gap-y-0 gap-x-[134px]`,
  firstContent: {
    wrapper: `md:w-[565px] md:h-[620px]`,
    container: `relative w-fit h-fit`,
    cardContainer: `card-big-get-the-app hidden md:flex z-50 -bottom-16 -right-[300px]`,
    cardContent: `background-image-get-the-app`,
    spanFlexContainer: `flex items-center gap-x-[10px] absolute bottom-4 left-4`,
    cardSpan: `span-glassmorphism-get-the-app cursor-default uppercase font-semibold`,
    priceSpan: `span-price-get-the-app absolute -bottom-5 right-4`,
    heading3: `font-bold text-[22px] mt-[20px] ml-4`,
    circleContainer: `relative mt-28 ml-28 hidden md:flex items-center justify-center`,
    handleCircles: (data: { circleCSS: string; index: string }) => {
      return `${data.circleCSS} ${data.index} absolute`
    },
    round: `round-get-the-app absolute`,
  },
  secondContent: {
    wrapper: `max-w-[500px] lg:w-[400px] flex flex-col gap-y-[31px]`,
    medalIcon: `text-[#FF7697] w-[60px] h-[60px]`,
    heading2: `text-4xl md:text-[50px] font-extrabold !leading-[1.2]`,
    text: `text-lg`,
    gradientBtn: `button-gradient-get-the-app flex items-center gap-x-4 text-black font-semibold active:scale-100 transition-all duration-300 hover:scale-105`,
  },
}

export const plansStyles = {
  wrapper: `bg-wallpaper-4 px-4 mt-[100px] pb-[100px] bg-cover`,
  headingContainer: `max-w-[500px] mx-auto gap-y-[30px] flex flex-col items-center justify-center`,
  heading2: `font-extrabold text-4xl md:text-[50px]`,
  headingSpan: `text-[22px] font-bold text-center`,
  divider: `h-0 mx-auto border-t w-1/2 my-[30px] border-t-[#FFFFFF20]`,
  cardsContainer: `flex items-center flex-col md:flex-row justify-center gap-y-[30px] gap-x-[30px]`,
  handleWrapperCard: (cardCSS: string) => {
    return `${cardCSS} card-animate-plan`
  },
  price: `font-extrabold text-4xl mmd:text-[50px] mb-[10px]`,
  handleUnorderedList: (text?: string) => {
    return `${text} space-y-[10px]`
  },
  handleDivider: (color: string) => {
    return ` h-0 w-full border-t border-t-[${color}]/10`
  },
  listItem: `flex items-center gap-x-[10px] font-inter`,
  card1: {
    container: `text-black flex flex-col items-center gap-y-[10px]`,
    heading3: `font-semibold uppercase gap-y-[10px] flex flex-col items-center`,
    span: `blur-capsule-plans bg-black/10 border border-black/10 font-medium text-sm flex items-center whitespace-nowrap gap-x-[10px]`,
    btn: `button-plans active:scale-100 transition-all duration-300 hover:scale-105 gap-x-4 font-semibold uppercase bg-black text-white`,
  },
  card2: {
    container: `text-white flex flex-col items-center gap-y-[10px]`,
    blurCapsule: `blur-capsule-plans bg-white/10 border border-white/10 gap-x-[10px] font-semibold uppercase`,
    heading3: `font-semibold uppercase gap-y-[10px] flex flex-col items-center`,
    span: `blur-capsule-plans bg-white/10 border border-white/10 font-medium text-sm flex items-center whitespace-nowrap gap-x-[10px]`,
    btn: `button-plans active:scale-100 transition-all duration-300 hover:scale-105 gap-x-4 font-semibold uppercase bg-white text-black`,
  },
  card3: {
    container: `text-white flex flex-col items-center gap-y-[10px]`,
    heading3: `font-semibold text-white/70 uppercase gap-y-[10px] flex flex-col items-center`,
    blurCapsule: `blur-capsule-plans bg-white/10 border border-white/10 font-medium text-sm flex items-center whitespace-nowrap gap-x-[10px]`,
    btn: `button-plans active:scale-100 transition-all duration-300 hover:scale-105 gap-x-4 font-semibold uppercase bg-white text-black`,
  },
  faqWrapper: `flex flex-col items-center justify-center`,
  headingFaq: `font-extrabold text-4xl md:text-[50px] mb-[30px] relative z-50`,
  faqItemsContainer: `flex flex-col items-center justify-center gap-y-[30px] w-full`,
}

export const footerStyles = {
  wrapper: `top-inset-shadow py-[100px]`,
  contentContainer: `flex px-4 flex-col items-center justify-center gap-y-[30px]`,
  authorImage: `w-[64px] h-[64px] object-cover rounded-full mx-auto`,
  itemsWrapper: `flex flex-col-reverse llg:flex-row gap-x-[56px] w-full sm:w-auto`,
  itemsContainer: `flex mx-auto w-fit flex-col sm:flex-row sm:w-auto items-start gap-y-[17px] sm:gap-y-0 sm:items-center justify-center gap-x-[56px] mt-[30px] llg:mb-0`,
  unorderedList: `flex flex-col gap-y-[17px]`,
  listItem: `effect-underline relative flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer`,
  formContainer: `newsletter-box w-full sm:w-auto`,
  formSubscribeSpan: `font-bold uppercase text-sm`,
  inputBtnContainer: `w-full sm:w-auto flex flex-col sm:flex-row items-center gap-[10px]`,
  input: `w-full sm:max-w-[360px] bg-[#ebebeb] p-[15px] rounded-lg text-black outline-none font-medium text-lg`,
  btn: `bg-black whitespace-nowrap p-[16px] rounded-lg font-bold text-lg`,
  spanSpam: `text-white/70 text-sm font-medium`,
  divider: `h-0 mx-auto border-t w-1/2 my-[30px] border-t-[#FFFFFF20]`,
  copyrightContainer: `flex items-center flex-col sm:flex-row justify-center gap-x-[20px]`,
  spanCopy: `font-medium text-center mb-[30px] sm:mb-0`,
  link: `effect-underline relative uppercase font-medium`,
}
