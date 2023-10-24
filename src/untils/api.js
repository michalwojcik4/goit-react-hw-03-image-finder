export const fetchArticlesWithQuery = async () => {
  const ApiKey = '39269342-bb9295fafabc2f42da640db69';
  try {
    const response = await fetch(
      `https://pixabay.com/api/?page=1&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const images = await response.json();
    return images.hits;
  } catch (error) {
    console.log(error.message);
  }
};
