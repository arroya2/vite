export default function NavbarComponent({ options }) {
  const { home, services, projects, about, blog, letsTalk } = options;

  return (
    <div className="bg-white font-secondary text-black pl-20 pr-20 pt-4 pb-10 dark:bg-black dark:text-white lg:text-left">
      <div className="flex justify-between">
        <div className="flex items-center text-left text-2xl">
          Xfolio.
          <a className="pl-12 text-xs" href={home}>
            Home
          </a>
          <a className="pl-6 text-xs" href={services}>
            Services
          </a>
          <a className="pl-6 text-xs " href={projects}>
            Projects
          </a>
          <a className="pl-6 text-xs " href={about}>
            About
          </a>
          <a className="pl-6 text-xs " href={blog}>
            Blog
          </a>
        </div>

        <div>
          <a
            href={letsTalk}
            type="button"
            className="px-4 py-1 dark:bg-white text-sm text-white dark:text-black rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </div>
  );
}
