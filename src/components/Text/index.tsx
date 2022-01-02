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
  ...propsTypo
}: TextProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { furyActive } = useFury();
  const { echo } = useEcho();

  const result = useMemo(() => {
    if (formatDate) {
      return (
        <Typography variant={variant} {...propsTypo}>
          {dateFormat(formatDate)}
        </Typography>
      );
    }

    if (formatNumber) {
      return (
        <Typography variant={variant} {...propsTypo}>
          {numberFormat(children as number)}
        </Typography>
      );
    }

    if (translate) {
      return (
        <Typography variant={variant} {...propsTypo}>
          {echo(children as string)}
        </Typography>
      );
    }

    return (
      <Typography variant={variant} {...propsTypo}>
        {children}
      </Typography>
    );
  }, [translate, children, echo, formatNumber, formatDate, variant, propsTypo]);

  const copy: string = useMemo(() => {
    if (formatDate) {
      return dateFormat(formatDate);
    }

    if (formatNumber) {
      return numberFormat(children as number);
    }

    if (translate) {
      return echo(children as string);
    }

    return `${children}`;
  }, [formatDate, formatNumber, children, translate, echo]);

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
