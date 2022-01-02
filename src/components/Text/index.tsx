import React, { useMemo } from 'react';
import { useSnackbar } from 'notistack';
import NextLink from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Typography,
  TypographyProps,
  Grid,
  GridSpacing,
  Link as MuiLink,
  IconButton,
} from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import { useFury } from '@ricardo-jrm/fury';
import {
  numberFormat,
  dateFormat,
  stringCapitalize,
  stringTruncate,
} from '@ricardo-jrm/dervish';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

/**
 * Link props
 */
export interface LinkProps {
  href: string;
  external?: boolean;
}

/**
 * Text props
 */
export interface TextProps
  extends Omit<TypographyProps, 'translate' | 'variant' | 'children'> {
  /**
   * Children
   */
  children?: string | number;
  /**
   * Typography variant
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';
  /**
   * Translates using `children: string` as ID
   */
  translate?: boolean;
  /**
   * Formats `children: number` with commas
   */
  formatNumber?: boolean;
  /**
   * Formats given `Date`
   */
  formatDate?: Date;
  /**
   * Spacing between elements
   */
  spacing?: GridSpacing;
  /**
   * Adds label element, translated if `translate: true`
   */
  label?: string;
  /**
   * Adds clipboard element
   */
  clipboard?: boolean;
  /**
   * Renders link element
   */
  link?: LinkProps;
  /**
   * Truncate text options
   */
  truncate?: {
    len: number;
    keepLastWord?: boolean;
  };
  /**
   * Capitalize text options
   */
  capitalize?: boolean | 'allWords';
}

/**
 * Text
 */
export const Text = ({
  children,
  translate,
  formatNumber,
  formatDate,
  spacing = 0,
  label,
  clipboard,
  variant = 'body1',
  link,
  truncate,
  capitalize,
  ...propsTypo
}: TextProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { furyActive } = useFury();
  const { echo } = useEcho();

  const copy: string = useMemo(() => {
    if (formatDate) {
      return dateFormat(formatDate);
    }

    if (formatNumber) {
      return numberFormat(children as number);
    }

    if (translate) {
      if (capitalize) {
        if (capitalize === 'allWords') {
          return stringCapitalize(echo(children as string), true);
        }
        return stringCapitalize(echo(children as string));
      }
      return echo(children as string);
    }

    if (capitalize) {
      if (capitalize === 'allWords') {
        return stringCapitalize(`${children}`, true);
      }
      return stringCapitalize(`${children}`);
    }

    return `${children}`;
  }, [formatDate, formatNumber, children, translate, echo, capitalize]);

  const result = useMemo(() => {
    if (link) {
      const { href, external } = link;
      const linkProps = external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};
      const linkComponent = (
        <MuiLink variant={variant} href={href} {...linkProps}>
          {copy}
        </MuiLink>
      );
      if (external) {
        return linkComponent;
      }
      return (
        <NextLink href={href} passHref>
          {linkComponent}
        </NextLink>
      );
    }

    let strDisplay = `${copy}`;

    if (truncate) {
      if (truncate.keepLastWord) {
        strDisplay = stringTruncate(copy, truncate.len, true);
      } else {
        strDisplay = stringTruncate(copy, truncate.len);
      }
    }

    return (
      <Typography variant={variant} {...propsTypo}>
        {strDisplay}
      </Typography>
    );
  }, [variant, propsTypo, copy, link, truncate]);

  return (
    <Grid container spacing={spacing} alignItems="center">
      {label && (
        <Grid item>
          <Typography variant={variant} {...propsTypo}>
            <b>{translate ? echo(label) : label}:</b>
          </Typography>
        </Grid>
      )}
      <Grid item>{result}</Grid>
      {clipboard && (
        <Grid item>
          <Typography variant={variant} {...propsTypo}>
            <CopyToClipboard text={copy}>
              <IconButton
                size="small"
                onClick={(e) => {
                  enqueueSnackbar('Copied to clipboard');
                  e.stopPropagation();
                }}
              >
                <ContentCopyIcon
                  style={{
                    fontSize: furyActive.typography[variant].fontSize,
                  }}
                />
              </IconButton>
            </CopyToClipboard>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};
