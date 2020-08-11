module.exports = {
    globals: {
        'ts-jest': {
            diagnostics: false
        }
    },
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    verbose: true
};
