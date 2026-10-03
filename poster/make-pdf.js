const puppeteer = require("puppeteer-core");
const path = require("path");

(async () => {
  const exe = "C:\\poster-project\\poster\\node_modules\\.remotion\\chrome-headless-shell\\win64\\chrome-headless-shell-win64\\chrome-headless-shell.exe";
  const browser = await puppeteer.launch({ executablePath: exe, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  const img = path.resolve("out/poster.png");
  const fs = require("fs");
  const b64 = fs.readFileSync(img).toString("base64");
  await page.setViewport({ width: 1191, height: 1684 });
  await page.setContent(`<style>body{margin:0}</style><img src="data:image/png;base64,${b64}" style="width:1191px;display:block">`, { waitUntil: "load" });
  await new Promise((r) => setTimeout(r, 1500));
  await page.pdf({ path: "out/poster.pdf", printBackground: true, width: "1191px", height: "1684px", margin: { top: 0, bottom: 0, left: 0, right: 0 } });
  await browser.close();
  console.log("done");
})();
