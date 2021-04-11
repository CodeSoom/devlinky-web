import { saveItem, loadItem, removeItem } from './localStorage';

describe('storage', () => {
  Storage.prototype.setItem = jest.fn(() => 'setItem');
  Storage.prototype.getItem = jest.fn(() => 'getItem');
  Storage.prototype.removeItem = jest.fn(() => 'removeItem');

  beforeEach(() => {
    localStorage.setItem = jest.fn();
    localStorage.getItem = jest.fn();
    localStorage.removeItem = jest.fn();
  });

  describe('saveItem', () => {
    it('calls localStorage setItem', () => {
      saveItem('key', 'value');

      expect(localStorage.setItem).toBeCalledWith('key', 'value');
    });
  });

  describe('loadItem', () => {
    it('calls localStorage getItem', () => {
      loadItem('key');

      expect(localStorage.getItem).toBeCalledWith('key');
    });
  });

  describe('removeItem', () => {
    it('calls localStorage removeItem', () => {
      removeItem('key');

      expect(localStorage.removeItem).toBeCalledWith('key');
    });
  });
});
