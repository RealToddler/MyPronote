import ResourceCard from "./ResourceCard";

const Resources = () => {
  // template
  return (
    <div className="w-[350px] rounded border-2 border-blue-900 bg-white">
      <div className="p-2 text-base font-semibold text-center ">
        Dernières ressources pédagogiques
      </div>
      <div className="divide-y-[1px] divide-blue-900 items-center">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  );
};

export default Resources;
