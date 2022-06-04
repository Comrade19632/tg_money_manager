export const SUCCESS_SUFFIX = 'SUCCESS'
export const FAIL_SUFFIX = 'FAIL'

export const getSuccessType = (actionType) => `${actionType.toString ? actionType.toString() : actionType}_${SUCCESS_SUFFIX}`
export const getFailType = (actionType) => `${actionType.toString ? actionType.toString() : actionType}_${FAIL_SUFFIX}`
