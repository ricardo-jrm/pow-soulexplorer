/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo } from 'react';
import { useFury } from '@ricardo-jrm/fury';
import { Box, Paper } from '@ricardo-jrm/fury/dist/mui';
import { ResponsiveLine } from '@ricardo-jrm/fury/dist/nivo';
import { Text } from '../Text';

const lineData = [
  {
    id: '$SOUL',
    data: [
      // {
      //   x: '05 Jul `21',
      //   y: 0.2057,
      // },
      // {
      //   x: '12 Jul `21',
      //   y: 0.1598,
      // },
      // {
      //   x: '19 Jul `21',
      //   y: 0.1649,
      // },
      // {
      //   x: '26 Jul `21',
      //   y: 0.2131,
      // },
      // {
      //   x: '02 Aug `21',
      //   y: 0.2549,
      // },
      // {
      //   x: '09 Aug `21',
      //   y: 0.2621,
      // },
      // {
      //   x: '16 Aug `21',
      //   y: 0.2729,
      // },
      // {
      //   x: '23 Aug `21',
      //   y: 0.287,
      // },
      {
        x: '30 Aug `21',
        y: 0.34,
      },
      {
        x: '06 Sep `21',
        y: 0.5,
      },
      {
        x: '13 Sep `21',
        y: 0.59,
      },
      {
        x: '20 Sep `21',
        y: 0.64,
      },
      {
        x: '27 Sep `21',
        y: 0.73,
      },
      {
        x: '04 Oct `21',
        y: 0.7,
      },
      {
        x: '11 Oct `21',
        y: 0.66,
      },
      {
        x: '18 Oct `21',
        y: 0.63,
      },
      {
        x: '25 Oct `21',
        y: 0.7,
      },
      {
        x: '01 Nov `21',
        y: 1.33,
      },
      {
        x: '08 Nov `21',
        y: 1.96,
      },
      {
        x: '15 Nov `21',
        y: 2.02,
      },
      {
        x: '22 Nov `21',
        y: 2.61,
      },
      {
        x: '29 Nov `21',
        y: 2.88,
      },
      {
        x: '06 Dec `21',
        y: 2.46,
      },
      {
        x: '13 Dec `21',
        y: 2.4,
      },
      {
        x: '20 Dec `21',
        y: 2.32,
      },
      {
        x: '27 Dec `21',
        y: 2.85,
      },
      {
        x: '03 Jan `21',
        y: 3.54,
      },
    ],
  },
];

/**
 * HomeChart props
 */
export interface HomeChartProps {
  /**
   * Prop
   */
  height: number;
}

/**
 * HomeChart
 */
export const HomeChart = ({ height }: HomeChartProps) => {
  const { furyActive, furyActiveId } = useFury();
  const { palette } = furyActive;

  const isDark = useMemo(() => furyActiveId.includes('-dark'), [furyActiveId]);

  return (
    <Box sx={{ height: `${height}px` }}>
      <ResponsiveLine
        theme={{
          axis: {
            domain: {
              line: {
                stroke: isDark ? '#fff' : '#777',
              },
            },
            ticks: {
              line: {
                stroke: isDark ? '#fff' : '#777',
              },
            },
          },
          textColor: isDark ? '#fff' : '#000',
        }}
        data={lineData}
        enableGridX={false}
        enableGridY={false}
        useMesh
        colors={[palette.secondary.main]}
        enableArea
        lineWidth={4}
        pointSize={8}
        pointColor={isDark ? '#121212' : '#fff'}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        margin={{ top: 12, right: 45, bottom: 69, left: 45 }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
        }}
        axisLeft={{
          // tickValues: [0.01, 0.1, 1, 10],
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tooltip={(datum: any) => {
          return (
            <Paper>
              <Box p={1} sx={{ minWidth: '159px' }}>
                <Text
                  spacing={1}
                  label={datum?.point?.data?.x}
                >{`$${datum?.point?.data?.y}`}</Text>
              </Box>
            </Paper>
          );
        }}
      />
    </Box>
  );
};
