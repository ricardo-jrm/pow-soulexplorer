import React from 'react';
import type { NextPage } from 'next';
import { PDFViewer } from '@react-pdf/renderer/lib/react-pdf.browser.es.js';
import { ReportBlock } from '../../../containers/ReportBlock';

export const BlockReportPage: NextPage = () => (
  <PDFViewer>
    <ReportBlock />
  </PDFViewer>
);

export default BlockReportPage;
