module.exports = {
    coverageThreshold: {
      global: {
        branches: 90,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    moduleFileExtensions: ['js', 'jsx'],
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['./setupTests.js'],
    transform: {
      '^(?!.*\\.(js|jsx|css|json)$)': '@nrwl/react/plugins/jest',
      '^.+\\.[tj]sx?$': [
        'babel-jest',
        { cwd: __dirname, configFile: './babel-jest.config.json' },
      ],
    },
  }