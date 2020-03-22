import '@testing-library/jest-dom/extend-expect';
import * as emotion from 'emotion';
import { createSerializer, matchers } from 'jest-emotion';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer(emotion));
