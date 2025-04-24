import Sal from '../assets/sal.png';

function Loading() {
  return (
    <div className="flex flex-col items-center my-12">
      <img src={Sal} alt="Sal the snail" className="w-1/4 lg:w-1/8 xl:w-2/12 animate-sway mb-8"></img>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight font-body text-red">
        Loading...
      </p>
    </div>
  );
}

export default Loading;
