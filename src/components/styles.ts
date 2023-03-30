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
