import type { Preset } from "unocss";

/**
 * Flowbite preset for UnoCSS.
 * WIP / Doesn't support all functionality yet. Use it at your own risk.
 */
export function presetFlowbite(): Preset {
  return {
    name: "unocss-preset-flowbite",
    preflights: [
      {
        getCSS: ({ theme }: { theme: any }) => {
          const spacing: any = Object.values(theme.spacing);
          const baseFontSize = theme.fontSize.base[0];
          const baseLineHeight = theme.fontSize.base[1];

          const baseInput = `
            [type='text'],
            [type='email'],
            [type='url'],
            [type='password'],
            [type='number'],
            [type='date'],
            [type='datetime-local'],
            [type='month'],
            [type='search'],
            [type='tel'],
            [type='time'],
            [type='week'],
            [multiple],
            textarea,
            select {
              appearance: none;
              background-color: #fff;
              border-color: ${theme.colors.gray["500"]};
              border-radius: 0;
              padding-top: ${spacing[2]};
              padding-right: ${spacing[3]};
              padding-bottom: ${spacing[2]};
              padding-left: ${spacing[3]};
              font-size: ${baseFontSize};
              line-height: ${baseLineHeight};
              --un-shadow: '0 0 #0000';
            }

            [type='text']:focus,
            [type='email']:focus,
            [type='url']:focus,
            [type='password']:focus,
            [type='number']:focus,
            [type='date']:focus,
            [type='datetime-local']:focus,
            [type='month']:focus,
            [type='search']:focus,
            [type='tel']:focus,
            [type='time']:focus,
            [type='week']:focus,
            [multiple]:focus,
            textarea:focus,
            select:focus {
              outline: 4px solid transparent;
              outline-offset: 2px;
              --un-ring-inset: var(--un-empty,/*!*/ /*!*/);
              --un-ring-offset-width: 0px;
              --un-ring-offset-color: '#fff';
              --un-ring-color: ${theme.colors.blue["600"]};
              --un-ring-offset-shadow: var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);
              --un-ring-shadow: var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color);
              box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
              border-color: ${theme.colors.blue["600"]};
            }
          `;

          /**
           * I wanted to make a rule to handle the "content-['']" class ( since UnoCSS handle it like
           * that : 'content-empty' ) but it doesn't seems to be possible. That kind of dynamic rule isn't working :
           * [/^content-\['(.*)'\]$/, ([, v]) => ({ content: `"${v ? v : ''}"` })],
           *
           * So the workaround is just to inject directly the class content-['']
           */
          const emptyContentMonkeyPatch = `
            .content-\\[\\'\\'\\] {
              content: '';
            }
            
            .after\\:content-\\[\\'\\'\\]::after {
              content: '';
            }
          `;

          const inputFile = `
            [type='file'] {
              background: unset;
              border-color: inherit;
              border-width: 0;
              border-radius: 0;
              padding: 0;
              font-size: unset;
              line-height: inherit;
            }

            [type='file']:focus {
              outline: '1px solid ButtonText';
              outline: '1px auto inherit';
            }

            input[type=file]::file-selector-button {
              color: white;
              background: ${theme.colors.gray["800"]};
              border: 0;
              font-weight: 500;
              font-size: ${theme.fontSize.sm[0]};
              cursor: pointer;
              padding-top: ${spacing[2]};
              padding-bottom: ${spacing[2]};
              padding-left: ${spacing[8]};
              padding-right: ${spacing[4]};
              margin-inline-start: -1rem;
              margin-inline-end: 1rem;
            }
            
            input[type=file]::file-selector-button:hover {
              background: ${theme.colors.gray["700"]};
            }

            .dark input[type=file]::file-selector-button {
              color: white;
              background: ${theme.colors.gray["600"]};
            }
            
            .dark input[type=file]::file-selector-button:hover {
              background: ${theme.colors.gray["500"]};
            }
          `;

          return [baseInput, inputFile, emptyContentMonkeyPatch].join("\n");
        },
      },
    ],
  };
}
