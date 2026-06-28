const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    console.log('Starting PDF generation...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Resolve absolute path to wireframes.html
    const htmlPath = path.resolve(__dirname, 'wireframes.html');
    const fileUrl = `file://${htmlPath}`;
    
    console.log(`Loading wireframe HTML: ${fileUrl}`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Target destination path at the root of the workspace
    const pdfPath = path.resolve(__dirname, '..', 'himshakti_wireframes.pdf');
    console.log(`Exporting PDF to: ${pdfPath}`);
    
    // Generate PDF with page breaks, landscape mode for desktop screens, and color background enabled
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
      }
    });

    console.log('PDF generated successfully!');
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
