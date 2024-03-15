/**
* This is a Checkly CLI BrowserCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
*/

import { BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('https-wikipedia-com', {
  name: 'https://wikipedia.com',
  activated: true,
  muted: false,
  shouldFail: false,
  runParallel: true,
  runtimeId: '2023.09',
  locations: ['eu-south-1', 'eu-central-1'],
  tags: [],
  frequency: Frequency.EVERY_10M,
  environmentVariables: [],
  code: {
    entrypoint: './https-wikipedia-com.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 60,
    maxRetries: 2,
    maxDurationSeconds: 600,
    sameRegion: true,
  }),
})
