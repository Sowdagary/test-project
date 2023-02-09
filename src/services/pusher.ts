import { PUSHER_APP_CLUSTER, PUSHER_APP_KEY } from "@/constants";

import Pusher from "pusher-js";

export class FoodiegramPusher {
  private pusher: Pusher;
  private channel: string;

  constructor(channel: string) {
    this.pusher = new Pusher(PUSHER_APP_KEY, {
      cluster: PUSHER_APP_CLUSTER,
    });
    this.channel = channel;
  }

  init() {
    return this.pusher.subscribe(this.channel);
  }
}
