import { Model } from '@nozbe/watermelondb'
import { action } from '@nozbe/watermelondb/decorators'

export default class LpEvent extends Model {
  static table = 'lp_events'

  @field('event_id') eventId
  @field('address') address
  @field('event') event
  @field('block_number') blockNumber

  @action async addEvent(data) {
    return await this.create(lpEvent => {
      const { event, address, id, blockNumber } = data
      lpEvent.eventId = id
      lpEvent.address = address
      lpEvent.event = event
      lpEvent.blockNumber = blockNumber
    })
  }

}
