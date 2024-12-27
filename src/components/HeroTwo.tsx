
export default function HeroTwo() {
  return (
    <div className='bg-greyD h-[100vh] w-full relative lg:flex'>
      
      <div className='lg:hidden absolute -top-8 -right-8'>
        <img src="/lines-mobile.png" alt="lines" />
      </div>

      <div className='absolute bottom-24 text-white lg:ml-10'>
        <h3 className='uppercase font-semibold font-inter text-coral'>hey there, i'm</h3>
        <h1 className='font-plus text-6xl lg:text-9xl font-bold -mt-3 lg:-mt-8'>sariah <br />jackson</h1>
        <p className='mt-5 text-xs lg:mt-10'>
          an aspiring front-end developer <br />
          based in kingstown st.vincent
        </p>
      </div>

      <div className='hidden lg:block absolute -top-10 -right-8'>
        <img src="/lines.png" alt="lines" />
      </div>
    </div>
  )
}
