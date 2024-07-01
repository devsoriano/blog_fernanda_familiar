import { formatDate } from "../../utils/general";
import { useContext } from "react";
import { BlogContext } from "../../Context";

/* eslint-disable react/prop-types */
export const Card = ({ data }) => {
  const { jetpack_featured_media_url, title, excerpt, date, link, id, read } =
    data;
  const { markAsRead } = useContext(BlogContext);

  const handleViewNote = (e, link) => {
    e.preventDefault();
    markAsRead(id);
    window.open(link, "_blank");
  };

  return (
    <div
      className={`card_body shadow-lg md:w-[30%] w-[320px] cursor-pointer ${
        read ? "bg-blue-300" : ""
      }`}
      onClick={(e) => handleViewNote(e, link)}
    >
      <img src={jetpack_featured_media_url} alt={title} />

      <div className="p-4">
        <h4
          className="text-2xl font-bold flex flex-col items-center mb-4"
          dangerouslySetInnerHTML={{ __html: title?.rendered }}
        />

        <p className="text-sm my-1">{`Creado: ${formatDate(date)}`}</p>
        <p className="text-sm my-1">{`Modificado: ${formatDate(date)}`}</p>

        <p
          className="my-4"
          dangerouslySetInnerHTML={{ __html: excerpt?.rendered }}
        />
      </div>
    </div>
  );
};
