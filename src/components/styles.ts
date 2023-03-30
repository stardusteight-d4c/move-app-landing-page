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
