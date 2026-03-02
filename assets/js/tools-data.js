export const toolCategories = [
  {
    title: '📂 ORGANIZE PDF',
    tools: [
      ['Merge PDF', 'Combine multiple PDFs into one polished file.'],
      ['Split PDF', 'Split one PDF into multiple files quickly.'],
      ['Remove Pages', 'Delete unwanted pages with precision.'],
      ['Extract Pages', 'Extract selected pages into a new PDF.'],
      ['Organize PDF', 'Reorder pages using drag-and-drop flow.'],
      ['Scan to PDF', 'Turn scanned documents into PDF format.'],
    ],
  },
  {
    title: '⚡ OPTIMIZE PDF',
    tools: [
      ['Compress PDF', 'Reduce PDF size while preserving quality.'],
      ['Repair PDF', 'Fix broken or corrupted PDF documents.'],
      ['OCR PDF', 'Recognize text in scanned PDFs instantly.'],
    ],
  },
  {
    title: '🔄 CONVERT TO PDF',
    tools: [
      ['JPG to PDF', 'Convert image files into PDF documents.'],
      ['Word to PDF', 'Transform DOC or DOCX files into PDF.'],
      ['PowerPoint to PDF', 'Convert slides to shareable PDF format.'],
      ['Excel to PDF', 'Convert spreadsheets into clean PDF pages.'],
      ['HTML to PDF', 'Render webpages into downloadable PDFs.'],
    ],
  },
  {
    title: '🔁 CONVERT FROM PDF',
    tools: [
      ['PDF to JPG', 'Export PDF pages as high-quality images.'],
      ['PDF to Word', 'Convert PDFs into editable Word files.'],
      ['PDF to PowerPoint', 'Turn PDFs into editable presentations.'],
      ['PDF to Excel', 'Extract table data into spreadsheet format.'],
      ['PDF to PDF/A', 'Convert files to archival PDF/A standard.'],
    ],
  },
  {
    title: '✏️ EDIT PDF',
    tools: [
      ['Rotate PDF', 'Rotate specific pages or full documents.'],
      ['Add Page Numbers', 'Auto-number your PDF pages.'],
      ['Add Watermark', 'Stamp custom text or image watermarks.'],
      ['Crop PDF', 'Trim margins and focus on key content.'],
      ['Edit PDF', 'Modify text, images, and layout elements.'],
    ],
  },
  {
    title: '🔐 PDF SECURITY',
    tools: [
      ['Unlock PDF', 'Remove password restrictions securely.'],
      ['Protect PDF', 'Add password encryption and permissions.'],
      ['Sign PDF', 'Insert e-signatures in a few clicks.'],
      ['Redact PDF', 'Permanently hide sensitive information.'],
      ['Compare PDF', 'Highlight differences across PDF versions.'],
    ],
  },
  {
    title: '🌍 PDF INTELLIGENCE',
    tools: [['Translate PDF', 'Translate PDF content to other languages.']],
  },
];

export const createSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
