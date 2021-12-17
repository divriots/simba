export default {
  button: {
    backgroundColor: { value: 'var(--simba-color-primary-500)' },
    padding: {
      horizontal: { value: '{spacing.s4.value}' },
      vertical: { value: '{spacing.s2_5.value}' },
    },
    border: {
      radius: { value: '{radii.base.value}' },
    },
    content: {
      family: { value: '{typography.family.sans.value}' },
      size: { value: '{typography.size.base.size.value}' },
      lineHeight: { value: '{typography.size.base.lineHeight.value}' },
      weight: { value: '{typography.weight.medium.value}' },
      color: { value: '{colors.coolGray.50.value}' },
    },
    prefix: {
      padding: {
        right: { value: '{spacing.s2.value}' },
      },
    },
    suffix: {
      padding: {
        left: { value: '{spacing.s2.value}' },
      },
    },
    sizes: {
      small: {
        padding: {
          horizontal: { value: '{spacing.s3.value}' },
          vertical: { value: '{spacing.s1_5.value}' },
        },
        content: {
          size: { value: '{typography.size.sm.size.value}' },
          lineHeight: { value: '{typography.size.sm.lineHeight.value}' },
        },
      },
      large: {
        padding: {
          horizontal: { value: '{spacing.s5.value}' },
          vertical: { value: '{spacing.s3.value}' },
        },
        content: {
          size: { value: '{typography.size.xl.size.value}' },
          lineHeight: { value: '{typography.size.xl.lineHeight.value}' },
        },
      },
      rounded: {
        border: {
          radius: { value: '{radii.full.value}' },
        },
      },
    },
    variants: {
      secondary: {
        backgroundColor: { value: 'var(--simba-color-primary-200)' },
        content: {
          color: { value: 'var(--simba-color-primary-800)' },
        },
      },
      text: {
        backgroundColor: { value: 'transparent' },
        content: {
          color: { value: 'var(--simba-text-color)' },
        },
      },
      outline: {
        backgroundColor: { value: 'transparent' },
        content: {
          color: { value: 'var(--simba-text-color)' },
        },
        border: {
          shadow: {
            size: { value: '0 0 1px 1px' },
            color: { value: '{colors.coolGray.300.value}' },
          },
        },
      },
    },
    states: {
      hover: {
        backgroundColor: { value: 'var(--simba-color-primary-700)' },
        variants: {
          secondary: {
            backgroundColor: { value: 'var(--simba-color-primary-100)' },
          },
          text: {
            backgroundColor: { value: '{colors.coolGray.100.value}' },
          },
          outline: {
            backgroundColor: { value: '{colors.coolGray.100.value}' },
          },
        },
      },
      active: {
        backgroundColor: { value: 'var(--simba-color-primary-800)' },
        variants: {
          secondary: {
            backgroundColor: { value: 'var(--simba-color-primary-50)' },
          },
          text: {
            backgroundColor: { value: '{colors.coolGray.200.value}' },
          },
          outline: {
            backgroundColor: { value: '{colors.coolGray.200.value}' },
          },
        },
      },
      focus: {
        border: {
          shadow: {
            size: { value: '0 0 0 3px' },
            color: { value: 'var(--simba-focus-ring-color)' },
          },
        },
        variants: {
          text: {
            border: {
              shadow: {
                size: { value: '0 0 0 3px' },
                color: { value: 'var(--simba-focus-ring-color)' },
              },
            },
          },
          outline: {
            border: {
              shadowOne: {
                size: { value: '0 0 1px 1px' },
                color: { value: '{colors.coolGray.300.value}' },
              },
              shadowTwo: {
                size: { value: '0 0 0 3px' },
                color: { value: 'var(--simba-focus-ring-color)' },
              },
            },
          },
        },
      },
      disabled: {
        backgroundColor: { value: 'var(--simba-color-primary-500)' },
        filter: { value: 'brightness(75%)' },
      },
    },
    theme: {
      dark: {
        variants: {
          text: {
            content: {
              color: { value: '{colors.coolGray.50.value}' },
            },
          },
          outline: {
            content: {
              color: { value: '{colors.coolGray.50.value}' },
            },
          },
        },
        states: {
          hover: {
            variants: {
              text: {
                backgroundColor: { value: '{colors.coolGray.700.value}' },
              },
              outline: {
                backgroundColor: { value: '{colors.coolGray.700.value}' },
              },
            },
          },
          active: {
            variants: {
              outline: {
                backgroundColor: { value: '{colors.coolGray.600.value}' },
              },
              text: {
                backgroundColor: { value: '{colors.coolGray.600.value}' },
              },
            },
          },
        },
      },
    },
  },
};
