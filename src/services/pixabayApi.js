const fetchImageApi = (query, pageNumber) => {
  const api = 'https://pixabay.com/api/';
  const apiKey = '14060628-9f38034532b09f09b393290c7';
  const perPage = 12;
  return fetch(
    `${api}?key=${apiKey}&q=${query}&image_type=photo&page=${pageNumber}&per_page=${perPage}`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};
export default fetchImageApi;
