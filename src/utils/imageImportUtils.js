/**
 * Импортирует изображения из статической директории
 * @returns {Object} - Объект с импортированными модулями изображений
 */
export const importImages = () => {
  return import.meta.glob('/src/assets/images/**/*.jpg', { eager: true });
};

/**
 * Получает массив URL изображений из импортированных модулей
 * @param {Object} imageModules - Объект с импортированными модулями изображений
 * @returns {string[]} - Массив URL изображений
 */
export const getImageUrls = (imageModules) => {
  return Object.keys(imageModules);
};

/**
 * Импортирует изображения и возвращает их URL
 * @returns {string[]} - Массив URL изображений
 */
export const importAndGetImageUrls = () => {
  const imageModules = importImages();
  return getImageUrls(imageModules);
};

