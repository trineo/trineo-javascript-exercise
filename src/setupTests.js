import { cleanup } from 'react-testing-library'

global.fetch = require('jest-fetch-mock')

afterEach(cleanup)
