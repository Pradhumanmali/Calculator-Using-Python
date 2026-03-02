import { toolCategories, createSlug } from './tools-data.js';

const params = new URLSearchParams(window.location.search);
const selectedTool = params.get('tool');

const allTools = toolCategories.flatMap((category) => category.tools);
const matchedTool = allTools.find(([name]) => createSlug(name) === selectedTool) || ['PDF Tool', 'Upload and process your PDF quickly.'];

const [toolName, toolDescription] = matchedTool;

document.title = `${toolName} | PDFMaster Pro`;
document.getElementById('tool-title').textContent = toolName;
document.getElementById('tool-description').textContent = toolDescription;

const fileInput = document.getElementById('file-input');
const dropzone = document.getElementById('dropzone');
const uploadBtn = document.getElementById('upload-btn');
const processBtn = document.getElementById('process-btn');
const downloadBtn = document.getElementById('download-btn');
const loader = document.getElementById('loader');
const preview = document.getElementById('preview');
const previewName = document.getElementById('preview-name');
const previewSize = document.getElementById('preview-size');

let uploadedFile = null;

const formatFileSize = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

const renderPreview = (file) => {
  previewName.textContent = `File name: ${file.name}`;
  previewSize.textContent = `File size: ${formatFileSize(file.size)}`;
  preview.hidden = false;
};

const validateFileSize = (file) => {
  const maxBytes = 100 * 1024 * 1024;
  if (file.size > maxBytes) {
    alert('File exceeds 100MB limit. Please upload a smaller file.');
    return false;
  }
  return true;
};

const setFile = (file) => {
  if (!file || !validateFileSize(file)) return;
  uploadedFile = file;
  uploadBtn.disabled = false;
  processBtn.disabled = false;
  renderPreview(file);
};

fileInput.addEventListener('change', (event) => setFile(event.target.files[0]));

dropzone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));

dropzone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropzone.classList.remove('dragover');
  setFile(event.dataTransfer.files[0]);
});

uploadBtn.addEventListener('click', () => {
  if (!uploadedFile) return;
  console.info('Upload hook payload:', {
    tool: selectedTool,
    fileName: uploadedFile.name,
    backendEndpoint: '/api/upload',
  });
  uploadBtn.textContent = 'Uploaded ✓';
});

processBtn.addEventListener('click', async () => {
  if (!uploadedFile) return;
  loader.hidden = false;
  processBtn.disabled = true;

  console.info('Process hook payload:', {
    tool: selectedTool,
    backendEndpoint: '/api/process',
    status: 'placeholder integration point',
  });

  await new Promise((resolve) => setTimeout(resolve, 1800));

  loader.hidden = true;
  processBtn.textContent = 'Processed ✓';
  downloadBtn.disabled = false;
});

downloadBtn.addEventListener('click', () => {
  console.info('Download hook payload:', {
    tool: selectedTool,
    backendEndpoint: '/api/download',
  });
  alert('Download initiated (placeholder). Connect this action to your backend response URL.');
});
