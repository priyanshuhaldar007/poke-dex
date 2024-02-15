import pokeball_loader from '../assets/images/pokeball_loading.gif';

export const Loader = () => {
  return (
    <div className='absolute top-0 left-0 z-20 flex justify-center items-center w-full h-full'>
        <img src={pokeball_loader} alt="" />
    </div>
  )
}
