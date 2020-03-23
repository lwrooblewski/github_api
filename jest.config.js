module.exports = {
	verbose: true,
	reporters: ['default'],
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	collectCoverageFrom: [
		'**/*.{js,jsx}',
		'!**/node_modules/**',
		'!**/dist/**',
		'!**/coverage/**',
		'!**/*.config.*',
		'!**/mocks/**',
		'!**/store/(index|sagas|reducers).js', // we shouldnt test if framework works
		'!**/src/components/AppContent.jsx', // returns just content container, nothing to test
		'!**/src/App.jsx', // returns react rendering, nothing to test
		'!**/src/index.js', // returns react rendering, nothing to test
		'!**/src/utils/views/**', // dictionaries, nothing to test
		'!**/src/providers/ThemeProvider.jsx', // returns emotion theme provider, nothing to test
	],
	testPathIgnorePatterns: [
		'/node_modules/',
		'/dist/',
		'src/App.jsx', // returns react rendering, nothing to test
		'src/index.js', // returns react rendering, nothing to test
		'src/utils/views', // dictionaries, nothing to test
		'src/providers/ThemeProvider.jsx', // returns emotion theme provider, nothing to test
	],
	coverageReporters: ['json-summary', 'text', 'lcov'],
	moduleFileExtensions: ['js', 'jsx'],
	moduleDirectories: ['node_modules'],
	modulePaths: ['node_modules'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/jest/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/jest/__mocks__/styleMock.js',
		'^@root(.*)$': '<rootDir>/src/',
	},
	setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
	snapshotSerializers: ['jest-emotion'],
};
