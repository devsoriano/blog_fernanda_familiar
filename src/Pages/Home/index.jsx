import { useContext } from "react";
import { BlogContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";

export const Home = () => {
  const context = useContext(BlogContext);

  const renderView = () => {
    if (context.items?.length > 0) {
      return context.items.map((item) => <Card data={item} key={item.id} />);
    } else {
      return <div>{"No hay publicaciones disponibles..."}</div>;
    }
  };

  return (
    <Layout>
      <div className="cards flex flex-wrap w-[90%]  mx-auto gap-5 justify-center">
        {renderView()}
      </div>
    </Layout>
  );
};
