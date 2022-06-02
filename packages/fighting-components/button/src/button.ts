import type { PropType } from 'vue'
import type {
  buttonSize,
  buttonTarget,
  buttonType
} from '@fighting-design/fighting-type'

export const Props = {
  blob: {
    type: Boolean,
    default: (): boolean => false
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  fontSize: {
    type: String,
    default: (): string => ''
  },
  fontColor: {
    type: String,
    default: (): string => ''
  },
  size: {
    type: String as PropType<buttonSize>,
    default: (): string => 'middle',
    validator: (val: buttonSize): boolean => {
      return ['large', 'middle', 'small', 'mini', ''].includes(val)
    }
  },
  block: {
    type: Boolean,
    default: (): boolean => false
  },
  link: {
    type: String,
    default: (): string => ''
  },
  target: {
    type: String as PropType<buttonTarget>,
    default: (): buttonTarget => '_self',
    validator: (val: buttonTarget): boolean => {
      return ['_blank', '_self', '_parent', '_top', ''].includes(val)
    }
  },
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  loadingIcon: {
    type: String,
    default: (): string => ''
  },
  type: {
    type: String as PropType<buttonType>,
    default: (): buttonType => 'default',
    validator: (val: buttonType): boolean => {
      return [
        'default',
        'primary',
        'success',
        'danger',
        'warning',
        'info',
        ''
      ].includes(val)
    }
  },
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  name: {
    type: String,
    default: (): string => 'f-button'
  },
  shadow: {
    type: String,
    default: (): string => ''
  },
  text: {
    type: Boolean,
    default: (): boolean => false
  },
  long: {
    type: Boolean,
    default: (): boolean => false
  },
  nativeType: {
    type: String,
    default: (): string => 'button'
  },
  simple: {
    type: Boolean,
    default: (): boolean => false
  },
  border: {
    type: Boolean,
    default: (): boolean => false
  },
  leftIcon: {
    type: String,
    default: (): string => ''
  },
  rightIcon: {
    type: String,
    default: (): string => ''
  },
  ripples: {
    type: Boolean,
    default: (): boolean => true
  }
} as const

export const Emits = {
  click: (evt: Event): Event => evt
} as const
