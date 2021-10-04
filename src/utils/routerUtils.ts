const getIdFromUrl = () => window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

// eslint-disable-next-line import/no-anonymous-default-export
export default { getIdFromUrl }
