
import { trigger, transition, style, animate, state} from '@angular/core'

export const fadeInOut:any = [trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({'opacity': 0}),
          animate('500ms', style({'opacity': 1}))
        ]
      ),
      transition(
        ':leave', [
          style({'opacity': 1}),
          animate('500ms', style({'opacity': 0}))
        ]
      )]
    )]