export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("es-ES", options).format(date);
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};
