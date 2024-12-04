// eslint-disable-next-line react/prop-types
const ButtonLink = ({ icon, title, link }) => {
  return (
    <div className="group relative">
      <button>
        <a href={link}>
          <i className={`fa-brands ${icon} fa-xl hover:scale-[120%] duration-300`}></i>
        </a>
      </button>
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border-gray-300 bg-slate-700 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        {title}
        <span></span>
      </span>
    </div>
  );
};

export default ButtonLink;
