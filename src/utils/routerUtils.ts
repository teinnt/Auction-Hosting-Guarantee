const getIdFromUrl = () => window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

// eslint-disable-next-line import/prefer-default-export
export { getIdFromUrl }
