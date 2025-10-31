// const formatDate = (date: Date = new Date()): string => {
//     return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
// }
// export default formatDate;
const formatDate = (date: Date | string | number = new Date()): string => {
  // S'assurer que date est un objet Date valide
  const dateObj = date instanceof Date ? date : new Date(date);
  
  // Vérifier si la date est valide
  if (isNaN(dateObj.getTime())) {
    console.error('Date invalide:', date);
    return 'Date invalide';
  }
  
  return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
}

export default formatDate;