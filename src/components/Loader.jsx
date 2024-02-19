import pokeball_loader from '../assets/images/pokeball_loading.gif';

export const Loader = () => {
  return (
    <div className='absolute top-0 left-0 z-20 flex justify-center items-center w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white to-blue-600'>
        <img src={pokeball_loader} alt="" />
    </div>
  )
}
