/**
 * @module StorageModule module containing functionalities for saving and getting data from localStorage
 * @example
 * import storage form 'fileLocation';
 */

/**
 * Storage
 * @class
 * @typedef {Storage} Storage Class
 * @property {function} save
 * @property {function} get
 * @example
 * const object = new Storage();
 */
class Storage {
    /**
     * save method for saving state in localStorage
     * @param {string} key key for saving data in localstorage
     * @param {string} value value which will be saved in localstorage
     * @example
     * save(key, value)
     * return (void)
     * @returns {void}
     */
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * get method for getting saved data from localStorage
     * @param {string} key key for finding data from localStorage
     * @example
     * get(key)
     * return {Object}
     * @returns {Object} return state object
     */
    get(key) {
        const json = localStorage.getItem(key);
        return JSON.parse(json);
    }
}

/**
 * creating an storage instane from Storage class
 * @type {Storage} storage
 */
const storage = new Storage();

export default storage;