import { formatDate } from "../../utils/general";

/* eslint-disable react/prop-types */
export const Card = ({ data }) => {
  const { jetpack_featured_media_url, title, excerpt, date, link } = data;

  const handleViewNote = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div
      className="card_body shadow-lg md:w-[30%] w-[320px] cursor-pointer"
      onClick={(e) => handleViewNote(e, link)}
    >
      <img src={jetpack_featured_media_url} alt={title} />

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
  );
};
