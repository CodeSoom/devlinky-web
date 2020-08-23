import { saveItem, loadItem } from './localStorage';

describe('storage', () => {
  Storage.prototype.setItem = jest.fn(() => 'setItem');
  Storage.prototype.getItem = jest.fn(() => 'getItem');

  beforeEach(() => {
    localStorage.setItem = jest.fn();
    localStorage.getItem = jest.fn();
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
});
