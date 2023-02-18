const UserHeader = () => {
  return (
    <div className="w-screen h-[40px] bg-sky-900 text-sm text-white font-semibold">
      <div className="flex items-end h-full">
        <a
          href=""
          className="px-2 border-b-4 h-full border-sky-900 hover:border-blue-300 text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </a>
        <a
          href=""
          className="px-2 border-b-4 h-full border-sky-900 hover:border-blue-300 text-center"
        >
          Mes données
        </a>
        <a
          href=""
          className="px-2 border-b-4 h-full border-sky-900 hover:border-blue-300 text-center"
        >
          Cahier de textes
        </a>
        <a
          href=""
          className="px-2 border-b-4 h-full border-sky-900 hover:border-blue-300 text-center"
        >
          Notes
        </a>
        <a
          href=""
          className="px-2 border-b-4 h-full border-sky-900 hover:border-blue-300 text-center"
        >
          Compétences
        </a>
        <a
          href=""
          className="px-2 border-b-4 h-full border-sky-900 hover:border-blue-300 text-center"
        >
          Résultats
        </a>
        <a
          href=""
          className="px-2 border-b-4 h-full border-sky-900 hover:border-blue-300 text-center"
        >
          Vie Scolaire
        </a>
        <a
          href=""
          className="px-2 border-b-4 h-full border-sky-900 hover:border-blue-300 text-center"
        >
          Communication
        </a>
      </div>
    </div>
  );
};

export default UserHeader;
