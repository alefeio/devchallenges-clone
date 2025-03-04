import '@testing-library/jest-dom';

// Configuração do fake timer
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
}); 