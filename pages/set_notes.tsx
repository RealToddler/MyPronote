import NoteCard from "components/NoteCard";

const SetNotes = () => {

  const notes: number[][] = [[1, 2, 3], [4, 5, 6]]

  return (
    <div className="w-screen h-screen bg-blue-50">
      <div className="w-full flex px-10 space-x-8 bg-blue-200 h-[45px] items-center">
        <div className="flex space-x-2">
          <div>Saisie des notes</div>
          <div>
            <select
              name="classSelect"
              id="classSelect"
              className="outline-none bg-blue-100 rounded w-[250px]"
            >
              <option value="">Choisissez une classe</option>
              <option value="T C">Term. C</option>
              <option value="T F">Term. F</option>
            </select>
          </div>
        </div>
        <div>
          <select
            name="divimesterSelect"
            id="divimesterSelect"
            className="outline-none bg-blue-100 rounded w-[250px]"
          >
            <option value="">Choisissez un divimesdive</option>
            <option value="1T">divimesdive 1</option>
            <option value="2T">divimesdive 2</option>
            <option value="3T">divimesdive 3</option>
          </select>
        </div>
        <div>Numerique Sc.Inform. - TNSINFGR.1 - Mme Bourgeois De Clippel</div>
      </div>
      <div className="p-6 flex">
        <div>
          <button
            id="insertButton"
            className="rounded bg-blue-900 text-base text-white w-[140px] h-[50px]"
          >
            Créer un devoir
          </button>
        </div>
      </div>
      <div className="flex space-x-4 px-6">
        <div id="lastNote">
          <div className="w-full h-[30px]"></div>
          <div className="text-left flex space-x-4 w-full">
            <div className="w-[80px] h-[30px]">3 élèves</div>
            <div className="w-[80px] h-[30px]">Classe</div>
            <div className="w-[80px] h-[30px]">Moy. Brute</div>
            <div className="w-[80px] h-[30px]">Moyenne</div>
          </div>
          <div className="flex space-x-4">
            <div className="w-[80px] ">
              <div className="h-[30px]">Toddler</div>
              <div className="h-[30px]">Random</div>
              <div className="h-[30px]">Maxthur</div>
            </div>
            <div className="w-[80px] ">
              <div className="h-[30px]">Term. C</div>
              <div className="h-[30px]">Term. D</div>
              <div className="h-[30px]">Term. F</div>
            </div>
            <div className="w-[80px] ">
              <div className="h-[30px]">19.69</div>
              <div className="h-[30px]">17.17</div>
              <div className="h-[30px]">20.20</div>
            </div>
            <div className="w-[80px] ">
              <div className="h-[30px]">19.69</div>
              <div className="h-[30px]">17.17</div>
              <div className="h-[30px]">20.20</div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default SetNotes;
