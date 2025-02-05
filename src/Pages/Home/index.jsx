import { useContext } from "react";
import { BlogContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";

export const Home = () => {
  const { state } = useContext(BlogContext);

  const renderView = () => {
    if (state.items?.length > 0) {
      return state.items.map((item) => <Card data={item} key={item.id} />);
    } else {
      return <div>{"No hay publicaciones disponibles..."}</div>;
    }
  };

  return (
    <Layout>
      <div className="cards flex flex-wrap w-[90%] mx-auto mt-14 gap-5 justify-center">
        {renderView()}
      </div>
    </Layout>
  );
};
