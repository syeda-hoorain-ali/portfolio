
type Props = {
  title: string;
  github: string;
  live: string;
  image?: string;
}

const Card = ({ title, github, live, image }: Props) => {
  return (<>
    <div title={title} className="card relative bg-fuchsia-900 p-4 rounded-xl cursor-pointer transition overflow-hidden aspect-square">
      <div className="overlay absolute -top-52 left-0 w-full h-full bg-gradient-to-b from-black via-black to-transparent opacity-0 transition-all">

        <div className="h-full w-full grid grid-cols-1 grid-rows-2 p-4">
          <span className="text-3xl md:text-4xl text-center flex items-center justify-center">{title}</span>
          <div className="flex gap-5 items-center justify-center">
            <a href={live} className="md:text-lg border-2 border-fuchsia-600 px-3 sm:px-4 md:px-5 py-1 md:py-2 rounded-full transition-all hover:bg-fuchsia-600 hover:shadow-glow-fuchsia hover:border-fuchsia-300">Live</a>

            <a href={github} className="md:text-lg border-2 border-fuchsia-600 px-3 sm:px-4 md:px-5 py-1 md:py-2 rounded-full transition-all hover:bg-fuchsia-600 hover:shadow-glow-fuchsia hover:border-fuchsia-300">Code</a>
          </div>
        </div>
      </div>

      <div className="w-full h-full py-4 bg-slate-800 rounded-lg flex items-center justify-center">
        <img src={image} alt={title} className="h-full rounded-xl" />
      </div>
    </div>
  </>)
}

export default Card;
