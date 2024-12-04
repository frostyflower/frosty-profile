// eslint-disable-next-line react/prop-types
function Title({ title }) {
  return (
    <div className="py-12 flex flex-col items-center">
      <div className="block">
          <h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
          <div className="w-[50px] rounded-full my-2 max-w-4xl h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      </div>
    </div>
  );
}

export default Title;
