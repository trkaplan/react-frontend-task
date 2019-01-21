import { shape, number, string, arrayOf, bool } from "prop-types"

export const alertType = shape({
  id: string.isRequired,
  createdAtTimestamp: number.isRequired,
  createdAt: string.isRequired,
  tinyId: string.isRequired,
  isSeen: bool.isRequired,
  insertedAt: string.isRequired,
  tag: arrayOf(string),
  notify: arrayOf(string),
  teams: arrayOf(string).isRequired,
  message: string.isRequired,
  status: string.isRequired,
  acknowledged: bool.isRequired,
  owner: string.isRequired,
  ownerShortName: string.isRequired,
  acknowledgedBy: string.isRequired,
  closedBy: string,
  snoozed: bool.isRequired,
  snoozedUntil: string.isRequired,
  escalationIds: arrayOf(string),
  count: number.isRequired,
  actions: arrayOf(number),
  availableActions: arrayOf(number)
})

export const dateTimeRangeType = shape({
  from: string.isRequired,
  fromTimestamp: number.isRequired,
  to: string.isRequired,
  toTimestamp: number.isRequired
})
