import Logo from '/logo.svg';

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='py-20 text-xs flex flex-col items-center gap-3'>
        <img src={Logo} alt="Logo" />
      <a className='text-coral font-inter text-xs' href="mailto:sariahkjackson@gmail.com">sariahkjackson@gmail.com</a>
      <p className='text-coral'>{year}</p>
    </div>
  )
}
