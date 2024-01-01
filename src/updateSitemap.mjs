import { readFileSync, writeFileSync } from "fs";

function getCurrentDateTime() {
  const currentDate = new Date();
  const isoFormattedCurrentDate = currentDate.toISOString();
  return `${isoFormattedCurrentDate.split(".")[0]}+00:00`;
}

function updateSitemap() {
  const sitemapFilePath = `${process.cwd()}/public/sitemap.xml`;

  const fileData = readFileSync(sitemapFilePath, "utf-8");

  const matches = fileData.match(/<lastmod>(.+?)<\/lastmod>/g);
  const updatedData = matches.reduce(
    (acc, matchedValue) =>
      acc.replace(matchedValue, `<lastmod>${getCurrentDateTime()}</lastmod>`),
    fileData
  );

  writeFileSync(sitemapFilePath, updatedData, "utf-8");
  console.log("Sitemap updated successfully!");
}

updateSitemap();
