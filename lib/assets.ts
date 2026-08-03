export function getAssetPath(path: string): string {
  if (!path) return "";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (path.startsWith("/DevHubFusion-X")) {
    return path.replace("/DevHubFusion-X", basePath);
  }
  return path;
}
