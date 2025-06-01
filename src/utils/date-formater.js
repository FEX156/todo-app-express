export const formatDate = (dateStr) => {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(dateStr));
};

// VALID hasilnya mantap:
// const tanggal = formatDate("2025-05-28T14:18:47.000Z");
// console.log(tanggal);
