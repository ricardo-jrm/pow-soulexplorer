import React, { useMemo } from 'react';
import {
  Typography,
  TypographyProps,
  Box,
  Grid,
  GridSpacing,
} from '@ricardo-jrm/fury/dist/mui';
import { useEcho } from '@ricardo-jrm/echo';
import {
  numberFormat,
  dateFormat,
  stringCapitalize,
  stringTruncate,
} from '@ricardo-jrm/dervish';

/**
 * Text props
 */
export interface TextProps extends Omit<TypographyProps, 'translate'> {
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
  ...propsTypo
}: TextProps) => {
  const { echo } = useEcho();

  const result = useMemo(() => {
    if (formatDate) {
      return <Typography {...propsTypo}>{dateFormat(formatDate)}</Typography>;
    }

    if (formatNumber) {
      return (
        <Typography {...propsTypo}>
          {numberFormat(children as number)}
        </Typography>
      );
    }

    if (translate) {
      return <Typography {...propsTypo}>{echo(children as string)}</Typography>;
    }

    return <Typography {...propsTypo}>{children}</Typography>;
  }, [translate, children, echo, formatNumber, formatDate, propsTypo]);

  return (
    <Grid container spacing={spacing}>
      {label && <Grid item>{translate ? echo(label) : label}</Grid>}
      <Grid item>{result}</Grid>
    </Grid>
  );
};
