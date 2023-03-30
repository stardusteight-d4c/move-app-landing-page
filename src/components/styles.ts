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
  wrapper: `bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop relative bg-100% xl:bg-cover w-screen min-h-screen py-28 2xl:py-0 2xl:h-screen overflow-hidden`,
}
