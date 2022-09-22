export const getImageUrl = (imagePath) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}${imagePath}`;
};