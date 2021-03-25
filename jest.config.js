module.exports = {
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'], //caminho onde estarão meus arquivos de teste
  testEnvironment: 'jsdom', //simula dom do browser pra permitir que os testes rodem direitinho
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //informa as pastas que ele deve ignorar
  collectCoverage: true, //vai fazer o teste de cobertura pra ver se estamos cobrindo todas funções, variáveis, etc
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts'
  ], //informando todos os arquivos do projeto com código e desconsiderando stories dos testes
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'] //configurações que o jest deve carregar antes de implementar os testes
}
