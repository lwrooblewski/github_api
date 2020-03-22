module.exports = {
	verbose: true,
	reporters: ['default'],
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
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
